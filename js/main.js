/* ==========================================================
   Dreamland Rentals and Events — site script
   Edit the SETTINGS and CATALOGUE sections to update the site.
   ========================================================== */

/* ---------- SETTINGS ---------- */
const SETTINGS = {
  whatsapp: "14734199501",                 // +1 (473) 419-9501 — country code + number, digits only
  email: "hello@dreamlandrentals.com",
  instagram: "https://instagram.com/",     // your Instagram page
  currency: "EC$",
  intro: "door"                            // "door" (door opens) or "fly" (everything flies in). Try ?intro=fly in the URL.
};

/* ---------- CATALOGUE (prices are placeholders) ---------- */
const CATEGORIES = [
  ["all", "All"], ["bounce", "Bounce houses"], ["tents", "Tents"],
  ["seating", "Tables & chairs"], ["decor", "Décor"], ["extras", "Treats"]
];
const ITEMS = [
  { id: "castle",   cat: "bounce",  name: "Princess bounce castle", desc: "Turreted pink castle for kids up to about 10 years old.", price: 350, unit: "day",   img: "assets/images/item-castle.svg" },
  { id: "combo",    cat: "bounce",  name: "Jungle combo bouncer",   desc: "Bounce area with a built-in slide. Needs a flat 5 × 6 m space.", price: 450, unit: "day", img: "assets/images/item-combo.svg" },
  { id: "tent20",   cat: "tents",   name: "20 × 20 party tent",     desc: "Covers about 40 seated guests. Pinning or weights included.", price: 600, unit: "day", img: "assets/images/item-tent.svg" },
  { id: "canopy",   cat: "tents",   name: "10 × 10 pop-up canopy",  desc: "Shade for a food table, gift table or DJ booth.", price: 150, unit: "day",   img: "assets/images/item-canopy.svg" },
  { id: "round",    cat: "seating", name: "Round table",            desc: "Seats 8. Linens available on request.", price: 25, unit: "table",       img: "assets/images/item-round.svg" },
  { id: "chiavari", cat: "seating", name: "Gold chiavari chair",    desc: "The classic wedding and shower chair, with cushion.", price: 8, unit: "chair", img: "assets/images/item-chiavari.svg" },
  { id: "folding",  cat: "seating", name: "White folding chair",    desc: "Sturdy and simple for any size of crowd.", price: 4, unit: "chair",     img: "assets/images/item-folding.svg" },
  { id: "kids",     cat: "seating", name: "Kids table and chairs",  desc: "One low table with six small chairs.", price: 60, unit: "set",          img: "assets/images/item-kids.svg" },
  { id: "arch",     cat: "decor",   name: "Balloon arch",           desc: "Organic garland in your colours, built on site.", price: 400, unit: "arch", img: "assets/images/item-arch.svg" },
  { id: "backdrop", cat: "decor",   name: "Backdrop and dessert table", desc: "Arched backdrop, table and styling for photos and cake.", price: 350, unit: "day", img: "assets/images/item-backdrop.svg" },
  { id: "cotton",   cat: "extras",  name: "Cotton candy machine",   desc: "Sugar and cones for about 50 servings.", price: 150, unit: "day",      img: "assets/images/item-cotton.svg" },
  { id: "popcorn",  cat: "extras",  name: "Popcorn machine",        desc: "Kernels and bags for about 50 servings.", price: 150, unit: "day",     img: "assets/images/item-popcorn.svg" }
];
const PACKAGES = [
  { id: "pk-little", name: "Little Dreamers", for: "Kids' birthdays", price: 750, img: "assets/images/pk-little.svg",
    items: ["Princess bounce castle", "2 kids table and chair sets", "Balloon garland in your colours", "Cotton candy machine"] },
  { id: "pk-garden", name: "Garden Party", for: "Showers and christenings", price: 1100, img: "assets/images/pk-garden.svg",
    items: ["Two 10 × 10 canopies", "4 round tables", "32 white folding chairs", "Backdrop and dessert table"] },
  { id: "pk-deluxe", name: "Dreamland Deluxe", for: "Weddings and big celebrations", price: 2400, img: "assets/images/pk-deluxe.svg",
    items: ["20 × 20 party tent", "8 round tables", "64 gold chiavari chairs", "Balloon arch", "Popcorn and cotton candy machines"] }
];

