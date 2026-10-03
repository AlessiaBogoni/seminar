// ==========================================
// 1. SHARED TRACK CONFIG & HELPERS
// ==========================================

const VALID_TRACKS = ['BS', 'BT', 'MS'];

// Get active track from URL parameter, falling back to LocalStorage or 'BS'
function getActiveTrack() {
  const currentParams = new URLSearchParams(window.location.search);
  let groupParam = currentParams.get('group');

  if (!groupParam || !VALID_TRACKS.includes(groupParam.toUpperCase())) {
    return localStorage.getItem('student_track') || 'BS';
  }
  return groupParam.toUpperCase();
}


// ==========================================
// 2. DEV MODE & RELEASE LOCKING LOGIC
// ==========================================

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('mode') === 'dev') {
  sessionStorage.setItem('devMode', 'true');
} else if (urlParams.get('mode') === 'off') {
  sessionStorage.removeItem('devMode');
}

window.isDev = sessionStorage.getItem('devMode') === 'true';
window.now = new Date();

// Inside protectCurrentPage() in script.js:
function protectCurrentPage() {
  if (window.isDev) return;

  const currentPageFile = window.location.pathname.split('/').pop() || 'index.html';
  const currentGroup = getActiveTrack();

  if (typeof window.isResourceUnlocked === 'function' && !window.isResourceUnlocked(currentPageFile, currentGroup)) {
    // Get exact formatted release date for this page & track
    const dateText = typeof window.getFormattedReleaseDate === 'function'
      ? window.getFormattedReleaseDate(currentPageFile, currentGroup)
      : 'a later date';

    if (!document.body) return;
    document.body.innerHTML = `
      <div style="max-width: 500px; margin: 100px auto; text-align: center; font-family: sans-serif; padding: 30px;  border-radius: 8px; background: #77a;">
        <h1 style="font-size: 48px; margin-bottom: 10px;">🔒</h1>
        <h2>Content Locked</h2>
        <p style="color: #ccc;">This document is scheduled for release on <strong>${dateText}</strong></p>
        <br>
        <a href="index.html?group=${currentGroup}" style="color: #0b2d60; text-decoration: none;">← Return to Home Page</a>
      </div>
    `;
  }
}


// ==========================================
// 3. TRACK SELECTOR UI LOGIC
// ==========================================

function initTrackSelector() {
  const currentTrack = getActiveTrack();
  const selectors = document.querySelectorAll('.track-selector');

  if (selectors.length === 0) return;

  selectors.forEach(container => {
    container.innerHTML = `
      <button class="track-btn ${currentTrack === 'BS' ? 'active' : ''}" data-track="BS" onclick="switchTrack('BS')">Bachelor Seminar</button>
      <button class="track-btn ${currentTrack === 'BT' ? 'active' : ''}" data-track="BT" onclick="switchTrack('BT')">Bachelor Thesis</button>
      <button class="track-btn ${currentTrack === 'MS' ? 'active' : ''}" data-track="MS" onclick="switchTrack('MS')">Master Seminar</button>
    `;
  });
}

function switchTrack(track) {
  if (!VALID_TRACKS.includes(track)) return;

  localStorage.setItem('student_track', track);

  document.querySelectorAll('.track-btn').forEach(btn => {
    if (btn.getAttribute('data-track') === track) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const backLink = document.getElementById('back-link');
  if (backLink) {
    backLink.href = `index.html?group=${track}`;
  }

  // Check dynamically if a custom render function exists at runtime
  if (typeof renderPage === 'function') {
    if (window.history.pushState) {
      window.history.pushState({}, '', `${window.location.pathname}?group=${track}`);
    }
    renderPage(track);
  } else if (typeof renderRoadmap === 'function') {
    if (window.history.pushState) {
      window.history.pushState({}, '', `${window.location.pathname}?group=${track}`);
    }
    renderRoadmap(track);
  } else if (typeof renderHubResources === 'function') {
    if (window.history.pushState) {
      window.history.pushState({}, '', `${window.location.pathname}?group=${track}`);
    }
    renderHubResources(track);
  } else {
    // Fallback: full reload with updated URL query
    window.location.href = `${window.location.pathname}?group=${track}`;
  }
}


// ==========================================
// 4. DEFERRED INITIALIZATION ON DOM READY
// ==========================================

function onInit() {
  if (window.isDev) {
    document.querySelectorAll('.dev-only').forEach(el => el.style.display = 'block');
  }

  document.querySelectorAll('[data-release]').forEach(el => {
    const releaseDate = new Date(el.getAttribute('data-release'));
    if (window.now >= releaseDate || window.isDev) {
      el.classList.remove('locked');
    }
  });

  protectCurrentPage();
  initTrackSelector();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onInit);
} else {
  onInit();
}