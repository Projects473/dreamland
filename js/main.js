/* ==========================================================
   Dreamland Rentals & Events — site script
   Edit SETTINGS, ITEMS and PACKAGES to update the site.
   ========================================================== */

/* ---------- SETTINGS ---------- */
const SETTINGS = {
  whatsapp: "14734199501",                                   // +1 (473) 419-9501, digits only
  email: "dreamlandrentals.events@gmail.com",
  instagram: "https://instagram.com/dreamlandrentals_events",
  facebook: "#",                                             // paste your Facebook page link
  tiktok: "#",                                               // paste your TikTok link
  currency: "EC$"
};

/* ---------- RENTALS (prices are placeholders) ---------- */
const CATEGORIES = [
  ["all", "All"], ["bounce", "Bounce houses"], ["tents", "Tents"],
  ["seating", "Tables & chairs"], ["decor", "Décor"], ["extras", "Treats"]
];
const ITEMS = [
  { id: "castle",   cat: "bounce",  name: "Bounce castle",             desc: "Classic bounce castle for kids up to about 10 years old.", price: 350, unit: "day",   photo: "1648090319886-26630f530e3b", img: "assets/images/ig-1.jpg" },
  { id: "combo",    cat: "bounce",  name: "Bounce house with slide",   desc: "Bounce area with a built-in slide. Needs a flat 5 × 6 m space.", price: 450, unit: "day", photo: "1633846786217-3901bf588697", img: "assets/images/svc-rentals.jpg" },
  { id: "tent20",   cat: "tents",   name: "20 × 20 party tent",        desc: "Covers about 40 seated guests. Pinning or weights included.", price: 600, unit: "day", photo: "1519226612673-73c0234437ef", img: "assets/images/item-tent.svg" },
  { id: "canopy",   cat: "tents",   name: "10 × 10 canopy",            desc: "Shade for a food table, gift table or DJ booth.", price: 250, unit: "day", photo: "1721677337543-37b07e7e28b5", img: "assets/images/ig-5.jpg" },
  { id: "round",    cat: "seating", name: "Table with linens",         desc: "Seats 8, dressed in white linens.", price: 120, unit: "table", photo: "1510076857177-7470076d4098", img: "assets/images/ig-3.jpg" },
  { id: "chiavari", cat: "seating", name: "Gold chiavari chair",       desc: "The classic wedding and shower chair, with cushion.", price: 8, unit: "chair", photo: "1670529776180-60e4132ab90c", img: "assets/images/item-chiavari.svg" },
  { id: "folding",  cat: "seating", name: "White folding chair",       desc: "Sturdy and simple for any size of crowd.", price: 4, unit: "chair", photo: "1696204868903-91d809b4df09", img: "assets/images/item-folding.svg" },
  { id: "kids",     cat: "seating", name: "Kids table and chairs",     desc: "Low table with six pastel kids' chairs.", price: 60, unit: "set", photo: "1741969494307-55394e3e4071", img: "assets/images/item-kids.svg" },
  { id: "arch",     cat: "decor",   name: "Balloon arch",              desc: "Organic garland in your colours, built on site.", price: 400, unit: "arch", photo: "1560128411-79892dd93bf8", img: "assets/images/svc-events.jpg" },
  { id: "backdrop", cat: "decor",   name: "Dessert table and backdrop", desc: "Styled table and backdrop for cake, treats and photos.", price: 350, unit: "day", photo: "1777332547120-e7ec407b5ed6", img: "assets/images/ig-2.jpg" },
  { id: "cotton",   cat: "extras",  name: "Cotton candy machine",      desc: "Sugar and cones for about 50 servings.", price: 150, unit: "day", photo: "1579197614684-088d04b052c6", img: "assets/images/item-cotton.svg" },
  { id: "popcorn",  cat: "extras",  name: "Popcorn machine",           desc: "Kernels and bags for about 50 servings.", price: 150, unit: "day", photo: "1675419941589-b78380f724f8", img: "assets/images/ig-4.jpg" }
];

