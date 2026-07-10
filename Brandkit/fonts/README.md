# fonts/ — how to add fonts (step by step)

You have **two easy ways**. Pick whichever is simpler for you.

---

## ✅ Way 1 — DOWNLOAD the font (recommended, most accurate)

1. Go to **https://fonts.google.com**
2. In the search box, type the font name (e.g. `Inter`) and click it.
3. Top-right of the font page → click **"Get font"**.
4. On the next page → click **"Download all"**. A **.zip** file downloads.
5. Open the .zip. Inside you'll see `.ttf` files (sometimes in a `static/` folder),
   e.g. `Inter-Regular.ttf`, `Inter-Bold.ttf`, `Inter-SemiBold.ttf`.
6. **Copy ALL those `.ttf` files into THIS folder** (`Brandkit/fonts/`).
7. Tell Claude: *"font added: Inter"* — Claude wires it into the app.

> Tip: grab several weights if offered (Regular 400, Medium 500, SemiBold 600, Bold 700).
> The design uses bold headings, so Bold/SemiBold matter.

---

## ✅ Way 2 — EMBED CODE (copy-paste, no files)

1. On the Google Fonts page, pick the styles you want, then click **"Get embed code"**.
2. Copy the lines that look like this:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
   ```
3. Paste them into a new file here called **`embed-code.txt`** (or just paste them to Claude in chat).
4. Done — Claude adds them to the app.

---

## Which fonts do I even pick?
- If you **know** the font from Figma: In Figma, click any text → the right panel shows the
  **font family name** (top). Tell Claude that name, or download it here.
- If you **don't know**: tell Claude *"pick fonts that match the design"* and Claude will
  recommend exact Google Fonts to download.

## Put files here 👇
(this folder — `.woff2`, `.ttf`, or `.otf`. Or an `embed-code.txt`.)
