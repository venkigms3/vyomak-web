/**
 * Unit tests for Blog Page
 *
 * Tests cover:
 * - Component rendering
 * - Post display
 * - Coming soon badge
 * - Published posts
 * - Links and navigation
 * - Dark mode support
 */

import { render, screen } from '@testing-library/react'
import Blog from './page'

describe('Blog Page', () => {
  describe('Initial Rendering', () => {
    it('should render page title', () => {
      render(<Blog />)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })

    it('should render all blog post titles', () => {
      render(<Blog />)
      expect(screen.getByText('Azure Monitor')).toBeInTheDocument()
      expect(screen.getByText('Getting Started with Next.js')).toBeInTheDocument()
      expect(screen.getByText('Cloud Solutions for Developers')).toBeInTheDocument()
    })

    it('should render 1 coming soon article and 2 published post cards', () => {
      const { container } = render(<Blog />)
      const articles = container.querySelectorAll('article')
      expect(articles.length).toBe(1)
    })
  })

  describe('Azure Monitor - Coming Soon Post', () => {
    it('should display Azure Monitor post', () => {
      render(<Blog />)
      expect(screen.getByText('Azure Monitor')).toBeInTheDocument()
    })

    it('should show "Coming Soon" badge', () => {
      render(<Blog />)
      const comingSoonBadges = screen.getAllByText('Coming Soon')
      expect(comingSoonBadges.length).toBeGreaterThan(0)
    })

    it('should display post excerpt', () => {
      render(<Blog />)
      expect(screen.getByText(/comprehensive guide to monitoring and observability/i)).toBeInTheDocument()
    })

    it('should not be a clickable link', () => {
      render(<Blog />)
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      const link = azureArticle?.querySelector('a[href*="azure"]')
      expect(link).toBeNull()
    })

    it('should have gradient styling on badge', () => {
      render(<Blog />)
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      const badge = azureArticle?.querySelector('.bg-gradient-to-r')
      expect(badge).toBeInTheDocument()
      expect(badge).toHaveClass('from-sky-500')
      expect(badge).toHaveClass('to-indigo-500')
    })

    it('should have clock icon svg in badge', () => {
      render(<Blog />)
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      const svg = azureArticle?.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('should render Azure Monitor as an article element', () => {
      render(<Blog />)
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      expect(azureArticle).toBeInTheDocument()
    })
  })

  describe('Published Posts', () => {
    it('should display Getting Started with Next.js post', () => {
      render(<Blog />)
      expect(screen.getByText('Getting Started with Next.js')).toBeInTheDocument()
    })

    it('should display Cloud Solutions post', () => {
      render(<Blog />)
      expect(screen.getByText('Cloud Solutions for Developers')).toBeInTheDocument()
    })

    it('should have clickable links for published posts', () => {
      render(<Blog />)
      const nextjsLink = screen.getByText('Getting Started with Next.js').closest('a')
      expect(nextjsLink).toBeInTheDocument()
      expect(nextjsLink).toHaveAttribute('href', '/blog/getting-started-nextjs')
    })

    it('should link to correct post slugs', () => {
      render(<Blog />)
      const cloudSolutionsLink = screen.getByText('Cloud Solutions for Developers').closest('a')
      expect(cloudSolutionsLink).toHaveAttribute('href', '/blog/cloud-solutions')
    })

    it('should display post excerpts', () => {
      render(<Blog />)
      expect(screen.getByText(/learn how to build modern web applications/i)).toBeInTheDocument()
      expect(screen.getByText(/exploring various cloud platforms/i)).toBeInTheDocument()
    })

    it('should show formatted publication dates', () => {
      const { container } = render(<Blog />)
      const times = container.querySelectorAll('time')
      const texts = Array.from(times).map(t => t.textContent)
      // Dates should be human-readable (not raw ISO strings)
      expect(texts.some(t => t?.includes('2024'))).toBe(true)
    })

    it('should have time elements with dateTime attributes', () => {
      const { container } = render(<Blog />)
      const times = container.querySelectorAll('time')
      const dateTimes = Array.from(times).map(t => t.getAttribute('dateTime'))
      expect(dateTimes).toContain('2024-02-13')
      expect(dateTimes).toContain('2024-02-12')
    })

    it('should not have "Coming Soon" badge on published posts', () => {
      render(<Blog />)
      const nextjsCard = screen.getByText('Getting Started with Next.js').closest('a')
      const badge = nextjsCard?.querySelector('span.bg-gradient-to-r')
      expect(badge).toBeNull()
    })
  })

  describe('Post Ordering', () => {
    it('should display published posts before coming soon', () => {
      const { container } = render(<Blog />)
      const sections = container.querySelectorAll('[class*="grid gap-6"]')
      // first grid = published, second grid = coming soon
      expect(sections[0]?.textContent).toContain('Getting Started with Next.js')
      expect(sections[1]?.textContent).toContain('Azure Monitor')
    })
  })

  describe('Post Card Styling', () => {
    it('should have rounded corners on published post cards', () => {
      render(<Blog />)
      const card = screen.getByText('Getting Started with Next.js').closest('a')
      expect(card).toHaveClass('rounded-2xl')
    })

    it('should have shadow on published post cards', () => {
      render(<Blog />)
      const card = screen.getByText('Getting Started with Next.js').closest('a')
      expect(card).toHaveClass('shadow-sm')
    })

    it('should have border on published post cards', () => {
      render(<Blog />)
      const card = screen.getByText('Getting Started with Next.js').closest('a')
      expect(card).toHaveClass('border')
    })

    it('should have dashed border on coming soon cards', () => {
      render(<Blog />)
      const article = screen.getByText('Azure Monitor').closest('article')
      expect(article).toHaveClass('border-dashed')
    })
  })

  describe('Dark Mode Support', () => {
    it('should have dark mode class on main container', () => {
      const { container } = render(<Blog />)
      const mainDiv = container.querySelector('.min-h-screen')
      expect(mainDiv).toHaveClass('dark:bg-gray-950')
    })

    it('should have dark mode class on page title heading', () => {
      const { container } = render(<Blog />)
      const h1 = container.querySelector('h1')
      expect(h1).toHaveClass('dark:text-white')
    })

    it('should have dark mode class on published post card titles', () => {
      render(<Blog />)
      const h2 = screen.getByText('Getting Started with Next.js').closest('h2')
      expect(h2).toHaveClass('dark:text-white')
    })
  })

  describe('Typography', () => {
    it('should use h1 for page title', () => {
      const { container } = render(<Blog />)
      const h1 = container.querySelector('h1')
      expect(h1).toBeInTheDocument()
    })

    it('should have bold font on post titles', () => {
      render(<Blog />)
      const postTitle = screen.getByText('Getting Started with Next.js').closest('h2')
      expect(postTitle).toHaveClass('font-bold')
    })

    it('should have text-center for main title section', () => {
      const { container } = render(<Blog />)
      const centeredSection = container.querySelector('.text-center')
      expect(centeredSection).toBeInTheDocument()
    })
  })

  describe('Layout and Spacing', () => {
    it('should have max-width container', () => {
      const { container } = render(<Blog />)
      const contentContainer = container.querySelector('.max-w-5xl')
      expect(contentContainer).toBeInTheDocument()
    })

    it('should have centered content', () => {
      const { container } = render(<Blog />)
      const centeredDiv = container.querySelector('.mx-auto')
      expect(centeredDiv).toBeInTheDocument()
    })

    it('should have responsive padding', () => {
      const { container } = render(<Blog />)
      const paddedDiv = container.querySelector('.px-4')
      expect(paddedDiv).toBeInTheDocument()
    })

    it('should have minimum height', () => {
      const { container } = render(<Blog />)
      const mainDiv = container.querySelector('.min-h-screen')
      expect(mainDiv).toBeInTheDocument()
    })

    it('should use grid layout for posts', () => {
      const { container } = render(<Blog />)
      const grid = container.querySelector('.grid')
      expect(grid).toBeInTheDocument()
    })
  })

  describe('Semantic HTML', () => {
    it('should use article element for coming soon post', () => {
      render(<Blog />)
      const article = screen.getByText('Azure Monitor').closest('article')
      expect(article).toBeInTheDocument()
    })

    it('should use h1 for page title', () => {
      const { container } = render(<Blog />)
      const h1 = container.querySelector('h1')
      expect(h1).toBeInTheDocument()
    })

    it('should use h2 for post titles', () => {
      render(<Blog />)
      const postTitle = screen.getByText('Getting Started with Next.js').closest('h2')
      expect(postTitle).toBeInTheDocument()
    })

    it('should use time elements with dateTime for published posts', () => {
      const { container } = render(<Blog />)
      const timeElements = container.querySelectorAll('time')
      expect(timeElements.length).toBeGreaterThanOrEqual(2)
    })

    it('should use p elements for excerpts', () => {
      render(<Blog />)
      const excerpt = screen.getByText(/comprehensive guide to monitoring/i)
      expect(excerpt.tagName).toBe('P')
    })
  })

  describe('Link Behavior', () => {
    it('should have all required href attributes on links', () => {
      const { container } = render(<Blog />)
      const links = container.querySelectorAll('a')
      links.forEach(link => {
        expect(link).toHaveAttribute('href')
      })
    })

    it('should have hover classes on published post cards', () => {
      render(<Blog />)
      const card = screen.getByText('Getting Started with Next.js').closest('a')
      expect(card).toHaveClass('hover:shadow-lg')
    })
  })
})
