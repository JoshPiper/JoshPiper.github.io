---
layout: "default"
styles:
  - /css/test.css
  - /css/home.css
  - /css/cards.css
scripts:
  - /js/typed.js
---

{% for work in site.work %}
{{ work.output }}
{% endfor %}