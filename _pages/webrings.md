---
title: "Webrings"
icon: link
style: webrings
nav_group: main
nav_position: 4
---
### Webrings

<div class="webring">
    {% for r in site.data.webrings %}
        <div class="ring">
            <span class="ring__title"><a href="{{ r.url }}">{{ r.title }}</a></span>
            <div class="ring__btns">
                <a href="{{ r.prev_url }}"><button title="Previous site in webring"><icon>arrow_back</icon></button></a>
                <a href="{{ r.next_url }}"><button title="Next site in webring"><icon>arrow_forward</icon></button></a>
                {% if r.rand_url %}
                <a href="{{ r.rand_url }}"><button title="Random site in webring"><icon>shuffle</icon></button></a>
                {% endif %}
            </div>
        </div>
    {% endfor %}
</div>