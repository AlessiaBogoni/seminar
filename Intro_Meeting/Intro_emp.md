---
theme: default
defaults:
  class: 'bg-[#0f172a] text-white'
background: '#0f172a'
routerMode: memory
class: 'text-slate-100 bg-[#0f172a]'
highlighter: shiki
lineNumbers: false
info: |
  ## Methodological Foundations
  Labour and Organizational Economics
canvasWidth: 980
---

# Methodological Foundations
### Labour and Organizational Economics
<p class="mt-4 text-slate-400">Julius-Maximilians-Universität Würzburg</p>

---

<div class="grid grid-cols-1 gap-6">
  <h2 class="text-2xl font-bold border-b pb-2">Today’s Outline</h2>
  <div class="grid grid-cols-2 gap-4 text-left">
    <div class="space-y-2">
      <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded shadow-sm">🔹 How economic research usually develops</div>
      <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded shadow-sm">🔹 The core logic of experiments</div>
      <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded shadow-sm">🔹 Control and randomization</div>
    </div>
    <div class="space-y-2">
      <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded shadow-sm">🔹 Main types of experiments</div>
      <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded shadow-sm">🔹 Survey and audit experiments</div>
      <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded shadow-sm">🔹 Beyond experiments</div>
    </div>
  </div>
</div>

<style>
.slidev-layout {
  font-size: 1.1rem;
}
</style>

---

