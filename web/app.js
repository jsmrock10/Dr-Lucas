const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function list(items) {
  return `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
}

async function init() {
  const [overview, personas, budget, timeline, matches] = await Promise.all([
    fetch('/api/overview').then((r) => r.json()),
    fetch('/api/personas').then((r) => r.json()),
    fetch('/api/budget').then((r) => r.json()),
    fetch('/api/timeline').then((r) => r.json()),
    fetch('/api/marketplace/matches').then((r) => r.json())
  ]);

  const health = Math.round((budget.committedSpend / budget.totalBudget) * 100);

  document.getElementById('app').innerHTML = `
    <header class="hero">
      <p class="badge">Dr. Lucas Ventures • Product Build v1.0</p>
      <h1>${overview.vision.name}</h1>
      <h3>${overview.vision.tagline}</h3>
      <p>${overview.vision.thesis}</p>
    </header>

    <div class="grid two">
      <section class="card"><h2>North Star Principles</h2>${list(overview.vision.northStars)}</section>
      <section class="card"><h2>MVP Readiness Snapshot</h2>
        ${list(overview.modules.map((m) => `<strong>${m.id}</strong> ${m.name} — ${m.phase} (${m.status})`))}
      </section>
    </div>

    <section class="card"><h2>Core User Personas</h2><div class="grid three">
      ${personas.map((p) => `<article class="persona"><h4>${p.name}</h4><p>${p.role}</p><blockquote>${p.quote}</blockquote>${list(p.goals)}</article>`).join('')}
    </div></section>

    <div class="grid two">
      <section class="card"><h2>Budget Guardian (FM-02)</h2>
        <p>Budget health: <strong>${health}% committed</strong></p>
        <p>Total Budget: ${currency.format(budget.totalBudget)}</p>
        <p>Committed Spend: ${currency.format(budget.committedSpend)}</p>
        <p>Projected Final Cost: ${currency.format(budget.projectedFinalCost)}</p>
        <p>Hidden Fees Surfaced: ${currency.format(budget.hiddenFeesFound)}</p>
      </section>
      <section class="card"><h2>Smart Planning Timeline (FM-04)</h2>
        ${list(timeline.map((t) => `<strong>${t.title}</strong> — Owner: ${t.owner} — due in ${t.dueInDays} days ${t.critical ? '• critical path' : ''}`))}
      </section>
    </div>

    <section class="card"><h2>Conflict-Free Vendor Marketplace (FM-05)</h2>
      <table><thead><tr><th>Vendor</th><th>Category</th><th>Style Match</th><th>Delivery Score</th><th>Budget Fit</th></tr></thead>
      <tbody>${matches.map((m) => `<tr><td>${m.vendor}</td><td>${m.category}</td><td>${m.styleMatch}</td><td>${m.deliveryScore}</td><td>${m.budgetFit}</td></tr>`).join('')}</tbody></table>
    </section>
  `;
}

init();
