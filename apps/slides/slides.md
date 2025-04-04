<!-- Slide 1 -->
---
author: Mumtahin Farabi
title: "Inferno"
titleTemplate: '%s - Inferno'
info: |
  ## Inferno Slide Deck
  Presentation slides for Inferno.

  [Learn more](https://github.com/inferno-cu/inferno)

class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

<div class="relative h-full flex flex-col items-center justify-center space-y-5">

  <!-- 🔥 Logo -->
  <img 
    src="/satelite.png" 
    alt="Inferno Logo" 
    class="w-24 h-24 animate-fade-down animate-delay-100 drop-shadow-[0_0_20px_#f59e0b]" 
  />

  <!-- 🔥 Title -->
  <h1 class="text-7xl font-extrabold text-amber-500 tracking-widest animate-fade-up animate-delay-300 drop-shadow-[0_0_20px_#f59e0b]">
    🔥 Inferno
  </h1>

  <!-- 🔥 Tagline -->
  <p class="text-2xl text-zinc-100 animate-zoom-in animate-delay-600">
    Ignite the future of connectivity.
  </p>

  <!-- 🔥 Infernet call -->
  <p class="text-xl text-amber-300 italic animate-fade-in animate-delay-900">
    Get on the <span class="font-semibold text-amber-400 glow">Infernet</span>.
  </p>

  <!-- GitHub button pinned bottom-right -->
  <div class="absolute bottom-6 right-8 animate-fade-in animate-delay-[1200ms]">
    <a 
      href="https://github.com/inferno-cu/inferno" 
      target="_blank" 
      class="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-amber-500 transition-transform hover:scale-105"
    >
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
        alt="GitHub" 
        class="w-5 h-5"
      />
      <span>Learn More</span>
    </a>
  </div>

</div>

<!-- Slide 2 -->
---
layout: center
transition: fade
---

<style>
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 15px #f59e0b66, 0 0 30px #f59e0b44; }
  50% { box-shadow: 0 0 35px #fbbf24aa, 0 0 60px #f59e0b88; }
}
.glow-ring {
  animation: glowPulse 2s infinite ease-in-out;
}

@keyframes drift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.float-fire {
  animation: drift 4s ease-in-out infinite;
}

/* 🔥 Custom staggered hover timing */
.card-hover-1:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0s; }
.card-hover-2:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.05s; }
.card-hover-3:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.1s; }
.card-hover-4:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.15s; }
.card-hover-5:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.2s; }
.card-hover-6:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.25s; }
</style>