/* ---------- PHOTOS ----------
   Stock photos from Unsplash (free to use, no attribution required).
   Keys match the placeholder files in assets/images/. To use your own photo,
   delete its line here and put your picture at the placeholder's path
   (or point the item's img at your file). If a photo can't load, the
   placeholder illustration is shown instead. */
const PHOTOS = {
  "item-castle": "1648090319886-26630f530e3b",
  "item-combo": "1633846786217-3901bf588697",
  "item-tent": "1519226612673-73c0234437ef",
  "item-canopy": "1721677337543-37b07e7e28b5",
  "item-round": "1510076857177-7470076d4098",
  "item-chiavari": "1670529776180-60e4132ab90c",
  "item-folding": "1696204868903-91d809b4df09",
  "item-kids": "1741969494307-55394e3e4071",
  "item-arch": "1560128411-79892dd93bf8",
  "item-backdrop": "1777332547120-e7ec407b5ed6",
  "item-cotton": "1579197614684-088d04b052c6",
  "item-popcorn": "1675419941589-b78380f724f8",
  "tile-bounce": "1740033135773-bf7c886ae45a",
  "tile-tents": "1519226612673-73c0234437ef",
  "tile-seating": "1670529776286-f426fb7ba42c",
  "tile-decor": "1602328790041-ee36d98e677c",
  "pk-little": "1756621716318-9eec89d42715",
  "pk-garden": "1613067532743-33c628bc7e1d",
  "pk-deluxe": "1712314947761-a8d718bd8c32",
  "gal-birthday": "1774290687229-a725965554c6",
  "gal-wedding": "1665607437981-973dcd6a22bb",
  "gal-shower": "1555526148-5cd740b44241",
  "gal-kids": "1633846850057-f8e8217b7c48",
  "gal-garden": "1697539093652-c7716caeceb1",
  "gal-balloons": "1769867627452-46a2f513e05a"
};
const photo = (path, w = 900) => {
  const key = path.split("/").pop().replace(/\.\w+$/, "");
  return PHOTOS[key] ? `https://images.unsplash.com/photo-${PHOTOS[key]}?auto=format&fit=crop&w=${w}&q=75` : path;
};
const img = (path, alt, w) => `<img src="${photo(path, w)}" data-fallback="${path}" onerror="this.onerror=null;this.src=this.dataset.fallback" alt="${alt}" loading="lazy">`;

/* ---------- helpers ---------- */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const money = (n) => SETTINGS.currency + n.toLocaleString("en-US");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ALL = {};
ITEMS.forEach((i) => (ALL[i.id] = i));
PACKAGES.forEach((p) => (ALL[p.id] = { id: p.id, name: p.name + " package", price: p.price, pk: true }));

/* ---------- booking state (kept in this browser only) ---------- */
let cart = {};
try {
  const saved = JSON.parse(localStorage.getItem("dreamland-cart") || "{}");
  for (const k in saved) if (ALL[k] && saved[k] > 0) cart[k] = saved[k];
} catch (e) {}
const save = () => { try { localStorage.setItem("dreamland-cart", JSON.stringify(cart)); } catch (e) {} };

/* ==========================================================
   HERO SCENE
   ========================================================== */
