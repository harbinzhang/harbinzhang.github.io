# Repository Guidelines

## Project Structure & Module Organization
This site follows the standard Jekyll layout: `_posts/` stores dated blog entries (`YYYY-MM-DD-title.md`), `_pages/`-style content lives under `pages/`, reusable HTML sits in `_includes/`, and layouts are in `_layouts/`. Site-wide data files reside in `_data/`, while custom CSS/JS assets live in `css/`, `colorscheme.scss`, and `js/`. Images and downloads live in `img/`, `ply/`, `projectors/`, and `stl/`. Generated output lands in `_site/`; never edit it directly—rebuild instead. Jekyll plugins specific to this repo are collected under `plugin/` and `lib/`.

## Build, Test, and Development Commands
Install Ruby gems once with `bundle install`. Use `bundle exec jekyll serve --livereload` for local preview at `http://localhost:4000`, and `bundle exec jekyll build` to produce the static site in `_site/`. When editing styles, run `bundle exec jekyll serve --incremental` to keep rebuilds quick. The `Makefile` contains a convenience `git` target for quick add/commit/push cycles.

## Coding Style & Naming Conventions
Markdown and HTML follow 2-space indentation and sentence-case headings. Always include YAML front matter with `layout`, `title`, and `nav` metadata so navigation stays predictable. Use kebab-case filenames (`timego-react.md`) and keep asset names lowercase with dashes. CSS resides in SCSS files; prefer nesting sparingly and place overrides in `colorscheme.scss`. JS modules belong in `js/` with descriptive filenames and ES5-compatible syntax for GitHub Pages compatibility.

## Testing Guidelines
Before committing, run `bundle exec jekyll build` to catch front-matter errors, then `bundle exec jekyll doctor` for configuration warnings. Review the generated `_site/` output in a browser and inspect console/network errors. For blog posts, verify internal links and images resolve relative to the site root; broken assets cause deployment failures.

## Commit & Pull Request Guidelines
Use short, imperative commit subjects (see history: `Hide Barcode Food App blog post`, `Fix security vulnerabilities in dependencies`). Group related changes per commit and let GitHub auto-link issues (`Fix nav focus #123`). Pull requests should describe the user-visible change set, list manual verification steps (`jekyll build`, browser checks), and include screenshots or GIFs for visual tweaks. Flag any config changes to `_config.yml` or CNAME in the PR body so reviewers know to double-check DNS or site metadata.

## Security & Configuration Tips
Do not store secrets in `_config.yml`; prefer environment variables set via GitHub Pages settings. When adding plugins, ensure they are GitHub Pages–compatible and pinned in `Gemfile.lock`. Keep `CNAME` accurate for custom domains, and run `bundle update` on a separate PR so dependency bumps stay reviewable.
