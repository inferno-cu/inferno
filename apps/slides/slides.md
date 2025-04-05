---
author: Mumtahin Farabi
title: "Inferno"
titleTemplate: '%s - Slides'
favicon: /inferno_logo.png
layout: image
image:  /Inferno-slide-background.png
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

<div class="bg-stone-900 bg-opacity-80 rounded-xl px-1 py-10">
<div class="relative h-full flex flex-col items-center justify-center space-y-5">

  <img 
    src="/inferno_logo.png" 
    alt="Inferno Logo" 
    class="w-50 h-50 animate-fade-down animate-delay-100 drop-shadow-[0_0_20px_#f59e0b]" 
  />

  <h1 class="text-7xl font-extrabold text-amber-500 tracking-widest animate-fade-up animate-delay-300 drop-shadow-[0_0_20px_#f59e0b]">
    Inferno
  </h1>

  <p class="text-2xl text-zinc-100">
    Ignite the future of connectivity.
  </p>

  <p class="text-xl text-amber-300 italic animate-fade-in animate-delay-900">
    Get on the <span class="font-semibold text-amber-400 glow">Infernet</span>.
  </p>

  <div class="absolute flex space-x-2 bottom-6 right-8 animate-fade-in animate-delay-[1200ms]">
    <a 
      href="https://infernet.work" 
      target="_blank" 
      class="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-amber-500 transition-transform hover:scale-105"
    >
      <img 
        src="/inferno_logo.png" 
        alt="Inferno App" 
        class="w-5 h-5"
      />
    </a>
    <a 
      href="https://docs.infernet.work" 
      target="_blank" 
      class="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-amber-500 transition-transform hover:scale-105"
    >
    <twemoji-open-book />
    </a>
    <a 
      href="https://arch.infernet.work" 
      target="_blank" 
      class="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-amber-500 transition-transform hover:scale-105"
    >
      <img 
        src="https://avatars.githubusercontent.com/u/128791862?s=200&v=4" 
        alt="Architecture Site" 
        class="w-5 h-5"
      />
    </a>
    <a 
      href="https://github.com/inferno-cu/inferno" 
      target="_blank" 
      class="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-amber-500 transition-transform hover:scale-105"
    >
    <logos-github-icon />
    </a>
  </div>
</div>
</div>

---
transition: slide-left
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
  animation: 4s ease-in-out infinite;
}

.card-hover-1:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0s; }
.card-hover-2:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.05s; }
.card-hover-3:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.1s; }
.card-hover-4:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.15s; }
.card-hover-5:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.2s; }
.card-hover-6:hover { transform: scale(1.08); transition: transform 0.3s ease-in-out 0.25s; }
</style>

