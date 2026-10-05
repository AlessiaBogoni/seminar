// resources.js - Centralized resource registry and access rules

window.RESOURCES = [
  {
    id: 'infopaper',
    title: '📄 Paper Guidelines',
    desc: 'Formatting instructions, structure layout, literature quality tips, and expectations for your final paper.',
    file: 'infopaper.html',
    footer: 'Read Paper Guidelines →',
    tracks: ['BS', 'BT', 'MS'],
    releaseDate: {
      BS: '2026-10-01T09:00:00',
      BT: '2026-10-20T09:00:00',
      MS: '2026-11-01T09:00:00',
    },
    devOnly: { 
      BS: true, 
      BT: false,
      MS: true
    }
  },
  {
    id: 'infopresentation',
    title: '🎤 Presentation Guidelines',
    desc: 'Timing, weights and content of your presentation.',
    file: 'infopresentation.html',
    footer: 'Read Presentation Info →',
    tracks: ['BS', 'BT', 'MS'],
    releaseDate: {
      BS: '2026-10-01T09:00:00',
      BT: '2026-10-20T09:00:00',
      MS: '2026-11-01T09:00:00',
    },
    devOnly: { 
      BS: true, 
      BT: false,
      MS: true
    }
  },
  {
    id: 'infoproject',
    title: '🎯 Project Guidelines',
    desc: 'Requirements, methodology readings, survey platforms, and data analysis training resources.',
    file: 'infoproject.html',
    footer: 'Read Project Info →',
    tracks: ['BS', 'BT', 'MS'],
    releaseDate: {
      BS: '2026-10-01T09:00:00',
      BT: '2026-10-20T09:00:00',
      MS: '2026-11-01T09:00:00',
    },
    devOnly: { 
      BS: true, 
      BT: false,
      MS: true
    }
  },
  {
    id: 'syllabus',
    title: '📄 Syllabus',
    desc: 'Overview, requirements and expectations',
    file: 'syllabus.html',
    footer: 'Read Syllabus →',
    tracks: ['BS', 'MS'],
    releaseDate: {
      BS: '2026-10-01T09:00:00',
      BT: '2026-10-20T09:00:00',
      MS: '2026-11-01T09:00:00',
    },
    devOnly: { 
      BS: true, 
      BT: false,
      MS: true
    }
  },
  {
    id: 'standards',
    title: '📄 Formatting Standards',
    desc: 'Formatting rules and citation requirements',
    file: 'standards.html',
    footer: 'Read Formatting Standards →',
    tracks: ['BS', 'MS', 'BT'],
    releaseDate: {
      BS: '2026-10-01T09:00:00',
      BT: '2026-10-20T09:00:00',
      MS: '2026-11-01T09:00:00',
    },
    devOnly: { 
      BS: true, 
      BT: false,
      MS: true
    }

  },
  /* {
    id: 'slides_intro',
    title: '👋 Intro - Slides',
    desc: 'kick-off slides covering course structure, expectations, and milestones.',
    file: 'Intro_Meeting/dist-slides/Intro/index.html',
    footer: 'Open Slides →',
    tracks: ['BS', 'BT', 'MS']
  },
  {
    id: 'slides_emp',
    title: '🔬 Empirical Methods - Slides',
    desc: 'A recap on experiments and causality',
    file: 'Intro_Meeting/dist-slides/Intro_emp/index.html',
    footer: 'Open Slides →',
    tracks: ['BS', 'BT', 'MS'],
    releaseDate: "2026-10-15T09:00:00"
  },
  {
    id: 'slides_writing',
    title: '📝 How to Write - Slides',
    desc: 'Best practices for academic writing',
    file: 'Intro_Meeting/dist-slides/Intro_writing/index.html',
    footer: 'Open Slides →',
    tracks: ['BS', 'MS', 'BT'],
    devOnly: true
  },
  {
    id: 'slides_reading',
    title: '📖 How to Read - Slides',
    desc: 'Best practices for academic reading',
    file: 'Intro_Meeting/dist-slides/Intro_reading/index.html',
    footer: 'Open Slides →',
    tracks: ['BS', 'MS', 'BT']
  }, */
  /* {
    id: 'roadmap',
    title: '🗺️ Roadmap',
    desc: 'Interactive timeline tracking all course milestones, deadlines, and requirements step by step.',
    file: 'roadmap.html',
    footer: 'View Timeline →',
    tracks: ['BS', 'BT', 'MS']
  } */
];

/**
 * Helper to get a human-readable release date string for a given resource and track.
 */
window.getFormattedReleaseDate = function (resourceOrFile, track = 'BS') {
  const res = typeof resourceOrFile === 'string'
    ? window.RESOURCES.find(r => r.file === resourceOrFile || r.id === resourceOrFile)
    : resourceOrFile;

  if (!res || !res.releaseDate) return null;

  // Extract raw date string (handles both track object or plain string)
  const dateStr = typeof res.releaseDate === 'object'
    ? res.releaseDate[track]
    : res.releaseDate;

  if (!dateStr) return null;

  const dateObj = new Date(dateStr);

  // Return formatted readable string
  return dateObj.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

/**
 * Global helper to check whether a given resource object (or filename) is unlocked.
 */
window.isResourceUnlocked = function (resourceOrFile, track = 'BS') {
  const isDevMode = window.isDev || false;
  const currentTime = window.now || new Date();

  // Find resource object if a string (filename or ID) was passed
  const res = typeof resourceOrFile === 'string'
    ? window.RESOURCES.find(r => r.file === resourceOrFile || r.id === resourceOrFile)
    : resourceOrFile;

  // Unlisted resources default to accessible
  if (!res) return true;

  // 1. Dev Mode bypasses all locks and devOnly restrictions
  if (isDevMode) return true;

  // 2. Hide devOnly items from non-dev users
  if (res.devOnly) return false;

  // 3. Track accessibility check
  if (res.tracks && !res.tracks.includes(track)) return false;

  // 4. Release date check (handles track-specific object or global string date)
  if (res.releaseDate) {
    const targetDateStr = typeof res.releaseDate === 'object'
      ? res.releaseDate[track]
      : res.releaseDate;

    if (targetDateStr && currentTime < new Date(targetDateStr)) {
      return false; // Still locked
    }
  }

  return true;
};