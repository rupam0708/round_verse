# RoundVerse Landing Page

Static landing page for [roundverse.rupamkarmakar.me](https://roundverse.rupamkarmakar.me), hosted on GitHub Pages.

## Quick Deploy (one-time setup)

```bash
# 1. Clone your fresh public repo
git clone https://github.com/rupam0708/round_verse.git
cd round_verse

# 2. Copy this landing page into it
cp -r /path/to/round_verse_landing/* .

# 3. Commit & push to main
git add .
git commit -m "Add RoundVerse landing page"
git push -u origin main

# 4. Enable GitHub Pages
#    Settings → Pages → Source: "Deploy from a branch"
#    Branch: main / (root) → Save
#    Your site will be live at https://rupam0708.github.io/round_verse/
```

## Custom Domain (roundverse.rupamkarmakar.me)

After the GitHub Pages deployment succeeds:

1. **In your DNS provider** (where `rupamkarmakar.me` is managed), add a CNAME record:
   ```
   Type: CNAME
   Name: roundverse
   Value: rupam0708.github.io
   TTL: Auto / 3600
   ```

2. **In GitHub repo settings** → Pages → Custom domain:
   - Enter: `roundverse.rupamkarmakar.me`
   - Check "Enforce HTTPS" (wait for certificate to provision)

3. **Verify** — visit https://roundverse.rupamkarmakar.me

## Files

```
round_verse/
├── index.html      # Main landing page
├── styles.css      # All styling (responsive, dark theme)
├── script.js       # Minimal JS (smooth scroll, header state, animations)
└── README.md       # This file
```

## Tech Stack

- Zero build step — pure HTML/CSS/JS
- Inter font from Google Fonts
- CSS custom properties for theming
- Responsive: mobile-first, breakpoints at 640px / 1024px
- Accessible: semantic HTML, focus states, reduced-motion support

## Updating Content

Edit `index.html` and push to `main` — GitHub Pages auto-deploys within ~1 minute.

## Coursera Verification

The backend already serves verification tokens at:
- `https://api.roundverse.rupamkarmakar.me/.well-known/coursera-verification`
- `https://api.roundverse.rupamkarmakar.me/coursera-verification`
- `https://api.roundverse.rupamkarmakar.me/coursera-verification.txt`
- `https://api.roundverse.rupamkarmakar.me/coursera-verification.html`

Set `COURSERA_VERIFICATION_TOKEN` in Render dashboard → your backend service → Environment.