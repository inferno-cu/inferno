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

  <div class="absolute flex space-x-1 bottom-4 right-4 animate-fade-in animate-delay-[1200ms]">
    <a 
      href="https://infernet.work" 
      target="_blank" 
      class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600 text-white text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-amber-500 transition-transform hover:scale-105 focus:outline-none"
    >
      <img 
        src="https://static.thenounproject.com/png/4481649-200.png" 
        alt="Inferno App" 
        class="w-5 h-5"
      />
    </a>
    <a 
      href="https://docs.infernet.work" 
      target="_blank" 
      class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600 text-white text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-amber-500 transition-transform hover:scale-105 focus:outline-none"
    >    
    <img 
        src="https://em-content.zobj.net/source/twitter/31/open-book_1f4d6.png" 
        alt="Documentation" 
        class="w-5 h-5"
      />
    </a>
    <a 
      href="https://arch.infernet.work" 
      target="_blank" 
      class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600 text-white text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-amber-500 transition-transform hover:scale-105 focus:outline-none"
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
      class="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-600 text-white text-sm font-semibold shadow-xl hover:shadow-2xl hover:bg-amber-500 transition-transform hover:scale-105 focus:outline-none"
  >
    <img 
        src="/GitHub_Invertocat_Dark.png" 
        alt="Git Hub" 
        class="w-5 h-5"
      />
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

<div class="relative flex flex-wrap justify-center items-center gap-18 max-w-[90rem] mx-auto">

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

  <div class="absolute bottom-4 right-4 w-58 h-38 animate-fade-in animate-delay-[1100ms] opacity-90 hover:scale-105 transition">
    <img src="/carleton.png" alt="Inferno Badge" class="w-full h-full object-contain drop-shadow-[0_0_20px_#f59e0b]" />
  </div>
</div>

---
transition: slide-left
---

# <a href="https://dlink.ca/products/dir-867" target="_blank" rel="noopener noreferrer" class="inferno-title">D-Link AC1750</a>

<div class="flex flex-wrap justify-center gap-4 mt-4">
  <img src="/dlink_closed.jpg" alt="D-Link Closed" class="inferno-img w-32" />
  <img src="/dlink_rear.jpg" alt="D-Link Rear" class="inferno-img w-32" />
  <img src="/dlink_bottom.jpg" alt="D-Link Bottom" class="inferno-img w-32" />
  <img src="/dlink_top_with_heat_sync.jpg" alt="D-Link Top w/ Heat Sync" class="inferno-img w-32" />
  <img src="/dlink_top_without_heat_sync.jpg" alt="D-Link Top w/o Heat Sync" class="inferno-img w-32" />
</div>

