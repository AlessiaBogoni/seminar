---
theme: default
defaults:
  class: 'bg-[#0f172a] text-white'
background: '#0f172a'
routerMode: memory
class: text-slate-100 bg-[#0f172a]'
highlighter: shiki
lineNumbers: false
info: |
  ## Chair of Labor and Organizational Economics - Course Intro
  Dynamic presentation layout supporting BS, BT, and MS tracks.
canvasWidth: 980
---

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();
</script>

# <span v-if="track === 'BT'">Bachelor Thesis</span><span v-else-if="track === 'MS'">Master Seminar: Labor Economics</span><span v-else>Bachelor Seminar: Behavioral Economics in Action</span>
### Intro Meeting
<p class="mt-4 text-slate-400">Chair of Labor and Organizational Economics<br>Julius-Maximilians-Universität Würzburg</p>

---
layout: default
---

# Who are we?

Research group **“Labour and Organizational Economics”**:
- Steffen Altmann
- Alessia Bogoni
- Lorenzo Fontana

We are interested in:
- Behavioral Economics
- Experimental Economics
- Labor Economics
- Organizational Economics

---
layout: default
---

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();
</script>

# Who are you?

<div v-if="track === 'BT'">
  <ul>
    <li>Students in B.Sc. Wirtschaftswissenschaften</li>
    <li>Students with other academic majors</li>
    <li>At the final stage of your Bachelor's program</li>
  </ul>
</div>

<div v-else-if="track === 'MS'">
  <ul>
    <li class="text-amber-400 font-semibold">Master Seminar students</li>
  </ul>
</div>

<div v-else>
  <ul>
    <li class="text-amber-400 font-semibold">Bachelor Seminar students</li>
  </ul>
</div>

---
layout: default
---

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();
</script>

<div v-if="track === 'BT'">

# Bachelor thesis - your final paper

- Your (first) major independent research project
- A chance to show that you can develop, structure, and answer a research question on your own
- Ideally, you build on skills from seminar work, academic writing, and empirical methods
- A strong thesis is not only feasible, but also interesting to you and relevant for your future path

</div>

<div v-else>

# Seminar Requirements

<div class="space-y-2 text-slate-300">
  <ul>
    <li class="text-amber-400 font-semibold"><span v-if="track === 'MS'">Master Seminar students</span><span v-else>Bachelor Seminar students</span></li>
    <li>Active participation, literature review, and presentation of selected topics.</li>
  </ul>
</div>

</div>

---
layout: default
---

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();
</script>

<div v-if="track === 'BT'">

# Bachelor thesis - prerequisites

- Official prerequisites: at least 100 ECTS
- Recommended prerequisites:
  - You have completed a seminar paper $\rightarrow$ your thesis is not your first scholarly paper
  - You have completed a course on academic writing $\rightarrow$ familiar with style, conventions, and citations
  - You have completed a course in empirical methods $\rightarrow$ interpret econometric results
  - You have completed a substantial part of your studies $\rightarrow$ in-depth understanding of economic thinking
  - **$\rightarrow$ Please think twice before applying if you feel you do not meet any requirements**

</div>

<div v-else>

# Seminar Overview & Objectives

<div class="space-y-2 text-slate-300">
  <p>Welcome to the seminar track! Here you will engage deeply with modern empirical literature, evaluate research methods, and present your findings.</p>
</div>

</div>

---
layout: default
---

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();
</script>

<div v-if="track === 'BT'">

# Bachelor Thesis - An Own Empirical Project

- You choose a research question and try to find an answer.
- What is expected?
  - You conduct your own survey or experiment and collect data.
  - Think about survey/experiment design, sampling, pool of participants, to answer the research question.
- The target is a (pilot) survey or experiment to test your hypotheses.
- Critically analyze your data: the goal is to find a well-suited presentation of preliminary findings.
- Relate your project to the broader topic and literature.

</div>

<div v-else>

# Seminar Setup

- Review assigned research papers thoroughly before sessions.
- Prepare discussion points and critical feedback for fellow presenters.
- Active engagement is key to getting the most out of this seminar.

</div>

---
layout: default
---

<script setup>
import { computed } from 'vue';
import { BIBLIOGRAPHY } from './references.js';

const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();

const bibliographyEntries = computed(() => {
  const bib = BIBLIOGRAPHY || {};
  const entries = Object.keys(bib).map(key => ({
    key,
    ...bib[key]
  }));
  return entries.filter(item => {
    if (!item.tracks || !Array.isArray(item.tracks)) return false; 
    if (track === 'BT') return item.tracks.includes('BT');
    if (track === 'BS') return item.tracks.includes('BS');
    if (track === 'MS') return item.tracks.includes('MS') || item.tracks.includes('BS');
    return false;
  });
});
</script>

# <span v-if="track === 'MS'">Master Seminar Topics</span><span v-else>Bachelor Seminar Topics</span>

<p class="text-slate-400 text-sm mb-3">The following seminar topics are available for your track:</p>

<div class="space-y-2 text-sm text-slate-300 max-h-[350px] overflow-y-auto pr-2">
  <div v-for="item in bibliographyEntries" :key="item.key" class="p-2.5 bg-slate-800/60 rounded border border-slate-700">
    <strong>{{ item.author }}</strong> ({{ item.year }}). <em>{{ item.title }}</em>.
  </div>
</div>

---
layout: default
---

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();
</script>

<div v-if="track === 'BT'">

# Inspiration for Your Bachelor Thesis Topic

- Good thesis ideas often start from real contexts you know well: student job, sports club, volunteering, student initiative.
- These environments give access to relevant questions, realistic settings, and participants.
- Examples of previous student projects:
  - **Choice Difficulty and Delegation in Hotel Booking:** studying whether difficult choices increase willingness to delegate decisions via online survey/experiment.
  - **Entrepreneurial Red Flags and Behavioral Responses:** experimentally studying how founders react to negative information shocks.

</div>

<div v-else>

# Literature Discussion Guidelines

- Focus on identification strategies and empirical findings.
- Consider potential extensions or alternative research questions for each paper.

</div>

---
layout: default
---

<script setup>
import { computed } from 'vue';
import { BIBLIOGRAPHY } from './references.js';

const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();

const bibliographyEntries = computed(() => {
  const bib = BIBLIOGRAPHY || {};
  const entries = Object.keys(bib).map(key => ({
    key,
    ...bib[key]
  }));
  return entries.filter(item => {
    if (!item.tracks || !Array.isArray(item.tracks)) return false; 
    if (track === 'BT') return item.tracks.includes('BT');
    if (track === 'BS') return item.tracks.includes('BS');
    if (track === 'MS') return item.tracks.includes('MS') || item.tracks.includes('BS');
    return false;
  });
});
</script>

<div v-if="track === 'BT'">

# Examples from the Literature

<div class="space-y-3 text-sm text-slate-300">
  <div v-for="item in bibliographyEntries.slice(0, 4)" :key="item.key" class="p-3 bg-slate-800/60 rounded border border-slate-700">
    <strong>{{ item.author }}</strong> ({{ item.year }}). <em>{{ item.title }}</em>.
  </div>
</div>

</div>

<div v-else>

# Key Readings Reference

<div class="space-y-3 text-sm text-slate-300 max-h-[350px] overflow-y-auto pr-2">
  <div v-for="item in bibliographyEntries.slice(0, 4)" :key="item.key" class="p-3 bg-slate-800/60 rounded border border-slate-700">
    <strong>{{ item.author }}</strong> ({{ item.year }}). <em>{{ item.title }}</em>.
  </div>
</div>

</div>

---
layout: default
---

# A tool to get you up to speed

<div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-4">
  <div class="md:col-span-7 space-y-3 text-sm">
    <div class="text-blue-400 font-bold uppercase tracking-wider text-xs">Behavioral Econ Course Assistant</div>
    <ul class="space-y-2 text-slate-300">
      <li>• Designated AI ChatBOT</li>
      <li>• Trained on course materials provided in WueCampus</li>
      <li>• Available through WueCampus course room</li>
      <li>• Helps review or get started with key concepts, definitions, and methods</li>
      <li>• Useful to catch up and get up to speed</li>
      <li>• <strong class="text-blue-400">Does not replace</strong> careful work with course materials and original research papers!</li>
    </ul>
  </div>
  <div class="md:col-span-5 flex justify-center">
    <img src="./BOT_qrcode.png" alt="Bot QR Code" class="w-48 h-48 rounded-lg border border-slate-700 shadow-md">
  </div>
</div>

---
layout: default
---

<script setup>
import { computed } from 'vue';
import { SHARED_TIMELINE_DATA } from './shared-data.js';

const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();

const roadmapEvents = computed(() => {
  const data = SHARED_TIMELINE_DATA || [];
  return data.filter(item => item.Groups && item.Groups.includes(track));
});

/*todo: include a filter here to only show them milestone/blocks instead of a roadmap */

</script>

# Your Milestone Roadmap

<div class="space-y-3 max-h-[380px] overflow-y-auto pr-3 text-sm">
  <div v-for="event in roadmapEvents" :key="event.ID" class="p-3 bg-slate-800/50 rounded-lg border border-slate-700/80 flex flex-col gap-1">
    <div class="flex justify-between items-center text-xs text-blue-400 font-semibold">
      <span>🗓️ {{ event.TargetDate }}</span>
    </div>
    <div class="font-bold text-slate-100 text-base">{{ event.MilestoneName }}</div>
    <div class="text-slate-400 text-xs leading-relaxed" v-html="event.description"></div>
  </div>
</div>

---
layout: default
---

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || localStorage.getItem('student_track') || 'BS').toUpperCase();
</script>

<div v-if="track === 'BT'">

# Next Steps

- Think about a topic and research question that interests you.
- Print and fill out the Project Draft form. Please bring it to the individual meeting.
- We inform you thereafter on your topic and supervisor.
- You can start working on your thesis.

**Have a good start!**

</div>

<div v-else-if="track === 'MS'">

# Next Steps

- Review your course reading list and preparation notes.
- Prepare for your initial topic assignment session.

</div>

<div v-else>

# Next Steps

- Review your provided preliminary materials.

<div class="mt-6 p-4 bg-blue-950/40 border border-blue-800/50 rounded-lg text-sm text-slate-300">
  Please ensure you complete your <strong>Topic Selection</strong> on schedule. Check your roadmap for specific milestone dates.
</div>

</div>

---
layout: center
class: text-center
---

# See you soon!

We look forward to seeing you at the upcoming course sessions.