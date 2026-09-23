# Dreamland Rentals and Events — website

A one-page website for Dreamland Rentals and Events: an animated hero, a rentals catalogue, party packages, a gallery and a booking request form that sends the finished request on WhatsApp or by email.

It's plain HTML, CSS and JavaScript, so there is nothing to install or build.

## Put it online with GitHub Pages

1. Create a new repository on GitHub (for example `dreamland-website`).
2. Upload everything in this folder to the repository (drag the files into **Add file → Upload files**), keeping the folder structure.
3. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose the `main` branch and the `/ (root)` folder, then **Save**.
4. After a minute your site is live at `https://<your-username>.github.io/dreamland-website/`.

To use your own domain, add it under **Settings → Pages → Custom domain**.

## Files

```
index.html            the page
css/styles.css        all styling (colours are the tokens at the top)
js/main.js            settings, rentals, packages, booking form, hero animation
assets/logo.jpg       the Dreamland logo
assets/images/        placeholder illustrations (fallbacks for the photos)
.nojekyll             tells GitHub Pages to serve files as-is
```

## Things to change before launch

Open `js/main.js`. At the top:

- `SETTINGS.whatsapp` — your WhatsApp number, digits only with country code (e.g. `14735551234`).
- `SETTINGS.email` — the address booking emails go to.
- `SETTINGS.instagram` — your Instagram link.
- `SETTINGS.intro` — `"door"` (the door opens and balloons float out) or `"fly"` (everything flies into frame). You can preview either by adding `?intro=door` or `?intro=fly` to the page address.

Below that, `ITEMS` and `PACKAGES` hold every rental and package: names, descriptions, prices and pictures. Add, remove or edit entries there and the page updates automatically.

## Photos

The site shows free stock photos from [Unsplash](https://unsplash.com) (free for commercial use, no credit required). They load straight from Unsplash, so they appear once the site is online or opened in a browser with internet access.

Every photo also has a labelled placeholder illustration in `assets/images/`. If a photo can't load, the placeholder shows instead, so the layout never breaks.

To use your own pictures (recommended before launch, so customers see your real equipment):

1. Add your photo to `assets/images/` (JPG or WebP, around 1600 px wide for tiles and gallery, 900 px for rentals and packages).
2. For rentals and packages, open `js/main.js`, delete that item's line from `PHOTOS`, and set the item's `img:` to your file (e.g. `assets/images/my-castle.jpg`).
3. For the category tiles and gallery, open `index.html` and change the `src` of the image to your file.

Keeping the same shape helps the layout: rentals and packages are 4:3, category tiles 16:10, gallery 3:2.

## How booking requests work

Visitors add rentals to their booking, fill in the form and press **Review request**. The site builds a message with their items, date, venue and contact details, and they send it to you on WhatsApp or by email. Nothing is stored on a server, so there's no hosting cost or database to maintain.
