---
title: "Контакты"
permalink: /contacts/
---

<section class="section">
  <h2>Связаться</h2>
  <p>Выбирайте удобный способ — отвечаю обычно в течение дня.</p>
  <ul class="contact-list">
    <li>✉️ Email: <a href="mailto:mail@example.com">mail@example.com</a></li>
    <li>💬 Telegram: <a href="https://t.me/username" target="_blank" rel="noopener">@username</a></li>
    <li>👔 LinkedIn: <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener">/in/username</a></li>
    <li>📞 WhatsApp: <a href="https://wa.me/380000000000" target="_blank" rel="noopener">+38 (000) 000-00-00</a></li>
  </ul>
</section>

<section class="section">
  <h3>Форма сообщения (опционально)</h3>
  <p>На статическом сайте можно подключить сервис Formspree/EmailJS. Ниже — пример (замените <code>YOUR_ENDPOINT</code>):</p>
  <form method="POST" action="https://formspree.io/f/YOUR_ENDPOINT">
    <div style="display:grid; gap:10px; grid-template-columns:1fr 1fr">
      <label>Имя<br><input name="name" required style="width:100%; padding:10px; border-radius:10px; border:1px solid var(--border); background:transparent; color:inherit"></label>
      <label>Email<br><input type="email" name="email" required style="width:100%; padding:10px; border-radius:10px; border:1px solid var(--border); background:transparent; color:inherit"></label>
    </div>
    <label>Сообщение<br><textarea name="message" required rows="5" style="width:100%; padding:10px; border-radius:12px; border:1px solid var(--border); background:transparent; color:inherit"></textarea></label>
    <div class="cta">
      <button class="btn" type="submit">Отправить</button>
      <a class="btn secondary" href="mailto:mail@example.com">Написать на email</a>
    </div>
  </form>
</section>