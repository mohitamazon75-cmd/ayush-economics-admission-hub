import {
  COLLEGES,
  ECONOMICS_LESSONS,
  IIMB_MOCKS,
  IIMB_TOPIC_PRACTICE,
  INTERVIEW_QUESTIONS,
  PRESENTATION_TOPICS,
  SOURCES
} from "./data.js";

const STORAGE_KEY = "ayush-economics-hub-v1";
const NAV_ITEMS = [
  { id: "home", icon: "⌂", label: "Home", sub: "Daily plan" },
  { id: "iimb", icon: "★", label: "IIM Bangalore", sub: "Priority module" },
  { id: "colleges", icon: "▦", label: "Other Colleges", sub: "Verified routes" },
  { id: "mocks", icon: "◌", label: "Mock Tests", sub: "Practice lab" },
  { id: "interview", icon: "◡", label: "Interview Coach", sub: "Offline rubric" },
  { id: "presentations", icon: "↗", label: "Presentations", sub: "90-second studio" },
  { id: "economics", icon: "∿", label: "Economics Lab", sub: "Learn by doing" },
  { id: "progress", icon: "↗", label: "My Progress", sub: "Your evidence" }
];

const DOMAIN_LABELS = {
  quantitativeAptitude: "Quantitative aptitude",
  logicalReasoning: "Logical reasoning",
  verbalReadingComprehension: "Verbal + reading",
  dataInterpretation: "Data interpretation",
  economicsApplications: "Economics applications"
};

const initialState = {
  attempts: [],
  topicAnswers: {},
  completedLessons: [],
  interviewAttempts: [],
  presentationSessions: [],
  planDone: {}
};

