const YT = {
  walk: "https://www.youtube.com/@yes2next/search?query=after%20meal%20walk",
  hasfit: "https://www.youtube.com/@HASfit/search?query=beginner%20dumbbell%20full%20body",
  aerobic: "https://www.youtube.com/@yes2next/search?query=low%20impact%20cardio",
  pilates: "https://www.youtube.com/@JessicaValantPilates/search?query=beginner%20balance",
  indoor: "https://www.youtube.com/@WalkatHome/search?query=30%20minute%20walk",
  step: "https://www.youtube.com/@JennyFordFitness/search?query=beginner%20step",
  dance: "https://www.youtube.com/@growwithjo/search?query=low%20impact",
};

const tutorials = [
  { name: "Goblet Squat", zh: "高腳杯深蹲", cue: "身後放椅子，像準備坐下。", url: "https://www.youtube.com/watch?v=W2U2gRsFJjE" },
  { name: "Dumbbell Row", zh: "單手啞鈴划船", cue: "一手扶穩固椅子，手肘往腰部拉。", url: "https://www.youtube.com/watch?v=WS8U9Dzzy70" },
  { name: "Shoulder Press", zh: "坐姿啞鈴肩推", cue: "先用 5 lb；肩膀不舒服就跳過。", url: "https://www.youtube.com/watch?v=qEwKCR5JCog" },
  { name: "Romanian Deadlift", zh: "羅馬尼亞硬舉", cue: "屁股向後推，背部保持平直。", url: "https://www.youtube.com/watch?v=V8Hdl1FiNt4" },
];

const standardWalk = (label = "飯後室內走路 10–15分鐘") => ({
  title: label,
  note: "吃完後約 15 分鐘開始；保持可以說話的速度。",
  url: YT.walk,
  timer: 10,
  gentle: "腳底不舒服時可扶椅原地踏步，或改做坐姿抬膝。",
});

const strengthExercises = tutorials.map((t) => ({ label: `${t.zh} 8–12次`, url: t.url }));

const days = [
  { id: 1, icon: "🏋️", title: "全身肌力", short: "啞鈴・腿・背・肩", time: "約 30分鐘", summary: "慢慢做四個基本動作，保住日常生活需要的力量。", steps: [
    { ...standardWalk("早餐後走路 10分鐘"), type: "morning" },
    { title: "HASfit 初學者全身啞鈴", note: "先用 5 lb。每個動作 8–12次，做 2組；組間休息 60–90秒。", url: YT.hasfit, exercises: strengthExercises, gentle: "改成每個動作 1組；深蹲只坐到椅子，肩推可不拿重量。" },
    { ...standardWalk("晚餐後走路 10–15分鐘"), type: "evening" },
  ]},
  { id: 2, icon: "💃", title: "低衝擊有氧", short: "有氧舞蹈・不跳躍", time: "35–40分鐘", summary: "選喜歡的音樂持續動；不追求跳得快，追求做得開心。", steps: [
    { ...standardWalk("早餐後走路 10分鐘"), type: "morning" },
    { title: "Yes2Next 低衝擊有氧", note: "以可以講話、稍微流汗的強度完成。", url: YT.aerobic, gentle: "選坐姿或站姿初學版；所有跳躍改成左右踏步。" },
    { title: "晚餐後依時間決定", note: "若有氧是在晚餐後完成，不必再走；否則走 10分鐘。", url: YT.walk, timer: 10 },
  ]},
  { id: 3, icon: "🧘", title: "平衡＋核心", short: "Pilates・姿勢・穩定", time: "25–30分鐘", summary: "這一天不追求大汗；練習站得穩、轉身穩和核心控制。", steps: [
    { ...standardWalk("早餐後走路 10分鐘"), type: "morning" },
    { title: "Jessica Valant 初學者平衡／Pilates", note: "站姿平衡時，把穩固椅子放在手邊。", url: YT.pilates, gentle: "選坐姿核心或地板 Pilates；跳過單腳站立。" },
    { ...standardWalk("晚餐後走路 10–15分鐘"), type: "evening" },
  ]},
  { id: 4, icon: "💪", title: "第二次肌力", short: "啞鈴・換一支影片", time: "約 30分鐘", summary: "重複基本動作會讓姿勢更熟練；今天可選另一支初學影片。", steps: [
    { ...standardWalk("早餐後走路 10分鐘"), type: "morning" },
    { title: "HASfit 全身啞鈴（另一支）", note: "最後 2次有點吃力、但姿勢仍穩定，就是合適重量。", url: YT.hasfit, exercises: strengthExercises, gentle: "只做 1組，或全程使用 5 lb／徒手版本。" },
    { ...standardWalk("晚餐後走路 10–15分鐘"), type: "evening" },
  ]},
  { id: 5, icon: "🚶", title: "快走日", short: "看天氣選戶外或室內", time: "30–60分鐘", summary: "天氣舒服、空氣好就出門；炎熱或空污時留在室內。", steps: [
    { ...standardWalk("早餐後走路 10分鐘"), type: "morning" },
    { title: "戶外快走 40–60分鐘", note: "只在天氣舒服、空氣品質良好時進行；帶水並避開最熱時段。", gentle: "縮短為 15–20分鐘輕鬆走，穿支撐性好的鞋。" },
    { title: "室內替代：Walk at Home 30分鐘", note: "90°F（約 32°C）以上、空污或下雨時選這個。", url: YT.indoor, gentle: "改做 10–15分鐘，減少抬膝高度與側步幅度。" },
    { title: "晚餐後依時間決定", note: "若主要快走是在晚餐後完成，不必再走；否則走 10分鐘。", url: YT.walk, timer: 10 },
  ]},
  { id: 6, icon: "🪜", title: "Step＋有氧", short: "踏板 15分＋舞蹈 15分", time: "約 30分鐘", summary: "使用低高度踏板；動作保持安靜，不跳上跳下。", steps: [
    { ...standardWalk("早餐後走路 10分鐘"), type: "morning" },
    { title: "初學者 Step 15分鐘", note: "踏板放在不滑的地面；每一步踩穩再換腳。", url: YT.step, gentle: "腳底不舒服時取消踏板，改成地面前後踏步。" },
    { title: "低衝擊有氧舞蹈 15分鐘", note: "選 no jumping／low impact 版本。", url: YT.dance, gentle: "減少側步距離，必要時扶椅做。" },
    { ...standardWalk("晚餐後走路 10分鐘"), type: "evening" },
  ]},
  { id: 7, icon: "🌿", title: "休息＋伸展", short: "恢復・不補課", time: "5–10分鐘", summary: "休息也是計畫的一部分。今天不需要補做漏掉的運動。", rest: true, steps: [
    { title: "輕鬆活動", note: "可做小腿、臀部、胸口與背部的溫和伸展，各 30–60秒。", gentle: "只做舒服的範圍；不要拉到疼痛。" },
    { title: "準備下一個循環", note: "喝水、睡好；下次重新從任意一天開始。" },
  ]},
];