/* ---------- PACKAGES ---------- */
const PACKAGES = [
  { id: "P1", label: "P1", price: 800,  from: false, tag: "Perfect for small gatherings.", photo: "1774290687229-a725965554c6", img: "assets/images/pk-1.jpg", pc: "#F9D3E3", pt: "#9A3F6B" },
  { id: "P2", label: "P2", price: 1250, from: false, tag: "Great for birthdays & parties.", photo: "1648090319886-26630f530e3b", img: "assets/images/pk-2.jpg", pc: "#CDE8F6", pt: "#2F6F93" },
  { id: "P3", label: "P3", price: 1850, from: false, tag: "More fun, more memories.",       photo: "1756621716318-9eec89d42715", img: "assets/images/pk-3.jpg", pc: "#E2D5F5", pt: "#5B3C8C" },
  { id: "P4", label: "P4", price: 2450, from: false, tag: "Bigger celebrations.",           photo: "1665607437981-973dcd6a22bb", img: "assets/images/pk-4.jpg", pc: "#E2D5F5", pt: "#5B3C8C" },
  { id: "DX", label: "Deluxe", price: 3000, from: true, tag: "The ultimate experience.",    photo: "1712314947761-a8d718bd8c32", img: "assets/images/pk-5.jpg", pc: "#A675D3", pt: "#FFFFFF" }
];

/* ---------- PHOTOS ----------
   "photo" is a free Unsplash photo id; "img" is the local picture shown if the
   photo can't load. To use your own photo, put it in assets/images/, set "img"
   to it and delete the "photo" field. */
const photoURL = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
const img = (o, alt) => o.photo
  ? `<img src="${photoURL(o.photo)}" data-fallback="${o.img}" onerror="this.onerror=null;this.src=this.dataset.fallback" alt="${alt}" loading="lazy">`
  : `<img src="${o.img}" alt="${alt}" loading="lazy">`;

/* ---------- helpers ---------- */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const money = (n) => SETTINGS.currency + n.toLocaleString("en-US");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ALL = {};
ITEMS.forEach((i) => (ALL[i.id] = i));
PACKAGES.forEach((p) => (ALL[p.id] = { id: p.id, name: p.label + " package", price: p.price, from: p.from, pk: true }));


let cart = {};
try {
  const saved = JSON.parse(localStorage.getItem("dreamland-cart") || "{}");
  for (const k in saved) if (ALL[k] && saved[k] > 0) cart[k] = saved[k];
} catch (e) {}
const save = () => { try { localStorage.setItem("dreamland-cart", JSON.stringify(cart)); } catch (e) {} };

/* ---------- hero video ----------
   The intro plays once (door opens, clouds glide in, balloons float out),
   then the seamless loop takes over. Its first frame matches the intro's last. */
const intro = $("#heroIntro"), loopV = $("#heroLoop"), media = $(".hero-media");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
function startLoop() {
  const p = loopV.play();
  const reveal = () => { intro.classList.add("done"); media.classList.add("can-replay"); };
  if (p && p.then) p.then(reveal).catch(reveal); else reveal();
}
function playIntro() {
  loopV.pause(); loopV.currentTime = 0;
  intro.classList.remove("done"); media.classList.remove("can-replay");
  intro.currentTime = 0;
  const p = intro.play();
  if (p && p.catch) p.catch(startLoop);   // autoplay blocked: go straight to the loop
}
if (intro && loopV) {
  if (reduceMotion) { intro.removeAttribute("autoplay"); intro.pause(); }
  else {
    intro.addEventListener("ended", startLoop);
    intro.querySelector("source:last-of-type").addEventListener("error", startLoop);  // no playable format
    playIntro();
    $("#replay").addEventListener("click", playIntro);
  }
}

/* ---------- header: mobile menu + active link ---------- */
const nav = $("#mainNav"), menuBtn = $("#menuBtn");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => { if (e.target.closest("a")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); } });
const links = [...$$("#mainNav a")];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const id = en.target.id === "book" ? "contact" : en.target.id === "rentals" ? "services" : en.target.id;
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
["home", "services", "rentals", "packages", "about", "gallery", "book"].forEach((id) => { const el = document.getElementById(id); if (el) spy.observe(el); });

