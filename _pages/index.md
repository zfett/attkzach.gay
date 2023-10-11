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

## Services
I run a multitude of services on my home server, some of which are publicly accessible. Below is a list of the public services I run and how to access them (if possible):

- **[Website](https://attkzach.gay/)**: My personal static website. You're on it now!
- **[Status Page](https://status.attkzach.gay/)**: My server status dashboard, powered by [Uptime Kuma](https://uptime.kuma.pet/).
- **[Gitea](https://git.attkzach.gay/)**: Where I host my git repos. Running on Gitea. Get in contact with me to make an account.
- **[Java Minecraft Server](https://mc.attkzach.gay/)**: When accessed from the web, shows how to connect to the server. Requires a whitelist entry to play.
- **[Pastebin](https://bin.attkzach.gay/)**: My personal pastebin. Enter your text and click the pencil icon to share it. Running on [bin by w4 on GitHub](https://github.com/w4/bin).

All of my services run on subdomains of my main domain, `*.attkzach.gay`. Anything running under my name elsewhere is _probably_ not mine and could be dangerous.

## Get in touch
I can be reached via email at `attkzach@pm.me` or via the following sites:

- [Fediverse (@attkzach@wetdry.world)](https://wetdry.world/@attkzach){:rel="external nofollow noopener me"}

Here's the other places I'm at on the Net:

- [Git Server](https://git.attkzach.gay)
- [SoundCloud](https://soundcloud.com/DESCENTRATE)
- [YouTube](https://youtube.com/@attkzach)
- [Twitch](https://twitch.tv/attkzach_ttv)