const state = {
  completed: new Set(JSON.parse(localStorage.getItem("fitness-completed") || "[]")),
  selected: Number(localStorage.getItem("fitness-selected") || 0),
  gentle: localStorage.getItem("fitness-gentle") === "true",
};

const el = (id) => document.getElementById(id);
const dayGrid = el("dayGrid");
const detail = el("dayDetail");
const tutorialsSection = el("tutorials");

function externalLink(url, label = "開啟 YouTube") {
  return url ? `<a class="action-link" href="${url}" target="_blank" rel="noopener">▶ ${label}</a>` : "";
}

function renderDays() {
  dayGrid.innerHTML = days.map((day) => {
    const complete = state.completed.has(day.id);
    return `<button class="day-card ${day.rest ? "rest" : ""} ${complete ? "completed" : ""}" data-day="${day.id}" type="button" aria-label="第${day.id}天：${day.title}${complete ? "，已完成" : ""}">
      <span class="day-number"><span>DAY ${day.id}</span><span class="day-icon" aria-hidden="true">${day.icon}</span></span>
      <h3>${day.title}</h3><p>${day.short}</p>${complete ? '<span class="completion-badge" aria-hidden="true">✓</span>' : ""}
    </button>`;
  }).join("");
  dayGrid.querySelectorAll("[data-day]").forEach((button) => button.addEventListener("click", () => openDay(Number(button.dataset.day))));
  updateProgress();
}

function renderStep(step, index) {
  const gentle = state.gentle && step.gentle ? `<div class="gentle-note"><strong>溫和模式：</strong>${step.gentle}</div>` : "";
  const exercises = step.exercises ? `<div class="exercise-list">${step.exercises.map((ex) => `<div class="exercise-item"><span>${ex.label}</span><a href="${ex.url}" target="_blank" rel="noopener">看姿勢</a></div>`).join("")}</div>` : "";
  const timer = step.timer ? `<button class="timer-button" type="button" data-timer="${step.timer}">⏱ ${step.timer}分鐘計時</button>` : "";
  return `<article class="step-card">
    <div class="step-number">${index + 1}</div>
    <div class="step-copy"><strong>${step.title}</strong><span>${step.note}</span>${gentle}${exercises}</div>
    <div class="step-actions">${timer}${externalLink(step.url)}</div>
  </article>`;
}

