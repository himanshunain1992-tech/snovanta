# Snovanta Systems — website

Static website for **Snovanta Systems Limited**, hosted on GitHub Pages at **https://snovanta.com**.

## Files

| File / folder | What it is |
|---|---|
| `index.html` | Home page |
| `services.html` | ServiceNow services + AI & automation |
| `case-studies.html` | Three anonymised case studies |
| `about.html` | Company story, mission, values |
| `contact.html` | Contact form and details |
| `privacy.html`, `terms.html` | Legal pages (templates — review before launch) |
| `404.html` | "Page not found" page |
| `assets/css/style.css` | All styling. Brand colours are at the top under `:root` |
| `assets/js/main.js` | Mobile menu, footer year, contact form |
| `assets/images/logo.svg` | Logo (also used as the browser-tab icon) |
| `CNAME` | Tells GitHub Pages to use snovanta.com |
| `robots.txt`, `sitemap.xml` | For search engines |
| `.nojekyll` | Tells GitHub to serve the files as-is |

## Before going live — to-do list

1. **Company details:** search all `.html` files for `[COMPANY NUMBER]` and `[REGISTERED OFFICE ADDRESS]` and replace them.
2. **Email:** the site uses `hello@snovanta.com`. If your Zoho address is different, find and replace it in all `.html` files.
3. **Contact form:** go to https://web3forms.com, enter your Zoho email to get a free access key, then in `contact.html` replace
   `YOUR_WEB3FORMS_ACCESS_KEY` with it. (Until then, the form opens the visitor's email app instead.)
4. **About page:** personalise the "Our story" text and replace `[X]` years in the founder section.
5. **LinkedIn:** replace `YOUR-PROFILE` in all `.html` files with your LinkedIn URL.
6. **Case studies:** if you can share measurable results, add them in `case-studies.html` where the `TODO` comments are.
7. **Legal pages:** review `privacy.html` and `terms.html`.

## Publish on GitHub Pages

1. Create a new repository on GitHub (e.g. `snovanta-website`) and upload all of these files to the root.
2. In the repo, go to **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
3. Under **Custom domain**, enter `snovanta.com` and save.

## Cloudflare DNS

In Cloudflare → snovanta.com → **DNS**, add:

| Type | Name | Content |
|---|---|---|
| A | `@` | 185.199.108.153 |
| A | `@` | 185.199.109.153 |
| A | `@` | 185.199.110.153 |
| A | `@` | 185.199.111.153 |
| CNAME | `www` | `YOUR-GITHUB-USERNAME.github.io` |

- Set these records to **DNS only** (grey cloud) at first, so GitHub can issue the HTTPS certificate.
- Once GitHub Pages shows the certificate is active, tick **Enforce HTTPS**. You can then switch the records to proxied (orange cloud) if you like, with Cloudflare **SSL/TLS mode = Full**.
- **Don't touch the MX / TXT records Zoho Mail created** — they keep your email working.

## Editing tips

- Header and footer are repeated in each page. If you change the menu, change it in every `.html` file.
- To change brand colours, edit the variables at the top of `style.css`.
