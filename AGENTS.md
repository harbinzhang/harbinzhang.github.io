# Repository Guidelines

## Project Structure & Module Organization
- This repo is a Jekyll site; `_config.yml` controls global metadata, navigation, and plugin toggles.
- Layout scaffolding lives in `_layouts/`, while reusable Liquid snippets sit in `_includes/`.
- Markdown content is split across `_posts/` (dated updates) and `pages/` (static sections). YAML data for navigation and timelines lives in `_data/`.
- Static assets reside in `css/`, `js/`, `img/`, and `colorscheme.scss`; custom behaviours and helpers are under `plugin/`, `lib/`, `search/`, and `projectors/`.
- Add new assets or generators near similar files to keep incremental deploys predictable.

## Build, Test, and Development Commands
- `bundle install` — install the exact gem set from `Gemfile.lock`. Run after pulling dependency changes.
- `bundle exec jekyll serve --livereload` — boot a local preview at `http://localhost:4000/` with automatic reload on file changes.
- `bundle exec jekyll build` — produce the static site in `_site/`; use this to verify the GitHub Pages build will succeed before opening a PR.
- Optional: `npm install` inside `js/` when updating bundled scripts; rebuild assets with the scripts documented there.

## Coding Style & Naming Conventions
- Prefer two-space indentation for Liquid, HTML, and SCSS to match existing templates.
- Front matter must include `---` fences and at minimum a `layout:` and `title:`; new posts should follow the `YYYY-MM-DD-name.md` pattern.
- Keep filenames lowercase with hyphens; use concise, descriptive IDs for Liquid include parameters.
- Run `bundle exec jekyll build` after significant content edits to catch unclosed tags or invalid front matter early.

## Testing Guidelines
- No dedicated unit test suite exists; treat a clean `bundle exec jekyll build` as the gating check.
- Manually review generated pages in `_site/` or via `jekyll serve` for layout regressions, broken links, and missing assets.
- When adding JavaScript, verify console output in modern browsers and include fallbacks when possible.

## Commit & Pull Request Guidelines
- Keep commits focused and describe intent in imperative, sentence-case subjects (e.g., `Update hero CTA colors`), matching the existing history.
- Reference related issues in the commit body when available, and note structural migrations in detail to aid future diffs.
- PRs should summarize the change, list affected URLs or components, include screenshots for design updates, and mention any manual follow-up steps.
- Confirm `_config.yml`, CNAME, and deployment-specific settings remain intact; call out any required infrastructure changes explicitly.
