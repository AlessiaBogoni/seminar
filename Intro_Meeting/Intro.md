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
const track = (urlParams.get('group') ||  'BS').toUpperCase();
</script>

<!-- TITLE SLIDE -->

# <span v-if="track === 'BT'">Bachelor Thesis</span><span v-else-if="track === 'MS'">Master Seminar: Labor Economics</span><span v-else>Bachelor Seminar: Behavioral Economics in Action</span>
### Intro Meeting
<p class="mt-4 text-slate-400">Chair of Labor and Organizational Economics<br>Julius-Maximilians-Universität Würzburg</p>

---
layout: default
---
<!-- # Who are we? -->

# Who are we?
<div v-click >
Research group <strong>“Labour and Organizational Economics”</strong>:
<ul>
<li>Steffen Altmann</li>
<li>Michael Hilweg-Waldeck</li>
<li>Alessia Bogoni</li>
<li>Lorenzo Fontana</li>
</ul>
</div>

<div v-click class="mt-5">
We are interested in:
<ul>
<li>Behavioral Economics</li>
<li>Experimental Economics</li>
<li>Labor Economics</li>
<li>Organizational Economics</li>
</ul>
</div >

---
layout: default
---
<!-- # Who are you? -->

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') ||  'BS').toUpperCase();
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
<!-- # What is a ... ? -->

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') ||  'BS').toUpperCase();
</script>

<div v-if="track === 'BT'">

# Bachelor thesis - your final paper
  <v-clicks>
    <ul>
      <li>Your (first) major independent research project</li>
      <li>A chance to show that you can develop, structure, and answer a research question on your own</li>
      <li>Ideally, you build on skills from seminar work, academic writing, and empirical methods</li>
      <li>A strong thesis is not only feasible, but also interesting to you and relevant for your future path</li>
    </ul>
  </v-clicks>
</div>

<div v-else-if="track === 'BS'">

# Bachelor Seminar - your first(?) academic paper 

  <div class="space-y-2 text-slate-300">
    In your bachelor seminar you will: 
      <ul>
        <li>engage deeply with modern empirical literature</li>
        <li>evaluate research methods</li>
        <li>Report findings</li>
        <li>Propose alternative methods, mechanism and interventions!</li>
      </ul>
  </div>

</div>

<div v-else-if="track === 'MS'">

# Master Seminar - the occasion to put into practice what you learned 

  <div class="space-y-2 text-slate-300">
      In your master seminar you will: 
      <ul>
        <li>engage deeply with modern empirical literature</li>
        <li>evaluate research methods</li>
        <li>propose alternative methods</li>
        <li>run your own project</li>
      </ul>
  </div>
</div>

---
layout: default
---
<!-- Prerequisites -->

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') ||  'BS').toUpperCase();
</script>


<div v-if="track === 'BT'">
  <h1 class="text-3xl font-bold mb-4">Bachelor thesis - prerequisites</h1>
  <v-clicks depth="2">
  <ul  class="space-y-2 list-disc list-inside">
    <li>Official prerequisites: at least 100 ECTS</li>
    <li>Recommended prerequisites:
      <ul class="list-disc pl-6 space-y-1 mt-1">
        <li >You have completed a seminar paper &rarr; your thesis is not your first scholarly paper</li>
        <li >You have completed a course on academic writing &rarr; familiar with style, conventions, and citations</li>
        <li >You have completed a course in empirical methods &rarr; interpret econometric results</li>
        <li >You have completed a substantial part of your studies &rarr; in-depth understanding of economic thinking</li>
        <li class="font-bold">&rarr; Please think twice before applying if you feel you do not meet any requirements</li>
      </ul>
    </li>
  </ul>
  </v-clicks>
</div>

<div v-else-if="track === 'BS'">

# Seminar Prerequisites

<div class="space-y-2 text-slate-300">
  prerequisites bs 
</div>

</div>

<div v-else-if="track === 'MS'">

# Seminar Prerequisites

<div class="space-y-2 text-slate-300">
  prerequisites ms 
</div>

</div>


---
layout: default
---
<!-- Project Objectives -->

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') ||  'BS').toUpperCase();
</script>

<div v-if="track === 'BT'">

# Bachelor Thesis - Objectives 
<v-clicks depth="2">
  <ul class="space-y-2 list-disc list-inside">
    <li>You choose a research question and try to find an answer.</li>
    <li>What is expected?
      <ul class="list-disc pl-6 space-y-1 mt-1">
        <li>You conduct your own survey or experiment and collect data.</li>
        <li>Think about survey/experiment design, sampling, pool of participants, to answer the research question.</li>
        <li>The target is a (pilot) survey or experiment to test your hypotheses.</li>
        <li>Critically analyze your data: the goal is to find a well-suited presentation of preliminary findings.</li>
        <li>Relate your project to the broader topic and literature.</li>
      </ul>
    </li>
  </ul>
</v-clicks>
</div>

<div v-else-if="track === 'BS'">

# Bachelor Seminar - Objectives 

  <div>
 find a mechanism, propose etc etc 
  </div>
</div>
<div v-else-if="track === 'MS'" >

# Master Seminar - Objectives 
  <div>
    <ul>
      <li>Option 1
        <ul>
        <li>step 1 of option1 </li>
        </ul>
      </li>
      <li>Option 2
        <ul>
        <li>step 1 of option2 </li>
        </ul>
      </li>
    </ul>
  </div>

</div>


---
layout: default
---

