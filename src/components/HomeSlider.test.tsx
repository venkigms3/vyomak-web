import { render, screen, act, fireEvent } from '@testing-library/react';
import HomeSlider from './HomeSlider';

describe('HomeSlider', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Initial Rendering', () => {
    it('renders the section heading', () => {
      render(<HomeSlider />);
      expect(screen.getByText('At a glance')).toBeInTheDocument();
      expect(screen.getByText('Highlights')).toBeInTheDocument();
    });

    it('renders the first slide content by default', () => {
      render(<HomeSlider />);
      expect(screen.getByText('Upcoming articles')).toBeInTheDocument();
    });

    it('renders all three dot indicators', () => {
      render(<HomeSlider />);
      expect(screen.getByLabelText('Go to Coming Soon slide')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to Service Status slide')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to Latest Blogs slide')).toBeInTheDocument();
    });

    it('renders prev and next navigation buttons', () => {
      render(<HomeSlider />);
      expect(screen.getByLabelText('Previous slide')).toBeInTheDocument();
      expect(screen.getByLabelText('Next slide')).toBeInTheDocument();
    });
  });

  describe('Slide Content', () => {
    it('renders Coming Soon slide items', () => {
      render(<HomeSlider />);
      expect(screen.getByText('Azure Monitor')).toBeInTheDocument();
      expect(screen.getByText('Terraform at Scale')).toBeInTheDocument();
    });

    it('renders latest blog post titles', () => {
      render(<HomeSlider />);
      expect(screen.getByText('Getting Started with Next.js')).toBeInTheDocument();
      expect(screen.getByText('Cloud Solutions for Developers')).toBeInTheDocument();
    });

    it('renders service status cloud providers', () => {
      render(<HomeSlider />);
      expect(screen.getByText('AWS')).toBeInTheDocument();
      expect(screen.getByText('Azure')).toBeInTheDocument();
      expect(screen.getByText('GitHub')).toBeInTheDocument();
    });

    it('renders links to blog and status pages', () => {
      const { container } = render(<HomeSlider />);
      expect(container.querySelector('a[href="/status"]')).toBeInTheDocument();
      expect(container.querySelector('a[href="/blog"]')).toBeInTheDocument();
    });
  });

  describe('Navigation — Next/Prev buttons', () => {
    it('advances to the next slide on next button click', () => {
      const { container } = render(<HomeSlider />);
      const slider = container.querySelector('[style]') as HTMLElement;

      expect(slider).toHaveStyle({ transform: 'translateX(-0%)' });

      fireEvent.click(screen.getByLabelText('Next slide'));
      expect(slider).toHaveStyle({ transform: 'translateX(-100%)' });
    });

    it('wraps from first slide to last on prev button click', () => {
      const { container } = render(<HomeSlider />);
      const slider = container.querySelector('[style]') as HTMLElement;

      fireEvent.click(screen.getByLabelText('Previous slide'));
      expect(slider).toHaveStyle({ transform: 'translateX(-200%)' });
    });

    it('wraps from last slide back to first on next button click', () => {
      const { container } = render(<HomeSlider />);
      const slider = container.querySelector('[style]') as HTMLElement;

      // Advance to slide 3 (index 2)
      fireEvent.click(screen.getByLabelText('Next slide'));
      fireEvent.click(screen.getByLabelText('Next slide'));
      expect(slider).toHaveStyle({ transform: 'translateX(-200%)' });

      // Wraps back to slide 1
      fireEvent.click(screen.getByLabelText('Next slide'));
      expect(slider).toHaveStyle({ transform: 'translateX(-0%)' });
    });
  });

  describe('Navigation — Dot indicators', () => {
    it('jumps to the correct slide when a dot is clicked', () => {
      const { container } = render(<HomeSlider />);
      const slider = container.querySelector('[style]') as HTMLElement;

      fireEvent.click(screen.getByLabelText('Go to Service Status slide'));
      expect(slider).toHaveStyle({ transform: 'translateX(-100%)' });

      fireEvent.click(screen.getByLabelText('Go to Latest Blogs slide'));
      expect(slider).toHaveStyle({ transform: 'translateX(-200%)' });

      fireEvent.click(screen.getByLabelText('Go to Coming Soon slide'));
      expect(slider).toHaveStyle({ transform: 'translateX(-0%)' });
    });

    it('applies active styles to the current dot', () => {
      render(<HomeSlider />);
      const activeDot = screen.getByLabelText('Go to Coming Soon slide');
      expect(activeDot).toHaveClass('w-8');
    });

    it('applies inactive styles to non-current dots', () => {
      render(<HomeSlider />);
      const inactiveDot = screen.getByLabelText('Go to Service Status slide');
      expect(inactiveDot).toHaveClass('w-2');
    });
  });

  describe('Auto-advance', () => {
    it('advances to the next slide after 5 seconds', () => {
      const { container } = render(<HomeSlider />);
      const slider = container.querySelector('[style]') as HTMLElement;

      expect(slider).toHaveStyle({ transform: 'translateX(-0%)' });

      act(() => { jest.advanceTimersByTime(5000); });
      expect(slider).toHaveStyle({ transform: 'translateX(-100%)' });
    });

    it('pauses auto-advance on mouse enter', () => {
      const { container } = render(<HomeSlider />);
      const slider = container.querySelector('[style]') as HTMLElement;
      const slideContainer = container.querySelector('.relative.overflow-hidden.rounded-3xl') as HTMLElement;

      fireEvent.mouseEnter(slideContainer);
      act(() => { jest.advanceTimersByTime(5000); });
      expect(slider).toHaveStyle({ transform: 'translateX(-0%)' });
    });

    it('resumes auto-advance on mouse leave', () => {
      const { container } = render(<HomeSlider />);
      const slider = container.querySelector('[style]') as HTMLElement;
      const slideContainer = container.querySelector('.relative.overflow-hidden.rounded-3xl') as HTMLElement;

      fireEvent.mouseEnter(slideContainer);
      act(() => { jest.advanceTimersByTime(5000); });
      expect(slider).toHaveStyle({ transform: 'translateX(-0%)' });

      fireEvent.mouseLeave(slideContainer);
      act(() => { jest.advanceTimersByTime(5000); });
      expect(slider).toHaveStyle({ transform: 'translateX(-100%)' });
    });
  });
});