<h1 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 animate-fade-up tracking-wider mb-12 drop-shadow-[0_0_20px_#f59e0b]">
  🔥 Meet the Inferno Team
</h1>

<div class="relative flex flex-wrap justify-center items-center gap-14 max-w-[90rem] mx-auto">

  <!-- 🔥 Sanil -->
  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-100 card-hover-1">
    <a href="https://www.linkedin.com/in/sanil-srivastava/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQFqXs0c3tgBiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674777087033?e=1749081600&v=beta&t=D_jKOW9Uza7eA84RuTHL_inc-bCcHlccq-WYrUn9-j4" 
        class="w-32 h-32 rounded-full ring-4 ring-sky-400 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-sky-300">Sanil</div>
    <small class="italic text-zinc-400">God-Tier PM</small>
  </div>

  <!-- 🔥 Farabi -->
  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-200 card-hover-2">
    <a href="https://www.linkedin.com/in/mfarabi/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D4E03AQFpxJLWWAf_Sw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730870018543?e=1749081600&v=beta&t=bHb6GsIYhJOtkxK6lb7Uq3tdSMe_y6kJGl1gvVi7xZE" 
        class="w-32 h-32 rounded-full ring-4 ring-purple-400 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-purple-300">Farabi</div>
    <small class="italic text-zinc-400">The GOAT</small>
  </div>

  <!-- 🔥 Rohan -->
  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-300 card-hover-3">
    <a href="https://www.linkedin.com/in/rohansreelesh/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D4D03AQHM2l-qHrONhQ/profile-displayphoto-shrink_800_800/B4DZWeg80uHIAc-/0/1742121193038?e=1749081600&v=beta&t=6-07fkqE4drvx99DsjRoMXl19BPnRS-Ukkyo4_8CrLk" 
        class="w-32 h-32 rounded-full ring-4 ring-red-500 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-red-400">Rohan</div>
    <small class="italic text-zinc-400">goat pt.2</small>
  </div>

  <!-- 🔥 Anirudh -->
  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-400 card-hover-4">
    <a href="https://www.linkedin.com/in/anirudh-mahesh/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D4E35AQFk7F6QCQSCQg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1706935411723?e=1744156800&v=beta&t=Rk4WmGJAX2vTeTVaY8RvqAtPXgT0Qu-Mksoew7nq17g"
        class="w-32 h-32 rounded-full ring-4 ring-orange-400 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-orange-300">Anirudh</div>
    <small class="italic text-zinc-400">web dev demon</small>
  </div>

  <!-- 🔥 Maisam -->
  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-500 card-hover-5">
    <a href="https://www.linkedin.com/in/muhammadmaisam01/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQE-DYlrUhep3w/profile-displayphoto-shrink_800_800/B56ZWwd0.hGUAc-/0/1742422365225?e=1749081600&v=beta&t=37JH_U8kwnaOpe-o7Hp0n5r8wmJ4fuANz9eY7GQFbTA"
        class="w-32 h-32 rounded-full ring-4 ring-yellow-300 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-yellow-200">Maisam</div>
    <small class="italic text-zinc-400">docs/research master</small>
  </div>

  <!-- 🔥 Luna -->
  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-600 card-hover-6">
    <a href="#">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQE-DYlrUhep3w/profile-displayphoto-shrink_800_800/B56ZWwd0.hGUAc-/0/1742422365225?e=1749081600&v=beta&t=37JH_U8kwnaOpe-o7Hp0n5r8wmJ4fuANz9eY7GQFbTA"
        class="w-32 h-32 rounded-full ring-4 ring-pink-300 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-pink-200">Luna</div>
    <small class="italic text-zinc-400">Senior Nap Consultant</small>
  </div>

  <!-- 🔥 Bottom-right graphic (badge/logo/mascot) -->
  <div class="absolute bottom-4 right-4 w-28 h-28 animate-fade-in animate-delay-[1100ms] opacity-90 hover:scale-105 transition">
    <img src="/satelite.png" alt="Inferno Badge" class="w-full h-full object-contain drop-shadow-[0_0_20px_#f59e0b]" />
  </div>

</div>


<!-- Slide 3 -->
---
transition: fade-out
---

<style>
@keyframes emberGlow {
  0%, 100% {
    box-shadow: 0 0 10px #f59e0b66, 0 0 20px #f59e0b44;
    transform: translateY(0) scale(1);
  }
  50% {
    box-shadow: 0 0 25px #fbbf24aa, 0 0 60px #f59e0b88;
    transform: translateY(-4px) scale(1.05);
  }
}
.icon-tile {
  @apply bg-zinc-900 p-4.5 rounded-2xl transition duration-300 hover:scale-105;
  border: 1px solid #f59e0b33;
}
.icon-tile:hover {
  animation: emberGlow 2s ease-in-out infinite;
}
</style>

<h1 class="text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 animate-fade-up mb-12 tracking-widest drop-shadow-[0_0_30px_#f59e0b]">
  🔥 Problem Statement
</h1>

<div class="grid grid-cols-3 gap-10 max-w-screen-lg mx-auto place-items-center">

  <div class="icon-tile" v-click>
    <img src="/skylink.png" class="w-24 h-24 object-contain" />
  </div>

  <div class="icon-tile" v-click>
    <img src="/daemon.png" class="w-20 h-20 object-contain" />
  </div>

  <div class="icon-tile" v-click>
    <img src="/mqtt.png" class="w-20 h-20 object-contain" />
  </div>

  <div class="icon-tile" v-click>
    <img src="/wifi.png" class="w-20 h-20 object-contain" />
  </div>

  <div class="icon-tile" v-click>
    <img src="/admin.png" class="w-20 h-20 object-contain" />
  </div>

  <div class="icon-tile" v-click>
    <img src="/dashboard.png" class="w-20 h-20 object-contain" />
  </div>

  <div class="icon-tile" v-click>
    <img src="/cellular.png" class="w-20 h-20 object-contain" />
  </div>

  <div class="icon-tile" v-click>
    <img src="/satelite.png" class="w-20 h-20 object-contain" />
  </div>

  <div class="icon-tile" v-click>
    <img src="/documentation.png" class="w-20 h-20 object-contain" />
  </div>

</div>


<!-- Slide 4 -->
---
transition: fade-out
---

<style>
.inferno-frame {
  @apply w-full h-[22rem] max-w-5xl rounded-2xl shadow-2xl ring-4 ring-amber-500;
  background-color: #0f0f0f;
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>

<h1 class="text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 What We Accomplished
</h1>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://infernet.work"
    class="inferno-frame"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<!-- Optional button below -->
<div class="mt-6 text-center">
  <a href="https://infernet.work" target="_blank"
     class="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition shadow-lg">
    🔗 Visit Infernet Live
  </a>
</div>

<!-- Slide 5 -->
---
transition: fade-out
---

<style>
.inferno-frame {
  @apply w-full h-[22rem] max-w-5xl rounded-2xl shadow-2xl ring-4 ring-amber-500;
  background-color: #0f0f0f;
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>

<h1 class="text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 What We Accomplished
</h1>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://docs.infernet.work"
    class="inferno-frame"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<!-- Optional button below -->
<div class="mt-6 text-center">
  <a href="https://docs.infernet.work" target="_blank"
     class="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition shadow-lg">
    🔗 Visit Infernet Docs Live
  </a>
</div>

<!-- Slide 6 -->
---
transition: fade-out
---

<style>
.inferno-frame {
  @apply w-full h-[22rem] max-w-5xl rounded-2xl shadow-2xl ring-4 ring-amber-500;
  background-color: #0f0f0f;
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>

<h1 class="text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 What We Accomplished
</h1>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://arch.infernet.work"
    class="inferno-frame"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<!-- Optional button below -->
<div class="mt-6 text-center">
  <a href="https://arch.infernet.work" target="_blank"
     class="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition shadow-lg">
    🔗 Visit Infernet Architecture Live
  </a>
</div>

<!-- Slide 7 -->
---
transition: fade-out
---

<style>
.inferno-frame {
  @apply w-full h-[22rem] max-w-5xl rounded-2xl shadow-2xl ring-4 ring-amber-500;
  background-color: #0f0f0f;
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>

<h1 class="text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 What We Accomplished
</h1>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://design.infernet.work"
    class="inferno-frame"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<!-- Optional button below -->
<div class="mt-6 text-center">
  <a href="https://design.infernet.work" target="_blank"
     class="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition shadow-lg">
    🔗 Visit Infernet Design Live
  </a>
</div>

<!-- Slide 8 -->
---
transition: fade-out
---

<style>
.inferno-frame {
  @apply w-full h-[22rem] max-w-5xl rounded-2xl shadow-2xl ring-4 ring-amber-500;
  background-color: #0f0f0f;
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>

<h1 class="text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 What We Accomplished
</h1>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://slides.infernet.work/8"
    class="inferno-frame"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

<!-- Optional button below -->
<div class="mt-6 text-center">
  <a href="https://slides.infernet.work" target="_blank"
     class="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition shadow-lg">
    🔗 Visit Infernet Slides Live
  </a>
</div>

<!-- Slide 9-->
---
transition: fade
---

<style>
.arch-frame {
  @apply w-full h-[24rem] max-w-5xl rounded-xl shadow-xl ring-2 ring-zinc-700;
  background-color: #0f0f0f;
  animation: fadeInPanel 1s ease-out;
}
@keyframes fadeInPanel {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>

<h2 class="text-4xl font-semibold text-center text-zinc-300 mb-6 tracking-wide animate-fade-up">
  Infernet System Architecture
</h2>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://arch.infernet.work"
    class="arch-frame"
    frameborder="0"
    loading="lazy"
  ></iframe>
</div>

---
transition: fade-out
---
# Market Research

## Teltonika Topology
<a href="https://teltonika-networks.com/use-cases/industrial-automation/cellular-router-for-aerial-critical-infrastructure-inspection" target="_blank" rel="noopener noreferrer">
  <img src="/teltonika_topology.png" alt="Clickable Image" width="600">
</a>
---

<h1 class="text-amber-500">SKYTRAC SDL-350</h1>
  
<div class="grid grid-cols-2 gap-2 items-start w-full">
  <div class="flex flex-col items-center space-y-6">
    <img
      src="/skytracs_dl_ss1.png"
      alt="Additional Image 1"
      class="w-full max-w-sm h-full"
    />
  </div>

  <div class="flex flex-col items-center space-y-6">
    <a href="https://www.blueplanet.com/" target="_blank" rel="noopener noreferrer">
      <img
        src="/skytracs_dl_ss2.png"
        class="w-full max-w-sm h-full"
      />
    </a>
  </div>
</div>

---

## Iridium Modules

<a href="https://www.iridium.com/products/iridium-certus-9770/" target="_blank" rel="noopener noreferrer">
  <img src="/iridium_modules.png" alt="Clickable Image" width="600">
</a>
---


## Iridium Products

<a href="https://www.iridium.com/products/iridium-certus-9770/" target="_blank" rel="noopener noreferrer">
  <img src="/iridium_products.png" alt="Clickable Image" width="600">
</a>
---


## Grafana Monitor

<a href="https://grafana.com/blog/2023/03/17/how-to-monitor-an-xdsl-modem-using-a-prometheus-exporter-plugin-and-grafana-agent-on-grafana-cloud-with-grafana-oncall/" target="_blank" rel="noopener noreferrer">
  <img src="/grafana_monitor1.png" alt="Clickable Image" width="600">
</a>
---


## Grafana Monitor

<a href="https://github.com/vitaliy-sk/keenetic-grafana-monitoring" target="_blank" rel="noopener noreferrer">
  <img src="/grafana_monitor2.png" alt="Clickable Image" width="600">
</a>
---


## Motodata Monitor

<a href="https://www.motadata.com/network-monitoring-tool/features/router-monitoring/" target="_blank" rel="noopener noreferrer">
  <img src="/moto_data_monitor.png" alt="Clickable Image" width="600">
</a>
---


## ManageEngine Monitor

<a href="https://www.manageengine.com/network-monitoring/network-management-console.html" target="_blank" rel="noopener noreferrer">
  <img src="/manage_engine_monitor.png" alt="Clickable Image" width="600">
</a>
---


## Paessler Monitor

<a href="https://www.paessler.com/router_monitoring" target="_blank" rel="noopener noreferrer">
  <img src="/paessler_monitor.png" alt="Clickable Image" width="600">
</a>
---


## The Helicopter Company

<a href="https://www.ainonline.com/aviation-news/business-aviation/2023-03-08/thc-selects-skytrac-satcom-helo-fleet" target="_blank" rel="noopener noreferrer">
  <img src="/the_helicopter_company.png" alt="Clickable Image" width="500">
</a>
---


## French H160m

<a href="https://verticalmag.com/press-releases/skytrac-iridium-certus-solution-selected-for-h160m-for-french-hil/" target="_blank" rel="noopener noreferrer">
  <img src="/french_h160.png" alt="Clickable Image" width="600">
</a>
---


## DO-178C

<a href="https://www.windriver.com/solutions/learning/do-178c" target="_blank" rel="noopener noreferrer">
  <img src="/do_178c.png" alt="Clickable Image" width="450">
</a>
---


## TrooTrax

<a href="https://www.skytrac.ca/services/flight-following/" target="_blank" rel="noopener noreferrer">
  <img src="/trootrax.png" alt="Clickable Image" width="600">
</a>
---


## Skyweb

<a href="https://www.iridium.com/products/skytrac-skyweb-software/" target="_blank" rel="noopener noreferrer">
  <img src="/skyweb1.png" alt="Clickable Image" width="200">
</a>
---


## Existing Major ISPs

<a href="" target="_blank" rel="noopener noreferrer">
  <img src="/isp_dashboard.png" alt="Clickable Image" width="1000">
</a>
---


## ISP Dashboards

<a href="" target="_blank" rel="noopener noreferrer">
  <img src="/isp_login.png" alt="Clickable Image" width="1000">
</a>
---


## ISP Devices

<a href="" target="_blank" rel="noopener noreferrer">
  <img src="/isp_devices.png" alt="Clickable Image" width="1000">
</a>
---


## ACR Group Acquires Leading Iridium Satellite Connectivity Solutions Firm Blue Sky Network

<a href="https://blueskynetwork.com/acr-group-acquires-blue-sky-network/" target="_blank" rel="noopener noreferrer">
  <img src="/acr_aquisition.png" alt="Clickable Image" width="1000">
  <img src="/about_acr.png" alt="Clickable Image" width="1000">

</a>
---


## SkyRouter

<a href="https://blueskynetwork.com/products/skyrouter/" target="_blank" rel="noopener noreferrer">
  <img src="/sky_router.png" alt="Clickable Image" width="1000">
</a>
---

# Market Research

## D-Link Router
  <div class="relative w">
  <img src="/dlink_top_without_heat_sync.jpg">
  <img src="/dlink_top_with_heat_sync.jpg" alt="Clickable Image" width="1/5">
  <img src="/dlink_bottom.jpg" alt="Clickable Image" width="100">
  <img src="/dlink_closed.jpg" alt="Clickable Image" width="50">
  <img src="/dlink_rear.jpg" alt="Clickable Image" width="50">
</div>

---
transition: fade-out
---

# System Design
