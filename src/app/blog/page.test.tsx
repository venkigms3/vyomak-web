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
      
      expect(screen.getByText('Blog')).toBeInTheDocument()
    })

    it('should render all blog posts', () => {
      render(<Blog />)
      
      expect(screen.getByText('Azure Monitor')).toBeInTheDocument()
      expect(screen.getByText('Getting Started with Next.js')).toBeInTheDocument()
      expect(screen.getByText('Cloud Solutions for Developers')).toBeInTheDocument()
    })

    it('should render exactly 3 posts', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      expect(articles.length).toBe(3)
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
      const { container } = render(<Blog />)
      
      const azureTitle = screen.getByText('Azure Monitor')
      const link = azureTitle.closest('a')
      
      // Azure Monitor title should not be wrapped in a link
      expect(link).not.toBeInTheDocument()
    })

    it('should show "Coming Soon" as date', () => {
      render(<Blog />)
      
      // Get the article with Azure Monitor
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      
      // Find time element within that article
      const timeElement = azureArticle?.querySelector('time')
      expect(timeElement).toHaveTextContent('Coming Soon')
    })

    it('should have special styling for coming soon date', () => {
      render(<Blog />)
      
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      const timeElement = azureArticle?.querySelector('time')
      
      expect(timeElement).toHaveClass('text-indigo-600')
      expect(timeElement).toHaveClass('dark:text-indigo-400')
      expect(timeElement).toHaveClass('font-semibold')
    })

    it('should have clock icon in badge', () => {
      const { container } = render(<Blog />)
      
      // Find the article with Azure Monitor and "Coming Soon"
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      const badge = azureArticle?.querySelector('.absolute')
      const svg = badge?.querySelector('svg')
      
      expect(svg).toBeInTheDocument()
    })

    it('should have gradient styling on badge', () => {
      const { container } = render(<Blog />)
      
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      const badge = azureArticle?.querySelector('.absolute')
      expect(badge).toHaveClass('bg-gradient-to-r')
      expect(badge).toHaveClass('from-sky-500')
      expect(badge).toHaveClass('to-indigo-500')
    })

    it('should position badge absolutely', () => {
      const { container } = render(<Blog />)
      
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      const badge = azureArticle?.querySelector('.absolute')
      expect(badge).toHaveClass('absolute')
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
      const { container } = render(<Blog />)
      
      const nextjsTitle = screen.getByText('Getting Started with Next.js')
      const nextjsLink = nextjsTitle.closest('a')
      
      expect(nextjsLink).toBeInTheDocument()
      expect(nextjsLink).toHaveAttribute('href', '/blog/getting-started-nextjs')
    })

    it('should link to correct post slugs', () => {
      const { container } = render(<Blog />)
      
      const cloudSolutionsTitle = screen.getByText('Cloud Solutions for Developers')
      const cloudSolutionsLink = cloudSolutionsTitle.closest('a')
      
      expect(cloudSolutionsLink).toHaveAttribute('href', '/blog/cloud-solutions')
    })

    it('should display post excerpts', () => {
      render(<Blog />)
      
      expect(screen.getByText(/learn how to build modern web applications/i)).toBeInTheDocument()
      expect(screen.getByText(/exploring various cloud platforms/i)).toBeInTheDocument()
    })

    it('should show publication dates', () => {
      render(<Blog />)
      
      expect(screen.getByText('2024-02-13')).toBeInTheDocument()
      expect(screen.getByText('2024-02-12')).toBeInTheDocument()
    })

    it('should have regular styling for published dates', () => {
      render(<Blog />)
      
      const nextjsArticle = screen.getByText('Getting Started with Next.js').closest('article')
      const timeElement = nextjsArticle?.querySelector('time')
      
      expect(timeElement).toHaveClass('text-gray-500')
      expect(timeElement).toHaveClass('dark:text-gray-400')
      expect(timeElement).not.toHaveClass('font-semibold')
    })

    it('should not have "Coming Soon" badge on published posts', () => {
      render(<Blog />)
      
      const nextjsArticle = screen.getByText('Getting Started with Next.js').closest('article')
      const badge = nextjsArticle?.querySelector('.absolute')
      
      expect(badge).not.toBeInTheDocument()
    })

    it('should have hover effect on links', () => {
      render(<Blog />)
      
      const nextjsTitle = screen.getByText('Getting Started with Next.js')
      const nextjsLink = nextjsTitle.closest('a')
      
      expect(nextjsLink).toHaveClass('hover:underline')
    })
  })

  describe('Post Ordering', () => {
    it('should display Azure Monitor first', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      const firstArticle = articles[0]
      
      expect(firstArticle?.textContent).toContain('Azure Monitor')
    })

    it('should display posts in correct order', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      
      expect(articles[0]?.textContent).toContain('Azure Monitor')
      expect(articles[1]?.textContent).toContain('Getting Started with Next.js')
      expect(articles[2]?.textContent).toContain('Cloud Solutions for Developers')
    })
  })

  describe('Post Card Styling', () => {
    it('should have white background on posts', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      articles.forEach(article => {
        expect(article).toHaveClass('bg-white')
      })
    })

    it('should have dark mode background', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      articles.forEach(article => {
        expect(article).toHaveClass('dark:bg-gray-800')
      })
    })

    it('should have rounded corners', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      articles.forEach(article => {
        expect(article).toHaveClass('rounded-lg')
      })
    })

    it('should have padding', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      articles.forEach(article => {
        expect(article).toHaveClass('p-6')
      })
    })

    it('should have shadow', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      articles.forEach(article => {
        expect(article).toHaveClass('shadow-sm')
      })
    })

    it('should have border', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      articles.forEach(article => {
        expect(article).toHaveClass('border')
        expect(article).toHaveClass('border-gray-200')
        expect(article).toHaveClass('dark:border-gray-700')
      })
    })

    it('should have relative positioning for coming soon badge', () => {
      const { container } = render(<Blog />)
      
      const azureArticle = screen.getByText('Azure Monitor').closest('article')
      expect(azureArticle).toHaveClass('relative')
    })
  })

  describe('Dark Mode Support', () => {
    it('should have dark mode classes on main container', () => {
      const { container } = render(<Blog />)
      
      const mainDiv = container.querySelector('.min-h-screen')
      expect(mainDiv).toHaveClass('dark:bg-gray-900')
    })

    it('should have dark mode classes on title', () => {
      render(<Blog />)
      
      const title = screen.getByText('Blog')
      expect(title).toHaveClass('dark:text-white')
    })

    it('should have dark mode classes on post titles', () => {
      render(<Blog />)
      
      const azureTitle = screen.getByText('Azure Monitor')
      expect(azureTitle).toHaveClass('dark:text-white')
    })

    it('should have dark mode classes on excerpts', () => {
      const { container } = render(<Blog />)
      
      const excerpts = container.querySelectorAll('.text-gray-700')
      excerpts.forEach(excerpt => {
        expect(excerpt).toHaveClass('dark:text-gray-300')
      })
    })

    it('should have dark mode classes on links', () => {
      render(<Blog />)
      
      const nextjsLink = screen.getByText('Getting Started with Next.js')
      expect(nextjsLink).toHaveClass('dark:text-blue-400')
    })
  })

  describe('Typography', () => {
    it('should have large title font', () => {
      render(<Blog />)
      
      const title = screen.getByText('Blog')
      expect(title).toHaveClass('text-4xl', 'font-bold')
    })

    it('should have post title styling', () => {
      render(<Blog />)
      
      const postTitle = screen.getByText('Getting Started with Next.js').closest('h2')
      expect(postTitle).toHaveClass('text-2xl', 'font-semibold')
    })

    it('should have appropriate margins', () => {
      render(<Blog />)
      
      const title = screen.getByText('Blog')
      expect(title).toHaveClass('mb-12')
    })

    it('should have text center for main title', () => {
      render(<Blog />)
      
      const title = screen.getByText('Blog')
      expect(title).toHaveClass('text-center')
    })
  })

  describe('Layout and Spacing', () => {
    it('should have proper vertical spacing between posts', () => {
      const { container } = render(<Blog />)
      
      const postsContainer = container.querySelector('.space-y-8')
      expect(postsContainer).toBeInTheDocument()
    })

    it('should have max-width container', () => {
      const { container } = render(<Blog />)
      
      const contentContainer = container.querySelector('.max-w-4xl')
      expect(contentContainer).toBeInTheDocument()
    })

    it('should have centered content', () => {
      const { container } = render(<Blog />)
      
      const contentContainer = container.querySelector('.mx-auto')
      expect(contentContainer).toBeInTheDocument()
    })

    it('should have responsive padding', () => {
      const { container } = render(<Blog />)
      
      const contentContainer = container.querySelector('.px-4')
      expect(contentContainer).toBeInTheDocument()
    })

    it('should have vertical padding', () => {
      const { container } = render(<Blog />)
      
      const mainDiv = container.querySelector('.py-16')
      expect(mainDiv).toBeInTheDocument()
    })

    it('should have minimum height', () => {
      const { container } = render(<Blog />)
      
      const mainDiv = container.querySelector('.min-h-screen')
      expect(mainDiv).toBeInTheDocument()
    })
  })

  describe('Semantic HTML', () => {
    it('should use article elements for posts', () => {
      const { container } = render(<Blog />)
      
      const articles = container.querySelectorAll('article')
      expect(articles.length).toBe(3)
    })

    it('should use h1 for page title', () => {
      render(<Blog />)
      
      const title = screen.getByText('Blog')
      expect(title.tagName).toBe('H1')
    })

    it('should use h2 for post titles', () => {
      render(<Blog />)
      
      const postTitle = screen.getByText('Azure Monitor').closest('h2')
      expect(postTitle).toBeInTheDocument()
    })

    it('should use time elements for dates', () => {
      const { container } = render(<Blog />)
      
      const timeElements = container.querySelectorAll('time')
      expect(timeElements.length).toBe(3)
    })

    it('should use p elements for excerpts', () => {
      const { container } = render(<Blog />)
      
      const excerpt = screen.getByText(/comprehensive guide to monitoring/i)
      expect(excerpt.tagName).toBe('P')
    })
  })

  describe('Link Behavior', () => {
    it('should have correct link color for published posts', () => {
      render(<Blog />)
      
      const link = screen.getByText('Getting Started with Next.js')
      expect(link).toHaveClass('text-blue-600')
      expect(link).toHaveClass('dark:text-blue-400')
    })

    it('should have all required href attributes', () => {
      const { container } = render(<Blog />)
      
      const links = container.querySelectorAll('a')
      links.forEach(link => {
        expect(link).toHaveAttribute('href')
      })
    })
  })
})
