---
title: "Blog"
icon: rss_feed
style: blog
nav_group: main
nav_position: 5
---
### Blog Posts

{% assign posts = site.posts | sort: "date" | limit: 40 %}
{% for post in posts %}
<div class="post">
    <h4 class="post__title">{{ post.title }}</h4>
    <p class="post__snippet">{{ post.content | truncatewords: 15 }} <a href="{{ post.url }}">Read full post <icon>arrow_forward</icon></a></p>
    <div class="post__info">
        <div class="info__text"><icon>person</icon> Posted by
            {% for author in post.authors %}
            <a href="mailto:{{ author.email }}" title="Email the author">{{ author.name }}</a>{% if forloop.last %}.{% else %}, {% endif %}
            {% endfor %}
        </div>
        <div class="info__text"><icon>calendar_month</icon> Published on {{ post.date | date: "%B %-d, %Y" }}.</div>
    </div>
</div>
{% endfor %}