---
title: "About me"
layout: default
description: "About Ivan Lakieriev"
---

# About Me

I’m a DevOps Engineer with 4+ years building cloud infrastructure, CI/CD pipelines, and automation for high-traffic products. I like clean platforms that make deployments boring - in a good way.

**Stack**: Docker, Kubernetes, Helm, Terraform, Ansible, AWS/GCP/Azure, Prometheus, Grafana, GitHub Actions, GitLab CI.

<style>
  /* Light-first palette */
  :root{
    --bg:#ffffff;
    --fg:#111827;
    --muted:#4b5563;
    --line:#e5e7eb;
    --accent:#2563eb;
    --accent-2:#7c3aed;
    --card:#f9fafb;
  }
  @media (prefers-color-scheme: dark){
    :root{
      --bg:#0b0e14; --fg:#e6e6e6; --muted:#9aa3b2;
      --line:#1f2733; --accent:#6ea8fe; --accent-2:#9b8cff; --card:#111827;
    }
  }

  .about-wrap{ background:var(--bg); color:var(--fg); }
  .lead{ color:var(--muted); margin:.25rem 0 1.25rem; max-width:68ch; }

  /* Metrics */
  .metrics{ display:grid; gap:.75rem; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); margin:1rem 0 1.5rem }
  .metric{ border:1px solid var(--line); background:var(--card); border-radius:.75rem; padding:.8rem 1rem; }
  .metric .n{ font-weight:800; font-size:1.1rem }
  .metric .t{ color:var(--muted); font-size:.9rem }

  /* Timeline */
  .timeline{ position:relative; margin:1.5rem 0 2.25rem; }
  .timeline::before{
    content:""; position:absolute; left:10px; top:0; bottom:0; width:2px;
    background:var(--line);
  }
  .t-item{
    position:relative; margin:0 0 1.25rem 0; padding-left:1.75rem;
  }
  .t-item::before{
    content:""; position:absolute; left:6px; top:.55rem; width:10px; height:10px; border-radius:999px;
    background:var(--accent-2); box-shadow:0 0 0 4px color-mix(in srgb, var(--accent-2), transparent 80%);
  }
  .t-year{ font-weight:700; color:var(--accent); font-size:.95rem; letter-spacing:.02em }
  .t-head{ font-weight:700; margin:.2rem 0 .35rem 0; }
  .t-body{ color:var(--muted); line-height:1.6; }
  .t-body ul{ margin:.35rem 0 0 0; padding-left:1rem; }
  .t-body li{ margin:.15rem 0; }

  /* Section titles */
  .section-title{ font-weight:800; letter-spacing:.02em; margin:1.25rem 0 .5rem; }

  /* Skills grid */
  .skills{ display:grid; gap:.5rem; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); }
  .badge{
    border:1px solid var(--line); background:var(--card); padding:.6rem .8rem; border-radius:.6rem;
  }
</style>

<div class="about-wrap">

<div class="metrics">
  <div class="metric"><div class="n">35% faster</div><div class="t">pipeline rebuilds after CI redesign</div></div>
  <div class="metric"><div class="n">0 downtime</div><div class="t">blue-green & canary releases</div></div>
  <div class="metric"><div class="n">24/7</div><div class="t">SLO/SLI monitoring & alerts</div></div>
</div>

## My Journey

<div class="timeline">

  <div class="t-item">
    <div class="t-year">Sievierodonetsk → Kharkiv</div>
    <div class="t-head">Early years - learning to work and persist</div>
    <div class="t-body">
      I grew up in Sievierodonetsk and moved to Kharkiv, taking any job that kept the plan alive.
      <ul>
        <li>Construction sites and helper shifts - discipline, safety, teamwork.</li>
        <li>Supermarket floor - pace, process, responsibility for the end result.</li>
        <li>Climbing wall instructor in Gorky Park - coaching mindset and calm under pressure.</li>
        <li>Sawmill shifts - routine, maintenance, and respect for systems that must not fail.</li>
      </ul>
    </div>
  </div>

  <div class="t-item">
    <div class="t-year">Czech Republic</div>
    <div class="t-head">Factory work to fund the dream</div>
    <div class="t-body">
      When money was tight, I left to work in factories. Survival first, but I kept studying and building on the side.
      <ul>
        <li>Process thinking - repeatable steps, measurable output.</li>
        <li>Shift discipline - deliver even when you’re tired.</li>
      </ul>
    </div>
  </div>

  <div class="t-item">
    <div class="t-year">Side projects</div>
    <div class="t-head">15 years of tinkering and admin work</div>
    <div class="t-body">
      Nights and weekends went into running online services.
      <ul>
        <li>Lineage 2 servers - Linux admin, backups, anti-cheat, uptime obsession.</li>
        <li>Chats & gaming forums - moderation, migrations, SSL, DNS, mail.</li>
        <li>First infra scripts - bash, cron, small monitoring and on-call habits.</li>
      </ul>
    </div>
  </div>

  <div class="t-item">
    <div class="t-year">IT break-in</div>
    <div class="t-head">From hobby admin to systems engineer</div>
    <div class="t-body">
      Persistence paid off - I joined my dream company and moved to production-grade infrastructure.
      <ul>
        <li>CI/CD foundations - pipelines, artifacts, rollbacks, review apps.</li>
        <li>IaC mindset - reproducible envs, versioned changes, peer reviews.</li>
      </ul>
    </div>
  </div>

  <div class="t-item">
    <div class="t-year">Since 2022</div>
    <div class="t-head">War at home - reliability under uncertainty</div>
    <div class="t-body">
      I stayed in Ukraine and kept building. Reliable systems in unreliable conditions - that’s the job.
      <ul>
        <li>Risk reduction - blue-green, canary, feature flags.</li>
        <li>Observability - SLO/SLI, actionable alerts, fast MTTR.</li>
      </ul>
    </div>
  </div>

  <div class="t-item">
    <div class="t-year">Today</div>
    <div class="t-head">DevOps for high-traffic products</div>
    <div class="t-body">
      Cloud infra, CI/CD and monitoring focused on speed, safety, and cost awareness.
      <ul>
        <li>Cost posture - right-sizing, caching, autoscaling policies.</li>
        <li>Developer experience - paved roads, templates, docs.</li>
      </ul>
    </div>
  </div>

</div>

## Skills

<div class="skills">
  <div class="badge">Docker · Kubernetes · Helm</div>
  <div class="badge">Terraform · Ansible</div>
  <div class="badge">AWS · GCP · Azure</div>
  <div class="badge">Prometheus · Grafana</div>
  <div class="badge">GitHub Actions · GitLab CI</div>
  <div class="badge">Blue-green · Canary · SLO/SLI</div>
</div>

</div>
