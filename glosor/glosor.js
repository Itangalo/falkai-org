"use strict";

/* ============================================================
   GLOSOR – prototyp
   All data sparas i webbläsaren (localStorage). Ingen server.

   JOHAN – SÅ LÄGGER DU TILL NYA GLOSOR:
   Lägg till ett nytt objekt FÖRST i listan WEEKS nedan, t.ex:
     { id: "v38", title: "Vecka 38", words: [
       { sv: "hoppas", en: "hope" },
       { sv: "spegel", en: "mirror" },
     ] },
   Översta veckan i listan blir automatiskt standardvalet.
   ============================================================ */

const WEEKS = [
  {
    id: "v37", title: "Vecka 37", words: [
      { sv: "äventyr", en: "adventure" },
      { sv: "modig", en: "brave" },
      { sv: "moln", en: "cloud" },
      { sv: "mörk", en: "dark" },
      { sv: "upptäcka", en: "discover" },
      { sv: "vänskap", en: "friendship" },
      { sv: "gömma", en: "hide" },
      { sv: "ö", en: "island" },
      { sv: "resa", en: "journey" },
      { sv: "skratta", en: "laugh" },
      { sv: "berg", en: "mountain" },
      { sv: "plötsligt", en: "suddenly" },
    ],
  },
  {
    id: "v36", title: "Vecka 36", words: [
      { sv: "frukost", en: "breakfast" },
      { sv: "bro", en: "bridge" },
      { sv: "fjäril", en: "butterfly" },
      { sv: "slott", en: "castle" },
      { sv: "öken", en: "desert" },
      { sv: "trädgård", en: "garden" },
      { sv: "hjälm", en: "helmet" },
      { sv: "lampa", en: "lamp" },
      { sv: "spegel", en: "mirror" },
      { sv: "skugga", en: "shadow" },
    ],
  },
];

// Intervall per Leitner-box (dagar). Box 1 = nytt/svårt, box 5 = sitter.
const BOX_INTERVAL = [0, 0, 1, 3, 7, 14];

const LS_KEY = "glosorApp.v1";
const DAY = 24 * 3600 * 1000;

const $ = (id) => document.getElementById(id);
const views = ["view-login", "view-home", "view-browse", "view-train", "view-summary"];

/* ---------- lagring ---------- */

function loadStore() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* korrupt data – börja om */ }
  return { users: {} };
}

function saveStore() {
  localStorage.setItem(LS_KEY, JSON.stringify(store));
}

let store = loadStore();

function getUser(nick) {
  if (!store.users[nick]) {
    store.users[nick] = { created: Date.now(), streak: 0, lastDay: null, best: 0, cards: {} };
    saveStore();
  }
  return store.users[nick];
}

let currentNick = null;
const user = () => store.users[currentNick];

/* ---------- hjälp ---------- */

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function norm(s) {
  return (s || "").toLowerCase().trim().replace(/\s+/g, " ");
}

// Levenshtein-avstånd för stavfelstolerans
function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

function maxTypo(en) {
  return en.length <= 5 ? 1 : 2;
}

function wordId(weekId, sv) {
  return weekId + ":" + norm(sv);
}

