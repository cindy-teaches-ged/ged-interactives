# GED Interactives — Student Landing Page

Welcome! This page is the main landing page for adult GED students to find and open class interactives hosted in this repository. Each interactive is a single HTML file in this repo and can be opened directly from the links below.

---

## Quick link (example)
- [Hello GED Test](https://cindy-teaches-ged.github.io/ged-interactives/hello-ged.html)

---

## Subcategories

### Math & Numeracy
- Addition Practice
  - https://cindy-teaches-ged.github.io/ged-interactives/numeracy-addition.html
- Number Lines
  - https://cindy-teaches-ged.github.io/ged-interactives/number-lines.html

### Reading & Writing
- Reading Comprehension
  - https://cindy-teaches-ged.github.io/ged-interactives/reading-comprehension.html
- Sentence Building
  - https://cindy-teaches-ged.github.io/ged-interactives/sentence-building.html

---

## How students should use this page (simple steps)
1. Open the repository's Pages site or the link your instructor shares.
2. Click the category you want (Math & Numeracy or Reading & Writing).
3. Click an interactive link — it will open in a new browser tab.
4. Use the interactive in the browser; when finished, close the tab and return here to try another.

---

## How to add a new interactive (teacher instructions)

Choose either the GitHub web interface (easiest) or the git command line.

A) Using the GitHub web UI
1. In this repository on GitHub, click "Add file" → "Create new file".
2. Name the file something descriptive and end with `.html`, for example `numeracy-multiplication.html`.
3. Paste your interactive HTML/JS into that file.
4. Commit the new file (add a short commit message) to the default branch.
5. Edit `readme.md` and add a new bullet under the appropriate subcategory with the full GitHub Pages URL:
   - `https://cindy-teaches-ged.github.io/ged-interactives/your-file-name.html`
6. Commit the README change.

B) Using git (local)
1. Clone the repo locally:
   - `git clone https://github.com/cindy-teaches-ged/ged-interactives.git`
2. Create a branch (optional but recommended):
   - `git checkout -b add-numeracy-multiplication`
3. Add your interactive file in the repository root (or a folder you choose), e.g. `numeracy-multiplication.html`.
4. Update `readme.md` with the link under the right subcategory.
5. Commit and push:
   - `git add numeracy-multiplication.html readme.md`
   - `git commit -m "Add numeracy multiplication interactive and README link"`
   - `git push origin add-numeracy-multiplication`
6. Open a Pull Request on GitHub and merge to the default branch.

---

## Make this the GitHub Pages landing page

If you want students to land on a hosted site (so they don't see the GitHub repo UI), create a simple `index.html` file in the repository root and deploy Pages from the repository's default branch (or `docs/` folder). Example `index.html` below — create a new file named `index.html` and paste this in:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>GED Interactives</title>
  <style>body{font-family:system-ui,Segoe UI,Arial;margin:2rem;line-height:1.6}</style>
</head>
<body>
  <h1>GED Interactives</h1>
  <p>Choose a category below to open an interactive.</p>
  <h2>Math &amp; Numeracy</h2>
  <ul>
    <li><a href="/ged-interactives/numeracy-addition.html" target="_blank">Addition Practice</a></li>
    <li><a href="/ged-interactives/number-lines.html" target="_blank">Number Lines</a></li>
  </ul>
  <h2>Reading &amp; Writing</h2>
  <ul>
    <li><a href="/ged-interactives/reading-comprehension.html" target="_blank">Reading Comprehension</a></li>
    <li><a href="/ged-interactives/sentence-building.html" target="_blank">Sentence Building</a></li>
  </ul>
  <p>If a link is broken, contact the instructor.</p>
</body>
</html>
```

After you add `index.html`:
1. Open the repository Settings → Pages.
2. Set the source to the default branch (root) and save.
3. Wait a minute — your site will be available at:
   `https://cindy-teaches-ged.github.io/ged-interactives/`

---

## Notes & tips
- Use descriptive file names (no spaces) such as `reading-comprehension.html`.
- If you store interactives in subfolders, include the folder in the link, e.g. `/ged-interactives/reading/reading-comprehension.html`.
- If you want me to create the `index.html` file for you or add a set of real links to existing files in the repo, tell me which interactives to list (or paste their filenames) and I will add them.

---

Good luck! If you'd like, I can now:
- Add an `index.html` page and enable Pages (I will need permission to commit), or
- Update the README with actual filenames if you paste a list of files you want linked.