const scene = $("#scene"), house = $("#house");
const CLOUD = `<svg viewBox="0 0 200 110"><g fill="var(--cloud-shade)" transform="translate(4 8)"><circle cx="58" cy="66" r="34"/><circle cx="100" cy="46" r="42"/><circle cx="146" cy="66" r="32"/><rect x="38" y="62" width="128" height="38" rx="19"/></g><g fill="var(--cloud)"><circle cx="58" cy="66" r="34"/><circle cx="100" cy="46" r="42"/><circle cx="146" cy="66" r="32"/><rect x="38" y="62" width="128" height="38" rx="19"/></g></svg>`;
const BALLOON = (c) => `<svg viewBox="0 0 60 124"><ellipse cx="30" cy="31" rx="26" ry="30" fill="${c}"/><ellipse cx="20" cy="19" rx="6" ry="10" fill="#fff" opacity=".5" transform="rotate(-20 20 19)"/><path d="M26 60 L34 60 L30 67 Z" fill="${c}"/><path d="M30 67 C22 82 38 94 30 122" stroke="var(--string)" stroke-width="1.4" fill="none"/></svg>`;
const CLOUDS = [[2, 8, 170, -1], [20, 2, 110, -1], [68, 4, 150, 1], [84, 22, 140, 1], [6, 36, 110, -1], [90, 50, 100, 1, "opt-wide"]];
const BALLOONS = [[8, 20, 60, "#F28CB5"], [15, 46, 46, "#F5B287"], [4, 56, 38, "#8CC4E6"], [86, 12, 64, "#F28CB5"], [92, 42, 50, "#8CC4E6"], [78, 50, 40, "#F5B287"], [72, 6, 34, "#F7A8C8", "opt-wide"], [26, 14, 30, "#8CC4E6", "opt-wide"]];

CLOUDS.forEach((c, i) => {
  const d = document.createElement("div");
  d.className = "cloud " + (c[4] || "");
  d.style.cssText = `left:${c[0]}%;top:${c[1]}%;width:${c[2]}px;--i:${i};--from:${c[3] * 70}vw`;
  d.innerHTML = `<div class="drift">${CLOUD}</div>`;
  $("#cloudLayer").appendChild(d);
});
const balloonEls = BALLOONS.map((b, i) => {
  const d = document.createElement("div");
  d.className = "balloon " + (b[4] || "");
  d.style.cssText = `left:${b[0]}%;top:${b[1]}%;width:${b[2]}px;--i:${i};--rise:${480 + i * 40}px`;
  d.innerHTML = `<div class="bob">${BALLOON(b[3])}</div>`;
  $("#balloonLayer").appendChild(d);
  return d;
});
// Aim each balloon so it starts at the front door (used by the "door" intro).
function aimBalloons() {
  const doorX = house.offsetLeft - house.offsetWidth / 2 + house.offsetWidth * (188 / 320);
  const doorY = house.offsetTop + house.offsetHeight * (186 / 240);
  balloonEls.forEach((b) => {
    const cx = b.offsetLeft + b.offsetWidth / 2, cy = b.offsetTop + b.offsetWidth * 0.52;
    b.style.setProperty("--dx", doorX - cx + "px");
    b.style.setProperty("--dy", doorY - cy + "px");
  });
}
const urlIntro = new URLSearchParams(location.search).get("intro");
const introMode = urlIntro === "fly" || urlIntro === "door" ? urlIntro : SETTINGS.intro;
function playIntro() {
  scene.classList.remove("play", "mode-door", "mode-fly");
  void scene.offsetWidth;
  aimBalloons();
  scene.classList.add("mode-" + introMode, "play");
}
playIntro();
$("#replay").addEventListener("click", playIntro);

/* ==========================================================
   RENTALS RAIL
   ========================================================== */