<!-- Topics -->

<script setup>
import { computed } from 'vue';
import { BIBLIOGRAPHY } from './references.js';

const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') ||  'BS').toUpperCase();

const bibliographyEntries = computed(() => {
  const bib = BIBLIOGRAPHY || {};
  const entries = Object.keys(bib).map(key => ({
    key,
    ...bib[key]
  }));
  return entries.filter(item => {
    if (!item.note || !item.tracks || !Array.isArray(item.tracks)) return false; 
    if (track === 'BT') return item.tracks.includes('BT');
    if (track === 'BS') return item.tracks.includes('BS');
    if (track === 'MS') return item.tracks.includes('MS') || item.tracks.includes('BS');
    return false;
  });
});
</script>
  <div v-if="track === 'MS'">
    <h1 >Master Seminar Topics - Replication</h1>
    <p class="text-slate-400 text-sm mb-3">The following seminar topics are available for replication:</p>
  </div>
  <div v-else-if="track === 'BS'">
    <h1>Bachelor Seminar Topics</h1>
    <p class="text-slate-400 text-sm mb-3">The following are suggestion topics from the literature:
    </p>
  </div>

  <div v-if="track !== 'BT'" class="space-y-2 text-sm text-slate-300 max-h-[350px] overflow-y-auto pr-2" >
    <div v-for="item in bibliographyEntries" :key="item.key" class="p-2.5 bg-slate-800/60 rounded border border-slate-700">
      <strong>{{ item.note }}</strong><br>
      <strong>{{ item.author }}</strong> ({{ item.year }}). <em>{{ item.title }}</em>.
    </div>
  </div>

  <div v-else-if="track === 'BT'">
    <div v-click.hide v-if="$clicks < 6">
    <h1>Inspiration for Your Bachelor Thesis Topic</h1>
      <v-clicks depth="2">
      <ul>
      <li>Good thesis ideas often start from real contexts you know well: student job, sports club, volunteering, student initiative.</li>
      <li>These environments give access to relevant questions, realistic settings, and participants.</li>
      <li>Examples of previous student projects:
      <ul>
        <li><strong>Choice Difficulty and Delegation in Hotel Booking:</strong> studying whether difficult choices increase willingness to delegate decisions via online survey/experiment.</li>
        <li><strong>Entrepreneurial Red Flags and Behavioral Responses:</strong> experimentally studying how founders react to negative information shocks.</li>
        </ul>
      </li>
      </ul>
      </v-clicks>
    </div>
    <div v-else>
      <h1>Inspiration for Your Bachelor Thesis Topic</h1>
      <p v-if="track === 'BT'" v-click>The following topics  from the literature might also be interesting for you:</p>
      <div class="space-y-2 text-sm text-slate-300 max-h-[350px] overflow-y-auto pr-2" >
        <div v-for="item in bibliographyEntries" :key="item.key" class="p-2.5 bg-slate-800/60 rounded border border-slate-700">
          <strong>{{ item.note }}</strong><br>
          <strong>{{ item.author }}</strong> ({{ item.year }}). <em>{{ item.title }}</em>.
        </div>
      </div>
    </div>
  </div>

  


---
layout: default
---
<!-- BOT/option2 topics -->

<script setup>
const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') || 'BS').toUpperCase();
</script>

<div v-if="track === 'MS'">

option 2 literature/idea (attention, right now only MS literature is replication package so use a idfferent method/field for this one, or change MS to MS1, MS 2)
</div>
<div v-else>

<h1>A tool to get you up to speed</h1>

<div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-4">
  <div class="md:col-span-7 space-y-3 text-sm">
    <div class="text-blue-400 font-bold uppercase tracking-wider text-xs">Behavioral Econ Course Assistant</div>
    <ul class="space-y-2 text-slate-300">
      <li>Designated AI ChatBOT</li>
      <li>Trained on course materials provided in WueCampus</li>
      <li>Available through WueCampus course room</li>
      <li>Helps review or get started with key concepts, definitions, and methods</li>
      <li>Useful to catch up and get up to speed</li>
      <li><strong class="text-blue-400">Does not replace</strong> careful work with course materials and original research papers!</li>
    </ul>
  </div>
  <div class="md:col-span-5 flex justify-center">
    <img src="./BOT_qrcode.png" alt="Bot QR Code" class="w-48 h-48 rounded-lg border border-slate-700 shadow-md">
  </div>
</div>
</div>

---
layout: default
---

<script setup>
import { computed } from 'vue';
import { SHARED_TIMELINE_DATA } from './shared-data.js';

const urlParams = new URLSearchParams(window.location.search);
const track = (urlParams.get('group') ||  'BS').toUpperCase();

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
const track = (urlParams.get('group') ||  'BS').toUpperCase();
</script>

<div v-if="track === 'BT'">

# Next Steps
<v-clicks depth="2">
<ul>
<li>Think about a topic and research question that interests you.</li>
<li>Print and fill out the Project Draft form. Please bring it to the individual meeting.</li>
<li>We inform you thereafter on your topic and supervisor.</li>
<li>You can start working on your thesis.</li>
</ul>
</v-clicks>

<p v-click class="align center"><strong>Have a good start!</strong></p>

</div>

<div v-else-if="track === 'MS'">

# Next Steps
<v-clicks>
<ul>
<li>Review your course reading list and preparation notes.</li>
<li>Prepare for your initial topic assignment session.</li>
</ul>
</v-clicks>
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