let state = loadState();
let currentView = "home";
let selectedInterviewId = INTERVIEW_QUESTIONS[0]?.id;
let interviewFilter = "All";
let interviewFeedback = null;
let selectedPresentationId = PRESENTATION_TOPICS[0]?.id;
let presentationTimerId = null;
let presentationSeconds = 90;
let presentationPrepSeconds = null;
let recording = { recorder: null, chunks: [], url: null, status: "idle" };
let testSession = null;
let testTimerId = null;
let lastResults = null;
let lessonSession = null;

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");
const toastRegion = document.querySelector("#toast-region");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...initialState, ...saved } : structuredClone(initialState);
  } catch {
    return structuredClone(initialState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function formatDate(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function formatTimer(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  const mins = Math.floor(safe / 60).toString().padStart(2, "0");
  const secs = Math.floor(safe % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function totalPracticeCount() {
  return state.attempts.reduce((sum, attempt) => sum + (attempt.total || 0), 0) + Object.keys(state.topicAnswers).length;
}

function latestAttempt() {
  return state.attempts[0] || null;
}

function readinessLabel() {
  const latest = latestAttempt();
  if (!latest) return { label: "Baseline week", tone: "caution", note: "Take one timed set before reading too much into readiness." };
  if (latest.score >= 75 && state.interviewAttempts.length > 0) return { label: "Building consistency", tone: "live", note: "Your evidence is moving in the right direction. Protect your weaker domain." };
  if (latest.score >= 55) return { label: "Developing foundations", tone: "caution", note: "Keep the daily loop small: timed practice, review, then one retry." };
  return { label: "Start with the basics", tone: "planned", note: "Use the explanations first, then retake a shorter topic set." };
}

function recommendation() {
  const latest = latestAttempt();
  if (!latest) return { title: "Take your first IIMB baseline", body: "Start Mock 1 to see how quantitative, logic, language, data and economics currently feel under a timer.", action: "start-mock", value: IIMB_MOCKS.tests[0]?.id };
  const weakest = Object.entries(latest.breakdown || {}).sort((a, b) => a[1].percentage - b[1].percentage)[0];
  if (weakest && weakest[1].percentage < 70) return { title: `Repair ${DOMAIN_LABELS[weakest[0]]}`, body: `Your last timed set was ${weakest[1].percentage}% in this area. Do 10 focused questions and review every miss.`, action: "start-topic", value: weakest[0] };
  if (state.interviewAttempts.length === 0) return { title: "Practise one honest interview answer", body: "The offline coach scores clarity, reasoning, relevance, structure and authenticity. It does not pretend to be an admissions decision.", action: "navigate", value: "interview" };
  return { title: "Keep the improvement loop alive", body: "Take another timed set or rehearse a 90-second economics idea. Compare your evidence, not a made-up probability.", action: "navigate", value: "presentations" };
}

function navMarkup() {
  return NAV_ITEMS.map((item) => `
    <button class="nav-item ${currentView === item.id ? "active" : ""}" data-view="${item.id}" aria-current="${currentView === item.id ? "page" : "false"}">
      <span class="nav-icon" aria-hidden="true">${item.icon}</span>
      <span class="nav-caption"><span>${item.label}</span><small>${item.sub}</small></span>
    </button>
  `).join("");
}

function renderNavigation() {
  document.querySelector("#desktop-nav").innerHTML = navMarkup();
  document.querySelector("#mobile-nav").innerHTML = navMarkup();
  const now = new Date();
  document.querySelector("#today-label").textContent = new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "short" }).format(now);
}

function render() {
  renderNavigation();
  const views = { home: renderHome, iimb: renderIIMB, colleges: renderColleges, mocks: renderMocks, interview: renderInterview, presentations: renderPresentations, economics: renderEconomics, progress: renderProgress, "mock-run": renderMockRunner, "mock-results": renderMockResults };
  app.innerHTML = (views[currentView] || renderHome)();
  if (currentView !== "mock-run") stopTestTimer();
  if (currentView !== "presentations") stopPresentationTimer();
  app.focus({ preventScroll: true });
}

function renderHome() {
  const readiness = readinessLabel();
  const next = recommendation();
  const latest = latestAttempt();
  const completed = state.completedLessons.length;
  const interviewScore = state.interviewAttempts.length ? Math.round(state.interviewAttempts.reduce((sum, item) => sum + item.score, 0) / state.interviewAttempts.length) : 0;
  return `
    <section class="hero-grid" aria-labelledby="home-title">
      <div class="hero-card">
        <p class="hero-kicker">Your Economics admission prep hub</p>
        <h1 id="home-title">Hi Ayush. Let's get you ready for IIM Bangalore.</h1>
        <p class="lede">A calm, evidence-based daily system for aptitude, economics thinking and conversations that sound like you.</p>
        <div class="hero-actions">
          <button class="button-primary" data-action="start-mock" data-value="${IIMB_MOCKS.tests[0]?.id}">Start IIMB mock test <span aria-hidden="true">↗</span></button>
          <button class="button-secondary" data-view="interview">Practise interview</button>
          <button class="button-secondary" data-view="economics">Learn economics</button>
        </div>
      </div>
      <div class="hero-aside">
        <button class="card mini-card mint" data-action="start-topic" data-value="${latest ? "weakest" : "economicsApplications"}">
          <span class="mini-label">Today's 20-minute move</span>
          <h3>${escapeHTML(next.title)}</h3>
          <p>${escapeHTML(next.body)}</p>
          <span class="mini-arrow" aria-hidden="true">→</span>
        </button>
        <button class="card mini-card yellow" data-view="progress">
          <span class="mini-label">Readiness signal</span>
          <h3>${readiness.label}</h3>
          <p>${escapeHTML(readiness.note)}</p>
          <span class="mini-arrow" aria-hidden="true">↗</span>
        </button>
      </div>
    </section>

    <div class="source-strip" role="note">
      <span class="source-icon" aria-hidden="true">✓</span>
      <div><strong>Accuracy note</strong><p>IIMB's official 2026 page confirms the BBA-DBE routes and cut-offs, but not an official section-weight or timing blueprint. This hub labels its practice mix instead of guessing.</p></div>
    </div>

    <div class="section-row"><div><p class="section-kicker">Your evidence so far</p><h2>Small signals. Real progress.</h2></div><span class="tiny">No admission probabilities. Just your actual practice.</span></div>
    <section class="four-col" aria-label="Progress summary">
      <div class="card metric-card metric-accent"><span class="metric-label">Timed attempts</span><strong class="metric-value">${state.attempts.length}</strong><span class="tiny">IIMB mocks + focused sets</span></div>
      <div class="card metric-card metric-accent mint-accent"><span class="metric-label">Questions practised</span><strong class="metric-value">${totalPracticeCount()}</strong><span class="tiny">Every answer stays local</span></div>
      <div class="card metric-card metric-accent coral-accent"><span class="metric-label">Interview answers</span><strong class="metric-value">${state.interviewAttempts.length}</strong><span class="tiny">Average score ${interviewScore || "—"}/100</span></div>
      <div class="card metric-card metric-accent purple-accent"><span class="metric-label">Economics lessons</span><strong class="metric-value">${completed}/10</strong><span class="tiny">Learn, apply, check</span></div>
    </section>

    <div class="section-row"><div><p class="section-kicker">Your daily rhythm</p><h2>Do less, review better.</h2></div><button class="button-secondary" data-view="progress">Open my progress</button></div>
    <section class="daily-grid">
      <article class="card mission-card">
        <div class="mission-top"><div><p class="section-kicker">Recommended next</p><h3>${escapeHTML(next.title)}</h3><p class="muted">${escapeHTML(next.body)}</p></div><span class="mission-icon" aria-hidden="true">✦</span></div>
        <button class="button-primary" data-action="${next.action}" data-value="${next.value || ""}">Begin this session</button>
      </article>
      <article class="card streak-card">
        <p class="section-kicker">Practice rhythm</p>
        <div class="streak-number">${Math.min(state.attempts.length + state.interviewAttempts.length + completed, 7)}<span style="font-size:1rem;letter-spacing:0"> / 7</span></div>
        <p>sessions in your current evidence loop</p>
        <div class="streak-bar"><div class="streak-fill" style="width:${clamp((state.attempts.length + state.interviewAttempts.length + completed) / 7 * 100)}%"></div></div>
        <div class="streak-meta"><span>1 week target</span><span>${Math.min(state.attempts.length + state.interviewAttempts.length + completed, 7)} done</span></div>
      </article>
    </section>

    <div class="section-row"><div><p class="section-kicker">Priority map</p><h2>Start with IIMB. Keep options honest.</h2></div></div>
    <section class="three-col">
      <article class="card program-card"><div class="card-top"><span class="program-logo">IIMB</span><span class="status-label live">Built now</span></div><h3>BBA in Digital Business & Entrepreneurship</h3><p>IIM Bangalore's actual undergraduate business programme. Use the complete mock, interview and economics practice here.</p><div class="card-footer"><span class="tiny">Priority 01</span><button class="button-quiet" data-view="iimb">Open module</button></div></article>
      <article class="card program-card"><div class="card-top"><span class="program-logo orange">CH</span><span class="status-label live">Built now</span></div><h3>CHRIST Economics routes</h3><p>Course facts, application flow and interview practice for the currently listed Economics programmes.</p><div class="card-footer"><span class="tiny">Priority 05</span><button class="button-quiet" data-view="colleges">See route</button></div></article>
      <article class="card program-card"><div class="card-top"><span class="program-logo purple">+</span><span class="status-label planned">Phase 3</span></div><h3>NM, Xavier's & CUET</h3><p>Merit-based routes and current-bulletin placeholders are separated from entrance-test claims.</p><div class="card-footer"><span class="tiny">Options map</span><button class="button-quiet" data-view="colleges">Review facts</button></div></article>
    </section>
  `;
}

function renderIIMB() {
  const iimb = COLLEGES.find((college) => college.id === "iimb-bba-dbe");
  return `
    <div class="page-header"><div><p class="page-kicker">Priority module · IIM Bangalore</p><h1>Build the signal IIMB can actually see.</h1><p class="lede">The full working experience starts here: original timed sets, answer review, interview rehearsal and economics fundamentals. It is labelled for what it is, not dressed up as official content.</p></div><div class="header-actions"><button class="button-primary" data-action="start-mock" data-value="${IIMB_MOCKS.tests[0]?.id}">Start Mock 1</button><button class="button-secondary" data-action="show-sources">Source notes</button></div></div>
    <div class="notice info"><strong>What is verified for the 2026 cycle</strong>The official IIMB DBE admissions page confirms the programme is a three-year online BBA in Digital Business & Entrepreneurship, with IIMB Entrance Test, CUET General Test or JEE Main routes. It does not publish a section-weight or timing blueprint. <a href="${SOURCES.records[0].url}" target="_blank" rel="noreferrer">Read the official page ↗</a></div>

    <div class="section-row"><div><p class="section-kicker">Admission snapshot</p><h2>Know the route before you practise it.</h2></div></div>
    <section class="three-col">
      <article class="card card-pad"><p class="section-kicker">Eligibility</p><h3>Class 10 maths + Class 12 threshold</h3><p class="muted">${escapeHTML(iimb["2026"].eligibility.class10)}. General, NC-OBC and EWS: ${escapeHTML(iimb["2026"].eligibility.class12GeneralNcObcEws)}. SC, ST and PwD: ${escapeHTML(iimb["2026"].eligibility.class12ScStPwD)}.</p></article>
      <article class="card card-pad"><p class="section-kicker">Routes</p><h3>Three ways listed</h3><div class="pill-row">${iimb.entranceRoutes.map((route) => `<span class="tag">${escapeHTML(route)}</span>`).join("")}</div><p class="tiny" style="margin-top:12px">Applicants submitting multiple scores were considered on their best score in the 2026 page's cut-off note.</p></article>
      <article class="card card-pad"><p class="section-kicker">Cut-off reference</p><h3>Cycle-specific, not a promise</h3><p class="muted">IIMB test: 50% General, 45% NC-OBC/EWS, 40% SC/ST/PwD. CUET GAT and JEE Main are percentile-based in the official 2026 page.</p></article>
    </section>

    <div class="section-row"><div><p class="section-kicker">Entrance exam simulator</p><h2>Three original readiness mocks.</h2></div><span class="tiny">20 questions each · 35–40 minutes · answer review included</span></div>
    <div class="notice warn"><strong>Practice mix, not an official blueprint</strong>${escapeHTML(IIMB_MOCKS.blueprintNote)} The set covers quantitative aptitude, logical reasoning, verbal and reading comprehension, data interpretation and economics applications because those are useful readiness areas for Ayush's goal.</div>
    <section class="mock-grid" style="margin-top:15px">${IIMB_MOCKS.tests.map((test, index) => renderMockCard(test, index)).join("")}</section>
    <section class="card card-pad" style="margin-top:15px"><div class="section-row" style="margin:0"><div><p class="section-kicker">Readiness mix</p><h3>Where this hub spends practice time</h3></div><span class="tiny">Transparent by design</span></div><div class="mix-grid">${IIMB_MOCKS.practiceMix.map((item) => `<div class="mix-cell"><strong>${Math.round(item.readinessWeight * 100)}%</strong><span>${escapeHTML(item.label)}</span></div>`).join("")}</div></section>

    <div class="section-row"><div><p class="section-kicker">Topic bank</p><h2>${IIMB_TOPIC_PRACTICE.length} additional questions.</h2></div><button class="button-secondary" data-view="mocks">Open topic practice</button></div>
    <section class="card card-pad"><div class="three-col"><div><strong>Focused by skill</strong><p class="tiny" style="margin-top:6px">Use the filter to isolate arithmetic, logic, language, data or economics.</p></div><div><strong>Every miss has a reason</strong><p class="tiny" style="margin-top:6px">Answers are reviewed after submission, with a worked explanation and weak-area tag.</p></div><div><strong>Built for repeat use</strong><p class="tiny" style="margin-top:6px">Attempt history and local progress make your next session specific.</p></div></div></section>
  `;
}

function renderMockCard(test, index) {
  const attempt = state.attempts.find((item) => item.testId === test.id);
  return `<article class="card mock-card"><span class="mock-number">MOCK ${String(index + 1).padStart(2, "0")}</span><h3>${escapeHTML(test.title.replace(/^Mock \d+: /, ""))}</h3><p>${escapeHTML(test.style)}. ${test.questionCount} original questions with worked answer review.</p><div class="mock-meta"><span>◷ ${test.suggestedMinutes} min</span><span>● ${test.questionCount} Q</span>${attempt ? `<span>Best ${attempt.score}%</span>` : ""}</div><button class="button-primary" data-action="start-mock" data-value="${test.id}">${attempt ? "Retake mock" : "Start mock"} <span aria-hidden="true">↗</span></button></article>`;
}

function renderColleges() {
  return `
    <div class="page-header"><div><p class="page-kicker">Options map · verified routes</p><h1>Every college gets its own truth.</h1><p class="lede">Admission paths are not interchangeable. Merit-based programmes are not shown as entrance tests, and current rules are flagged when the live bulletin must be checked.</p></div><div class="header-actions"><button class="button-secondary" data-action="show-sources">View all sources</button></div></div>
    <div class="notice success"><strong>How to use this page</strong>IIMB is the complete active module. CHRIST has a live Economics route and interview preparation. NM College and St. Xavier's are shown as merit/application-readiness routes based on their official pages. CUET stays a current-bulletin placeholder until its live year-specific rules are confirmed.</div>
    <div class="section-row"><div><p class="section-kicker">Strict priority</p><h2>Five routes, five preparation decisions.</h2></div></div>
    <section class="college-grid">${COLLEGES.map(renderCollegeCard).join("")}</section>
    <div class="section-row"><div><p class="section-kicker">What is not being invented</p><h2>Accuracy guardrails.</h2></div></div>
    <section class="three-col"><article class="card card-pad"><p class="section-kicker">No fake cut-offs</p><p class="muted">If a college page does not publish a current cut-off, this hub does not turn a coaching estimate into a fact.</p></article><article class="card card-pad"><p class="section-kicker">No fake past papers</p><p class="muted">IIMB practice questions are labelled AI-created. Official links are presented as source links, not copied as authentic past questions.</p></article><article class="card card-pad"><p class="section-kicker">No fake certainty</p><p class="muted">Readiness signals come from Ayush's attempts, not fabricated admission odds.</p></article></section>
  `;
}

function renderCollegeCard(college) {
  const source = SOURCES.records.find((item) => item.id === college.admissionsSourceId);
  const isIIMB = college.id === "iimb-bba-dbe";
  const isChrist = college.id === "christ-bsc-economics";
  const status = isIIMB || isChrist ? "live" : "planned";
  const logoClass = isChrist ? "orange" : college.id.includes("nm") ? "purple" : college.id === "cuet-ug" ? "green" : "";
  const short = isChrist ? "CH" : college.id.includes("nm") ? "NM" : college.id === "cuet-ug" ? "NTA" : isIIMB ? "IIMB" : "SXC";
  const description = isIIMB ? "BBA-DBE admission pathways and complete IIMB readiness practice." : isChrist ? "Economics course facts, application flow and interview/presentation preparation." : college.id.includes("nm") ? "B.Com Economics and B.Com Economics & Analytics are listed with Class-XII merit language." : college.id === "st-xaviers-ba" ? "BA route with published seat/category/fee information; check the live cycle before applying." : "A national entrance route whose current bulletin must be checked before locking subjects or timing.";
  return `<article class="card program-card"><div class="card-top"><span class="program-logo ${logoClass}">${short}</span><span class="status-label ${status}">${isIIMB ? "Built now" : isChrist ? "Built now" : "Fact map"}</span></div><h3>${escapeHTML(college.name)}</h3><p><strong>${escapeHTML(college.programme)}</strong><br>${escapeHTML(description)}</p><div class="card-footer"><span class="tiny">${escapeHTML(college.programmeType)}</span><button class="button-quiet" data-action="view-college" data-value="${college.id}">Open route</button></div><p class="tiny" style="margin:12px 0 0">Verified ${escapeHTML(source?.verifiedOn || SOURCES.verificationDate)} · <a href="${source?.url || "#"}" target="_blank" rel="noreferrer">official source ↗</a></p></article>`;
}

function renderMocks() {
  const topicCount = IIMB_TOPIC_PRACTICE.length;
  return `
    <div class="page-header"><div><p class="page-kicker">Practice lab · IIMB first</p><h1>Turn attempts into a better next attempt.</h1><p class="lede">Choose a full readiness mock or isolate one skill. Submit to see the answer key, calculations, alternatives and the weak area to revise.</p></div><div class="header-actions"><button class="button-primary" data-action="start-mock" data-value="${IIMB_MOCKS.tests[0]?.id}">Start full mock</button></div></div>
    <section class="mock-grid">${IIMB_MOCKS.tests.map((test, index) => renderMockCard(test, index)).join("")}</section>
    <div class="section-row"><div><p class="section-kicker">Topic-wise practice</p><h2>${topicCount} questions, filtered for focus.</h2></div><span class="tiny">Original practice · not official questions</span></div>
    <section class="practice-layout">
      <aside class="card topic-filter"><label for="topic-search">Find a topic or tag</label><input id="topic-search" class="input-control" style="width:100%" placeholder="e.g. elasticity, ratios" autocomplete="off"><div class="topic-list" id="topic-filter-list">${renderTopicFilterButtons()}</div></aside>
      <section class="card practice-card" id="topic-practice-card">${renderTopicPracticeCard()}</section>
    </section>
    <div class="section-row"><div><p class="section-kicker">Other route practice</p><h2>Practice the route, not a made-up paper.</h2></div></div>
    <section class="three-col"><article class="card card-pad"><p class="section-kicker">NM College</p><h3>Academic-readiness checklist</h3><p class="muted">The official page describes B.Com (Economics) and B.Com (Economics & Analytics) with Class-XII merit language. Use the economics and data bank to strengthen readiness, not to simulate an invented entrance exam.</p><button class="button-quiet" data-action="view-college" data-value="nm-bcom-economics">View verified route</button></article><article class="card card-pad"><p class="section-kicker">St. Xavier's Mumbai</p><h3>BA application-readiness</h3><p class="muted">The official BA page publishes seats, categories and fees for the displayed cycle. No entrance-test pattern is hard-coded here.</p><button class="button-quiet" data-action="view-college" data-value="st-xaviers-ba">View verified route</button></article><article class="card card-pad"><p class="section-kicker">CUET (UG)</p><h3>Current-bulletin safe mode</h3><p class="muted">Use a neutral aptitude sampler while checking the NTA bulletin for the exact year, subject list, duration and participating-university rules.</p><button class="button-quiet" data-action="start-topic" data-value="cuet">Start neutral sampler</button></article></section>
  `;
}

let activeTopicDomain = "all";
let topicSearch = "";

function filteredTopicQuestions() {
  return IIMB_TOPIC_PRACTICE.filter((item) => {
    const text = `${item.prompt} ${item.topic} ${item.tags.join(" ")}`.toLowerCase();
    const matchesSearch = !topicSearch || text.includes(topicSearch.toLowerCase());
    const matchesDomain = activeTopicDomain === "all" || item.domain === activeTopicDomain;
    return matchesSearch && matchesDomain;
  });
}

function renderTopicFilterButtons() {
  const domains = ["all", ...Object.keys(DOMAIN_LABELS)];
  return domains.map((domain) => `<button class="topic-filter-button ${activeTopicDomain === domain ? "active" : ""}" data-action="filter-topic-domain" data-value="${domain}">${domain === "all" ? "All skills" : escapeHTML(DOMAIN_LABELS[domain])}<span class="tiny" style="float:right">${domain === "all" ? IIMB_TOPIC_PRACTICE.length : IIMB_TOPIC_PRACTICE.filter((q) => q.domain === domain).length}</span></button>`).join("");
}

function renderTopicPracticeCard() {
  const questions = filteredTopicQuestions();
  const first = questions[0];
  if (!first) return `<div class="empty-state"><strong>No topic matched.</strong><br>Try a broader search or choose All skills.</div>`;
  return `<div class="question-head"><div><span class="question-index">Focused practice</span><h3 style="margin-top:8px">${escapeHTML(DOMAIN_LABELS[first.domain] || first.domain)}</h3></div><span class="difficulty ${first.difficulty}">${escapeHTML(first.difficulty)}</span></div><p class="question-prompt">${escapeHTML(first.prompt)}</p><div class="pill-row">${first.tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div><div class="question-actions"><span class="answer-note">${questions.length} question${questions.length === 1 ? "" : "s"} found</span><button class="button-primary" data-action="start-topic" data-value="${activeTopicDomain}">Start 10-question set ↗</button></div>`;
}

function currentTestQuestion() {
  return testSession?.questions?.[testSession.current] || null;
}

function renderMockRunner() {
  const question = currentTestQuestion();
  if (!question) return `<div class="empty-state">This practice set is unavailable. Return to Mock Tests.</div>`;
  const total = testSession.questions.length;
  const isTopic = testSession.type === "topic";
  const answeredCount = testSession.answers.filter((answer) => answer !== null).length;
  return `
    <section class="test-shell" aria-labelledby="test-title">
      <div class="test-topbar"><div class="test-title-wrap"><p class="section-kicker">${isTopic ? "Focused practice" : "IIMB readiness mock"}</p><h2 id="test-title">${escapeHTML(testSession.title)}</h2><p>AI-created practice · ${answeredCount}/${total} answered · use the navigation to move around.</p></div><div id="test-timer" class="timer ${testSession.timeRemaining < 300 ? "warning" : ""}" aria-live="polite">◷ ${formatTimer(testSession.timeRemaining)}</div></div>
      <div class="test-layout">
        <div>
          <div class="question-head"><div><span class="question-index">Question ${testSession.current + 1} of ${total}</span><div class="pill-row" style="margin-top:9px"><span class="tag">${escapeHTML(DOMAIN_LABELS[question.domain] || question.domain)}</span><span class="difficulty ${question.difficulty}">${escapeHTML(question.difficulty)}</span></div></div><span class="tiny">${question.tags.slice(0, 2).map((tag) => `#${escapeHTML(tag)}`).join(" ")}</span></div>
          <p class="question-prompt">${escapeHTML(question.prompt)}</p>
          <div class="options-list" role="radiogroup" aria-label="Answer options">${question.options.map((option, index) => `<button class="option-button ${testSession.answers[testSession.current] === index ? "selected" : ""}" data-action="select-test-option" data-value="${index}" role="radio" aria-checked="${testSession.answers[testSession.current] === index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(option)}</span></button>`).join("")}</div>
          <div class="question-actions"><button class="button-secondary" data-action="previous-question" ${testSession.current === 0 ? "disabled" : ""}>← Previous</button><div class="action-group"><button class="button-secondary" data-action="next-question" ${testSession.current === total - 1 ? "disabled" : ""}>Next →</button></div></div>
        </div>
        <aside class="question-nav"><h4>Question map</h4><div class="question-grid">${testSession.questions.map((item, index) => `<button class="nav-question ${testSession.current === index ? "current" : ""} ${testSession.answers[index] !== null ? "answered" : ""}" data-action="goto-question" data-value="${index}" aria-label="Question ${index + 1}${testSession.answers[index] !== null ? ", answered" : ""}">${index + 1}</button>`).join("")}</div><button class="button-primary submit-test" data-action="submit-test">Submit set</button><p class="test-exit">Need to stop? <button data-action="submit-test">Submit early</button></p></aside>
      </div>
    </section>
  `;
}

function renderMockResults() {
  if (!lastResults) return `<div class="empty-state">No result yet. Start a set from Mock Tests.</div>`;
  const result = lastResults;
  return `
    <div class="page-header"><div><p class="page-kicker">Review, then repeat</p><h1>Here is what the attempt says.</h1><p class="lede">A score is only useful when it tells you what to do next. Read the weak areas before you start another set.</p></div><div class="header-actions"><button class="button-primary" data-action="download-summary">Download summary</button><button class="button-secondary" data-view="mocks">Back to mocks</button></div></div>
    <section class="results-layout">
      <article class="card result-hero"><span class="score-pill">${escapeHTML(result.kindLabel)}</span><div class="result-score">${result.score}%</div><p>${result.correct} correct out of ${result.total}. ${result.score >= 70 ? "Good base. Keep the weakest area visible." : "Use the worked review as your study plan, not as a judgement."}</p><p class="tiny" style="color:#bac7da">Attempted ${formatDate(result.date)} · ${result.unanswered} unanswered</p></article>
      <article class="card breakdown-card"><p class="section-kicker">Skill breakdown</p><h3>Where the marks moved.</h3>${Object.entries(result.breakdown).map(([domain, info]) => `<div class="bar-row"><div class="bar-label"><span>${escapeHTML(DOMAIN_LABELS[domain] || domain)}</span><span>${info.correct}/${info.total} · ${info.percentage}%</span></div><div class="bar-track"><div class="bar-value" style="width:${info.percentage}%"></div></div></div>`).join("")}</article>
    </section>
    <div class="section-row"><div><p class="section-kicker">Weak-area recommendations</p><h2>Review the misses with intent.</h2></div></div>
    <section class="card card-pad"><div class="mistake-list">${result.mistakes.length ? result.mistakes.map((item) => `<div class="mistake-item"><strong>Q${item.number} · ${escapeHTML(DOMAIN_LABELS[item.domain] || item.domain)} · ${item.correct ? "Correct" : "Review"}</strong><p><b>${item.correct ? "Your answer" : "Correct answer"}:</b> ${escapeHTML(item.correct ? item.selected : item.answer)}. ${escapeHTML(item.explanation)}</p>${!item.correct ? `<p style="margin-top:5px"><b>Why the alternatives miss:</b> ${escapeHTML(item.alternativeExplanations.join(" "))}</p>` : ""}</div>`).join("") : `<div class="empty-state"><strong>Clean run.</strong><br>You answered every question correctly. Move to a harder topic or practise explaining one concept aloud.</div>`}</div></section>
    <div class="section-row"><div><p class="section-kicker">Next move</p><h2>${escapeHTML(result.nextMove.title)}</h2></div><button class="button-primary" data-action="${result.nextMove.action}" data-value="${result.nextMove.value || ""}">${escapeHTML(result.nextMove.label)} ↗</button></div>
  `;
}

function renderInterview() {
  const institutions = ["All", ...new Set(INTERVIEW_QUESTIONS.map((item) => item.institution))];
  const visible = INTERVIEW_QUESTIONS.filter((item) => interviewFilter === "All" || item.institution === interviewFilter);
  if (!visible.some((item) => item.id === selectedInterviewId)) selectedInterviewId = visible[0]?.id;
  const selected = INTERVIEW_QUESTIONS.find((item) => item.id === selectedInterviewId) || visible[0];
  return `
    <div class="page-header"><div><p class="page-kicker">Interview coach · offline by design</p><h1>Sound prepared. Still sound like yourself.</h1><p class="lede">45 high-quality prompts across IIMB and CHRIST. Study the structure, then answer in your own words. The evaluator below is a transparent offline rubric, not an AI admission decision.</p></div><div class="header-actions"><span class="status-label live">${INTERVIEW_QUESTIONS.length} questions</span><span class="status-label planned">No invented achievements</span></div></div>
    <div class="notice info"><strong>Use your real story</strong>Fitness and keyboard practice can show consistency, feedback and creative balance. Do not turn them into achievements you did not mention. Replace every illustrative answer with a truthful version of your own.</div>
    <div class="filter-row" style="margin-top:19px"><div class="pill-row">${institutions.map((item) => `<button class="topic-filter-button ${interviewFilter === item ? "active" : ""}" data-action="filter-interview" data-value="${escapeHTML(item)}">${escapeHTML(item)}</button>`).join("")}</div><span class="tiny">Selected: ${visible.length} prompts</span></div>
    <section class="interview-grid">
      <aside class="card card-pad"><p class="section-kicker">Prompt library</p><div class="question-list">${visible.map((item) => `<button class="interview-list-item ${selected?.id === item.id ? "active" : ""}" data-action="select-interview" data-value="${item.id}"><strong>${escapeHTML(item.question)}</strong><span>${escapeHTML(item.institution)} · ${escapeHTML(item.tags.slice(0,2).join(" · "))}</span></button>`).join("")}</div></aside>
      <article class="card interview-detail">${selected ? renderInterviewDetail(selected) : `<div class="empty-state">No interview prompts in this filter.</div>`}</article>
    </section>
  `;
}

function renderInterviewDetail(item) {
  const feedback = interviewFeedback?.questionId === item.id ? interviewFeedback : null;
  return `<p class="section-kicker">${escapeHTML(item.institution)} · what to practise</p><blockquote class="question-quote">${escapeHTML(item.question)}</blockquote><div class="coach-columns"><div class="coach-block"><h4>What they are testing</h4><p>${escapeHTML(item.tester)}</p></div><div class="coach-block"><h4>Answer structure</h4><ul>${item.structure.map((step) => `<li>${escapeHTML(step)}</li>`).join("")}</ul></div><div class="coach-block"><h4>Illustrative answer</h4><p>${escapeHTML(item.illustrativeAnswer)}</p></div><div class="coach-block"><h4>Common mistakes</h4><ul>${item.mistakes.map((mistake) => `<li>${escapeHTML(mistake)}</li>`).join("")}</ul><p style="margin-top:10px"><b>Follow-up:</b> ${escapeHTML(item.followUp)}</p></div></div><div class="answer-lab"><label for="interview-answer">Your answer <span class="tiny">Type it or use speech input if your browser allows it.</span></label><textarea id="interview-answer" class="textarea-control" placeholder="Aim for 45–90 seconds. Use one concrete example and one honest caveat.">${feedback ? escapeHTML(feedback.answer) : ""}</textarea><div class="lab-actions"><button class="button-primary" data-action="evaluate-interview" data-value="${item.id}">Score my answer</button><button class="button-secondary" data-action="speech-input">Use speech input</button><button class="button-quiet" data-action="clear-interview">Try again</button></div>${feedback ? renderInterviewFeedback(feedback) : ""}</div>`;
}

function renderInterviewFeedback(feedback) {
  const dimensions = ["clarity", "reasoning", "relevance", "structure", "authenticity"];
  return `<div class="review-panel"><h4>Offline rubric feedback · ${feedback.score}/100</h4><p class="tiny">${escapeHTML(feedback.summary)}</p><div class="feedback-grid">${dimensions.map((dimension) => `<div class="feedback-chip"><strong>${feedback.dimensions[dimension]}</strong><span>${dimension}</span></div>`).join("")}</div><p class="tiny" style="margin-top:12px"><b>Next try:</b> ${escapeHTML(feedback.nextTry)}</p></div>`;
}

function renderPresentations() {
  const selected = PRESENTATION_TOPICS.find((item) => item.id === selectedPresentationId) || PRESENTATION_TOPICS[0];
  return `
    <div class="page-header"><div><p class="page-kicker">Micro-presentation studio · 90 seconds</p><h1>Make a clear point, not a memorised speech.</h1><p class="lede">Use the brief as a scaffold: opening, three talking points, one verified example, conclusion. Then close the notes and speak naturally.</p></div><div class="header-actions"><span class="status-label live">${PRESENTATION_TOPICS.length} topics</span><span class="status-label planned">Fact-check current stats</span></div></div>
    <div class="notice warn"><strong>Current facts need a fresh check</strong>Some topics intentionally use <em>verify-before-use</em> examples. Do not memorise a number from this screen without checking the linked official or primary source on the day you prepare it.</div>
    <div class="section-row"><div><p class="section-kicker">Topic shelf</p><h2>Pick a question worth thinking about.</h2></div><span class="tiny">Economics · business · India · technology · society</span></div>
    <section class="presentation-grid">${PRESENTATION_TOPICS.map((topic, index) => `<article class="card presentation-card"><span class="presentation-number">TOPIC ${String(index + 1).padStart(2, "0")}</span><h3>${escapeHTML(topic.title)}</h3><p>${escapeHTML(topic.simpleExplanation)}</p><div class="card-footer"><span class="tiny">${topic.factStatus === "verify-before-use" ? "Check fact" : "Stable concept"}</span><button class="button-quiet" data-action="select-presentation" data-value="${topic.id}">Practise ↗</button></div></article>`).join("")}</section>
    ${selected ? `<div class="section-row"><div><p class="section-kicker">Your selected brief</p><h2>${escapeHTML(selected.title)}</h2></div><button class="button-secondary" data-action="start-presentation-prep">Start 10-second prep countdown</button></div><section class="presentation-detail"><article class="card presentation-brief">${renderPresentationBrief(selected)}</article><aside class="card presentation-lab">${renderPresentationLab(selected)}</aside></section>` : ""}
  `;
}

function renderPresentationBrief(topic) {
  return `<p class="section-kicker">Brief, not script</p><div class="brief-highlight"><p><strong>Simple explanation:</strong> ${escapeHTML(topic.simpleExplanation)}</p></div><h3>Opening sentence</h3><p class="muted">“${escapeHTML(topic.opening)}”</p><h3 style="margin-top:22px">Three points to choose from</h3><ol class="talking-points">${topic.threePoints.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ol><h3 style="margin-top:22px">Example</h3><p class="muted">${escapeHTML(topic.verifiedFactExample || "Use a current example only after verifying it from a primary source.")}</p><p class="tiny"><b>Fact status:</b> ${escapeHTML(topic.factStatus || "stable concept")}</p><h3 style="margin-top:22px">Intelligent conclusion</h3><p class="muted">${escapeHTML(topic.conclusion)}</p><h3 style="margin-top:22px">Likely follow-ups</h3><ul class="talking-points">${topic.followUps.map((followUp) => `<li>${escapeHTML(followUp)}</li>`).join("")}</ul>`;
}

function renderPresentationLab(topic) {
  return `<div class="presentation-clock" aria-live="polite"><strong id="presentation-clock">${formatTimer(presentationSeconds)}</strong><span>${presentationPrepSeconds !== null ? `Prep starts in ${presentationPrepSeconds}` : "90-second speaking timer"}</span></div><label for="presentation-notes" class="tiny" style="display:block;margin-bottom:6px">Optional reflection after speaking</label><textarea id="presentation-notes" class="textarea-control" placeholder="What was clear? Where did you rush? What fact needs checking?"></textarea><div class="lab-actions"><button class="button-primary" data-action="start-presentation-timer">Start 90 seconds</button><button class="button-secondary" data-action="toggle-recording">${recording.status === "recording" ? "Stop recording" : "Record if available"}</button><button class="button-quiet" data-action="save-presentation" data-value="${topic.id}">Save practice</button></div>${recording.status === "recording" ? `<p class="recording-status">● Recording in this tab. Stop when finished.</p>` : recording.url ? `<audio controls src="${recording.url}" style="margin-top:14px;width:100%"></audio>` : `<p class="tiny" style="margin-top:14px">If microphone permission is unavailable, use the notes box and score yourself with: clear opening, three points, example, conclusion.</p>`}`;
}

function renderEconomics() {
  const completed = new Set(state.completedLessons);
  return `
    <div class="page-header"><div><p class="page-kicker">Economics lab · simple, then useful</p><h1>Learn the idea. See it in real life.</h1><p class="lede">Short lessons use examples from food delivery, fitness, music, smartphones and everyday decisions. Each one ends with a five-question check.</p></div><div class="header-actions"><span class="status-label live">${completed.size}/10 complete</span></div></div>
    <section class="lesson-grid">${ECONOMICS_LESSONS.map((lesson, index) => `<article class="card lesson-card"><div class="lesson-symbol" aria-hidden="true">${lesson.symbol || ["π", "◌", "₹", "↗", "∞", "⌁", "≋", "◎", "△", "◒"][index] || "∿"}</div><h3>${escapeHTML(lesson.title)}</h3><p>${escapeHTML(lesson.shortDescription || lesson.simpleExplanation)}</p><div class="card-footer"><span class="status-label ${completed.has(lesson.id) ? "live" : "planned"}">${completed.has(lesson.id) ? "Complete" : "5-question quiz"}</span><button class="button-quiet" data-action="open-lesson" data-value="${lesson.id}">${completed.has(lesson.id) ? "Review lesson" : "Open lesson"}</button></div></article>`).join("")}</section>
    <div class="section-row"><div><p class="section-kicker">How to use this lab</p><h2>Translate, don't memorise.</h2></div></div>
    <section class="three-col"><article class="card card-pad"><p class="section-kicker">01 · Explain</p><p class="muted">Say the concept in plain English before you reach for a definition.</p></article><article class="card card-pad"><p class="section-kicker">02 · Apply</p><p class="muted">Use one real decision: a gym fee, a food-delivery wait, a keyboard purchase or a household budget.</p></article><article class="card card-pad"><p class="section-kicker">03 · Check</p><p class="muted">Complete the five-question quiz, then return to the concept you missed.</p></article></section>
  `;
}

function renderProgress() {
  const latest = latestAttempt();
  const skills = Object.keys(DOMAIN_LABELS).map((domain) => {
    const attempts = state.attempts.filter((item) => item.breakdown?.[domain]);
    if (!attempts.length) return { domain, percentage: 0, note: "No timed evidence yet" };
    const latestSkill = attempts[0].breakdown[domain];
    return { domain, percentage: latestSkill.percentage, note: `${latestSkill.correct}/${latestSkill.total} on latest attempt` };
  });
  const averageInterview = state.interviewAttempts.length ? Math.round(state.interviewAttempts.reduce((sum, item) => sum + item.score, 0) / state.interviewAttempts.length) : 0;
  const readiness = readinessLabel();
  const next = recommendation();
  return `
    <div class="page-header"><div><p class="page-kicker">Your evidence · local only</p><h1>Progress you can act on.</h1><p class="lede">There is no fabricated rank or admission probability here. This page turns your actual attempts into a short next step.</p></div><div class="header-actions"><span class="status-label ${readiness.tone}">${readiness.label}</span><button class="button-secondary" data-action="download-summary">Download latest result</button></div></div>
    <section class="progress-layout"><article class="card progress-main"><p class="section-kicker">Latest skill signal</p><h2>${latest ? `Mock score ${latest.score}%` : "Start with a baseline"}</h2>${skills.map((skill) => `<div class="skill-row"><div class="skill-top"><span>${escapeHTML(DOMAIN_LABELS[skill.domain])}</span><span>${skill.percentage ? `${skill.percentage}%` : "—"}</span></div><div class="progress-track"><div class="progress-fill" style="width:${skill.percentage}%"></div></div><p class="tiny" style="margin-top:6px">${escapeHTML(skill.note)}</p></div>`).join("")}</article><aside class="card recommendation-card"><p class="section-kicker">What should I practise today?</p><h3>${escapeHTML(next.title)}</h3><p>${escapeHTML(next.body)}</p><div class="plan-list"><div class="plan-item"><span>1</span><p>20–30 minutes of focused practice</p></div><div class="plan-item"><span>2</span><p>Review every wrong answer, not only the score</p></div><div class="plan-item"><span>3</span><p>Finish with one spoken explanation</p></div></div><button class="button-primary" style="margin-top:18px" data-action="${next.action}" data-value="${next.value || ""}">Begin recommendation ↗</button></aside></section>
    <div class="section-row"><div><p class="section-kicker">Interview signal</p><h2>Conversation practice, measured lightly.</h2></div></div>
    <section class="three-col"><div class="card metric-card"><span class="metric-label">Average offline score</span><strong class="metric-value">${averageInterview || "—"}</strong><span class="tiny">Across ${state.interviewAttempts.length} answers</span></div><div class="card metric-card"><span class="metric-label">Presentation sessions</span><strong class="metric-value">${state.presentationSessions.length}</strong><span class="tiny">Saved reflections</span></div><div class="card metric-card"><span class="metric-label">Lessons complete</span><strong class="metric-value">${state.completedLessons.length}/10</strong><span class="tiny">Economics made simple</span></div></section>
    <div class="section-row"><div><p class="section-kicker">Attempt history</p><h2>Look for trends, not perfection.</h2></div></div>
    <section class="card history-card">${state.attempts.length ? `<div style="overflow-x:auto"><table class="history-table"><thead><tr><th>Set</th><th>Date</th><th>Correct</th><th>Score</th></tr></thead><tbody>${state.attempts.slice(0, 12).map((attempt) => `<tr><td>${escapeHTML(attempt.title)}</td><td>${formatDate(attempt.date)}</td><td>${attempt.correct}/${attempt.total}</td><td>${attempt.score}%</td></tr>`).join("")}</tbody></table></div>` : `<div class="empty-state"><strong>Your history will appear here.</strong><br>Complete a mock or focused set to create the first evidence point.</div>`}</section>
  `;
}

function showModal(content) {
  modalRoot.innerHTML = `<div class="modal-backdrop" role="presentation"><section class="modal" role="dialog" aria-modal="true">${content}<button class="modal-close" data-action="close-modal" aria-label="Close">×</button></section></div>`;
  modalRoot.querySelector(".modal-close")?.focus();
}

function closeModal() {
  modalRoot.innerHTML = "";
  lessonSession = null;
}

function renderSourceModal() {
  showModal(`<div class="page-header"><div><p class="page-kicker">Source notes · verified ${escapeHTML(SOURCES.verificationDate)}</p><h2>Read what is official.</h2><p class="tiny">${escapeHTML(SOURCES.provenancePolicy)}</p></div></div><div class="source-list">${SOURCES.records.map((source) => `<article class="source-item"><a href="${source.url}" target="_blank" rel="noreferrer">${escapeHTML(source.institution)} · ${escapeHTML(source.title)} ↗</a><p><b>${escapeHTML(source.type)}</b> · ${escapeHTML(source.officialScope)}</p>${source.verifiedFacts ? `<ul class="tiny">${source.verifiedFacts.map((fact) => `<li>${escapeHTML(fact)}</li>`).join("")}</ul>` : ""}</article>`).join("")}</div>`);
}

function renderCollegeModal(collegeId) {
  const college = COLLEGES.find((item) => item.id === collegeId);
  const source = SOURCES.records.find((item) => item.id === college?.admissionsSourceId);
  if (!college || !source) return;
  const iimb = college.id === "iimb-bba-dbe";
  const christ = college.id === "christ-bsc-economics";
  const extra = iimb ? `<div class="notice info"><strong>2026 IIMB reference</strong>Class 10 pass with Mathematics as a compulsory subject; Class 12 60% for General/NC-OBC/EWS and 55% for SC/ST/PwD on the official page. Routes: IIMB Entrance Test, CUET General Test and JEE Main.</div>` : christ ? `<div class="notice success"><strong>Live Economics route</strong>The official course page currently lists BSc Economics at the Delhi NCR campus, with an application flow that includes entrance test if applicable, assessment and interview. Confirm the live campus-specific details before applying.</div>` : `<div class="notice warn"><strong>Readiness only</strong>This hub does not invent an entrance paper for this route. Use the official page for the current application, merit or subject rules.</div>`;
  showModal(`<div class="page-header"><div><p class="page-kicker">${escapeHTML(college.name)}</p><h2>${escapeHTML(college.programme)}</h2><p class="tiny">Verified ${escapeHTML(source.verifiedOn)} · ${escapeHTML(source.type)}</p></div></div>${extra}<div class="card card-pad" style="margin-top:15px"><p class="section-kicker">How to prepare here</p><p class="muted">${escapeHTML(iimb ? "Use the full IIMB mock and interview coach. Keep calling the programme BBA-DBE, not Economics." : christ ? "Practise Economics concepts, a concise programme-fit answer and a 90-second topic. Refresh the course page before each application cycle." : college.id === "cuet-ug" ? "Choose subjects only after reading the current NTA bulletin and target-university mapping. The neutral sampler is not a CUET blueprint." : "Build academic readiness, application accuracy and economics fluency. Do not assume that an entrance test exists when the official route is merit-based.")}</p>${source.url ? `<a class="button-primary" href="${source.url}" target="_blank" rel="noreferrer" style="display:inline-flex;text-decoration:none">Open official source ↗</a>` : ""}</div>`);
}

function lessonQuizQuestion(lesson, index) {
  const source = lesson.quiz[index];
  const distractors = lesson.quiz.filter((_, itemIndex) => itemIndex !== index).map((item) => item.answer).slice(0, 3);
  const correctIndex = index % 4;
  const options = [...distractors];
  options.splice(correctIndex, 0, source.answer);
  return { prompt: source.question, answer: source.answer, explanation: source.explanation, options, answerIndex: correctIndex };
}

function renderLessonModal() {
  const lesson = lessonSession?.lesson;
  if (!lesson) return;
  const quiz = lesson.quiz?.[lessonSession.index] ? lessonQuizQuestion(lesson, lessonSession.index) : null;
  const finished = lessonSession.index >= (lesson.quiz?.length || 0);
  if (finished) {
    const score = lessonSession.score;
    const passed = score >= 4;
    if (passed && !state.completedLessons.includes(lesson.id)) {
      state.completedLessons.push(lesson.id);
      saveState();
    }
    showModal(`<div class="page-header"><div><p class="page-kicker">Lesson complete</p><h2>${escapeHTML(lesson.title)}</h2><p class="tiny">${passed ? "Saved as complete in this browser." : "Review the explanation and try this lesson again when you are ready."}</p></div></div><div class="result-hero" style="border-radius:14px;margin-bottom:15px"><span class="score-pill">${passed ? "Concept checked" : "Keep practising"}</span><div class="result-score" style="font-size:3.6rem">${score}/${lesson.quiz.length}</div><p>${passed ? "Nice. Now explain the concept aloud using your own example." : "A score below 4 is a prompt to revisit the idea, not a label."}</p></div><button class="button-primary" data-action="close-modal">Back to Economics Lab</button>`);
    return;
  }
  showModal(`<div class="page-header"><div><p class="page-kicker">Economics made simple · ${lessonSession.index + 1}/${lesson.quiz.length}</p><h2>${escapeHTML(lesson.title)}</h2></div></div><div class="brief-highlight"><p><strong>Simple explanation:</strong> ${escapeHTML(lesson.simpleExplanation)}</p></div><p class="muted"><b>Everyday example:</b> ${escapeHTML(lesson.everydayExample)}</p><p class="muted"><b>Try it:</b> ${escapeHTML(lesson.interactionPrompt)}</p><div class="lesson-quiz"><div class="quiz-question"><p>${escapeHTML(quiz.prompt)}</p><div class="options-list">${quiz.options.map((option, index) => `<button class="option-button ${lessonSession.selected === index ? "selected" : ""}" data-action="select-lesson-option" data-value="${index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(option)}</span></button>`).join("")}</div></div>${lessonSession.feedback ? `<div class="notice ${lessonSession.feedback.correct ? "success" : "coral"} quiz-result"><strong>${lessonSession.feedback.correct ? "Correct" : `Answer: ${escapeHTML(quiz.answer)}`}</strong>${escapeHTML(quiz.explanation)}</div>` : ""}</div><div class="question-actions"><span class="answer-note">${lessonSession.feedback ? "Use the explanation before moving on." : "Choose one answer."}</span>${lessonSession.feedback ? `<button class="button-primary" data-action="next-lesson-question">${lessonSession.index === lesson.quiz.length - 1 ? "See result" : "Next question"} ↗</button>` : `<button class="button-primary" data-action="submit-lesson-option" ${lessonSession.selected === null ? "disabled" : ""}>Check answer</button>`}</div>`);
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastRegion.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3600);
}

function navigate(view) {
  currentView = view;
  document.querySelector("#mobile-nav")?.classList.remove("open");
  document.querySelector(".menu-button")?.setAttribute("aria-expanded", "false");
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startMock(testId) {
  const test = IIMB_MOCKS.tests.find((item) => item.id === testId) || IIMB_MOCKS.tests[0];
  if (!test) return;
  testSession = {
    type: "mock",
    testId: test.id,
    title: test.title,
    questions: test.questions,
    answers: Array(test.questions.length).fill(null),
    current: 0,
    timeRemaining: test.suggestedMinutes * 60,
    startedAt: Date.now()
  };
  currentView = "mock-run";
  render();
  startTestTimer();
}

function startTopicPractice(domain) {
  let selectedDomain = domain;
  if (domain === "weakest") {
    const latest = latestAttempt();
    selectedDomain = latest ? Object.entries(latest.breakdown).sort((a, b) => a[1].percentage - b[1].percentage)[0]?.[0] || "all" : "all";
  }
  if (domain === "cuet") selectedDomain = "all";
  const source = IIMB_TOPIC_PRACTICE.filter((item) => selectedDomain === "all" || item.domain === selectedDomain);
  const questions = source.slice(0, Math.min(10, source.length));
  if (!questions.length) return showToast("No questions are available for that filter yet.");
  testSession = {
    type: "topic",
    testId: `topic-${selectedDomain}`,
    title: domain === "cuet" ? "Neutral aptitude sampler · CUET rules not hard-coded" : `${DOMAIN_LABELS[selectedDomain] || "Mixed skills"} focus set`,
    questions,
    answers: Array(questions.length).fill(null),
    current: 0,
    timeRemaining: Math.max(12, questions.length * 90),
    startedAt: Date.now()
  };
  currentView = "mock-run";
  render();
  startTestTimer();
}

function startTestTimer() {
  stopTestTimer();
  testTimerId = window.setInterval(() => {
    if (!testSession) return;
    testSession.timeRemaining -= 1;
    const timer = document.querySelector("#test-timer");
    if (timer) {
      timer.textContent = `◷ ${formatTimer(testSession.timeRemaining)}`;
      timer.classList.toggle("warning", testSession.timeRemaining < 300);
    }
    if (testSession.timeRemaining <= 0) {
      showToast("Time is up. Submitting your set for review.");
      submitTest();
    }
  }, 1000);
}

function stopTestTimer() {
  if (testTimerId) window.clearInterval(testTimerId);
  testTimerId = null;
}

function submitTest() {
  if (!testSession) return;
  stopTestTimer();
  const session = testSession;
  const breakdown = {};
  const mistakes = [];
  let correct = 0;
  session.questions.forEach((question, index) => {
    const answer = session.answers[index];
    const isCorrect = answer === question.answerIndex;
    if (isCorrect) correct += 1;
    if (!breakdown[question.domain]) breakdown[question.domain] = { correct: 0, total: 0, percentage: 0 };
    breakdown[question.domain].total += 1;
    if (isCorrect) breakdown[question.domain].correct += 1;
    mistakes.push({
      number: index + 1,
      domain: question.domain,
      correct: isCorrect,
      selected: answer === null ? "Not answered" : question.options[answer],
      answer: question.answer,
      explanation: question.explanation,
      alternativeExplanations: question.alternativeExplanations || []
    });
  });
  Object.values(breakdown).forEach((item) => { item.percentage = Math.round(item.correct / item.total * 100); });
  const score = Math.round(correct / session.questions.length * 100);
  const weak = Object.entries(breakdown).sort((a, b) => a[1].percentage - b[1].percentage)[0]?.[0] || "all";
  const result = {
    id: `attempt-${Date.now()}`,
    testId: session.testId,
    title: session.title,
    kindLabel: session.type === "topic" ? "Focused practice" : "IIMB readiness mock",
    date: new Date().toISOString(),
    correct,
    total: session.questions.length,
    unanswered: session.answers.filter((answer) => answer === null).length,
    score,
    breakdown,
    mistakes,
    nextMove: weak === "all" ? { title: "Keep your explanation muscle warm", action: "navigate", value: "interview", label: "Practise an interview answer" } : { title: `Practise ${DOMAIN_LABELS[weak]}`, action: "start-topic", value: weak, label: "Start focused set" }
  };
  if (session.type === "topic") {
    session.questions.forEach((question, index) => {
      state.topicAnswers[question.id] = { answer: session.answers[index], correct: session.answers[index] === question.answerIndex, date: result.date };
    });
  }
  state.attempts.unshift(result);
  saveState();
  lastResults = result;
  testSession = null;
  currentView = "mock-results";
  render();
}

function evaluateInterview(itemId) {
  const textarea = document.querySelector("#interview-answer");
  const answer = textarea?.value.trim() || "";
  if (!answer) return showToast("Write or speak an answer before scoring it.");
  const words = answer.split(/\s+/).filter(Boolean);
  const lower = answer.toLowerCase();
  const sentences = answer.split(/[.!?]+/).filter(Boolean).length;
  const dimensions = {
    clarity: clamp(35 + Math.min(45, words.length * 1.3) + (sentences >= 2 ? 12 : 0)),
    reasoning: clamp(32 + (/(because|therefore|so that|however|trade-off|example)/i.test(answer) ? 30 : 8) + (sentences >= 3 ? 16 : 0)),
    relevance: clamp(38 + (/(econom|business|programme|college|study|learn|market|choice|digital)/i.test(answer) ? 35 : 5) + (words.length > 35 ? 12 : 0)),
    structure: clamp(30 + (sentences >= 3 ? 24 : 7) + (/(first|second|finally|also|because|for example|in short)/i.test(answer) ? 28 : 4)),
    authenticity: clamp(42 + (/(I|my|me|I’m|I'm)/.test(answer) ? 22 : 0) + (lower.includes("fitness") || lower.includes("keyboard") ? 18 : 7))
  };
  const score = Math.round(Object.values(dimensions).reduce((sum, value) => sum + value, 0) / 5);
  const summary = score >= 75 ? "Strong base. Tighten one example and keep the answer natural." : score >= 55 ? "Useful first attempt. Add one concrete reason and a clearer ending." : "Start again with one idea, one example and one honest caveat.";
  const nextTry = dimensions.structure < 65 ? "Use a simple beginning → reason → example → ending shape." : dimensions.reasoning < 65 ? "Add a because, trade-off or example so the answer shows thinking." : "Remove one generic sentence and replace it with a true detail.";
  interviewFeedback = { questionId: itemId, answer, dimensions, score, summary, nextTry };
  state.interviewAttempts.unshift({ id: `interview-${Date.now()}`, questionId: itemId, score, dimensions, date: new Date().toISOString() });
  saveState();
  render();
  showToast("Your answer was scored with the offline rubric.");
}

function startSpeechInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return showToast("Speech input is not available in this browser. Type your answer instead.");
  const textarea = document.querySelector("#interview-answer");
  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.onstart = () => showToast("Listening. Speak your answer, then pause.");
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results).map((result) => result[0].transcript).join(" ");
    if (textarea) textarea.value = `${textarea.value ? `${textarea.value} ` : ""}${transcript}`.trim();
  };
  recognition.onerror = () => showToast("Speech input stopped. You can type instead.");
  recognition.start();
}

function startPresentationTimer() {
  stopPresentationTimer();
  presentationSeconds = 90;
  presentationPrepSeconds = null;
  const clock = document.querySelector("#presentation-clock");
  if (clock) clock.textContent = formatTimer(presentationSeconds);
  presentationTimerId = window.setInterval(() => {
    presentationSeconds -= 1;
    const node = document.querySelector("#presentation-clock");
    if (node) node.textContent = formatTimer(presentationSeconds);
    if (presentationSeconds <= 0) {
      stopPresentationTimer();
      showToast("90 seconds complete. Save a reflection while the attempt is fresh.");
    }
  }, 1000);
}

function startPresentationPrep() {
  stopPresentationTimer();
  presentationPrepSeconds = 10;
  const tick = () => {
    const node = document.querySelector("#presentation-clock");
    if (node) node.textContent = formatTimer(presentationPrepSeconds);
    if (presentationPrepSeconds <= 0) {
      presentationPrepSeconds = null;
      startPresentationTimer();
      return;
    }
    presentationPrepSeconds -= 1;
    presentationTimerId = window.setTimeout(tick, 1000);
  };
  tick();
}

function stopPresentationTimer() {
  if (presentationTimerId) {
    window.clearInterval(presentationTimerId);
    window.clearTimeout(presentationTimerId);
  }
  presentationTimerId = null;
}

async function toggleRecording() {
  if (recording.status === "recording") {
    recording.recorder?.stop();
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    recording.status = "unavailable";
    showToast("Recording is not available here. Use the reflection box instead.");
    render();
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    recording = { recorder, chunks: [], url: null, status: "recording" };
    recorder.ondataavailable = (event) => { if (event.data.size) recording.chunks.push(event.data); };
    recorder.onstop = () => {
      const blob = new Blob(recording.chunks, { type: "audio/webm" });
      recording.url = URL.createObjectURL(blob);
      recording.status = "stopped";
      stream.getTracks().forEach((track) => track.stop());
      render();
      showToast("Recording ready in this tab. Save the practice reflection if useful.");
    };
    recorder.start();
    render();
    showToast("Recording started. Speak naturally for up to 90 seconds.");
  } catch {
    recording.status = "unavailable";
    showToast("Microphone permission was not granted. You can still practise with the timer.");
    render();
  }
}

function savePresentation(topicId) {
  const topic = PRESENTATION_TOPICS.find((item) => item.id === topicId);
  const notes = document.querySelector("#presentation-notes")?.value.trim() || "";
  if (!topic) return;
  state.presentationSessions.unshift({ id: `presentation-${Date.now()}`, topicId, title: topic.title, notes, date: new Date().toISOString(), recorded: Boolean(recording.url) });
  saveState();
  showToast("Presentation reflection saved locally.");
}

function downloadSummary() {
  const result = lastResults || latestAttempt();
  if (!result) return showToast("Complete a mock before downloading a summary.");
  const lines = [
    "AYUSH'S ECONOMICS ADMISSION PREP HUB",
    "Practice result summary",
    "",
    `Set: ${result.title}`,
    `Date: ${formatDate(result.date)}`,
    `Score: ${result.score}% (${result.correct}/${result.total})`,
    `Unanswered: ${result.unanswered}`,
    "",
    "SKILL BREAKDOWN",
    ...Object.entries(result.breakdown).map(([domain, info]) => `- ${DOMAIN_LABELS[domain] || domain}: ${info.correct}/${info.total} (${info.percentage}%)`),
    "",
    "REVIEW NOTES",
    ...result.mistakes.filter((item) => !item.correct).slice(0, 15).map((item) => `- Q${item.number}: ${item.explanation}`),
    "",
    "Accuracy note: This is a local practice record. It is not an admission prediction or an official score report."
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ayush-practice-summary-${new Date(result.date).toISOString().slice(0, 10)}.txt`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Summary downloaded.");
}

function resetProgress() {
  if (!window.confirm("Reset all local practice history, answer records and lesson progress?")) return;
  state = structuredClone(initialState);
  lastResults = null;
  interviewFeedback = null;
  saveState();
  render();
  showToast("Local progress reset.");
}

function handleAction(action, value) {
  switch (action) {
    case "start-mock": startMock(value); break;
    case "start-topic": startTopicPractice(value); break;
    case "filter-topic-domain": activeTopicDomain = value; if (currentView === "mocks") render(); break;
    case "select-test-option":
      if (testSession) { testSession.answers[testSession.current] = Number(value); render(); startTestTimer(); }
      break;
    case "previous-question": if (testSession) { testSession.current = Math.max(0, testSession.current - 1); render(); startTestTimer(); } break;
    case "next-question": if (testSession) { testSession.current = Math.min(testSession.questions.length - 1, testSession.current + 1); render(); startTestTimer(); } break;
    case "goto-question": if (testSession) { testSession.current = Number(value); render(); startTestTimer(); } break;
    case "submit-test": submitTest(); break;
    case "filter-interview": interviewFilter = value; interviewFeedback = null; render(); break;
    case "select-interview": selectedInterviewId = value; interviewFeedback = null; render(); break;
    case "evaluate-interview": evaluateInterview(value); break;
    case "speech-input": startSpeechInput(); break;
    case "clear-interview": interviewFeedback = null; render(); break;
    case "select-presentation": selectedPresentationId = value; presentationSeconds = 90; presentationPrepSeconds = null; render(); break;
    case "start-presentation-timer": startPresentationTimer(); break;
    case "start-presentation-prep": startPresentationPrep(); break;
    case "toggle-recording": toggleRecording(); break;
    case "save-presentation": savePresentation(value); break;
    case "open-lesson":
      lessonSession = { lesson: ECONOMICS_LESSONS.find((item) => item.id === value), index: 0, score: 0, selected: null, feedback: null };
      renderLessonModal();
      break;
    case "select-lesson-option": if (lessonSession) { lessonSession.selected = Number(value); renderLessonModal(); } break;
    case "submit-lesson-option":
      if (lessonSession && lessonSession.selected !== null) {
        const quiz = lessonQuizQuestion(lessonSession.lesson, lessonSession.index);
        const correct = lessonSession.selected === quiz.answerIndex;
        lessonSession.feedback = { correct };
        if (correct) lessonSession.score += 1;
        renderLessonModal();
      }
      break;
    case "next-lesson-question": if (lessonSession) { lessonSession.index += 1; lessonSession.selected = null; lessonSession.feedback = null; renderLessonModal(); } break;
    case "view-college": renderCollegeModal(value); break;
    case "show-sources": renderSourceModal(); break;
    case "download-summary": downloadSummary(); break;
    case "reset-progress": resetProgress(); break;
    case "close-modal": closeModal(); break;
    case "navigate": navigate(value); break;
    case "toggle-mobile-nav": {
      const mobileNav = document.querySelector("#mobile-nav");
      const open = mobileNav?.classList.toggle("open");
      document.querySelector(".menu-button")?.setAttribute("aria-expanded", String(Boolean(open)));
      break;
    }
    default: break;
  }
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    event.preventDefault();
    navigate(viewButton.dataset.view);
    return;
  }
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    event.preventDefault();
    handleAction(actionButton.dataset.action, actionButton.dataset.value);
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "topic-search") {
    topicSearch = event.target.value;
    const list = document.querySelector("#topic-filter-list");
    const card = document.querySelector("#topic-practice-card");
    if (list) list.innerHTML = renderTopicFilterButtons();
    if (card) card.innerHTML = renderTopicPracticeCard();
  }
});

window.addEventListener("beforeunload", () => {
  stopTestTimer();
  stopPresentationTimer();
});

render();