let filter = "all";
$("#filters").innerHTML = CATEGORIES.map(([k, l]) => `<button type="button" data-cat="${k}" aria-pressed="${k === "all"}">${esc(l)}</button>`).join("");
$("#filters").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) setFilter(b.dataset.cat); });
function setFilter(cat) {
  filter = cat;
  $$("#filters button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.cat === cat));
  renderRail();
  $("#rail").scrollTo({ left: 0 });
}
document.addEventListener("click", (e) => {
  const f = e.target.closest("[data-filter]");
  if (f) setFilter(f.dataset.filter);
});
const catName = (k) => (CATEGORIES.find((c) => c[0] === k) || [])[1];
function control(id) {
  const q = cart[id] || 0;
  return q
    ? `<div class="stepper"><button type="button" data-dec="${id}" aria-label="Remove one">−</button><span>${q}</span><button type="button" data-inc="${id}" aria-label="Add one">+</button></div>`
    : `<button type="button" class="btn btn-sm" data-inc="${id}">Add</button>`;
}
function renderRail() {
  $("#rail").innerHTML = ITEMS.filter((i) => filter === "all" || i.cat === filter).map((i) => `
    <article class="pcard">
      ${img(i.img, esc(i.name))}
      <div class="body">
        <span class="cat">${esc(catName(i.cat))}</span>
        <h3>${esc(i.name)}</h3>
        <p>${esc(i.desc)}</p>
        <div class="foot"><span class="price">${money(i.price)} per ${i.unit}</span><span data-ctrl="${i.id}">${control(i.id)}</span></div>
      </div>
    </article>`).join("");
  updateRailNav();
}
const rail = $("#rail");
$$(".rail-nav .round-btn").forEach((b) => b.addEventListener("click", () => {
  rail.scrollBy({ left: Number(b.dataset.dir) * rail.clientWidth * 0.8, behavior: "smooth" });
}));
function updateRailNav() {
  const [prev, next] = $$(".rail-nav .round-btn");
  prev.disabled = rail.scrollLeft < 4;
  next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
}
rail.addEventListener("scroll", updateRailNav, { passive: true });
window.addEventListener("resize", updateRailNav);

/* ==========================================================
   PACKAGES
   ========================================================== */
function renderPackages() {
  $("#compare").innerHTML = PACKAGES.map((p) => `
    <article class="pk">
      ${img(p.img, esc(p.name) + " package")}
      <p class="for">${esc(p.for)}</p>
      <h3>${esc(p.name)}</h3>
      <p class="amt">${money(p.price)} per day</p>
      <div class="actions">${cart[p.id]
        ? `<button type="button" class="btn btn-outline btn-sm" data-dec="${p.id}">Added · Remove</button>`
        : `<button type="button" class="btn btn-sm" data-inc="${p.id}">Add package</button>`}</div>
      <ul>${p.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </article>`).join("");
}

/* ==========================================================
   BOOKING
   ========================================================== */
let toastTimer;
function toast(name) {
  $("#toastItem").textContent = name;
  const t = $("#toast");
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), 3200);
}
function change(id, delta) {
  const before = cart[id] || 0;
  const next = Math.max(0, before + delta);
  cart[id] = ALL[id].pk ? (next ? 1 : 0) : Math.min(next, 999);
  if (!cart[id]) delete cart[id];
  save(); refresh();
  if (!before && cart[id]) toast(ALL[id].name);
}
document.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]"), rm = e.target.closest("[data-rm]");
  if (inc) change(inc.dataset.inc, 1);
  else if (dec) change(dec.dataset.dec, -1);
  else if (rm) { delete cart[rm.dataset.rm]; save(); refresh(); }
});
function totals() { let n = 0, t = 0; for (const k in cart) { n += cart[k]; t += ALL[k].price * cart[k]; } return { n, t }; }
function renderSummary() {
  const keys = Object.keys(cart);
  $("#lines").innerHTML = keys.length
    ? `<ul class="lines">${keys.map((k) => {
        const it = ALL[k], q = cart[k];
        return `<li class="line"><span class="nm">${esc(it.name)}</span>
          <span class="sub">${it.pk ? "Package" : q + " × " + money(it.price)} · ${money(it.price * q)}</span>
          <span class="ctrl">${it.pk ? "" : `<div class="stepper"><button type="button" data-dec="${k}" aria-label="Remove one ${esc(it.name)}">−</button><span>${q}</span><button type="button" data-inc="${k}" aria-label="Add one ${esc(it.name)}">+</button></div>`}
          <button type="button" class="rm" data-rm="${k}">Remove</button></span></li>`;
      }).join("")}</ul>`
    : `<p class="empty">Your booking is empty. <a href="#rentals">Browse rentals</a> or <a href="#packages">choose a package</a>.</p>`;
  const { n, t } = totals();
  $("#total").textContent = money(t);
  const badge = $("#badge");
  badge.hidden = !n; badge.textContent = n;
  $("#bag").setAttribute("aria-label", `Your booking, ${n} item${n === 1 ? "" : "s"}`);
}
function refresh() {
  const panel = $("#formPanel");
  if (panel.querySelector(".sent")) { panel.innerHTML = ""; panel.appendChild(form); }
  $$("[data-ctrl]").forEach((el) => (el.innerHTML = control(el.dataset.ctrl)));
  renderPackages(); renderSummary();
}