/* ---------- rentals rail ---------- */
let filter = "all";
$("#filters").innerHTML = CATEGORIES.map(([k, l]) => `<button type="button" data-cat="${k}" aria-pressed="${k === "all"}">${esc(l)}</button>`).join("");
$("#filters").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) setFilter(b.dataset.cat); });
function setFilter(cat) {
  filter = cat;
  $$("#filters button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.cat === cat));
  renderRail(); rail.scrollTo({ left: 0 });
}
const catName = (k) => (CATEGORIES.find((c) => c[0] === k) || [])[1];
function control(id) {
  const q = cart[id] || 0;
  return q
    ? `<div class="stepper"><button type="button" data-dec="${id}" aria-label="Remove one">−</button><span>${q}</span><button type="button" data-inc="${id}" aria-label="Add one">+</button></div>`
    : `<button type="button" class="btn btn-purple btn-sm" data-inc="${id}">Add</button>`;
}
const rail = $("#rail");
function renderRail() {
  rail.innerHTML = ITEMS.filter((i) => filter === "all" || i.cat === filter).map((i) => `
    <article class="pcard">
      ${img(i, esc(i.name))}
      <div class="body">
        <span class="cat">${esc(catName(i.cat))}</span>
        <h3>${esc(i.name)}</h3>
        <p>${esc(i.desc)}</p>
        <div class="foot"><span class="price">${money(i.price)} / ${i.unit}</span><span data-ctrl="${i.id}">${control(i.id)}</span></div>
      </div>
    </article>`).join("");
  updateRailNav();
}
$$(".rail-nav .round-btn").forEach((b) => b.addEventListener("click", () => rail.scrollBy({ left: Number(b.dataset.dir) * rail.clientWidth * 0.8, behavior: "smooth" })));
function updateRailNav() {
  const [prev, next] = $$(".rail-nav .round-btn");
  prev.disabled = rail.scrollLeft < 4;
  next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
}
rail.addEventListener("scroll", updateRailNav, { passive: true });
window.addEventListener("resize", updateRailNav);

/* ---------- packages ---------- */
function renderPackages() {
  $("#pkList").innerHTML = PACKAGES.map((p) => `
    <article class="pk" style="--pc:${p.pc};--pt:${p.pt}">
      ${img(p, "Package " + esc(p.label) + " setup")}
      <span class="pill">${esc(p.label)}</span>
      <p class="amt">${money(p.price)}${p.from ? "+" : ""}</p>
      <p class="tag">${esc(p.tag)}</p>
      <div class="actions">${cart[p.id]
        ? `<button type="button" class="add-pk on" data-dec="${p.id}">Added ✓</button>`
        : `<button type="button" class="add-pk" data-inc="${p.id}">Add to booking</button>`}</div>
    </article>`).join("");
}

/* ---------- booking cart ---------- */
let toastTimer;
function toast(name) {
  $("#toastItem").textContent = name;
  const t = $("#toast"); t.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => (t.hidden = true), 3200);
}
function change(id, delta) {
  const before = cart[id] || 0, next = Math.max(0, before + delta);
  cart[id] = ALL[id].pk ? (next ? 1 : 0) : Math.min(next, 999);
  if (!cart[id]) delete cart[id];
  save(); refresh();
  if (!before && cart[id]) toast(ALL[id].name);
}
document.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]"), rm = e.target.closest("[data-rm]"), note = e.target.closest("[data-note]");
  if (inc) change(inc.dataset.inc, 1);
  else if (dec) change(dec.dataset.dec, -1);
  else if (rm) { delete cart[rm.dataset.rm]; save(); refresh(); }
  if (note) { const n = $("#f-notes"); if (n && !n.value.includes(note.dataset.note)) n.value = (n.value ? n.value + "\n" : "") + "Interested in: " + note.dataset.note; }
});
function totals() { let n = 0, t = 0; for (const k in cart) { n += cart[k]; t += ALL[k].price * cart[k]; } return { n, t }; }
function renderSummary() {
  const keys = Object.keys(cart);
  $("#lines").innerHTML = keys.length
    ? `<ul class="lines">${keys.map((k) => {
        const it = ALL[k], q = cart[k];
        return `<li class="line"><span class="nm">${esc(it.name)}</span>
          <span class="sub">${it.pk ? (it.from ? "From " : "") + money(it.price) : q + " × " + money(it.price) + " · " + money(it.price * q)}</span>
          <span class="ctrl">${it.pk ? "" : `<div class="stepper"><button type="button" data-dec="${k}" aria-label="Remove one ${esc(it.name)}">−</button><span>${q}</span><button type="button" data-inc="${k}" aria-label="Add one ${esc(it.name)}">+</button></div>`}
          <button type="button" class="rm" data-rm="${k}">Remove</button></span></li>`;
      }).join("")}</ul>`
    : `<p class="empty">Nothing added yet. <a href="#rentals">Browse rentals</a> or <a href="#packages">pick a package</a>.</p>`;
  const { n, t } = totals();
  $("#total").textContent = money(t) + (keys.some((k) => ALL[k].from) ? "+" : "");
  const badge = $("#badge"); badge.hidden = !n; badge.textContent = n;
}
function refresh() {
  const panel = $("#formPanel");
  if (panel.querySelector(".sent")) { panel.innerHTML = ""; panel.appendChild(form); }
  $$("[data-ctrl]").forEach((el) => (el.innerHTML = control(el.dataset.ctrl)));
  renderPackages(); renderSummary();
}