<div>
  <h2 class="text-2xl font-bold mb-4">How Economic Research Usually Develops</h2>
  <p class="text-sm text-gray-500 mb-6">The typical research agenda looks roughly as follows:</p>
  
  <div class="grid grid-cols-3 gap-4">
    <div class="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow">
      <div class="text-blue-600 font-bold text-lg mb-1">01</div>
      <div class="font-semibold">Existing theory</div>
    </div>
    <div class="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow">
      <div class="text-blue-600 font-bold text-lg mb-1">02</div>
      <div class="font-semibold">Conflicting evidence</div>
      <p class="text-xs text-gray-500 mt-1">Anecdotal, lab, field, introspection</p>
    </div>
    <div class="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow">
      <div class="text-blue-600 font-bold text-lg mb-1">03</div>
      <div class="font-semibold">Robust Deviations?</div>
      <p class="text-xs text-gray-500 mt-1">Systematic patterns</p>
    </div>
    <div class="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow">
      <div class="text-blue-600 font-bold text-lg mb-1">04</div>
      <div class="font-semibold">Alternative Theory</div>
      <p class="text-xs text-gray-500 mt-1">Development phase</p>
    </div>
    <div class="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow">
      <div class="text-blue-600 font-bold text-lg mb-1">05</div>
      <div class="font-semibold">Testing Theories</div>
      <p class="text-xs text-gray-500 mt-1">Further evidence gathering</p>
    </div>
    <div class="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow">
      <div class="text-blue-600 font-bold text-lg mb-1">06</div>
      <div class="font-semibold">Application</div>
      <p class="text-xs text-gray-500 mt-1">Practical implications</p>
    </div>
  </div>

  <div class="mt-6 p-3 bg-blue-50 dark:bg-gray-900 border-l-4 border-blue-500 text-sm">
    💡 <em>Note: This is not a one-way street...</em>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">Two Fundamental Problems of Empirical Research</h2>
  <p class="text-sm mb-4">Many important questions are hard to assess empirically:</p>
  
  <div class="grid grid-cols-2 gap-3 mb-6">
    <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded border">🏫 Do smaller classes improve students‘ educational achievements?</div>
    <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded border">💰 Do people work more when wages are higher?</div>
    <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded border">🌍 Which institutions reduce environmental pollution best?</div>
    <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded border">🤝 Do social preferences enhance cooperation in teams?</div>
  </div>

  <div class="p-4 bg-red-50 dark:bg-red-950 border border-red-200 rounded-lg">
    <h3 class="font-bold text-red-600 dark:text-red-400 mb-2">Two fundamental problems:</h3>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li>Outcomes of interest are measured only imprecisely (or not at all)</li>
      <li><strong>Correlations vs. Identification</strong> of causal relationships</li>
    </ul>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">Case Study: Class Size & Educational Outcomes</h2>
  
  <div class="p-4 bg-blue-50 dark:bg-gray-800 rounded-lg border border-blue-200 mb-4">
    <h3 class="font-bold text-sm mb-1">Scenario (Bavarian Ministry of Education data, 2025):</h3>
    <p class="text-sm">Dataset includes student counts, teacher counts, and student grades for all high schools in Bavaria. Analysis shows that <strong>grades are better</strong> where the student/teacher ratio is low.</p>
  </div>

  <div class="p-4 bg-yellow-50 dark:bg-yellow-950 border border-yellow-300 rounded-lg text-center">
    <p class="text-lg font-bold text-yellow-800 dark:text-yellow-200">Case closed? Do smaller classes improve outcomes?</p>
    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">Spoiler: Not necessarily as straightforward as it seems...</p>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">What could go wrong?</h2>
  
  <div class="space-y-3">
    <div class="p-3 border-l-4 border-red-500 bg-gray-50 dark:bg-gray-800 rounded">
      <strong>Systematic Differences:</strong><br> Achievement gaps might be driven by urban vs. rural setups, school funding, or extracurricular differences rather than class size.
    </div>
    <div class="p-3 border-l-4 border-red-500 bg-gray-50 dark:bg-gray-800 rounded">
      <strong>Selection Effects:</strong><br> Better students (or more caring parents) select into schools with better ratios. Better teachers apply to smaller-class schools.
    </div>
    <div class="p-3 border-l-4 border-red-500 bg-gray-50 dark:bg-gray-800 rounded">
      <strong>Measurement Issues:</strong><br> How do we quantify success? (Grades, test scores, lifetime earnings, crime rates?)
    </div>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">Lack of control hinders causal identification</h2>
  
  <div class="grid grid-cols-2 gap-4 mb-6">
    <div class="p-4 bg-red-50 dark:bg-red-950 rounded border border-red-200">
      <h3 class="font-bold text-red-600 mb-2">The Pitfalls:</h3>
      <ul class="list-disc pl-5 space-y-1 ">
        <li>No clean measurement</li>
        <li>Omitted variables & confounds</li>
        <li>Non-random assignment</li>
        <li>Lack of counterfactuals</li>
      </ul>
    </div>
    <div class="p-4 bg-green-50 dark:bg-green-950 rounded border border-green-200 flex flex-col justify-center">
      <h3 class="font-bold text-green-600 mb-2">The Solution:</h3>
      <p class=" text-center">High-quality data <br>+<br> robust empirical methods solve these issues.</p>
      <div class="mt-3 p-2 bg-green-100 dark:bg-green-900 rounded text-sm font-bold text-center">
        👉 Key Method: Economic Experiments
      </div>
    </div>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">The Essence of Experiments: Control!</h2>
  <p class="text-sm mb-4">Core principles of social science experiments:</p>

  <div class="grid grid-cols-3 gap-4 text-center">
    <div class="p-4 border rounded bg-white dark:bg-gray-800 shadow">
      <div class="text-xl mb-2">🎲</div>
      <h3 class="font-bold text-sm mb-1">Randomization</h3>
      <p class="text-xs text-gray-500">Split participants into treatment and control groups.</p>
    </div>
    <div class="p-4 border rounded bg-white dark:bg-gray-800 shadow">
      <div class="text-xl mb-2">⚖️</div>
      <h3 class="font-bold text-sm mb-1">Vary One Factor</h3>
      <p class="text-xs text-gray-500">Hold everything else strictly constant across groups.</p>
    </div>
    <div class="p-4 border rounded bg-white dark:bg-gray-800 shadow">
      <div class="text-xl mb-2">🎯</div>
      <h3 class="font-bold text-sm mb-1">Causal Impact</h3>
      <p class="text-xs text-gray-500">Isolate exact consequences and clean outcome measurements.</p>
    </div>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">Why Randomization Matters</h2>
  
  <div class="space-y-3">
    <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded border">
       Experimenter maintains total control over key environmental aspects.
    </div>
    <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded border">
       Ensures no systematic participant characteristics bias the treatment groups (given sufficient sample size).
    </div>
    <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded border ">
      Eradicates pre-existing environmental and background disparities.
    </div>
  </div>

  <div class="mt-6 p-4 bg-blue-50 dark:bg-gray-900 rounded-lg italic border-l-4 border-blue-500 text-right">
    "Without randomization, individuals change behavior even without the intervention, making it impossible to separate true effects from background noise."
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">Types of Experiments</h2>
  
  <div class="grid grid-cols-2 gap-6">
    <div class="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <h3 class="font-bold text-blue-600 mb-2">Locations & Participants</h3>
      <ul class="list-disc pl-5 space-y-1">
        <li>Lab experiments</li>
        <li>Field experiments</li>
        <div> &rarr; Internet / online experiments</div>
      </ul>
    </div>
    <div class="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <h3 class="font-bold text-blue-600 mb-2">Primary Purposes</h3>
      <ul class="list-disc pl-5 space-y-1 ">
        <li>Measure personality and preferences</li>
        <li>Causal identification of treatment effects</li>
        <li>“Wind-tunnel” tests for policy proposals</li>
      </ul>
    </div>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">Survey Experiments</h2>
  
  <div class="p-3 bg-gray-50 dark:bg-gray-800 rounded border mb-4 ">
    <strong>Definition:</strong> Experiments directly embedded into structural surveys.
  </div>

  <div class="grid grid-cols-2 gap-4 ">
    <div class="p-4 border rounded bg-white dark:bg-gray-800">
      <h3 class="font-bold mb-2">Common setup</h3>
      <ul class="list-decimal pl-5 space-y-1">
        <li>Elicit baseline subjective beliefs.</li>
        <li><strong>Treatment:</strong> Provision of truthful information regarding that belief.</li>
      </ul>
    </div>
    <div class="p-4 border rounded bg-white dark:bg-gray-800 flex flex-col justify-center">
      <h3 class="font-bold mb-2">Core question</h3>
      <p class="italic text-blue-600 dark:text-blue-400">“How do beliefs about X causally affect behavior Y?”</p>
    </div>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-3">Example: Climate Change Survey Experiment</h2>
  <p class="text-xs text-gray-500 mb-3"><strong>Andre et al. (2024):</strong> <em>“Can correcting misperceptions about others’ climate attitudes increase willingness to act against climate change?”</em></p>

  <div class="grid grid-cols-3 gap-3 ">
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-800">
      <div class="font-bold text-blue-600 mb-1">Control Group</div>
      <p>No additional information provided.</p>
    </div>
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-800">
      <div class="font-bold text-blue-600 mb-1">Behavior Treatment</div>
      <p>Informed that 62% of Americans try to fight global warming.</p>
    </div>
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-800">
      <div class="font-bold text-blue-600 mb-1">Norms Treatment</div>
      <p>Informed that 79% think people <em>should</em> try to fight global warming.</p>
    </div>
  </div>
  <div class="mt-3 p-2 bg-blue-50 dark:bg-gray-900 text-xs rounded text-center">
    <strong>Outcome:</strong> Incentivized donation decision to a climate charity (up to $450).
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-2">Main finding: Correcting misperceptions</h2>
  
  <!-- Recreated Chart Placeholder -->
  <div class="my-2 p-3 border border-dashed border-gray-400 rounded-lg text-center bg-gray-50 dark:bg-gray-800">
    <div class="text-[10px] text-gray-500 mb-2 font-mono">
    <img src="">
    </div>
  </div>

  <ul class="list-disc pl-5 space-y-1 text-xs">
    <li><strong>Perceived social norms</strong> and <strong>behavior beliefs</strong> significantly drive contributions (alongside baseline altruism & patience).</li>
    <li>Demonstrates the strong power of information provision via survey experiments.</li>
  </ul>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">Audit studies & Correspondence tests</h2>
  
  <div class="space-y-3 ">
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-800">
      <strong>Correspondence Tests:</strong> Field experiments where researchers send fictitious applications (for jobs, services, housing, advice) to evaluate discrimination.
    </div>
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-800">
      <strong>Example:</strong> Job applications using synthetic CVs varying applicant names, gender, or age.
    </div>
    <div class="p-3 border rounded bg-red-50 dark:bg-red-950 border-red-200">
      ⚠️ <em>Note: These methods are heavily debated from an ethical viewpoint.</em>
    </div>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-3">Example: German child-care audit study</h2>
  
  <div class="p-3 bg-blue-50 dark:bg-gray-800 rounded border border-blue-200 mb-3 text-sm">
    <strong>Hermes et al. (2023):</strong> Do child-care center managers discriminate against parents with a migration background?
  </div>

  <div class="grid grid-cols-2 gap-4">
    <div class="p-3 border rounded bg-white dark:bg-gray-800">
      <div class="font-bold mb-1">Experimental setup</div>
      <p>Nationwide field experiment in Germany sending &sim; 18,000$ emails to early child-care centers.</p>
    </div>
    <div class="p-3 border rounded bg-white dark:bg-gray-800">
      <div class="font-bold mb-1">Treatment variation</div>
      <p>Signaled migrant background using typical sender names (e.g., <em>Stefanie Schmidt</em> vs. <em>Fatma Yildirim</em>).</p>
    </div>
  </div>

  <div class="mt-3 p-3 bg-green-50 dark:bg-green-950 rounded border border-green-200 text-center font-bold text-green-700 dark:text-green-300">
    Main Finding: Response rate for typical "German" names was &sim;5 percentage points higher.<br>
    <span class="font-normal text-sm text-gray-500">(Remember: If you don't get a response, you can't get a positive response!)</span>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">Summary</h2>
  
  <div class="space-y-3 ">
    <div class="p-3 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-800 rounded">
      Experiments in economics serve distinct objectives and span diverse locations and participant pools.
    </div>
    <div class="p-3 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-800 rounded">
      They directly tackle the two fundamental empirical problems: <br> &rarr; clean measurement <br> &rarr; causal identification.
    </div>
    <div class="p-3 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-800 rounded">
      A <strong>high degree of control</strong> over the data-generating process is absolutely essential.
    </div>
  </div>
</div>

---

<div>
  <h2 class="text-2xl font-bold mb-4">Beyond experiments</h2>
  
  <div class="space-y-3">
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-800">
      <strong>Complementarity:</strong> <br>Data from experiments, surveys, and administrative sources complement each other.
    </div>
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-800">
      <strong>Natural experiments:</strong> <br>Naturally occurring data (e.g., policy shifts, lottery-allocated housing vouchers) mimicking randomized trials.
    </div>
    <div class="p-3 border rounded bg-gray-50 dark:bg-gray-800">
      <strong>Modern combination:</strong> <br>Modern research often merges survey information-provision experiments with official administrative register data.
    </div>
  </div>
</div>

---

<div class="flex flex-col items-center justify-center h-full text-center">
  <h1 class="text-4xl font-extrabold mb-4">Any questions?</h1>
</div>