/* ---------- form ---------- */
const form = $("#bookForm");
const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
$("#f-date").min = today.toISOString().slice(0, 10);
function setErr(id, msg) { $("#e-" + id).textContent = msg; $("#f-" + id).closest(".field").classList.toggle("invalid", !!msg); }
function buildMessage(d) {
  const nice = new Date(d.date + "T12:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const out = ["Hi Dreamland! I'd like to request a booking.", "", "Rentals:",
    ...Object.keys(cart).map((k) => `• ${ALL[k].name}${ALL[k].pk ? "" : " × " + cart[k]}`), "",
    `Event: ${d.type}`, `Date: ${nice}`];
  if (d.venue) out.push(`Venue: ${d.venue}`);
  if (d.guests) out.push(`Guests: about ${d.guests}`);
  out.push("", `Name: ${d.name}`, `Phone: ${d.phone}`);
  if (d.email) out.push(`Email: ${d.email}`);
  if (d.notes) out.push("", `Notes: ${d.notes}`);
  out.push("", `Estimated total: ${money(totals().t)} (1 day)`);
  return out.join("\n");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form).entries());
  setErr("name", d.name.trim() ? "" : "Enter your name so we know who to reply to.");
  setErr("phone", d.phone.replace(/\D/g, "").length >= 7 ? "" : "Enter a phone number with at least 7 digits.");
  setErr("email", !d.email || /^\S+@\S+\.\S+$/.test(d.email) ? "" : "Check the email address, or leave it blank.");
  setErr("date", !d.date ? "Choose your event date." : d.date < $("#f-date").min ? "Choose today or a future date." : "");
  let ok = !["name", "phone", "email", "date"].some((k) => $("#e-" + k).textContent);
  const status = $("#formStatus");
  if (!Object.keys(cart).length) { status.textContent = "Add at least one rental or package first."; ok = false; }
  else status.textContent = "";
  if (!ok) { const f = form.querySelector(".invalid input"); if (f) f.focus(); return; }

  const msg = buildMessage(d);
  const panel = $("#formPanel");
  panel.innerHTML = `<div class="sent">
    <h3 tabindex="-1">Your request is ready to send.</h3>
    <p class="fine">Send it on WhatsApp or by email and we'll reply to confirm your date and final price.</p>
    <pre id="msgPreview"></pre>
    <div class="row">
      <a class="btn btn-lg" target="_blank" rel="noopener" href="https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent(msg)}">Send on WhatsApp</a>
      <a class="btn btn-outline btn-lg" href="mailto:${SETTINGS.email}?subject=${encodeURIComponent("Booking request – " + d.type)}&body=${encodeURIComponent(msg)}">Send by email</a>
      <button type="button" class="rm" id="copyMsg">Copy message</button>
      <button type="button" class="rm" id="editReq">Edit request</button>
    </div></div>`;
  $("#msgPreview").textContent = msg;
  $("#copyMsg").onclick = async () => {
    try { await navigator.clipboard.writeText(msg); $("#copyMsg").textContent = "Copied"; }
    catch (err) { $("#copyMsg").textContent = "Select the text above to copy"; }
  };
  $("#editReq").onclick = () => { panel.innerHTML = ""; panel.appendChild(form); form.querySelector("input").focus(); };
  panel.querySelector("h3").focus();
});

/* ---------- footer ---------- */
$("#waFoot").href = `https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent("Hi Dreamland! I have a question about a rental.")}`;
$("#mailFoot").href = `mailto:${SETTINGS.email}`;
$("#igFoot").href = SETTINGS.instagram;
$("#yr").textContent = new Date().getFullYear();

renderRail(); renderPackages(); renderSummary();
