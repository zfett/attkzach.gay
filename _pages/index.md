---
title: Homepage
page-title: attkzach
layout: default
permalink: /
---
Welcome to my website, my name is Zachary! I am a hobbyist web developer, graphic designer, and overall tech nerd. This website used to hold blog posts but I rarely have time to make them and social media does good enough to host my thoughts, so now it's an info-dump. Use this site to learn more about me, my projects, and where you can find me on the Net! As a note, this site collects no analytics of any kind, nor does it require JavaScript. It was made using Jekyll, HTML, CSS, and is currently hosted on my home server running Ubuntu Server 22.04 LTS, using nginx and proxied through Cloudflare.

***

## About Me
- **Age:** 22 years old _(born January 14th, 2001)_
- **Pronouns:** he/him/his
- **Interests:**
    - Web Development
        - HTML/CSS
        - Next.js/React
        - Jekyll
    - Graphic Design
        - Adobe Photoshop
    - Fediverse
    - Music
        - Electronic music & production

...and much more!

***

## Projects
Please note that I am not known for finishing projects, so don't get too attached to anything you see.

{% for project in site.data.projects %}
{% unless site.data.projects %}
_No active projects :(_
{% endunless %}
{% if project.wip == true %}
- <span class="project-tag wip"><abbr title="Work In Progress">WIP</abbr></span>[{{ project.name }}]({{ project.url }}): {{ project.description }}
{% elsif project.archived == true %}
- <span class="project-tag archived">Archived</span>[{{ project.name }}]({{ project.url }}): {{ project.description }}
{% else %}
- [{{ project.name }}]({{ project.url }}): {{ project.description }}
{% endif %}
{% endfor %}

***

## Get in touch
I can be reached via email at `attkzach@pm.me` or via the following sites:

- [Fediverse (@attkzach@wetdry.world)](https://wetdry.world/@attkzach){:rel="me"}

Here's the other places I'm at on the Net:

- [Git Server](https://git.attkzach.gay)
- [SoundCloud](https://soundcloud.com/DESCENTRATE)
- [YouTube](https://youtube.com/@attkzach)
- [Twitch](https://twitch.tv/attkzach_ttv)