<h1 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 animate-fade-up tracking-widest mb-12 drop-shadow-[0_0_20px_#f59e0b]">
  👋 Meet the Team
</h1>

<div class="relative flex flex-wrap justify-center items-center gap-14 max-w-[90rem] mx-auto">

  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-100 card-hover-1">
    <a href="https://www.linkedin.com/in/sanil-srivastava/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQFqXs0c3tgBiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674777087033?e=1749081600&v=beta&t=D_jKOW9Uza7eA84RuTHL_inc-bCcHlccq-WYrUn9-j4" 
        class="w-32 h-32 rounded-full ring-4 ring-sky-400 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-sky-300">Sanil Srivastava</div>
    <small class="italic text-zinc-400">God-Tier PM</small>
  </div>

  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-200 card-hover-2">
    <a href="https://www.linkedin.com/in/mfarabi/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D4E03AQFpxJLWWAf_Sw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730870018543?e=1749081600&v=beta&t=bHb6GsIYhJOtkxK6lb7Uq3tdSMe_y6kJGl1gvVi7xZE" 
        class="w-32 h-32 rounded-full ring-4 ring-purple-400 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-purple-300">Mumtahin Farabi</div>
    <small class="italic text-zinc-400">The GOAT</small>
  </div>

  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-300 card-hover-3">
    <a href="https://www.linkedin.com/in/rohansreelesh/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D4D03AQHM2l-qHrONhQ/profile-displayphoto-shrink_800_800/B4DZWeg80uHIAc-/0/1742121193038?e=1749081600&v=beta&t=6-07fkqE4drvx99DsjRoMXl19BPnRS-Ukkyo4_8CrLk" 
        class="w-32 h-32 rounded-full ring-4 ring-red-500 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-red-400">Rohan Sreelesh</div>
    <small class="italic text-zinc-400">goat pt.2</small>
  </div>

  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-400 card-hover-4">
    <a href="https://www.linkedin.com/in/anirudh-mahesh/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D4E35AQFk7F6QCQSCQg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1706935411723?e=1744156800&v=beta&t=Rk4WmGJAX2vTeTVaY8RvqAtPXgT0Qu-Mksoew7nq17g"
        class="w-32 h-32 rounded-full ring-4 ring-orange-400 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-orange-300">Anirudh Mahesh</div>
    <small class="italic text-zinc-400">web dev demon</small>
  </div>

  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-500 card-hover-5">
    <a href="https://www.linkedin.com/in/muhammadmaisam01/" target="_blank">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQHcG7pwk3FDuw/profile-displayphoto-shrink_400_400/B56ZYBQkhTGoAs-/0/1743777843884?e=1749081600&v=beta&t=4HP2OqaNqqGfyQoJOh-YAlgAc7TVI-CX-nQhI7W7oO0"
        class="w-32 h-32 rounded-full ring-4 ring-yellow-300 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-yellow-200">Muhammad Maisam</div>
    <small class="italic text-zinc-400">docs/research master</small>
  </div>

  <div class="flex flex-col items-center float-fire animate-fade-up animate-delay-600 card-hover-6">
    <a href="#">
      <img src="https://media.licdn.com/dms/image/v2/D5603AQE-DYlrUhep3w/profile-displayphoto-shrink_800_800/B56ZWwd0.hGUAc-/0/1742422365225?e=1749081600&v=beta&t=37JH_U8kwnaOpe-o7Hp0n5r8wmJ4fuANz9eY7GQFbTA"
        class="w-32 h-32 rounded-full ring-4 ring-pink-300 glow-ring transition duration-300" />
    </a>
    <div class="mt-3 text-xl font-semibold text-pink-200">Luna</div>
    <small class="italic text-zinc-400">Senior Nap Consultant</small>
  </div>

  <div class="absolute bottom-4 right-4 w-28 h-28 animate-fade-in animate-delay-[1100ms] opacity-90 hover:scale-105 transition">
    <img src="/satelite.png" alt="Inferno Badge" class="w-full h-full object-contain drop-shadow-[0_0_20px_#f59e0b]" />
  </div>
</div>

---
transition: slide-left
---

# [D-Link AC1750](https://dlink.ca/products/dir-867)

<div class="flex flex-wrap gap-2 mt-2">
  <img src="/dlink_closed.jpg" class="w-32 h-auto"/>
  <img src="/dlink_rear.jpg" class="w-32 h-auto"/>
  <img src="/dlink_bottom.jpg" class="w-32 h-auto"/>
  <img src="/dlink_top_with_heat_sync.jpg" class="w-32 h-auto"/>
  <img src="/dlink_top_without_heat_sync.jpg" class="w-32 h-auto"/>
</div>

---
transition: slide-left
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

<h1 class="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 animate-fade-up mb-12 tracking-widest drop-shadow-[0_0_30px_#f59e0b]">
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

  <a href="https://infernet.work" target="_blank">
<h1 class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 Admin Panel 
</h1>
  </a>

  <iframe
    src="https://infernet.work"
   class="inferno-frame flex justify-center items-center w-full h-full px-6"
    frameborder="0"
    allowfullscreen
  />

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

<a href="https://docs.infernet.work" target="_blank">
<h1 class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 Monorepo Graph
</h1>
  </a>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://docs.infernet.work"
    class="inferno-frame"
    frameborder="0"
    allowfullscreen
  />
</div>


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

  <a href="https://arch.infernet.work" target="_blank">
<h1 class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 System Architecture
</h1>
</a>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://arch.infernet.work"
    class="inferno-frame"
    frameborder="0"
    allowfullscreen
  />
</div>

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

  <a href="https://design.infernet.work" target="_blank">
<h1 class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 On-Switch Software
</h1>
  </a>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://design.infernet.work"
    class="inferno-frame"
    frameborder="0"
    allowfullscreen
  />
</div>

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

  <a href="https://slides.infernet.work" target="_blank">
<h1 class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 animate-fade-up mb-8 drop-shadow-[0_0_30px_#f59e0b]">
  🔥 Skytrac SDL-350
</h1>
  </a>

<div class="flex justify-center items-center w-full px-6">
  <iframe
    src="https://skytrac.infernet.work/"
    class="inferno-frame"
    frameborder="0"
    allowfullscreen
  />
</div>

---
transition: fade
---
  
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

<style>
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 6px #f59e0b44, 0 0 15px #f59e0b33;
  }
  50% {
    box-shadow: 0 0 14px #fbbf24aa, 0 0 30px #f59e0b88;
  }
}
.inferno-table {
  @apply w-full text-sm sm:text-base max-w-6xl mx-auto table-auto border-collapse rounded-xl overflow-hidden shadow-xl;
  border: 1px solid #f59e0b33;
  background-color: #0f0f0f;
  animation: fadeInTable 0.8s ease-out;
}

.inferno-table th, .inferno-table td {
  @apply px-4 py-2 text-center text-zinc-200;
  border-bottom: 1px solid #1e1e1e;
}

.inferno-table th {
  @apply bg-zinc-800 text-sm;
}

.inferno-table td:first-child {
  @apply text-left font-medium text-zinc-300;
}

.inferno-table tr:hover td {
  @apply bg-zinc-900 transition;
}

.icon-check {
  color: #22c55e;
  font-size: 1.2rem;
  text-shadow: 0 0 4px #22c55e88;
}

