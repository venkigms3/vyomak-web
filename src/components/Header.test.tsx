/**
 * Unit tests for Header Component
 * 
 * Tests cover:
 * - Component rendering
 * - Navigation links
 * - Mobile menu toggle
 * - Theme toggle integration
 * - Dark mode support
 * - Accessibility
 */

import { render, screen, fireEvent, within } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    document.documentElement.className = ''
  })

  describe('Rendering', () => {
    it('should render the header with logo and branding', () => {
      render(<Header />)
      
      expect(screen.getByText('Vyomak')).toBeInTheDocument()
      expect(screen.getByText('Technology blog')).toBeInTheDocument()
      expect(screen.getByText('V')).toBeInTheDocument()
    })

    it('should render all navigation links', () => {
      render(<Header />)
      
      const homeLinks = screen.getAllByText('Home')
      const blogLinks = screen.getAllByText('Blog')
      const statusLinks = screen.getAllByText('Status')
      const contactLinks = screen.getAllByText('Contact')
      
      // Each link appears twice (desktop + mobile menu)
      expect(homeLinks.length).toBeGreaterThan(0)
      expect(blogLinks.length).toBeGreaterThan(0)
      expect(statusLinks.length).toBeGreaterThan(0)
      expect(contactLinks.length).toBeGreaterThan(0)
    })

    it('should render theme toggle button', () => {
      render(<Header />)
      
      const themeToggle = screen.getByRole('button', { name: /toggle theme/i })
      expect(themeToggle).toBeInTheDocument()
    })

    it('should render mobile menu button', () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      expect(menuButton).toBeInTheDocument()
    })

    it('should render CTA button', () => {
      render(<Header />)
      
      const ctaButtons = screen.getAllByText("Let's talk")
      expect(ctaButtons.length).toBeGreaterThan(0)
    })
  })

  describe('Desktop Navigation', () => {
    it('should have correct href for Home link', () => {
      render(<Header />)
      
      // Desktop menu is hidden on mobile, so we need to find the visible one
      const header = screen.getByRole('banner')
      const navLinks = within(header).getAllByRole('link')
      const homeLink = navLinks.find(link => link.textContent === 'Home')
      
      expect(homeLink).toHaveAttribute('href', '/')
    })

    it('should have correct href for Blog link', () => {
      render(<Header />)
      
      const header = screen.getByRole('banner')
      const navLinks = within(header).getAllByRole('link')
      const blogLink = navLinks.find(link => link.textContent === 'Blog')
      
      expect(blogLink).toHaveAttribute('href', '/blog')
    })

    it('should have correct href for Status link', () => {
      render(<Header />)
      
      const header = screen.getByRole('banner')
      const navLinks = within(header).getAllByRole('link')
      const statusLink = navLinks.find(link => link.textContent === 'Status')
      
      expect(statusLink).toHaveAttribute('href', '/status')
    })

    it('should have correct href for Contact link', () => {
      render(<Header />)
      
      const header = screen.getByRole('banner')
      const navLinks = within(header).getAllByRole('link')
      const contactLink = navLinks.find(link => link.textContent === 'Contact')
      
      expect(contactLink).toHaveAttribute('href', '/#contact')
    })
  })

  describe('Mobile Menu Functionality', () => {
    it('should not show mobile menu by default', () => {
      const { container } = render(<Header />)
      
      // Mobile menu should not be visible initially
      const mobileMenu = container.querySelector('.md\\:hidden .flex-col')
      expect(mobileMenu).not.toBeInTheDocument()
    })

    it('should open mobile menu when hamburger is clicked', () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      fireEvent.click(menuButton)
      
      // After clicking, mobile menu should be visible
      // Check for the mobile menu by looking for the container with navigation items
      const mobileHomeLink = screen.getAllByText('Home').find(el => 
        el.className.includes('px-4 py-2')
      )
      expect(mobileHomeLink).toBeInTheDocument()
    })

    it('should close mobile menu when hamburger is clicked again', () => {
      const { container } = render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      
      // Open menu
      fireEvent.click(menuButton)
      
      let mobileMenu = container.querySelector('.md\\:hidden .flex-col')
      expect(mobileMenu).toBeInTheDocument()
      
      // Close menu
      fireEvent.click(menuButton)
      
      mobileMenu = container.querySelector('.md\\:hidden .flex-col')
      expect(mobileMenu).not.toBeInTheDocument()
    })

    it('should show hamburger icon when menu is closed', () => {
      const { container } = render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      const svg = menuButton.querySelector('svg')
      const path = svg?.querySelector('path')
      
      // Hamburger icon has three horizontal lines
      expect(path?.getAttribute('d')).toContain('M4 6h16M4 12h16M4 18h16')
    })

    it('should show close icon when menu is open', () => {
      const { container } = render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      fireEvent.click(menuButton)
      
      const svg = menuButton.querySelector('svg')
      const path = svg?.querySelector('path')
      
      // Close icon is an X
      expect(path?.getAttribute('d')).toContain('M6 18L18 6M6 6l12 12')
    })

    it('should close mobile menu when a link is clicked', () => {
      const { container } = render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      fireEvent.click(menuButton)
      
      // Find and click a mobile menu link
      const mobileHomeLink = screen.getAllByText('Home').find(el => 
        el.className.includes('px-4 py-2')
      )
      fireEvent.click(mobileHomeLink!)
      
      // Menu should be closed
      const mobileMenu = container.querySelector('.md\\:hidden .flex-col')
      expect(mobileMenu).not.toBeInTheDocument()
    })

    it('should have aria-expanded attribute on menu button', () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      expect(menuButton).toHaveAttribute('aria-expanded', 'false')
      
      fireEvent.click(menuButton)
      expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    })
  })

  describe('Mobile Menu Links', () => {
    it('should render all navigation items in mobile menu', () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      fireEvent.click(menuButton)
      
      // Check for mobile-specific styled links
      const mobileLinks = screen.getAllByRole('link').filter(link => 
        link.className.includes('px-4 py-2')
      )
      
      expect(mobileLinks.length).toBeGreaterThanOrEqual(4) // Home, Blog, Status, Contact
    })

    it('should have CTA button in mobile menu', () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      fireEvent.click(menuButton)
      
      const ctaButtons = screen.getAllByText("Let's talk")
      // Should have both desktop and mobile CTA
      expect(ctaButtons.length).toBeGreaterThan(1)
    })
  })

  describe('Theme Toggle Integration', () => {
    it('should contain ThemeToggle component', () => {
      render(<Header />)
      
      const themeToggle = screen.getByRole('button', { name: /toggle theme/i })
      expect(themeToggle).toBeInTheDocument()
    })

    it('should keep theme toggle visible when mobile menu is toggled', () => {
      render(<Header />)
      
      const menuButton = screen.getByRole('button', { name: /toggle menu/i })
      const themeToggle = screen.getByRole('button', { name: /toggle theme/i })
      
      expect(themeToggle).toBeInTheDocument()
      
      fireEvent.click(menuButton)
      
      // Theme toggle should still be visible
      expect(themeToggle).toBeInTheDocument()
    })
  })

  describe('Styling and Layout', () => {
    it('should have sticky positioning', () => {
      const { container } = render(<Header />)
      
      const header = container.querySelector('header')
      expect(header).toHaveClass('sticky', 'top-0')
    })

    it('should have backdrop blur effect', () => {
      const { container } = render(<Header />)
      
      const header = container.querySelector('header')
      expect(header).toHaveClass('backdrop-blur')
    })

    it('should have dark mode classes', () => {
      const { container } = render(<Header />)
      
      const header = container.querySelector('header')
      expect(header?.className).toContain('dark:bg-slate-900')
    })

    it('should have z-index for layering', () => {
      const { container } = render(<Header />)
      
      const header = container.querySelector('header')
      expect(header).toHaveClass('z-40')
    })

    it('should have border styling', () => {
      const { container } = render(<Header />)
      
      const header = container.querySelector('header')
      expect(header).toHaveClass('border-b')
    })
  })

  describe('Logo and Branding', () => {
    it('should have clickable logo linking to home', () => {
      render(<Header />)
      
      const logoLink = screen.getByRole('link', { name: /technology blog vyomak/i })
      expect(logoLink).toHaveAttribute('href', '/')
    })

    it('should display logo icon with "V"', () => {
      render(<Header />)
      
      expect(screen.getByText('V')).toBeInTheDocument()
    })

    it('should have gradient on logo icon', () => {
      const { container } = render(<Header />)
      
      const logoIcon = screen.getByText('V')
      expect(logoIcon).toHaveClass('bg-gradient-to-br', 'from-sky-500', 'to-indigo-500')
    })
  })

  describe('CTA Button', () => {
    it('should link to contact section', () => {
      render(<Header />)
      
      const ctaButtons = screen.getAllByText("Let's talk")
      const desktopCta = ctaButtons[0]
      
      expect(desktopCta).toHaveAttribute('href', '/#contact')
    })

    it('should have gradient background', () => {
      render(<Header />)
      
      const ctaButtons = screen.getAllByText("Let's talk")
      const desktopCta = ctaButtons[0]
      
      expect(desktopCta).toHaveClass('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500')
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA labels on buttons', () => {
      render(<Header />)
      
      expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
    })

    it('should have navigation landmark', () => {
      render(<Header />)
      
      const nav = screen.getByRole('navigation')
      expect(nav).toBeInTheDocument()
    })

    it('should have banner landmark', () => {
      render(<Header />)
      
      const header = screen.getByRole('banner')
      expect(header).toBeInTheDocument()
    })

    it('should have accessible links', () => {
      render(<Header />)
      
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveAttribute('href')
      })
    })
  })
})