/* ---------- booking form ---------- */
const form = $("#bookForm");
const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
$("#f-date").min = today.toISOString().slice(0, 10);
function setErr(id, msg) { $("#e-" + id).textContent = msg; $("#f-" + id).closest(".field").classList.toggle("invalid", !!msg); }
function buildMessage(d) {
  const nice = new Date(d.date + "T12:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const out = ["Hi Dreamland! I'd like to request a booking.", "", "Booking:",
    ...Object.keys(cart).map((k) => `• ${ALL[k].name}${ALL[k].pk ? "" : " × " + cart[k]}`), "",
    `Event: ${d.type}`, `Date: ${nice}`];
  if (d.venue) out.push(`Venue: ${d.venue}`);
  if (d.guests) out.push(`Guests: about ${d.guests}`);
  out.push("", `Name: ${d.name}`, `Phone: ${d.phone}`);
  if (d.email) out.push(`Email: ${d.email}`);
  if (d.notes) out.push("", `Notes: ${d.notes}`);
  out.push("", `Estimated total: ${$("#total").textContent} (1 day)`);
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
  if (!Object.keys(cart).length && !d.notes.trim()) { status.textContent = "Add a rental or package, or tell us what you need in the notes."; ok = false; }
  else status.textContent = "";
  if (!ok) { const f = form.querySelector(".invalid input"); if (f) f.focus(); return; }

  const msg = buildMessage(d);
  const panel = $("#formPanel");
  panel.innerHTML = `<div class="sent">
    <h3 tabindex="-1">Your request is ready!</h3>
    <p class="fine">Send it on WhatsApp or by email and we'll reply to confirm your date and final price.</p>
    <pre id="msgPreview"></pre>
    <div class="row">
      <a class="btn btn-purple btn-lg" target="_blank" rel="noopener" href="https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent(msg)}">Send on WhatsApp</a>
      <a class="btn btn-ghost btn-lg" href="mailto:${SETTINGS.email}?subject=${encodeURIComponent("Booking request – " + d.type)}&body=${encodeURIComponent(msg)}">Send by email</a>
      <button type="button" class="rm" id="copyMsg">Copy message</button>
      <button type="button" class="rm" id="editReq">Edit request</button>
    </div></div>`;
  $("#msgPreview").textContent = msg;
  $("#copyMsg").onclick = async () => { try { await navigator.clipboard.writeText(msg); $("#copyMsg").textContent = "Copied"; } catch (err) { $("#copyMsg").textContent = "Select the text above to copy"; } };
  $("#editReq").onclick = () => { panel.innerHTML = ""; panel.appendChild(form); form.querySelector("input").focus(); };
  panel.querySelector("h3").focus();
});

/* ---------- links ---------- */
["#igTop", "#igFollow", "#igFoot"].forEach((s) => ($(s).href = SETTINGS.instagram));
$("#fbTop").href = SETTINGS.facebook; $("#ttTop").href = SETTINGS.tiktok;
$("#waFoot").href = `https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent("Hi Dreamland! I have a question.")}`;
$("#mailFoot").href = `mailto:${SETTINGS.email}`; $("#mailText").textContent = SETTINGS.email;
$("#yr").textContent = new Date().getFullYear();

renderRail(); renderPackages(); renderSummary();
