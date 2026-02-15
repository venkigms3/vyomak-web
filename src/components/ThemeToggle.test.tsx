/**
 * Unit tests for ThemeToggle Component
 * 
 * Tests cover:
 * - Component rendering
 * - Theme toggle functionality
 * - LocalStorage operations
 * - Dark mode class application
 * - System preference detection
 * - Hydration mismatch prevention
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ThemeToggle from './ThemeToggle'

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    // Clear all mocks and localStorage before each test
    jest.clearAllMocks()
    localStorage.clear()
    document.documentElement.className = ''
    
    // Reset matchMedia to default behavior
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
  })

  describe('Rendering', () => {
    it('should render with placeholder initially (hydration prevention)', () => {
      const { container } = render(<ThemeToggle />)
      const button = container.querySelector('button')
      
      expect(button).toBeInTheDocument()
      expect(button).toHaveAttribute('aria-label', 'Toggle theme')
    })

    it('should render sun icon in light mode after mount', async () => {
      localStorage.setItem('theme', 'light')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        // Sun icon has specific path for light mode
        const sunIcon = screen.getByRole('button', { name: /toggle theme/i })
        const svg = sunIcon.querySelector('svg')
        expect(svg).toBeInTheDocument()
        
        // Check for sun icon path (circle in center, rays around)
        const path = svg?.querySelector('path')
        expect(path?.getAttribute('d')).toContain('M12 3v1m0 16v1')
      })
    })

    it('should render moon icon in dark mode after mount', async () => {
      localStorage.setItem('theme', 'dark')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        const moonIcon = screen.getByRole('button', { name: /toggle theme/i })
        const svg = moonIcon.querySelector('svg')
        expect(svg).toBeInTheDocument()
        
        // Check for moon icon path (crescent shape)
        const path = svg?.querySelector('path')
        expect(path?.getAttribute('d')).toContain('M20.354 15.354A9 9 0 018.646 3.646')
      })
    })
  })

  describe('Theme Detection and Initialization', () => {
    it('should use localStorage theme if available', async () => {
      localStorage.setItem('theme', 'dark')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(localStorage.getItem('theme')).toBe('dark')
        expect(document.documentElement.classList.contains('dark')).toBe(true)
      })
    })

    it('should use system preference if no localStorage value', async () => {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(true)
      })
    })

    it('should default to light mode if no preference', async () => {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(false)
      })
    })
  })

  describe('Theme Toggle Functionality', () => {
    it('should toggle from light to dark mode', async () => {
      localStorage.setItem('theme', 'light')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(false)
      })
      
      const button = screen.getByRole('button', { name: /toggle theme/i })
      fireEvent.click(button)
      
      await waitFor(() => {
        expect(localStorage.getItem('theme')).toBe('dark')
        expect(document.documentElement.classList.contains('dark')).toBe(true)
      })
    })

    it('should toggle from dark to light mode', async () => {
      localStorage.setItem('theme', 'dark')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(true)
      })
      
      const button = screen.getByRole('button', { name: /toggle theme/i })
      fireEvent.click(button)
      
      await waitFor(() => {
        expect(localStorage.getItem('theme')).toBe('light')
        expect(document.documentElement.classList.contains('dark')).toBe(false)
      })
    })

    it('should update icon when theme changes', async () => {
      localStorage.setItem('theme', 'light')
      
      const { container } = render(<ThemeToggle />)
      
      // Wait for initial render (sun icon)
      await waitFor(() => {
        const path = container.querySelector('path')
        expect(path?.getAttribute('d')).toContain('M12 3v1m0 16v1')
      })
      
      const button = screen.getByRole('button', { name: /toggle theme/i })
      fireEvent.click(button)
      
      // After toggle, should show moon icon
      await waitFor(() => {
        const path = container.querySelector('path')
        expect(path?.getAttribute('d')).toContain('M20.354 15.354A9 9 0 018.646 3.646')
      })
    })
  })

  describe('LocalStorage Operations', () => {
    it('should persist theme to localStorage on toggle', async () => {
      localStorage.setItem('theme', 'light')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(false)
      })
      
      const button = screen.getByRole('button', { name: /toggle theme/i })
      fireEvent.click(button)
      
      expect(localStorage.getItem('theme')).toBe('dark')
    })

    it('should read theme from localStorage on mount', async () => {
      localStorage.setItem('theme', 'dark')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(localStorage.getItem('theme')).toBe('dark')
      })
    })
  })

  describe('DOM Class Management', () => {
    it('should add dark class to document root in dark mode', async () => {
      localStorage.setItem('theme', 'dark')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(true)
      })
    })

    it('should remove dark class from document root in light mode', async () => {
      localStorage.setItem('theme', 'light')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(false)
      })
    })

    it('should properly clean up classes when toggling multiple times', async () => {
      localStorage.setItem('theme', 'light')
      
      render(<ThemeToggle />)
      
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(false)
      })
      
      const button = screen.getByRole('button', { name: /toggle theme/i })
      
      // Toggle to dark
      fireEvent.click(button)
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(true)
      })
      
      // Toggle back to light
      fireEvent.click(button)
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(false)
      })
      
      // Toggle to dark again
      fireEvent.click(button)
      await waitFor(() => {
        expect(document.documentElement.classList.contains('dark')).toBe(true)
      })
    })
  })

  describe('Accessibility', () => {
    it('should have proper aria-label', async () => {
      render(<ThemeToggle />)
      
      const button = screen.getByRole('button', { name: /toggle theme/i })
      expect(button).toHaveAttribute('aria-label', 'Toggle theme')
    })

    it('should be a button element', async () => {
      render(<ThemeToggle />)
      
      const button = screen.getByRole('button', { name: /toggle theme/i })
      expect(button).toHaveAttribute('type', 'button')
    })
  })
})
