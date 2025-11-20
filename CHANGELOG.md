# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- 🎨 Complete redesign of the Veo template for improved aesthetics and user experience
- 🏠 Updated the home page: added a featured components showcase and contact information
- ⚡️ Optimized performance in `text-stagger-inview` (reduced layout thrashing and improved intersection handling)
- 🔄 Modified animation range in `scroll-reverse-scale-animation` component
- 🏷️ Renamed `use-animation-variants` to `animation-variants` for better semantic clarity

### Added

- ✨ New components:
  - `text-scroll-read` — readable-on-scroll text reveal
  - `wavy-text` — animated wavy typography
  - `wavy-block` — a content block with wavy reveal/clip animations
- 🧩 New template: `motus-studio` — opinionated starter template showcasing the component registry and layouts

## [0.2.0] - 2025-11-20

### Added

- 🧩 New template: `carecover` — CareCover health startup templagit add systaliko-ui/CHANGELOG.md carecover/CHANGELOG.md
  git commit -m "chore(release): prepare v0.2.0 — add CareCover template and components"
  git tag -a v0.2.0 -m "v0.2.0 — CareCover template + new components"
  git push origin HEAD
  git push origin v0.2.0t.js + Tailwind) with animated pricing, responsive header navigation, and scroll autoplay components
- ✨ New component: `pricing` — Pricing component with monthly/yearly toggle and sliding animation
- ✨ New component: `toggle-layout-view` — Toggle layout view component for pricing and layouts
- ✨ New component: `responsive-header-nav` — Responsive Header Navigation component (mobile-first)
- ✨ New component: `scroll-autoplay` — Scroll autoplay animation component used in hero/demo sections

### Fixed

- ⚡️ Improved performance of text animation components
  - Optimized `text-stagger-inview` component
  - Enhanced `text-stagger-hover` component efficiency

## [0.1.0] - 2025-09-23

### Added

- Initial release of Systaliko UI
- Component registry system
- Documentation site with Fumadocs
- Three template projects: Veo, Alba Studio, and Motus Studio

[Unreleased]: https://github.com/YoucefBnm/Systaliko-UI/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/YoucefBnm/Systaliko-UI/releases/tag/v0.1.0
