# Dreamland Rentals & Events — website

One-page website for Dreamland Rentals & Events: hero, services, rentals catalogue, popular packages, about, Instagram gallery, client testimonials and a booking request form that sends the finished request on WhatsApp or by email.

Plain HTML, CSS and JavaScript. Nothing to install or build, and the fonts are included, so it works anywhere.

## Put it online with GitHub Pages

1. Create a new repository on GitHub (for example `dreamland-website`).
2. Upload everything in this folder (**Add file → Upload files**), keeping the folder structure.
3. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/dreamland-website/`.

A custom domain can be added under **Settings → Pages → Custom domain**.

## Files

```
index.html          the page (all text lives here)
css/styles.css      styling — colours are the tokens at the top
js/main.js          settings, rentals, packages and the booking form
assets/video/       hero intro and loop videos, with still posters
assets/images/      backup pictures shown if an online photo can't load
assets/fonts/       Great Vibes, Josefin Sans and Poppins
assets/logo.jpg     the Dreamland logo (header, footer and tab icon)
.nojekyll           tells GitHub Pages to serve files as-is
```

## Things to change

In `js/main.js`, at the top:

- `SETTINGS` — WhatsApp (already +1 473 419 9501), email, Instagram, and the Facebook and TikTok links (currently empty `#`).
- `ITEMS` — the rentals catalogue: name, description, price and picture for each item.
- `PACKAGES` — P1 to Deluxe: price, tagline and picture.

In `index.html`: the About text, service lists and testimonials. Prices are in Eastern Caribbean dollars (EC$). The three testimonials came from the design mock-up; replace them with real client reviews before launch.

## Hero video

The top of the page plays in two parts, full HD (1920 × 1080):

1. **Intro (7 seconds, plays once):** the pink house from the logo sits on the clouds, its door swings open and warm light spills out, clouds with smiling faces glide in from both sides, and balloons float up out of the doorway as a rainbow and sparkles appear.
2. **Loop (20 seconds, repeats):** the clouds drift and blink, balloons keep rising, sparkles twinkle and the light from the door glows. The loop starts on exactly the intro's last frame, so the hand-over is invisible.

A replay button in the corner plays the door opening again. Visitors who turn off motion in their settings see a still picture instead.

Files in `assets/video/`: `intro.webm` + `intro.mp4`, `loop.webm` + `loop.mp4` (WebM for most browsers, MP4 for older iPhones), and `intro-poster.jpg` / `loop-poster.jpg`, the still frames shown while the videos load.

## Photos

The services, packages, rentals, about and gallery pictures are free Unsplash photos (free for commercial use, no credit required), loaded from Unsplash by their id. Rentals and packages list theirs as `photo:` in `js/main.js`; the others are the `src` of each image in `index.html`.

Each photo has a backup picture in `assets/images/`. If a photo can't load, the backup shows, so the layout never breaks.

Stock photos are a stand-in. Swap in photos of your own setups before launch: add the file to `assets/images/`, then either set the item's `img:` to it and delete its `photo:` field (in `js/main.js`), or change the image's `src` (in `index.html`). The About section especially should show a real photo of you.

## Single-file version

`dreamland-website.html` (delivered alongside this folder) is the whole site in one file: fonts, logo, video and backup pictures are built in. Open it in any browser, attach it, or upload it anywhere. The Unsplash photos still load from the internet.

## How booking requests work

Visitors add rentals or a package, fill in the form and press **Review request**. The site builds a message with their items, date, venue and contact details, and they send it to you on WhatsApp or by email. Nothing is stored on a server.
