# Assets Structure

Use `assets/` for files that the portfolio loads directly.

Recommended structure:

- `assets/projects/virtuhire/`
  Put screenshots or demo images for the VirtuHire project here.
- `assets/projects/lifeos/`
  Put screenshots or workflow images for the LifeOS project here.
- `assets/projects/behavioral-data-research/`
  Put charts, dashboard images, or research visuals here.
- `assets/icons/`
  Put custom icons, logos, or small UI graphics here.
- `assets/documents/`
  Put files like CV, portfolio PDF, or project one-pagers here.

Suggested image naming:

- `cover.jpg` or `cover.png`
- `screen-1.jpg`
- `screen-2.jpg`
- `flowchart.png`

Example usage in `script.js`:

```js
gallery: [
  { src: "assets/projects/virtuhire/cover.jpg", alt: "VirtuHire overview" },
  { src: "assets/projects/virtuhire/screen-1.jpg", alt: "VirtuHire interview scene" }
]
```

For a small portfolio, this structure is usually the simplest to maintain.
