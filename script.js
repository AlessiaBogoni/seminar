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

window.isDevOnlyForGroup = function (devOnly, group) {
  if (!devOnly) return false;

  // 1. If devOnly is a boolean (e.g., devOnly: true)
  if (typeof devOnly === 'boolean') {
    return devOnly;
  }

  // 2. If devOnly is an array (e.g., devOnly: ['BS', 'BT'])
  if (Array.isArray(devOnly)) {
    return devOnly.includes(group);
  }

  // 3. If devOnly is an object (e.g., devOnly: { BS: true, BT: false })
  if (typeof devOnly === 'object') {
    return !!devOnly[group];
  }

  return false;
};

function protectCurrentPage() {
  if (window.isDev) return;

  const currentPageFile = window.location.pathname.split('/').pop() || 'index.html';
  const currentGroup = getActiveTrack();

  // Find resource entry for this page
  const currentRes = window.RESOURCES ? window.RESOURCES.find(r => r.file === currentPageFile) : null;

  if (currentRes) {
    // 1. Check if dev-only for this specific group
    if (isDevOnlyForGroup(currentRes.devOnly, currentGroup)) {
      renderLockedPage(currentGroup, "This document is currently under development.");
      return;
    }

    // 2. Check standard release date lock
    if (typeof window.isResourceUnlocked === 'function' && !window.isResourceUnlocked(currentPageFile, currentGroup)) {
      const dateText = typeof window.getFormattedReleaseDate === 'function'
        ? window.getFormattedReleaseDate(currentPageFile, currentGroup)
        : 'a later date';

      renderLockedPage(currentGroup, `This document is scheduled for release on <strong>${dateText}</strong>`);
    }
  }
}

function renderLockedPage(group, message) {
  if (!document.body) return;
  document.body.innerHTML = `
    <div style="max-width: 500px; margin: 100px auto; text-align: center; font-family: sans-serif; padding: 30px; border-radius: 8px; background: #77a;">
      <h1 style="font-size: 48px; margin-bottom: 10px;">🔒</h1>
      <h2>Content Locked</h2>
      <p style="color: #ccc;">${message}</p>
      <br>
      <a href="index.html?group=${group}" style="color: #0b2d60; text-decoration: none;">← Return to Home Page</a>
    </div>
  `;
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

  // Add this helper near the top of script.js


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

function renderDevBanner() {
  if (!window.isDev) return;

  // Prevent duplicate banners
  if (document.getElementById('dev-mode-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'dev-mode-banner';
  banner.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background: #980029;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 700;
    text-align: center;
    padding: 0.4rem 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 0.05em;
  `;

  banner.innerHTML = `
    <span>🛠️ <strong>DEV MODE ACTIVE</strong> — Hidden & Locked Content Unlocked</span>
    <button onclick="exitDevMode()" style="
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.5);
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.75rem;
      font-weight: 600;
      transition: background 0.2s;
    " onmouseover="this.style.background='rgba(255,255,255,0.4)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
      Exit Dev Mode ✕
    </button>
  `;

  document.body.prepend(banner);

  // Push page content down slightly so top header isn't obscured
  document.body.style.marginTop = `${banner.offsetHeight}px`;
}

// Function to exit dev mode easily
window.exitDevMode = function () {
  sessionStorage.removeItem('devMode');
  const url = new URL(window.location.href);
  url.searchParams.delete('mode');
  window.location.href = url.toString();
};

// ==========================================
// RESOURCE UNLOCK & FORMATTING UTILITIES
// ==========================================

window.getFormattedReleaseDate = function (res, track) {
  if (!res || !res.releaseDate || !res.releaseDate[track]) return null;
  const dateObj = new Date(res.releaseDate[track]);
  if (isNaN(dateObj.getTime())) return null;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

window.isResourceUnlocked = function (fileOrRes, track) {
  if (window.isDev) return true;

  let res = typeof fileOrRes === 'string'
    ? (window.RESOURCES ? window.RESOURCES.find(r => r.file === fileOrRes) : null)
    : fileOrRes;

  if (!res) return true;

  if (window.isDevOnlyForGroup(res.devOnly, track)) {
    return false;
  }

  if (!res.releaseDate || !res.releaseDate[track]) return true;

  const releaseTime = new Date(res.releaseDate[track]).getTime();
  return Date.now() >= releaseTime;
};


// ==========================================
// 4. DEFERRED INITIALIZATION ON DOM READY
// ==========================================

function onInit() {

  renderDevBanner();

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