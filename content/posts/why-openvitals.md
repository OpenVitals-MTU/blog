---
title: Why OpenVitals?
date: 2026-10-17
description: What made me want to start OpenVitals
author: Manuel
tags: [announcement]
---

Fifteen years ago I installed my first distro, Ubuntu, making me fall in love with Linux and this idea of open source and community-driven projects. Slowly but surely I started my deep dive into Android modding communities and laid the foundations for what was going to be my professional career.

I have always seen technology as a driver of human improvement, something that in kind hands can bring so much good to the world, and even though we see that it can also be used for terrible purposes, to this day I have not stopped believing in it.

When I started living in Estonia, I came into contact with what I thought was a digital society utopia, where from the palm of your hand you could access all your information and sign any kind of document, even in your cabin in the middle of the woods.

Even though after five years of living there I have a more measured view of Estonia as a whole, I can still say that what they have achieved is unique. Especially regarding health, I was able to access all of my data without the need to store papers, call doctors, track down studies or request consultations. Everything was always at my disposal, letting me make the best decisions I could.

At the same time, while I was living in Estonia, I got a Fitbit device that was quite handy for my training and everyday life, and helped me cut down a bit on the sedentary lifestyle that is so common in my profession. However, the more time passed, the more wary I became of giving away so much of my personal data. A bit further down the road I decided to move to a Garmin device with Gadgetbridge, a FOSS app to manage devices, while my partner took my Fitbit.

Fast forward to this year, with the final nail in the coffin of Fitbit and its conversion into Google Health, I was surprised by the low effort and bad UX, plus serving all your data to Google. It was a total [fallout](https://gizmodo.com/google-is-in-full-on-damage-control-over-its-new-health-app-2000764027), plus the insertion of [LLM](https://www.technology.org/2026/01/13/google-scrubs-faulty-ai-generated-health-advice-that-could-mislead-sick-patients/) output in an uncontrolled and unsafe way.

This pushed me to start OpenVitals, a health dashboard where you can see all your fitness, wellness and health data with privacy at its heart. The idea behind it is quite simple: Health Connect is a private and secure database for all your records, and OpenVitals acts as a dashboard, with the ability to manually add entries or record your workouts.

With this as the endgame, we can interconnect the whole FOSS ecosystem (also the non-FOSS one) in terms of fitness, wellness and health.

![OpenTracks, openScale (through openScale-sync), OpenVitals, Gadgetbridge, Hydrotracker and DailySitting all write to Health Connect; the OpenVitals Wear OS app feeds OpenVitals and Gadgetbridge, and OpenVitals also reads back from Health Connect](/images/posts/openvitals-ecosystem.png)

What I valued the most in Estonia was having all my health data at hand to make the best decisions I could, and that is what I want OpenVitals to bring to anyone with a phone, without having to give that data to Google or any other company.

There is still a long way to go, and I would love you to be part of it. You can get OpenVitals on [F-Droid](https://f-droid.org/en/packages/tech.mmarca.openvitals/) or [Google Play](https://play.google.com/store/apps/details?id=tech.mmarca.openvitals). If something breaks, [open an issue](https://github.com/OpenVitals-MTU/android-app/issues). The code is on [GitHub](https://github.com/OpenVitals-MTU/android-app) and every contribution is welcome, and if you want to support the project you can do it on [Liberapay](https://liberapay.com/manuel.mmarca.tech/donate).

Fifteen years ago Ubuntu showed me what a community can build, and I hope OpenVitals can do the same for wellness and health.
