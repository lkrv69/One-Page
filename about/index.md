---
title: "About me"
layout: default
description: "About Ivan Lakieriev"
---

<style>
  :root{
    --bg: #0b0e14;
    --fg: #e6e6e6;
    --muted:#9aa3b2;
    --primary:#6ea8fe;
    --accent:#9b8cff;
    --card:#121722;
    --line:#1e2633;
    --ok:#58d68d;
    --warn:#f7b955;
  }
  @media (prefers-color-scheme: light){
    :root{
      --bg:#ffffff; --fg:#111827; --muted:#6b7280;
      --card:#f7f8fb; --line:#e5e7eb; --primary:#2563eb; --accent:#7c3aed;
    }
  }
  .about{
    color:var(--fg); background:var(--bg);
    padding:2rem 1rem; border-radius:1rem;
  }
  .about .hero{
    display:grid; gap:0.5rem;
  }
  .about .title{
    font-size:clamp(28px,4vw,42px); font-weight:800; letter-spacing:-.02em;
  }
  .about .subtitle{
    font-size:clamp(16px,2.2vw,18px); color:var(--muted); max-width:900px;
  }
  .chips{ display:flex; flex-wrap:wrap; gap:.5rem; margin-top:.75rem }
  .chip{
    padding:.45rem .7rem; background:linear-gradient(180deg, var(--card), transparent);
    border:1px solid var(--line); border-radius:999px; font-size:.9rem;
  }

  /* Metrics */
  .metrics{ display:grid; gap:1rem; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); margin:1.5rem 0 2rem }
  .metric{
    padding:1rem; border:1px solid var(--line); border-radius:1rem; background:var(--card);
  }
  .metric .num{ font-size:1.8rem; font-weight:800 }
  .metric .tag{ color:var(--muted); font-size:.9rem }

  /* Timeline */
  .timeline{
    position:relative; margin:2rem 0; padding-left:1.25rem;
  }
  .timeline::before{
    content:""; position:absolute; left:.5rem; top:0; bottom:0; width:2px; background:linear-gradient(var(--line), var(--accent));
  }
  .t-item{
    position:relative; margin:0 0 1.5rem 0; padding-left:1rem;
  }
  .t-item::before{
    content:""; position:absolute; left:-.1rem; top:.4rem; width:.75rem; height:.75rem;
    background:var(--accent); border:2px solid var(--bg); border-radius:999px; box-shadow:0 0 0 3px color-mix(in oklab, var(--accent), transparent 80%);
  }
  .t-year{ font-weight:700; color:var(--primary); font-size:.95rem; letter-spacing:.02em }
  .t-head{ font-weight:700; font-size:1.05rem; margin-top:.15rem }
  .t-body{ color:var(--muted); margin-top:.25rem; line-height:1.55 }

  /* Skills */
  .section-title{ font-size:1.2rem; font-weight:800; letter-spacing:.02em; margin:2rem 0 .75rem }
  .skills{
    display:grid; gap:.6rem; grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  }
  .badge{
    border:1px solid var(--line); background:var(--card); padding:.6rem .8rem; border-radius:.9rem;
    display:flex; align-items:center; gap:.5rem;
  }
  .dot{ width:.5rem; height:.5rem; border-radius:999px; background:var(--primary) }

  /* Principles */
  .principles{ display:grid; gap:.8rem; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); }
  .card{
    border:1px solid var(--line); background:var(--card); padding:1rem; border-radius:1rem;
  }
  .card h4{ margin:0 0 .25rem 0; font-size:1rem }
  .card p{ margin:0; color:var(--muted); line-height:1.55 }

  /* Fine */
  .small{ color:var(--muted); font-size:.9rem; margin-top:.5rem }
</style>

<div class="about">

  <div class="hero">
    <div class="title">Ivan Lakieriev — DevOps Engineer</div>
    <div class="subtitle">
      I build reliable delivery platforms and cloud infrastructure that make releases boring in the best way.
      Performance, observability and zero-downtime mindset are my defaults.
    </div>

    <div class="chips">
      <span class="chip">CI/CD</span>
      <span class="chip">Kubernetes</span>
      <span class="chip">Terraform</span>
      <span class="chip">AWS · GCP · Azure</span>
      <span class="chip">Prometheus · Grafana</span>
      <span class="chip">GitHub Actions · GitLab CI</span>
    </div>
  </div>

  <div class="metrics">
    <div class="metric">
      <div class="num">35% faster</div>
      <div class="tag">builds after pipeline redesign</div>
    </div>
    <div class="metric">
      <div class="num">0 downtime</div>
      <div class="tag">during blue-green and canary releases</div>
    </div>
    <div class="metric">
      <div class="num">24/7</div>
      <div class="tag">SLO-driven monitoring and alerts</div>
    </div>
  </div>

  <div class="section-title">My journey</div>
  <div class="timeline">
    <div class="t-item">
      <div class="t-year">Sievierodonetsk → Kharkiv</div>
      <div class="t-head">Early years</div>
      <div class="t-body">Construction sites, supermarkets, sawmill shifts, climbing wall instructor in Kharkiv. I learned to work hard and keep going.</div>
    </div>

    <div class="t-item">
      <div class="t-year">Czech Republic</div>
      <div class="t-head">Factory shifts to fund the dream</div>
      <div class="t-body">When money was short, I left to work in factories. Survival first, but the plan stayed alive.</div>
    </div>

    <div class="t-item">
      <div class="t-year">Side projects</div>
      <div class="t-head">15 years of tinkering</div>
      <div class="t-body">Lineage 2 servers, chats and gaming forums, small online services. Nights of admin work became my foundation.</div>
    </div>

    <div class="t-item">
      <div class="t-year">IT break-in</div>
      <div class="t-head">Dream company — systems engineer</div>
      <div class="t-body">Years of persistence paid off. I moved from hobby admin to professional infrastructure work.</div>
    </div>

    <div class="t-item">
      <div class="t-year">Since 2022</div>
      <div class="t-head">War at home, work continues</div>
      <div class="t-body">I stayed in Ukraine and kept building. Reliable systems under unreliable conditions — this is my job.</div>
    </div>

    <div class="t-item">
      <div class="t-year">Today</div>
      <div class="t-head">DevOps for high-traffic products</div>
      <div class="t-body">Cloud infra, CI/CD, observability, resilience and cost awareness. Delivering quickly and safely.</div>
    </div>
  </div>

  <div class="section-title">Skills</div>
  <div class="skills">
    <div class="badge"><span class="dot"></span> Docker · Kubernetes · Helm</div>
    <div class="badge"><span class="dot"></span> Terraform · Ansible</div>
    <div class="badge"><span class="dot"></span> AWS · GCP · Azure</div>
    <div class="badge"><span class="dot"></span> Prometheus · Grafana</div>
    <div class="badge"><span class="dot"></span> GitHub Actions · GitLab CI</div>
    <div class="badge"><span class="dot"></span> Blue-green · Canary · SLO/SLI</div>
  </div>

  <div class="section-title">Principles</div>
  <div class="principles">
    <div class="card">
      <h4>Make deployments boring</h4>
      <p>Automate the risky parts, surface the right signals, ship in small steps.</p>
    </div>
    <div class="card">
      <h4>Own reliability</h4>
      <p>Design for failure, measure what matters, practice recovery.</p>
    </div>
    <div class="card">
      <h4>Improve cost posture</h4>
      <p>Right-size infra, cache smart, reduce waste without hurting velocity.</p>
    </div>
  </div>

  <p class="small">I believe the road is made by walking. I’m open to new challenges and collaborations.</p>
</div>
