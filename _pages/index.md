---
title: Homepage
page-title: Zach Fetters
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

### Current Projects
{% for project in site.data.projects %}
{% if project.wip == true %}
- <sup><abbr title="Work In Progress">WIP</abbr></sup>[{{ project.name }}]({{ project.url }}): {{ project.description }}
{% else %}
- [{{ project.name }}]({{ project.url }}): {{ project.description }}
{% endif %}
{% endfor %}

<!--sse-->
***

## Get in touch
I can be reached via email at `zachfett@protonmail.com` or via the following sites:

- [Fediverse (@attkzach@wetdry.world)](https://wetdry.world/@attkzach){:rel="me"}
- [Instagram](https://www.instagram.com/zachfetters/)

Here's the other places I'm at on the Net:

- [Git Server](https://git.zachfetters.com)
- [SoundCloud](https://soundcloud.com/DESCENTRATE)
- [YouTube](https://youtube.com/@attkzach)

### Resume
Here's a [download link](/assets/files/ZachFetters_Resume_Sept2023_Color_REDACTED.pdf) to my current resume. If you want an unredacted version, please get in touch using the details above.

### PGP Key
#### Zachary Fetters \<zachfett@protonmail.com\>
Fingerprint: `034065C9ECAA2D10D40CAD90AA0CF5D405E30EE2`

```plaintext
-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: User-ID:   Zachary Fetters <zachfett@protonmail.com>
Comment: Valid from:    9/18/2022 11:26 AM
Comment: Type:  255-bit EdDSA (secret key available)
Comment: Usage: Signing, Encryption, Certifying User-IDs
Comment: Fingerprint:   034065C9ECAA2D10D40CAD90AA0CF5D405E30EE2


mDMEYyc4kBYJKwYBBAHaRw8BAQdAbXD9CQi5/FJb7tuRCNOJ83YsRYBsNzbw3WZB
ZhTgoza0MXphY2hmZXR0QHByb3Rvbm1haWwuY29tIDx6YWNoZmV0dEBwcm90b25t
YWlsLmNvbT6IeAQwFgoAIBYhBANAZcnsqi0Q1AytkKoM9dQF4w7iBQJlG21SAh0g
AAoJEKoM9dQF4w7iawgA/2Wv6jShVSTbThskeD2EK1jRcKa37KskEZTHoWWXoeq5
AP96Gg003Tzbk/zSODrAnowY9cPFenkEDudKAfWX9EMOCoiJBBAWCgAxBAsJBwgD
FQgKBBYAAgECGwMCHgEWIQQDQGXJ7KotENQMrZCqDPXUBeMO4gUCZRttSgAKCRCq
DPXUBeMO4scnAP9qgOLEvFPRwwC5P3TbElRhmzjLPr5t41KlLHczGHlXLwD/Qrlv
bdoq44oQWSGka8d74t2CpUmkZH5IhEbGbHtVwAaIjAQQFgoAHQUCYyc4kAQLCQcI
AxUICgQWAAIBAhkBAhsDAh4BACEJEKoM9dQF4w7iFiEEA0BlyeyqLRDUDK2Qqgz1
1AXjDuJIgAEAxEn4q7QRHEtFmy/sD+wZxfT/TmbVwqptaBTRbND79qwA/i3ZnnRW
RhP5WQBUIffynuvyi27AuCs/jg1ZtvuPB2wPtClaYWNoYXJ5IEZldHRlcnMgPHph
Y2hmZXR0QHByb3Rvbm1haWwuY29tPoiWBBMWCgA+AhsDBQsJCAcCAiICBhUKCQgL
AgQWAgMBAh4HAheAFiEEA0BlyeyqLRDUDK2Qqgz11AXjDuIFAmUbbUoCGQEACgkQ
qgz11AXjDuK11gEA/6+4Qe5kCR7SUX2ki/hnTGnvAUtMN/ib7u9isBxaHXYBAJY+
RnniMOub9j7MoQsVg1IPovJBwet36e8s9hc2FAQDuDgEYyc4kBIKKwYBBAGXVQEF
AQEHQEXyhxB2emgnPS/fB+UZb/5bZTpEg5K7KMOXUH1UTHk3AwEIB4h4BBgWCAAJ
BQJjJziQAhsMACEJEKoM9dQF4w7iFiEEA0BlyeyqLRDUDK2Qqgz11AXjDuL+iwEA
yfyfcZJBpWFuRlyexpp1mYvFbtEZ8AWf0aQbYqfDFQ8A/REROqkC6M4TbWOCUO02
+5WNnQ63Yd1g1mtSP+lhPf4M
=Vg3m
-----END PGP PUBLIC KEY BLOCK-----

```
[Download pubkey from keys.openpgp.org](https://keys.openpgp.org/vks/v1/by-fingerprint/034065C9ECAA2D10D40CAD90AA0CF5D405E30EE2)  
[Download .asc pubkey](/assets/files/publickey.zachfett@protonmail.com-034065c9ecaa2d10d40cad90aa0cf5d405e30ee2.asc)
<!--/sse-->