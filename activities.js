/* ============================================================
   GED INTERACTIVES — CONTENT DATA
   ============================================================
   This is the only file you should need to edit to add new
   subjects, groups, or activities. index.html and subject.html
   both read from the lists below and build the page automatically.

   TO ADD A NEW ACTIVITY:
     Add one object to the ACTIVITIES array below. Use an existing
     "subject" key to slot it into that subject's page, and an
     existing "group" name to slot it into that group — or type a
     brand-new group name to create a new group automatically.
     Groups appear on the page in the order their FIRST activity
     appears in this list, so place new activities near others in
     the same group to keep things tidy (order doesn't affect
     function, only readability of this file).

   TO ADD A NEW SUBJECT:
     Add one object to the SUBJECTS array below, then add at least
     one activity with a matching "subject" key. A new tile appears
     on the home page automatically — no new HTML file needed.
   ============================================================ */

const SUBJECTS = [
  {
    key: 'language-arts',
    name: 'Language Arts',
    icon: '✏️',
    description: 'Argument & evidence, essay writing, and grammar & mechanics practice.'
  },
  {
    key: 'science',
    name: 'Science',
    icon: '🔬',
    description: 'Interactive explanations and real-world science practice.'
  },
  // To add a new subject, copy the block above and change key/name/icon/description.
];

const ACTIVITIES = [
  // ---------------- LANGUAGE ARTS ----------------
  {
    subject: 'language-arts',
    group: 'Argument & Evidence',
    icon: '📖',
    title: 'Evidence Analyst',
    description: 'Master analyzing arguments and evaluating evidence quality.',
    meta: 'GED RLA · 5 Phases · 20–30 min',
    url: 'EvidenceAnalyst_Activity-2.html'
  },
  {
    subject: 'language-arts',
    group: 'Essay Writing',
    icon: '✏️',
    title: 'Gatesburg Essay Builder',
    description: 'Write a complete persuasive essay step by step. Read passages, answer guiding questions, and watch your answers turn into an essay paragraph by paragraph.',
    meta: 'GED RLA/HiSET Writing · 5 Paragraphs · 45–60 min',
    url: 'EssayBuilder_Gatesburg-2-83026.html'
  },
  {
    subject: 'language-arts',
    group: 'Essay Writing',
    icon: '📚',
    title: 'Library Funding Essay Builder',
    description: 'Build a full argumentative essay on public library funding. Read paired passages side by side, then answer guiding questions to construct each paragraph.',
    meta: 'GED RLA/HiSET Writing · 5 Paragraphs · 45–60 min',
    url: 'EssayBuilder_LibraryFunding.html'
  },
  {
    subject: 'language-arts',
    group: 'Grammar & Mechanics',
    icon: '✅',
    title: 'Tricky Subjects Brush-Up',
    description: 'Review subject-verb agreement with collective nouns and indefinite pronouns, plus compound vs. complex sentences — with practice questions and instant feedback.',
    meta: 'HiSET Writing · 2 Concepts · 10 min',
    url: 'GrammarBrushUp_HiSET_Tricky_Subjects.html'
  },

  // ---------------- SCIENCE ----------------
  {
    subject: 'science',
    group: 'Foundations',
    icon: '🔬',
    title: 'Science Basics',
    description: 'Build science knowledge with interactive explanations and real-world applications.',
    meta: 'GED Science · Self-paced · Flexible',
    url: 'hello-ged.html'
  },

  // To add a new activity, copy one of the blocks above.
  // subject must match a "key" from SUBJECTS above.
  // group can be an existing group name or a brand-new one.
];
