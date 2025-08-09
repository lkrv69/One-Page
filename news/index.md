---
title: "Новости"
permalink: /news/
---

<section class="section">
  <h2>Новости</h2>
  <ul class="news-list">
  {% for post in site.posts %}
    <li class="news-item">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="news-meta">{{ post.date | date: "%d.%m.%Y" }}{% if post.tags %} · {{ post.tags | join: ", " }}{% endif %}</div>
      {% if post.description %}<p>{{ post.description }}</p>{% endif %}
    </li>
  {% endfor %}
  </ul>
</section>