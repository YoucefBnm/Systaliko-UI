# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.0] - 2026-04-03

### Added

- 🧩 **New block: `full-screen-navigation-menu`** — Transforms the Shadcn `NavigationMenu` into a full-screen overlay menu with portal rendering, no border/radius, and seamless trigger-to-content transitions
- 🧩 **New block: `timeline`** — Animated timeline block for showcasing work history or step-by-step processes (requires Motion)
- 🧩 **New ecommerce block: `image-zoom`** — Image zoom zoom the image with grabing and controls
- ✨ **New component: `checkbox-field`** — Accessible, styled checkbox field component built on Radix primitives
- ✨ **New component: `spotlight-list`** — List component with spotlight hover effect — supports `blur`, `scale`, and `opacity` variants

### Changed

- 🎨 **Redesigned Abla Template** — redesign the template, change the theme, add new components, with updated layout and visual hierarchy
- 🎨 **Redesigned home page** — Overhauled hero, showcase, features, and components sections with updated layout and visual hierarchy

## [0.4.0] - 2026-02-15

### Added

- 🧩 **New template: `enera-template`** — Corporate website template (Next.js, Tailwind, Motion, Lenis) with OG image support
- ✨ **New block: `globe`** — Globe block component for hero or feature sections
- ✨ **New scroll animation: `circle-cards`** — Circle-based card layout with scroll-driven animation
- ✨ **New card: `hover-preview`** — Hover preview card component for content teasers
- ✨ **New component: `reveal-mask`** — Reveal mask component for clip/reveal animations

## [0.3.1] - 2025-12-17

### Added

- 🧩 **New template documentation: `cognify`** — Cognify AI Experience Template documentation with features, dependencies, and sections overview
- ✨ **New ecommerce component documentation:**
  - `expandable-grid` — Expandable grid component for previewing clicked items with responsive breakpoints and customizable animations
  - `quantity` — Quantity configuration component for ecommerce products with increase/decrease controls

## [0.3.0] - 2025-12-17

### Added

- 🧩 **New template: `product-template`** — Complete ecommerce product page template featuring:
  - Product gallery with carousel and thumbnails
  - Dynamic color and size selection
  - Context-based state management
  - Responsive layout optimized for product showcase
- ✨ **New ecommerce components:**
  - `price` — Flexible pricing component with compare-at pricing, savings display, and multi-currency support
  - `infinite-scroll` — Infinite scroll component for product listings and content feeds
  - `product-carousel` — Interactive product image carousel with thumbnail navigation
- ✨ **New block component:**
  - `distributed-cards` — Distributed card layout component with dynamic positioning
- ✨ **New utility components:**
  - `rating-stars` — Star rating display component with customizable styling

### Changed

- 🎨 Complete redesign of the Veo template for improved aesthetics and user experience
- 🏠 Updated the home page: added a featured components showcase and contact information
- ⚡️ Optimized performance in `text-stagger-inview` (reduced layout thrashing and improved intersection handling)
- 🔄 Modified animation range in `scroll-reverse-scale-animation` component
- 🏷️ Renamed `use-animation-variants` to `animation-variants` for better semantic clarity
- 🏠 Redesign demo: `header` — updated header demo layout and accessibility improvements
- 🏡 Redesign home page — updates to hero and layout for improved visual hierarchy

### Added (Non-Ecommerce)

- ✨ New text animation components:
  - `text-scroll-read` — readable-on-scroll text reveal
  - `wavy-text` — animated wavy typography
  - `wavy-block` — a content block with wavy reveal/clip animations
- 🧩 New template: `motus-studio` — opinionated starter template showcasing the component registry and layouts

## [0.2.0] - 2025-11-20

### Added

- 🧩 New template: `carecover` — CareCover health startup template (Next.js + Tailwind) with animated pricing, responsive header navigation, and scroll autoplay components
- ✨ New component: `pricing` — Pricing component with monthly/yearly toggle and sliding animation
- ✨ New component: `toggle-layout-view` — Toggle layout view component for pricing and layouts
- ✨ New component: `responsive-header-nav` — Responsive Header Navigation component (mobile-first)
- ✨ New component: `scroll-autoplay` — Scroll autoplay animation component used in hero/demo sections

### Fixed

- ⚡️ Improved performance of text animation components
  - Optimized `text-stagger-inview` component
  - Enhanced `text-stagger-hover` component efficiency
- 🐛 Fix: slideshow images — improved preload/mount order to avoid flicker when slides become active
- 🐛 Fix: pricing demo responsiveness — adjusted breakpoints and toggle layout to prevent overflow and layout breaking

## [0.1.0] - 2025-09-23

### Added

- Initial release of Systaliko UI
- Component registry system
- Documentation site with Fumadocs
- Three template projects: Veo, Alba Studio, and Motus Studio

[Unreleased]: https://github.com/YoucefBnm/Systaliko-UI/compare/v0.5.0...HEAD
[0.5.0]: https://github.com/YoucefBnm/Systaliko-UI/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/YoucefBnm/Systaliko-UI/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/YoucefBnm/Systaliko-UI/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/YoucefBnm/Systaliko-UI/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/YoucefBnm/Systaliko-UI/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/YoucefBnm/Systaliko-UI/releases/tag/v0.1.0
