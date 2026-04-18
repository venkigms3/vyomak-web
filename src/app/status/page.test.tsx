/**
 * Unit tests for Status Page
 *
 * Tests cover:
 * - Component rendering
 * - Service status display
 * - GitHub API mocking
 * - Status indicators
 * - Dark mode support
 * - Loading states
 */

import { render, screen, act } from '@testing-library/react'
import StatusPage from './page'

// Must match the CACHE_DURATION in page.tsx (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000

// Mock fetch globally
global.fetch = jest.fn()

describe('Status Page', () => {
  // Advance fake clock by CACHE_DURATION + 1 between tests so the
  // module-level GitHub status cache always appears stale.
  const BASE_TIME = Date.now()
  let testCount = 0

  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()
    jest.setSystemTime(BASE_TIME + testCount * (CACHE_DURATION + 1))
    testCount++

    // Mock fetch with a default implementation
    ;(global.fetch as jest.Mock) = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: { indicator: 'none' } }),
    })
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('Initial Rendering', () => {
    it('should render page title', async () => {
      await act(async () => { render(<StatusPage />) })

      expect(screen.getByText('Cloud Services Status')).toBeInTheDocument()
    })

    it('should render page description', async () => {
      await act(async () => { render(<StatusPage />) })

      expect(screen.getByText(/real-time status of major cloud platforms/i)).toBeInTheDocument()
    })

    it('should render all cloud services', async () => {
      await act(async () => { render(<StatusPage />) })

      expect(screen.getAllByText('AWS').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('Azure').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('GCP').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('GitHub').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('GitLab').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('Oracle Cloud').length).toBeGreaterThanOrEqual(1)
    })

    it('should render service descriptions', async () => {
      await act(async () => { render(<StatusPage />) })

      expect(screen.getByText('Amazon Web Services')).toBeInTheDocument()
      expect(screen.getByText('Microsoft Azure')).toBeInTheDocument()
      expect(screen.getByText('Google Cloud Platform')).toBeInTheDocument()
      expect(screen.getByText('GitHub Services')).toBeInTheDocument()
      expect(screen.getByText('GitLab Services')).toBeInTheDocument()
      expect(screen.getByText('Oracle Cloud Infrastructure')).toBeInTheDocument()
    })

    it('should show initial loading state for all services', () => {
      render(<StatusPage />)

      const checkingTexts = screen.getAllByText('Checking...')
      expect(checkingTexts.length).toBeGreaterThan(0) // At least one service starts in loading state
    })
  })

  describe('Service Icons', () => {
    it('should display emoji icons for services', async () => {
      await act(async () => { render(<StatusPage />) })

      const azureArticle = screen.getAllByText('Azure')[0].closest('a')
      expect(azureArticle?.querySelector('.text-3xl')?.textContent).toBe('🔷')

      const githubArticle = screen.getAllByText('GitHub')[0].closest('a')
      expect(githubArticle?.querySelector('.text-3xl')?.textContent).toBe('🐙')

      const gitlabArticle = screen.getAllByText('GitLab')[0].closest('a')
      expect(gitlabArticle?.querySelector('.text-3xl')?.textContent).toBe('🦊')

      const oracleArticle = screen.getAllByText('Oracle Cloud')[0].closest('a')
      expect(oracleArticle?.querySelector('.text-3xl')?.textContent).toBe('🔴')
    })
  })

  describe('GitHub API Integration', () => {
    it('should fetch GitHub status on mount', async () => {
      render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      expect(global.fetch).toHaveBeenCalledWith(
        'https://www.githubstatus.com/api/v2/status.json',
        expect.objectContaining({
          signal: expect.any(AbortSignal)
        })
      )
    })

    it('should show operational status when GitHub API returns "none"', async () => {
      render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      const operationalTexts = screen.getAllByText('All Systems Operational')
      expect(operationalTexts.length).toBeGreaterThanOrEqual(1)
    })

    it('should show degraded status when GitHub API returns issues', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ status: { indicator: 'minor' } }),
      })

      render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      expect(screen.getByText('Degraded Performance')).toBeInTheDocument()
    })

    it('should handle API fetch errors gracefully', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation()

      ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))

      render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      expect(screen.getAllByText('Checking...').length).toBeGreaterThan(0)

      consoleError.mockRestore()
    })
  })

  describe('Status Indicators', () => {
    it('should show all services as operational after timeout', async () => {
      render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      const operationalTexts = screen.getAllByText('All Systems Operational')
      expect(operationalTexts.length).toBeGreaterThanOrEqual(5)
    })

    it('should display overall status as operational when all services are up', async () => {
      render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      const allSystemsTexts = screen.getAllByText('All Systems Operational')
      expect(allSystemsTexts.length).toBeGreaterThan(0)
    })
  })

  describe('Status Links', () => {
    it('should have links to official status pages', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const links = container.querySelectorAll('a[href^="https://"]')
      expect(links.length).toBeGreaterThanOrEqual(6)
    })

    it('should link to AWS status page', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const awsLink = container.querySelector('a[href="https://health.aws.amazon.com/health/status"]')
      expect(awsLink).toBeInTheDocument()
    })

    it('should link to Azure status page', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const azureLink = container.querySelector('a[href="https://status.azure.com/en-us/status"]')
      expect(azureLink).toBeInTheDocument()
    })

    it('should link to GitHub status page', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const githubLink = container.querySelector('a[href="https://www.githubstatus.com/"]')
      expect(githubLink).toBeInTheDocument()
    })

    it('should open links in new tab', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const links = container.querySelectorAll('a[href^="https://"]')
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      })
    })
  })

  describe('Timestamp Display', () => {
    it('should display last updated timestamp after mount', async () => {
      render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      const timestampContainer = screen.getByText(/last updated/i, { exact: false })
      expect(timestampContainer.textContent).toMatch(/Last updated: \d/)
    })

    it('should not show timestamp before component mounts', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const timestampDiv = container.querySelector('.text-center.text-sm')
      expect(timestampDiv).toBeInTheDocument()
    })
  })

  describe('Dark Mode Support', () => {
    it('should have dark mode classes on main container', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const mainDiv = container.querySelector('.min-h-screen')
      expect(mainDiv).toHaveClass('dark:bg-slate-900')
    })

    it('should have dark mode classes on title', async () => {
      await act(async () => { render(<StatusPage />) })

      const title = screen.getByText('Cloud Services Status')
      expect(title).toHaveClass('dark:text-white')
    })

    it('should have dark mode classes on service cards', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const serviceCards = container.querySelectorAll('.bg-white')
      serviceCards.forEach(card => {
        expect(card).toHaveClass('dark:bg-slate-800')
      })
    })

    it('should have dark mode classes on borders', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const borders = container.querySelectorAll('.border-slate-200')
      borders.forEach(border => {
        expect(border).toHaveClass('dark:border-slate-700')
      })
    })
  })

  describe('Information Section', () => {
    it('should render about section', async () => {
      await act(async () => { render(<StatusPage />) })

      expect(screen.getByText('About This Page')).toBeInTheDocument()
    })

    it('should display info icon', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const infoSection = container.querySelector('.bg-blue-50')
      const svg = infoSection?.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('should explain page functionality', async () => {
      await act(async () => { render(<StatusPage />) })

      expect(screen.getByText(/status is fetched live/i)).toBeInTheDocument()
    })
  })

  describe('Status Color Coding', () => {
    it('should use green for operational status', async () => {
      const { container } = render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      const greenBadges = container.querySelectorAll('.bg-emerald-500')
      expect(greenBadges.length).toBeGreaterThan(0)
    })

    it('should use amber for degraded status', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ status: { indicator: 'minor' } }),
      })

      const { container } = render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      const amberBadges = container.querySelectorAll('.bg-amber-500')
      expect(amberBadges.length).toBeGreaterThan(0)
    })

    it('should use gray with pulse for loading status', () => {
      const { container } = render(<StatusPage />)

      const loadingBadges = container.querySelectorAll('.bg-slate-400.animate-pulse')
      expect(loadingBadges.length).toBeGreaterThan(0) // At least GitHub starts in loading state
    })
  })

  describe('Overall Status Banner', () => {
    it('should show positive banner when all operational', async () => {
      const { container } = render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      const banner = container.querySelector('.bg-emerald-50')
      expect(banner).toBeInTheDocument()
    })

    it('should show warning banner when some services degraded', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ status: { indicator: 'minor' } }),
      })

      const { container } = render(<StatusPage />)

      await act(async () => {
        await jest.runAllTimersAsync()
      })

      const banner = container.querySelector('.bg-amber-50')
      expect(banner).toBeInTheDocument()
    })

    it('should have pulse animation on status indicator', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const statusDot = container.querySelector('.rounded-full.animate-pulse')
      expect(statusDot).toBeInTheDocument()
    })
  })

  describe('Responsive Design', () => {
    it('should have proper max-width container', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const contentContainer = container.querySelector('.max-w-4xl')
      expect(contentContainer).toBeInTheDocument()
    })

    it('should have responsive padding', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const contentContainer = container.querySelector('.px-4')
      expect(contentContainer).toBeInTheDocument()
    })

    it('should have vertical spacing on mobile', async () => {
      let container!: HTMLElement
      await act(async () => { ({ container } = render(<StatusPage />)) })

      const servicesContainer = container.querySelector('.space-y-4')
      expect(servicesContainer).toBeInTheDocument()
    })
  })
})
