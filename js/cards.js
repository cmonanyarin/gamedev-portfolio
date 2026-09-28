/* Renders the lab / project cards, stats and owner name from portfolio.js.
   Content lives in portfolio.js; this file only holds the card template. */
(function () {
  const data = window.PORTFOLIO;
  if (!data) return;

  // Tailwind classes per theme (Tailwind's Play CDN styles them at runtime).
  const THEMES = {
    indigo:  { head: "from-indigo-500/25 via-sky-500/15 to-cyan-500/25",       tag: "text-indigo-400",  btn: "from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400" },
    cyan:    { head: "from-cyan-500/25 via-fuchsia-500/15 to-violet-600/25",   tag: "text-cyan-400",    btn: "from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400" },
    amber:   { head: "from-amber-500/25 via-rose-500/15 to-fuchsia-600/25",    tag: "text-amber-400",   btn: "from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400" },
    emerald: { head: "from-emerald-500/25 via-red-500/15 to-rose-700/25",      tag: "text-emerald-400", btn: "from-emerald-500 to-rose-600 hover:from-emerald-400 hover:to-rose-500" },
    violet:  { head: "from-violet-500/25 via-indigo-500/15 to-cyan-500/25",    tag: "text-violet-400",  btn: "from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400" },
    orange:  { head: "from-amber-500/25 via-orange-500/15 to-rose-500/25",     tag: "text-amber-400",   btn: "from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400" },
    fuchsia: { head: "from-fuchsia-500/25 via-violet-500/15 to-cyan-500/25",   tag: "text-fuchsia-400", btn: "from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400", border: "border-fuchsia-400/20" },
    slate:   { head: "from-slate-500/20 via-slate-600/10 to-slate-700/20",     tag: "text-slate-400",   btn: "from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600" },
  };

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function badge(live) {
    return live
      ? `<span class="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-400/40 backdrop-blur">
           <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>LIVE · เล่นได้</span>`
      : `<span class="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold text-amber-300 ring-1 ring-amber-400/30 backdrop-blur">
           <span class="h-1.5 w-1.5 rounded-full bg-amber-400"></span>SOON · เร็วๆ นี้</span>`;
  }

  function card(item, isProject) {
    const t = THEMES[item.theme] || THEMES.indigo;
    const live = item.status !== "soon";
    const tilt = item.tilt || "rotate-6";
    const emoji = `<span class="text-7xl drop-shadow-2xl transition duration-500 group-hover:scale-125 group-hover:${tilt}">${esc(item.emoji || "🎮")}</span>`;
    const art = item.image
      ? `<img src="${esc(item.image)}" alt="${esc(item.title)}" class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
         <div class="absolute inset-0 hidden items-center justify-center">${emoji}</div>`
      : emoji;
    const label = item.button || (live ? "▶ เปิดชมเลย" : "🚧 เร็วๆ นี้");
    return `
      <article class="card reveal group relative flex flex-col overflow-hidden rounded-3xl border ${t.border || "border-white/10"} bg-white/[.04] p-px backdrop-blur-xl${live ? "" : " opacity-70"}">
        <div class="card-glow pointer-events-none absolute inset-0 rounded-3xl"></div>
        <div class="relative flex flex-1 flex-col rounded-[calc(1.5rem-1px)]">
          <div class="relative flex ${isProject ? "h-52" : "h-44"} items-center justify-center overflow-hidden rounded-t-3xl bg-gradient-to-br ${t.head}">
            <div class="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,#fff,transparent_60%)]"></div>
            ${art}
            ${badge(live)}
          </div>
          <div class="flex flex-1 flex-col p-6">
            <p class="font-mono text-xs font-bold tracking-widest ${t.tag}">${esc(item.tag)}</p>
            <h3 class="mt-2 text-xl font-extrabold">${esc(item.title)}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-400">${esc(item.desc)}</p>
            <a href="${esc(item.href)}"
               class="${live ? "pulse " : ""}mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${t.btn} px-4 py-3 text-sm font-extrabold text-white transition active:scale-95">
              ${esc(label)}
            </a>
          </div>
        </div>
      </article>`;
  }

  const labGrid = document.getElementById("labGrid");
  const projGrid = document.getElementById("projGrid");
  if (labGrid) labGrid.innerHTML = data.labs.map((l) => card(l, false)).join("");
  if (projGrid) projGrid.innerHTML = data.projects.map((p) => card(p, true)).join("");

  // Stats (read by the counter animation) and owner fields.
  const all = [...data.labs, ...data.projects];
  const stats = {
    labs: data.labs.length,
    projects: data.projects.length,
    playable: all.filter((i) => i.status !== "soon").length,
  };
  document.querySelectorAll("[data-stat]").forEach((el) => { el.dataset.to = stats[el.dataset.stat]; });
  document.querySelectorAll("[data-field]").forEach((el) => {
    const v = data.owner[el.dataset.field];
    if (v) el.textContent = el.dataset.prefix ? el.dataset.prefix + v : v;
  });
})();