.icon-cross {
  color: #ef4444;
  font-size: 1.2rem;
  text-shadow: 0 0 4px #ef444488;
}

@keyframes fadeInTable {
  from { opacity: 0; transform: translateY(10px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>

<h1 class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 mb-6 tracking-wide animate-fade-up drop-shadow-[0_0_20px_#f59e0b]">
  ✅ Feature Matrix
</h1>

<div class="overflow-x-auto px-4">
  <table class="inferno-table">
    <thead>
      <tr>
        <th class="text-left">Features</th>
        <th><img src="/skylink.png" alt="Skylink" class="w-8 h-8 mx-auto" /></th>
        <th><img src="/wifi.png" alt="WiFi" class="w-8 h-8 mx-auto" /></th>
        <th><img src="/dashboard.png" alt="Dashboard" class="w-8 h-8 mx-auto" /></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Telemetry Sync</td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
      </tr>
      <tr>
        <td>Offline Buffering</td>
        <td><span class="icon-cross">✘</span></td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
      </tr>
      <tr>
        <td>Live Charting</td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-cross">✘</span></td>
        <td><span class="icon-check">✔</span></td>
      </tr>
      <tr>
        <td>Dual Band Support</td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
      </tr>
      <tr>
        <td>Failover Auto-Switch</td>
        <td><span class="icon-cross">✘</span></td>
        <td><span class="icon-cross">✘</span></td>
        <td><span class="icon-check">✔</span></td>
      </tr>
      <tr>
        <td>Encrypted Logs</td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
      </tr>
      <tr>
        <td>Airborne Access</td>
        <td><span class="icon-cross">✘</span></td>
        <td><span class="icon-cross">✘</span></td>
        <td><span class="icon-cross">✘</span></td>
      </tr>
      <tr>
        <td>LAN Handshake</td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
      </tr>
      <tr>
        <td>Redundancy Alerts</td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-cross">✘</span></td>
        <td><span class="icon-check">✔</span></td>
      </tr>
      <tr>
        <td>Remote Config Push</td>
        <td><span class="icon-cross">✘</span></td>
        <td><span class="icon-check">✔</span></td>
        <td><span class="icon-check">✔</span></td>
      </tr>
    </tbody>
  </table>
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
layout: two-cols
---

[![Iridium Modules](/iridium_modules.png)](https://www.iridium.com/products/iridium-certus-9770/)

::right::

[![Iridium Products](/iridium_products.png)](https://www.iridium.com/products/iridium-certus-9770/)

---
layout: two-cols
---

[![Grafana Monitor 1](/grafana_monitor1.png)](https://grafana.com/blog/2023/03/17/how-to-monitor-an-xdsl-modem-using-a-prometheus-exporter-plugin-and-grafana-agent-on-grafana-cloud-with-grafana-oncall/)

::right::

[![Grafana Monitor 2](/grafana_monitor2.png)](https://github.com/vitaliy-sk/keenetic-grafana-monitoring)

---
layout: two-cols
---

## Motodata

[![Motodata Monitor](/moto_data_monitor.png)](https://www.motadata.com/network-monitoring-tool/features/router-monitoring/)

::right::

## ManageEngine

[![ManageEngine](/manage_engine_monitor.png)](https://www.manageengine.com/network-monitoring/network-management-console.html)

---


## Paessler

<a href="https://www.paessler.com/router_monitoring" target="_blank" rel="noopener noreferrer">
  <img src="/paessler_monitor.png" alt="Clickable Image" width="600">
</a>

---
layout: two-cols
---

## The Helicopter Company

![The Helicopter Company](/the_helicopter_company.png)

::right::

## French H160m

[![French H160m](/french_h160.png)](https://verticalmag.com/press-releases/skytrac-iridium-certus-solution-selected-for-h160m-for-french-hil/)

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
layout: two-cols
---


## Skyweb

<a href="https://www.iridium.com/products/skytrac-skyweb-software/" target="_blank" rel="noopener noreferrer">
  <img src="/skyweb1.png" alt="Clickable Image" width="200">
</a>

::right::

## SkyRouter

[![SkyRouter](/sky_router.png)](https://blueskynetwork.com/products/skyrouter/)

---


[![Bell Home Router Dashboard](/isp_dashboard.png)](https://blueskynetwork.com/products/skyrouter/)

---

<a href="" target="_blank" rel="noopener noreferrer">
  <img src="/isp_login.png" alt="Clickable Image" width="1000">
</a>

---


<a href="" target="_blank" rel="noopener noreferrer">
  <img src="/isp_devices.png" alt="Clickable Image" width="1000">
</a>

---


## ACR Group Acquisition from Blue Sky Network

<a href="https://blueskynetwork.com/acr-group-acquires-blue-sky-network/" target="_blank" rel="noopener noreferrer">
  <img src="/acr_aquisition.png" alt="Clickable Image" width="1000">
  <img src="/about_acr.png" alt="Clickable Image" width="1000">

</a>

---
