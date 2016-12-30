---
title: home
permalink: /
navigation_weight: 1
---

## Leagues

{% if site.data.leagues.size %}{% for l in site.data.leagues %}
- {{ l | jsonify }}{% endfor %}
{% else %}- No leagues yet
{% endif %}


## Users

{% if site.data.users.size > 0 %}{% for u in site.data.users %}
- {{ u | jsonify }}{% endfor %}
{% else %}- No users yet
{% endif %}
