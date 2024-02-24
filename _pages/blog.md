---
title: "Blog"
summary: "A collection of my posts."
order: 5
---

{% assign recent-posts = site.posts | where: "published", "true" | limit: 40 | sort: "date" %}

{% if recent-posts.size != 0 %}
{% for post in recent-posts %}

### {{ post.title }}

<i>{{ post.excerpt | strip_html | strip_newlines | truncatewords: 60 }}</i> — Posted on {{ post.date | date: "%b %d, %Y" }} → [Read post]({{ post.url }})

{% endfor %}
{% else %}
_There are no published posts._
{% endif %}
