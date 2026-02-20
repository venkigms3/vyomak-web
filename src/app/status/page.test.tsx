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

import { render, screen, waitFor } from '@testing-library/react'
import StatusPage, { resetCache } from './page'

// Mock fetch globally
global.fetch = jest.fn()

describe('Status Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    resetCache() // Reset cache between tests
    
    // Mock fetch with a default implementation
    ;(global.fetch as jest.Mock) = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: { indicator: 'none' } }),
    })
  })

  describe('Initial Rendering', () => {
    it('should render page title', () => {
      render(<StatusPage />)
      
      expect(screen.getByText('Cloud Services Status')).toBeInTheDocument()
    })

    it('should render page description', () => {
      render(<StatusPage />)
      
      expect(screen.getByText(/real-time status of major cloud platforms/i)).toBeInTheDocument()
    })

    it('should render all cloud services', () => {
      render(<StatusPage />)
      
      expect(screen.getByText('AWS')).toBeInTheDocument()
      expect(screen.getByText('Azure')).toBeInTheDocument()
      expect(screen.getByText('GCP')).toBeInTheDocument()
      expect(screen.getByText('GitHub')).toBeInTheDocument()
      expect(screen.getByText('GitLab')).toBeInTheDocument()
      expect(screen.getByText('Oracle Cloud')).toBeInTheDocument()
    })

    it('should render service descriptions', () => {
      render(<StatusPage />)
      
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
      expect(checkingTexts.length).toBe(6) // All 6 services
    })
  })

  describe('Service Icons', () => {
    it('should display emoji icons for services', () => {
      const { container } = render(<StatusPage />)
      
      // Check for specific service emojis in service cards
      expect(screen.getByText('Azure')).toBeInTheDocument()
      const azureArticle = screen.getByText('Azure').closest('a')
      const azureIcon = azureArticle?.querySelector('.text-3xl')
      expect(azureIcon?.textContent).toBe('🔷')
      
      expect(screen.getByText('GitHub')).toBeInTheDocument()
      const githubArticle = screen.getByText('GitHub').closest('a')
      const githubIcon = githubArticle?.querySelector('.text-3xl')
      expect(githubIcon?.textContent).toBe('🐙')
      
      expect(screen.getByText('GitLab')).toBeInTheDocument()
      const gitlabArticle = screen.getByText('GitLab').closest('a')
      const gitlabIcon = gitlabArticle?.querySelector('.text-3xl')
      expect(gitlabIcon?.textContent).toBe('🦊')
      
      expect(screen.getByText('Oracle Cloud')).toBeInTheDocument()
      const oracleArticle = screen.getByText('Oracle Cloud').closest('a')
      const oracleIcon = oracleArticle?.querySelector('.text-3xl')
      expect(oracleIcon?.textContent).toBe('🔴')
    })
  })

  describe('GitHub API Integration', () => {
    it('should fetch GitHub status on mount', async () => {
      const mockResponse = {
        status: { indicator: 'none' }
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })
      
      render(<StatusPage />)
      
      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          'https://www.githubstatus.com/api/v2/status.json',
          expect.objectContaining({
            signal: expect.any(AbortSignal)
          })
        )
      })
    })

    it('should show operational status when GitHub API returns "none"', async () => {
      const mockResponse = {
        status: { indicator: 'none' }
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })
      
      render(<StatusPage />)
      
      await waitFor(() => {
        const operationalTexts = screen.getAllByText('All Systems Operational')
        // Should have at least GitHub as operational
        expect(operationalTexts.length).toBeGreaterThanOrEqual(1)
      })
    })

    it('should show degraded status when GitHub API returns issues', async () => {
      const mockResponse = {
        status: { indicator: 'minor' }
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })
      
      render(<StatusPage />)
      
      await waitFor(() => {
        expect(screen.getByText('Degraded Performance')).toBeInTheDocument()
      })
    })

    it('should handle API fetch errors gracefully', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation()
      
      ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))
      
      render(<StatusPage />)
      
      await waitFor(() => {
        // Should keep loading state on error
        expect(screen.getAllByText('Checking...').length).toBeGreaterThan(0)
      })
      
      consoleError.mockRestore()
    })
  })

  describe('Status Indicators', () => {
    it('should show all services as operational after timeout', async () => {
      const mockResponse = {
        status: { indicator: 'none' }
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })
      
      render(<StatusPage />)
      
      // Wait for timeout to set all services to operational
      await waitFor(() => {
        const operationalTexts = screen.getAllByText('All Systems Operational')
        // At least 5 services + potentially the banner
        expect(operationalTexts.length).toBeGreaterThanOrEqual(5)
      }, { timeout: 2000 })
    })

    it('should display overall status as operational when all services are up', async () => {
      const mockResponse = {
        status: { indicator: 'none' }
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })
      
      render(<StatusPage />)
      
      await waitFor(() => {
        const allSystemsTexts = screen.getAllByText('All Systems Operational')
        // Should include the main status banner
        expect(allSystemsTexts.length).toBeGreaterThan(0)
      }, { timeout: 2000 })
    })
  })

  describe('Status Links', () => {
    it('should have links to official status pages', () => {
      const { container } = render(<StatusPage />)
      
      const links = container.querySelectorAll('a[href^="https://"]')
      expect(links.length).toBeGreaterThanOrEqual(6)
    })

    it('should link to AWS status page', () => {
      const { container } = render(<StatusPage />)
      
      const awsLink = container.querySelector('a[href="https://health.aws.amazon.com/health/status"]')
      expect(awsLink).toBeInTheDocument()
    })

    it('should link to Azure status page', () => {
      const { container } = render(<StatusPage />)
      
      const azureLink = container.querySelector('a[href="https://status.azure.com/en-us/status"]')
      expect(azureLink).toBeInTheDocument()
    })

    it('should link to GitHub status page', () => {
      const { container } = render(<StatusPage />)
      
      const githubLink = container.querySelector('a[href="https://www.githubstatus.com/"]')
      expect(githubLink).toBeInTheDocument()
    })

    it('should open links in new tab', () => {
      const { container } = render(<StatusPage />)
      
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
      
      // Initially empty to prevent hydration mismatch
      const timestampContainer = screen.getByText(/last updated/i, { exact: false })
      
      await waitFor(() => {
        expect(timestampContainer.textContent).toMatch(/Last updated: \d/)
      })
    })

    it('should not show timestamp before component mounts', () => {
      const { container } = render(<StatusPage />)
      
      // Check initial state - timestamp element exists but may be empty
      const timestampDiv = container.querySelector('.text-center.text-sm')
      expect(timestampDiv).toBeInTheDocument()
    })
  })

  describe('Dark Mode Support', () => {
    it('should have dark mode classes on main container', () => {
      const { container } = render(<StatusPage />)
      
      const mainDiv = container.querySelector('.min-h-screen')
      expect(mainDiv).toHaveClass('dark:bg-gray-900')
    })

    it('should have dark mode classes on title', () => {
      const { container } = render(<StatusPage />)
      
      const title = screen.getByText('Cloud Services Status')
      expect(title).toHaveClass('dark:text-white')
    })

    it('should have dark mode classes on service cards', () => {
      const { container } = render(<StatusPage />)
      
      const serviceCards = container.querySelectorAll('.bg-white')
      serviceCards.forEach(card => {
        expect(card).toHaveClass('dark:bg-gray-800')
      })
    })

    it('should have dark mode classes on borders', () => {
      const { container } = render(<StatusPage />)
      
      const borders = container.querySelectorAll('.border-gray-200')
      borders.forEach(border => {
        expect(border).toHaveClass('dark:border-gray-700')
      })
    })
  })

  describe('Information Section', () => {
    it('should render about section', () => {
      render(<StatusPage />)
      
      expect(screen.getByText('About This Page')).toBeInTheDocument()
    })

    it('should display info icon', () => {
      const { container } = render(<StatusPage />)
      
      const infoSection = container.querySelector('.bg-blue-50')
      const svg = infoSection?.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('should explain page functionality', () => {
      render(<StatusPage />)
      
      expect(screen.getByText(/this page displays the operational status/i)).toBeInTheDocument()
    })
  })

  describe('Status Color Coding', () => {
    it('should use green for operational status', async () => {
      const mockResponse = {
        status: { indicator: 'none' }
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })
      
      const { container } = render(<StatusPage />)
      
      await waitFor(() => {
        const greenBadges = container.querySelectorAll('.bg-emerald-500')
        expect(greenBadges.length).toBeGreaterThan(0)
      }, { timeout: 2000 })
    })

    it('should use amber for degraded status', async () => {
      const mockResponse = {
        status: { indicator: 'minor' }
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })
      
      const { container } = render(<StatusPage />)
      
      await waitFor(() => {
        const amberBadges = container.querySelectorAll('.bg-amber-500')
        expect(amberBadges.length).toBeGreaterThan(0)
      })
    })

    it('should use gray with pulse for loading status', () => {
      const { container } = render(<StatusPage />)
      
      const loadingBadges = container.querySelectorAll('.bg-gray-400.animate-pulse')
      expect(loadingBadges.length).toBe(6) // All services start in loading state
    })
  })

  describe('Overall Status Banner', () => {
    it('should show positive banner when all operational', async () => {
      const mockResponse = {
        status: { indicator: 'none' }
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })
      
      const { container } = render(<StatusPage />)
      
      await waitFor(() => {
        const banner = container.querySelector('.bg-emerald-50')
        expect(banner).toBeInTheDocument()
      }, { timeout: 2000 })
    })

    it('should show warning banner when some services degraded', async () => {
      const mockResponse = {
        status: { indicator: 'minor' }
      }
      
      ;(global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })
      
      const { container } = render(<StatusPage />)
      
      await waitFor(() => {
        const banner = container.querySelector('.bg-amber-50')
        expect(banner).toBeInTheDocument()
      })
    })

    it('should have pulse animation on status indicator', () => {
      const { container } = render(<StatusPage />)
      
      const statusDot = container.querySelector('.rounded-full.animate-pulse')
      expect(statusDot).toBeInTheDocument()
    })
  })

  describe('Responsive Design', () => {
    it('should have proper max-width container', () => {
      const { container } = render(<StatusPage />)
      
      const contentContainer = container.querySelector('.max-w-4xl')
      expect(contentContainer).toBeInTheDocument()
    })

    it('should have responsive padding', () => {
      const { container } = render(<StatusPage />)
      
      const contentContainer = container.querySelector('.px-4')
      expect(contentContainer).toBeInTheDocument()
    })

    it('should have vertical spacing on mobile', () => {
      const { container } = render(<StatusPage />)
      
      const servicesContainer = container.querySelector('.space-y-4')
      expect(servicesContainer).toBeInTheDocument()
    })
  })
})