function openDay(id) {
  const day = days.find((d) => d.id === id);
  if (!day) return;
  state.selected = id;
  localStorage.setItem("fitness-selected", String(id));
  el("detailKicker").textContent = `DAY ${day.id}・${day.short}`;
  el("detailTitle").textContent = day.title;
  el("detailSummary").textContent = day.summary;
  el("detailTime").textContent = day.time;
  el("planSteps").innerHTML = day.steps.map(renderStep).join("");
  el("finishTitle").textContent = day.rest ? "今天好好休息了嗎？" : "今天完成了嗎？";
  updateFinishButton(day.id);
  detail.hidden = false;
  dayGrid.hidden = true;
  tutorialsSection.hidden = true;
  document.querySelector(".comfort-panel").hidden = false;
  detail.querySelectorAll("[data-timer]").forEach((button) => button.addEventListener("click", () => showTimer(Number(button.dataset.timer))));
  window.scrollTo({ top: detail.offsetTop - 18, behavior: "smooth" });
}

function closeDay() {
  detail.hidden = true;
  dayGrid.hidden = false;
  tutorialsSection.hidden = false;
  window.scrollTo({ top: dayGrid.offsetTop - 18, behavior: "smooth" });
}

function updateFinishButton(id) {
  const done = state.completed.has(id);
  const button = el("finishDay");
  button.textContent = done ? "✓ 已完成（再按可取消）" : "✓ 今天完成";
  button.classList.toggle("done", done);
}

function toggleComplete() {
  const id = state.selected;
  if (!id) return;
  if (state.completed.has(id)) state.completed.delete(id); else state.completed.add(id);
  localStorage.setItem("fitness-completed", JSON.stringify([...state.completed]));
  updateFinishButton(id);
  renderDays();
}

function updateProgress() {
  const count = [...state.completed].filter((id) => id <= 6).length;
  el("progressCount").textContent = String(count);
  el("progressBar").style.width = `${(count / 6) * 100}%`;
}

function renderTutorials() {
  el("tutorialGrid").innerHTML = tutorials.map((t, i) => `<article class="tutorial-card">
    <span class="tutorial-number">0${i + 1}</span><h3>${t.zh}<br><small>${t.name}</small></h3><p>${t.cue}</p>
    <a href="${t.url}" target="_blank" rel="noopener">看 YouTube 教學 →</a>
  </article>`).join("");
}

let timerSeconds = 600;
let timerId = null;
function timerText() { const m = String(Math.floor(timerSeconds / 60)).padStart(2, "0"); const s = String(timerSeconds % 60).padStart(2, "0"); return `${m}:${s}`; }
function showTimer(minutes) { timerSeconds = minutes * 60; el("timerDisplay").textContent = timerText(); el("timerToggle").textContent = "開始"; el("timerDock").hidden = false; clearInterval(timerId); timerId = null; }
function toggleTimer() {
  if (timerId) { clearInterval(timerId); timerId = null; el("timerToggle").textContent = "繼續"; return; }
  el("timerToggle").textContent = "暫停";
  timerId = setInterval(() => {
    timerSeconds -= 1; el("timerDisplay").textContent = timerText();
    if (timerSeconds <= 0) { clearInterval(timerId); timerId = null; el("timerToggle").textContent = "完成"; if (navigator.vibrate) navigator.vibrate([200,100,200]); }
  }, 1000);
}

el("gentleMode").checked = state.gentle;
el("gentleMode").addEventListener("change", (event) => { state.gentle = event.target.checked; localStorage.setItem("fitness-gentle", String(state.gentle)); if (state.selected && !detail.hidden) openDay(state.selected); });
el("backToDays").addEventListener("click", closeDay);
el("finishDay").addEventListener("click", toggleComplete);
el("resetCycle").addEventListener("click", () => { if (confirm("要清除目前的完成紀錄，重新開始六天循環嗎？")) { state.completed.clear(); localStorage.removeItem("fitness-completed"); renderDays(); } });
el("installHelp").addEventListener("click", () => el("installDialog").showModal());
el("closeDialog").addEventListener("click", () => el("installDialog").close());
el("dialogDone").addEventListener("click", () => el("installDialog").close());
el("timerToggle").addEventListener("click", toggleTimer);
el("timerClose").addEventListener("click", () => { clearInterval(timerId); timerId = null; el("timerDock").hidden = true; });

renderDays();
renderTutorials();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