function cardState(u, id) {
  if (!u.cards[id]) u.cards[id] = { box: 1, due: 0, right: 0, wrong: 0 };
  return u.cards[id];
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function show(viewId) {
  for (const v of views) $(v).hidden = v !== viewId;
  window.scrollTo(0, 0);
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ---------- inloggning ---------- */

function renderLogin() {
  const nicks = Object.keys(store.users).sort((a, b) => a.localeCompare(b, "sv"));
  const list = $("nickList");
  list.innerHTML = "";
  for (const nick of nicks) {
    const wrap = document.createElement("span");
    wrap.className = "g-nick";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "g-btn g-btn-small";
    btn.textContent = nick;
    btn.addEventListener("click", () => login(nick));
    const del = document.createElement("button");
    del.type = "button";
    del.className = "g-del";
    del.title = "Ta bort " + nick + " från den här webbläsaren";
    del.setAttribute("aria-label", "Ta bort " + nick);
    del.textContent = "×";
    del.addEventListener("click", () => {
      if (confirm("Ta bort " + nick + " och hens framsteg från den här webbläsaren?")) {
        delete store.users[nick];
        saveStore();
        renderLogin();
      }
    });
    wrap.append(btn, del);
    list.appendChild(wrap);
  }
  $("newNick").value = "";
  show("view-login");
  updateUserChip();
}

function login(nick) {
  currentNick = nick;
  getUser(nick);
  renderHome();
}

function logout() {
  currentNick = null;
  if (trainState.active) trainState.active = false;
  renderLogin();
}

function updateUserChip() {
  const chip = $("userChip");
  if (currentNick) {
    chip.hidden = false;
    $("userChipName").textContent = currentNick;
  } else {
    chip.hidden = true;
  }
}

/* ---------- startsida ---------- */

function masteredCount(u) {
  return Object.values(u.cards).filter((c) => c.box >= 4).length;
}

function renderHome() {
  updateUserChip();
  $("homeGreeting").textContent = "Hej, " + currentNick + "!";
  const u = user();
  const streakTxt = u.streak > 0 ? u.streak + " dag" + (u.streak > 1 ? "ar" : "") + " i rad" : "–";
  $("homeStats").innerHTML =
    statBox(masteredCount(u), "ord sitter") +
    statBox(streakTxt, "tränings&shy;svit") +
    statBox(u.best > 0 ? u.best + "%" : "–", "person&shy;bästa");

  const wl = $("weekList");
  wl.innerHTML = "";
  WEEKS.forEach((w, i) => {
    const label = document.createElement("label");
    label.className = "g-week";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "week";
    radio.value = w.id;
    radio.checked = i === 0;
    label.append(radio, document.createTextNode(w.title + " (" + w.words.length + " ord)"));
    wl.appendChild(label);
  });
  $("exportCode").hidden = true;
  $("importCode").value = "";
  show("view-home");
}

function statBox(value, label) {
  return '<div class="g-stat"><b>' + value + "</b><span>" + label + "</span></div>";
}

function selectedWeekId() {
  const r = document.querySelector('input[name="week"]:checked');
  return r ? r.value : WEEKS[0].id;
}

/* ---------- kolla igenom ---------- */

let browseWeekId = null;
let browseRevealed = false;

function renderBrowse(weekId) {
  browseWeekId = weekId;
  browseRevealed = false;
  const week = WEEKS.find((w) => w.id === weekId);
  $("browseTitle").textContent = week.title;
  $("browseCount").textContent = week.words.length + " ord. Klicka på ett ord för att se svaret.";
  $("toggleAllBtn").textContent = "Visa alla svar";
  const list = $("browseList");
  list.innerHTML = "";
  for (const w of week.words) {
    const item = document.createElement("div");
    item.className = "g-browse-item";
    const sv = document.createElement("span");
    sv.className = "sv";
    sv.textContent = w.sv;
    const en = document.createElement("span");
    en.className = "en";
    en.textContent = w.en;
    en.hidden = true;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "g-btn g-btn-small";
    btn.textContent = "Visa";
    btn.addEventListener("click", () => {
      en.hidden = !en.hidden;
      btn.textContent = en.hidden ? "Visa" : "Dölj";
    });
    item.addEventListener("click", (e) => {
      if (e.target === btn) return;
      btn.click();
    });
    item.append(sv, en, btn);
    list.appendChild(item);
  }
  show("view-browse");
}

/* ---------- träningspass ---------- */

const trainState = {
  active: false,
  queue: [],
  done: new Set(),
  total: 0,
  firstTry: 0,
  almost: 0,
  attempts: 0,
  wrongTally: {},
  current: null,
  weekId: null,
  retryOnly: null,
};

function buildQueue(u, weekId, mixOld, retryOnly) {
  const now = Date.now();
  const week = WEEKS.find((w) => w.id === weekId);
  let words = week.words.map((w) => ({ weekId, sv: w.sv, en: w.en }));

  if (retryOnly && retryOnly.length) {
    const set = new Set(retryOnly);
    words = words.filter((w) => set.has(wordId(weekId, w.sv)));
  }

  const due = [];
  const fresh = [];
  for (const w of words) {
    const st = cardState(u, wordId(w.weekId, w.sv));
    (st.due <= now ? due : fresh).push(w);
  }

  let extras = [];
  if (mixOld && !retryOnly) {
    for (const w of WEEKS) {
      if (w.id === weekId) continue;
      for (const word of w.words) {
        const st = cardState(u, wordId(w.id, word.sv));
        if (st.due <= now && st.wrong > 0) extras.push({ weekId: w.id, sv: word.sv, en: word.en });
      }
    }
  }

  const ordered = shuffle(due).concat(shuffle(extras)).concat(shuffle(fresh));
  return { queue: ordered, total: ordered.length };
}

function startTraining(weekId, mixOld, retryOnly) {
  const u = user();
  const { queue, total } = buildQueue(u, weekId, mixOld, retryOnly);
  if (!total) return;
  Object.assign(trainState, {
    active: true, queue, total,
    done: new Set(), firstTry: 0, almost: 0, attempts: 0,
    wrongTally: {}, current: null, weekId, retryOnly: retryOnly || null,
  });
  show("view-train");
  nextCard();
}

function nextCard() {
  const fb = $("feedback");
  fb.className = "g-feedback";
  fb.innerHTML = "";
  const input = $("answerInput");
  input.value = "";
  input.disabled = false;
  document.querySelector('#answerForm button[type="submit"]').disabled = false;

  if (!trainState.queue.length) {
    finishSession();
    return;
  }
  trainState.current = trainState.queue.shift();
  $("trainSv").textContent = trainState.current.sv;
  updateProgress();
  input.focus();
}

function updateProgress() {
  const done = trainState.done.size;
  $("progressBar").style.width = trainState.total ? Math.round((done / trainState.total) * 100) + "%" : "0";
  $("progressText").textContent = "Ord " + Math.min(done + 1, trainState.total) + " av " + trainState.total;
}

function handleAnswer(e) {
  e.preventDefault();
  if (!trainState.active || !trainState.current) return;
  const u = user();
  const card = trainState.current;
  const id = wordId(card.weekId, card.sv);
  const st = cardState(u, id);
  const guess = norm($("answerInput").value);
  const target = norm(card.en);
  const fb = $("feedback");

  if (!guess) {
    fb.className = "g-feedback almost";
    fb.textContent = "Skriv ett svar först.";
    return;
  }

  if (guess === target) {
    // Rätt (stavfelsförsök räknas inte – bara riktiga fel nollställer)
    st.right++;
    if (st.box < 5) st.box++;
    st.due = Date.now() + BOX_INTERVAL[st.box] * DAY;
    saveStore();
    trainState.done.add(id);
    if (trainState.attempts === 0) trainState.firstTry++;
    trainState.attempts = 0;
    fb.className = "g-feedback good";
    fb.textContent = pick(["Rätt!", "Snyggt!", "Just det!", "Bra!"]) + " " + card.sv + " = " + card.en;
    trainState.current = null;
    updateProgress();
    setTimeout(() => { if (trainState.active) nextCard(); }, 900);
  } else if (lev(guess, target) <= maxTypo(target)) {
    // Nästan rätt – gratis försök igen, räknas inte som fel
    trainState.almost++;
    fb.className = "g-feedback almost";
    fb.textContent = "Nästan! Ett litet stavfel bara – försök en gång till. Det räknas inte som fel.";
    $("answerInput").select();
  } else {
    // Fel – visa svaret, lägg tillbaka ordet i kön
    st.wrong++;
    st.box = 1;
    st.due = Date.now();
    saveStore();
    trainState.wrongTally[id] = (trainState.wrongTally[id] || 0) + 1;
    trainState.attempts++;
    const pos = Math.min(3, trainState.queue.length);
    trainState.queue.splice(pos, 0, card);
    trainState.current = null;
    fb.className = "g-feedback bad";
    fb.innerHTML = "Inte riktigt. <span class=\"correct\"><b>" + escapeHtml(card.sv) +
      "</b> = <b>" + escapeHtml(card.en) + "</b></span>Ordet kommer igen om en liten stund.";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "g-btn g-btn-primary";
    btn.textContent = "Fortsätt";
    btn.addEventListener("click", () => { if (trainState.active) nextCard(); });
    fb.appendChild(btn);
    $("answerInput").disabled = true;
    document.querySelector('#answerForm button[type="submit"]').disabled = true;
    btn.focus();
  }
}

// firstTry-variabeln ovan: förenklad – räknar "rent" svar utan föregående fel i passet
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function finishSession() {
  trainState.active = false;
  const u = user();
  const total = trainState.total;
  const pct = total ? Math.round((trainState.firstTry / total) * 100) : 0;

  // Svit + personbästa
  const today = todayStr();
  if (u.lastDay !== today) {
    const yesterday = new Date(Date.now() - DAY).toISOString().slice(0, 10);
    u.streak = u.lastDay === yesterday ? u.streak + 1 : 1;
    u.lastDay = today;
  }
  if (pct > u.best) u.best = pct;
  saveStore();

  $("summaryTitle").textContent = "Klart!";
  $("summaryMsg").textContent =
    pct >= 90 ? "Starkt jobbat! Ska du ta alla veckor blandat nästa gång?" :
    pct >= 60 ? "Bra jobbat – du är på god väg. Fortsätt så här." :
                "Bra kämpat! De här orden är kluriga, men det lossnar om du fortsätter.";
  $("summaryStats").innerHTML =
    statBox(trainState.firstTry + "/" + total, "rätt direkt") +
    statBox(u.streak + "", "dagar i rad") +
    statBox(masteredCount(u) + "", "ord sitter");

  const wrongIds = Object.keys(trainState.wrongTally);
  const box = $("retryBox");
  if (wrongIds.length) {
    box.hidden = false;
    const ul = $("retryList");
    ul.innerHTML = "";
    for (const id of wrongIds) {
      const [wId, sv] = id.split(/:(.+)/);
      const week = WEEKS.find((w) => w.id === wId);
      const word = week && week.words.find((w) => norm(w.sv) === sv);
      const li = document.createElement("li");
      li.textContent = word ? word.sv + " = " + word.en : id;
      ul.appendChild(li);
    }
  } else {
    box.hidden = true;
  }
  show("view-summary");
}

/* ---------- export / import ---------- */

function exportProfile() {
  const data = btoa(unescape(encodeURIComponent(JSON.stringify(user()))));
  const area = $("exportCode");
  area.hidden = false;
  area.value = currentNick + "::" + data;
  area.select();
}

function importProfile(code) {
  const m = code.trim().match(/^(.+?)::(.+)$/);
  if (!m) return false;
  try {
    const data = JSON.parse(decodeURIComponent(escape(atob(m[2]))));
    if (!data || typeof data !== "object" || !data.cards) return false;
    store.users[m[1]] = data;
    saveStore();
    login(m[1]);
    return true;
  } catch (e) {
    return false;
  }
}

/* ---------- händelser ---------- */

$("newNickForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nick = norm($("newNick").value);
  if (!nick) return;
  // Undvik dubbletter som bara skiljer i versaler
  const existing = Object.keys(store.users).find((n) => norm(n) === nick);
  login(existing || $("newNick").value.trim());
});

$("logoutBtn").addEventListener("click", logout);
$("startTrainBtn").addEventListener("click", () => startTraining(selectedWeekId(), $("mixOld").checked, null));
$("startBrowseBtn").addEventListener("click", () => renderBrowse(selectedWeekId()));
$("browseBackBtn").addEventListener("click", renderHome);
$("browseTrainBtn").addEventListener("click", () => startTraining(browseWeekId, false, null));
$("toggleAllBtn").addEventListener("click", () => {
  browseRevealed = !browseRevealed;
  document.querySelectorAll("#browseList .en").forEach((el) => { el.hidden = !browseRevealed; });
  document.querySelectorAll("#browseList .g-browse-item .g-btn").forEach((b) => {
    b.textContent = browseRevealed ? "Dölj" : "Visa";
  });
  $("toggleAllBtn").textContent = browseRevealed ? "Dölj alla svar" : "Visa alla svar";
});
$("answerForm").addEventListener("submit", handleAnswer);
$("quitTrainBtn").addEventListener("click", () => {
  trainState.active = false;
  renderHome();
});
$("retryBtn").addEventListener("click", () => {
  startTraining(trainState.weekId, false, Object.keys(trainState.wrongTally));
});
$("summaryHomeBtn").addEventListener("click", renderHome);
$("exportBtn").addEventListener("click", exportProfile);
$("importForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (importProfile($("importCode").value)) {
    alert("Framstegen är hämtade!");
  } else {
    alert("Koden fungerade inte. Kontrollera att du kopierat hela koden.");
  }
});

/* ---------- start ---------- */

renderLogin();
