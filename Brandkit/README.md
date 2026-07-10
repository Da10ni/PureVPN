# PureVPN — Brandkit

This folder holds all the **raw brand assets** for the app. You (the human) drop files
into the right subfolder; Claude reads from here when building the UI.

## Folders — what goes where

| Folder | Put this here | Format |
|--------|---------------|--------|
| `fonts/`   | Brand font files OR Google Fonts embed code | `.woff2`, `.ttf`, `.otf`, or `embed-code.txt` |
| `colors/`  | Official brand colors (hex codes) if you have them | edit `brand-colors.md` |
| `logos/`   | PureVPN logo(s) | `.svg` preferred, `.png` ok |
| `icons/`   | Any icons from the design | `.svg` preferred |
| `images/`  | Illustrations, photos, backgrounds, flags, etc. | `.svg` / `.png` / `.jpg` |
| `screens/` | The exported Figma screens (reference for pixel-perfect) | `.png` — already done ✅ |

## Simple rule
- **Don't rename** the screen files in `screens/` — Claude refers to them by name.
- If you're unsure where something goes, just drop it in `images/` and tell Claude.
- You never have to touch the actual React project — this Brandkit is your only job.

See each folder's own `README.md` for step-by-step help.
