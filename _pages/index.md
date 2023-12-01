---
title: Homepage
page-title: attkzach
layout: default
permalink: /
---
Welcome to my website, my name is Zachary! I am a hobbyist web developer, graphic designer, and overall tech nerd. This website used to hold blog posts but I rarely have time to make them and social media does good enough to host my thoughts, so now it's an info-dump. Use this site to learn more about me, my projects, and where you can find me on the Net! As a note, this site collects no analytics of any kind, nor does it require JavaScript. It was made using Jekyll, HTML, and CSS.

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
        - Adobe Illustrator
    - Video Editing
        - Adobe After Effects
        - Adobe Premiere
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
- {% if project.wip == true %}<span class="project-tag wip"><i><abbr title="Work In Progress">WIP</abbr></i></span> {% endif %}{% if project.archived == true %}<span class="project-tag archived" title="This project is no longer maintained"><i>Archived</i></span> {% endif %}[{{ project.name }}]({{ project.url }}): {{ project.description }}
{% endfor %}

***

## Get in touch
I can be reached via email at `hey@attkzach.gay` or via the following sites:

- [Fediverse (@attkzach@wetdry.world)](https://wetdry.world/@attkzach){:rel="external nofollow noopener me"}

Here's the other places I'm at on the Net:

- [GitHub](https://github.com/zfett)
- [SoundCloud](https://soundcloud.com/attkzach)
- [YouTube](https://youtube.com/@attkzach)
- [Twitch](https://twitch.tv/attkzach_ttv)