<!---
<style>
.inferno-img {
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
  border: 2px solid rgba(251, 191, 36, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.inferno-img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 35px rgba(251, 191, 36, 0.8);
}

.inferno-title {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(to right, #fbbf24, #f97316, #dc2626);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 0 0 20px #f59e0b;
}
</style>
-->
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

# 🛰️ Skytrac Dashboard Screens

<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center px-4 py-6">

  <div class="flex flex-col items-center space-y-3">
    <img
      src="/skytracs_dl_ss1.png"
      alt="Dashboard View 1"
      class="rounded-2xl border-2 border-amber-400/30 shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:shadow-[0_0_45px_rgba(251,191,36,0.8)] transition-transform hover:scale-105 max-w-sm"
    />
    <p class="text-sm text-zinc-400 italic">Skytrac UI panel overview</p>
  </div>

  <div class="flex flex-col items-center space-y-3">
    <a href="https://www.blueplanet.com/" target="_blank" rel="noopener noreferrer">
      <img
        src="/skytracs_dl_ss2.png"
        alt="Dashboard View 2"
        class="rounded-2xl border-2 border-amber-400/30 shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:shadow-[0_0_45px_rgba(251,191,36,0.8)] transition-transform hover:scale-105 max-w-sm"
      />
    </a>
    <p class="text-sm text-zinc-400 italic">Linked flight data from Blue Planet</p>
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
        <th><img src="/blue-sky.png" alt="Skylink" class="w-8 h-8 mx-auto" /></th>
        <th><img src="/skytrac.png" alt="WiFi" class="w-8 h-8 mx-auto" /></th>
        <th><img src="/inferno_logo.png" alt="Dashboard" class="w-8 h-8 mx-auto" /></th>
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

layout: center
class: text-center

---
transition: fade
---

<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 mb-8 tracking-widest drop-shadow-[0_0_20px_#f59e0b]">
  🔥 Challenges Faced
</h1>

<ul class="text-lg text-zinc-200 space-y-3 max-w-4xl mx-auto animate-fade-up">
  <li>🧠 Zero-to-none Linux and embedded systems experience for some team members</li>
  <li>⛰️ Steep learning curve across tools and hardware</li>
  <li>📚 Midterm season + heavy assignments during dev cycle</li>
  <li>🎯 Scope of hackathon changed mid-way</li>
  <li>🛠️ Original plan: build our own OS — later shifted to a provided image</li>
  <li>❌ OS drivers in the provided image were broken</li>
  <li>🧬 Got PPP code less than 24 hours before the hackathon</li>
  <li>💾 SD card was fried — device wouldn’t boot, root cause unclear</li>
  <li>🔌 Hardware was often unreliable or inconsistent</li>
</ul>
---
transition: fade
---

<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 mb-8 tracking-widest drop-shadow-[0_0_20px_#f59e0b]">
  🛠️ High-Level Tech Stack Used
</h1>

<ul class="text-lg text-zinc-200 space-y-3 max-w-3xl mx-auto animate-fade-up">
  <li>✈️ Huly — for project management</li>
  <li>🎨 Penpot — collaborative design & UI prototyping</li>
  <li>🔥 Slidev — the cool engine behind this slide deck</li>
  <li>📚 Fumadocs — documentation from markdown</li>
  <li>🧬 GitHub — version control, issues, CI/CD</li>
</ul>
---
transition: fade
layout: center
class: text-center
---

# 🔥 The Power of Yet

> “We’re not there… yet.”

- 🧭 Came ready for embedded. Pivoted to presentation.  
- ⚙️ Faced driver bugs, fried SDs, and broken boots.  
- 🧠 Learned fast. Adapted faster.  
- 🚀 Proud of what we built — and what we will build.

<span class="text-amber-300 italic text-xl mt-6 block">
Inspired by Joe Lee — <span class="text-amber-400 font-semibold">Not yet is power.</span>
</span>

---
transition: fade
---

<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 mb-8 tracking-widest drop-shadow-[0_0_20px_#f59e0b]">
  🙏 Special Thanks To
</h1>

<ul class="text-lg text-zinc-200 space-y-6 max-w-3xl mx-auto animate-fade-up">
  <li>
    🎓 <span class="font-semibold text-yellow-200">Carleton University</span><br/>
    <span class="text-zinc-400 italic">For giving us the opportunity to attend this hackathon</span>
  </li>
  <li>
    🛰️ <span class="font-semibold text-yellow-200">Skytrac</span><br/>
    <span class="text-zinc-400 italic">
      For hosting the hackathon, providing hardware, food, and deep technical mentorship
    </span>
  </li>
  <li>
    💡 <span class="font-semibold text-yellow-200">All Participating Teams</span><br/>
    <span class="text-zinc-400 italic">For the fierce competition, inspiration, and laughs</span>
  </li>
</ul>


---

# 🔥 Thank You to SKYTRAC!

<div class="text-xl font-medium text-orange-300 tracking-wide animate-pulse mt-2">
  You lit the fire that made this project possible.
</div>


<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4 justify-center items-center">

  <div 
    v-for="(member, index) in team" 
    :key="index" 
    class="bg-gradient-to-br from-amber-500/20 to-orange-800/20 backdrop-blur-sm p-3 rounded-3xl border border-orange-400/30 shadow-[0_4px_20px_rgba(255,125,0,0.4)] hover:scale-105 transition-transform duration-300 animate-fade-up hover:shadow-[0_0_30px_rgba(255,140,0,0.7)]"
  >
    <img 
      :src="member.image" 
      alt="Team Member" 
      class="w-28 h-28 rounded-full object-cover border-4 border-amber-500 shadow-lg"
    />
    <p class="mt-4 text-lg font-bold text-orange-200 tracking-wide drop-shadow-md">
      {{ member.name }}
    </p>
  </div>

</div>

<style>
.slidev-layout {
  background: radial-gradient(circle at top left, #1a0e05, #0b0200);
  animation: bg-glow 10s ease-in-out infinite alternate;
}

@keyframes bg-glow {
  0% { background-color: #1a0e05; }
  100% { background-color: #2a1000; }
}
</style>

<script setup>
const team = [
  { name: 'Joe Lee', image: 'https://media.licdn.com/dms/image/v2/C5603AQGbu5k13kU0sg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659190990679?e=1749081600&v=beta&t=zEXsfFVwkhDZxRmPFtgYAxO2NyrXE7AsOKzS8Y5N4CI' },
  { name: 'Emmanuel Gravel', image: 'https://media.licdn.com/dms/image/v2/C4E03AQHzbptLKNEYRQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1581536669024?e=1749081600&v=beta&t=j5pE0XknqXiyCzH8-FWyx4QrcZb-vkkN8xP3mrCVN2g' },
  { name: 'Jan Lotz', image: 'https://media.licdn.com/dms/image/v2/C4D03AQEMeX9FxYNlRw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517231375264?e=1749081600&v=beta&t=cGWM2cWYZSMTeEfU8ea1Hws8MJcw12QrknTKFCJuWBk' },
  { name: 'Gilles Bessens', image: 'https://media.licdn.com/dms/image/v2/C4E03AQE6CGOQHxjpfg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1580310827965?e=1749081600&v=beta&t=j1VugXDrHhrC-rLf_TR5fgmXZYfQ4Rl78DKLT-u8Njs' },
  { name: 'Malachi Nordine', image: 'https://media.licdn.com/dms/image/v2/C5603AQHO3QFiAPaeJQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1628013717780?e=1749081600&v=beta&t=O6WiSgZVXuM4sovwqMGr-e7GgjVHNq0J1-E6c4--C0M' },
  { name: 'Lindi Sale', image: 'https://media.licdn.com/dms/image/v2/C5603AQFEDO1P1ckmcw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517541625092?e=1749081600&v=beta&t=pBYoihJNBarM_79bflYIpi__8NEjCHi30qPq9vBxRoQ' },
]
</script>
---
transition: fade-out
---


<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 mb-8 tracking-widest drop-shadow-[0_0_20px_#f59e0b]">
  🔥 Market Research
</h1>

<div class="flex flex-col items-center justify-center text-center">

  <h2 class="text-2xl font-bold mb-4">Teltonika Topology</h2>

  <a href="https://teltonika-networks.com/use-cases/industrial-automation/cellular-router-for-aerial-critical-infrastructure-inspection" target="_blank" rel="noopener noreferrer">
    <img src="/teltonika_topology.png" alt="Clickable Image" width="500">
  </a>
</div>


---
layout: two-cols
---




<h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 mb-8 tracking-widest drop-shadow-[0_0_20px_#f59e0b]">
  🔥 Market Research
</h1>

<div class="flex flex-col items-center justify-center text-center">

[![Iridium Modules](/iridium_modules.png)](https://www.iridium.com/products/iridium-certus-9770/)

</div>
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


