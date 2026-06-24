/* ===== NexCRM script.js ===== */

/* ─────────────────────────────────────────────────────────
   DUMMY DATA — all stored here before any rendering
──────────────────────────────────────────────────────────── */
const LEADS_DATA = [
  { id:1,  name:'Priya Mehta',    company:'TechCorp India',   stage:'Qualification', value:12.5, owner:'Rahul S.',  priority:'High',   email:'priya@techcorp.in',   phone:'+91-9876500001', date:'2025-06-20', notes:'Interested in enterprise plan' },
  { id:2,  name:'Amit Verma',     company:'Reliance Soft',    stage:'Follow-Up',     value:8.0,  owner:'Anjali S.', priority:'Medium', email:'amit@relsoft.in',     phone:'+91-9876500002', date:'2025-06-19', notes:'Needs pricing deck' },
  { id:3,  name:'Sunita Rao',     company:'InfoEdge Ltd',     stage:'Opportunity',   value:22.0, owner:'Vikram P.', priority:'High',   email:'srao@infoedge.in',    phone:'+91-9876500003', date:'2025-06-18', notes:'Demo done, awaiting sign-off' },
  { id:4,  name:'Raj Khanna',     company:'Bajaj Finance',    stage:'Lead Capture',  value:5.5,  owner:'Neha G.',   priority:'Low',    email:'raj@bajaj.in',        phone:'+91-9876500004', date:'2025-06-17', notes:'Inbound from website form' },
  { id:5,  name:'Meera Joshi',    company:'Wipro Digital',    stage:'Closed Won',    value:31.0, owner:'Rahul S.',  priority:'High',   email:'mjoshi@wipro.in',     phone:'+91-9876500005', date:'2025-06-15', notes:'Contract signed!' },
  { id:6,  name:'Deepak Kumar',   company:'HCL Services',     stage:'Follow-Up',     value:9.2,  owner:'Arjun R.',  priority:'Medium', email:'dkumar@hcl.in',       phone:'+91-9876500006', date:'2025-06-14', notes:'Second follow-up scheduled' },
  { id:7,  name:'Kavya Singh',    company:'Zomato Biz',       stage:'Qualification', value:4.8,  owner:'Anjali S.', priority:'Medium', email:'ksingh@zomato.in',    phone:'+91-9876500007', date:'2025-06-12', notes:'Budget approval pending' },
  { id:8,  name:'Rohit Sharma',   company:'Paytm Enterprise', stage:'Opportunity',   value:18.5, owner:'Vikram P.', priority:'High',   email:'rsharma@paytm.in',    phone:'+91-9876500008', date:'2025-06-10', notes:'Demo rescheduled to Jun 26' },
  { id:9,  name:'Nisha Patel',    company:'HDFC Capital',     stage:'Lead Capture',  value:7.3,  owner:'Neha G.',   priority:'Low',    email:'npatel@hdfc.in',      phone:'+91-9876500009', date:'2025-06-08', notes:'Referred by Meera Joshi' },
  { id:10, name:'Aryan Bose',     company:'Swiggy Corp',      stage:'Closed Won',    value:14.0, owner:'Arjun R.',  priority:'High',   email:'abose@swiggy.in',     phone:'+91-9876500010', date:'2025-06-07', notes:'Upsell opportunity in Q3' },
  { id:11, name:'Pooja Nair',     company:'Infosys BPO',      stage:'Negotiation',   value:27.5, owner:'Rahul S.',  priority:'High',   email:'pnair@infosys.in',    phone:'+91-9876500011', date:'2025-06-05', notes:'Final terms being discussed' },
  { id:12, name:'Sanjay Mehta',   company:'Tata Consultancy', stage:'Proposal Sent', value:19.0, owner:'Anjali S.', priority:'Medium', email:'smehta@tcs.in',       phone:'+91-9876500012', date:'2025-06-03', notes:'Proposal under review' },
];

const TASKS_DATA = [
  { id:1, text:'Follow-up call with Priya Mehta (TechCorp)',      due:'Today',     done:false, overdue:false },
  { id:2, text:'Send proposal to Sunita Rao – ₹22L deal',         due:'Today',     done:false, overdue:false },
  { id:3, text:'Review Q2 pipeline with Anjali Singh',             due:'Yesterday', done:false, overdue:true  },
  { id:4, text:'Update Bajaj Finance contact details',             due:'Jun 25',    done:true,  overdue:false },
  { id:5, text:'Schedule demo for Rohit Sharma – Paytm',          due:'Jun 26',    done:false, overdue:false },
  { id:6, text:'Close Wipro Digital contract (Meera Joshi)',       due:'Done',      done:true,  overdue:false },
  { id:7, text:'Prepare board deck for Jun 26 presentation',      due:'Jun 25',    done:false, overdue:false },
  { id:8, text:'Reach out to HDFC Capital lead Nisha Patel',      due:'Jun 27',    done:false, overdue:false },
];

const TEAM_DATA = [
  { name:'Rahul Sharma',  role:'Sales Director', deals:24, target:30, revenue:18.5, color:'#6366f1' },
  { name:'Anjali Singh',  role:'Account Exec',   deals:18, target:25, revenue:12.0, color:'#06b6d4' },
  { name:'Vikram Patel',  role:'BDM',            deals:21, target:28, revenue:15.5, color:'#8b5cf6' },
  { name:'Neha Gupta',    role:'Sales Rep',      deals:12, target:20, revenue:7.3,  color:'#f59e0b' },
  { name:'Arjun Reddy',   role:'Sales Rep',      deals:14, target:20, revenue:9.2,  color:'#ec4899' },
];

const CONTACTS_DATA = [
  { name:'Sunita Rao',    company:'InfoEdge',    value:'₹22L', tag:'Hot Lead',  color:'#ef4444', email:'srao@infoedge.in'  },
  { name:'Meera Joshi',   company:'Wipro',       value:'₹31L', tag:'Customer',  color:'#10b981', email:'mjoshi@wipro.in'   },
  { name:'Rohit Sharma',  company:'Paytm',       value:'₹18L', tag:'Prospect',  color:'#6366f1', email:'rsharma@paytm.in' },
  { name:'Priya Mehta',   company:'TechCorp',    value:'₹12L', tag:'Qualified', color:'#8b5cf6', email:'priya@techcorp.in' },
  { name:'Aryan Bose',    company:'Swiggy',      value:'₹14L', tag:'Customer',  color:'#10b981', email:'abose@swiggy.in'   },
  { name:'Amit Verma',    company:'Reliance',    value:'₹8L',  tag:'Follow-Up', color:'#f59e0b', email:'amit@relsoft.in'   },
  { name:'Pooja Nair',    company:'Infosys BPO', value:'₹27L', tag:'Hot Lead',  color:'#ef4444', email:'pnair@infosys.in'  },
  { name:'Sanjay Mehta',  company:'TCS',         value:'₹19L', tag:'Prospect',  color:'#06b6d4', email:'smehta@tcs.in'     },
  { name:'Deepak Kumar',  company:'HCL',         value:'₹9L',  tag:'Follow-Up', color:'#f59e0b', email:'dkumar@hcl.in'     },
  { name:'Kavya Singh',   company:'Zomato',      value:'₹4L',  tag:'Qualified', color:'#8b5cf6', email:'ksingh@zomato.in'  },
  { name:'Raj Khanna',    company:'Bajaj',       value:'₹5L',  tag:'Prospect',  color:'#6366f1', email:'raj@bajaj.in'      },
  { name:'Nisha Patel',   company:'HDFC',        value:'₹7L',  tag:'Prospect',  color:'#ec4899', email:'npatel@hdfc.in'    },
];

const ACTIVITY_DATA = [
  { icon:'fa-phone',        color:'#6366f1', bg:'rgba(99,102,241,.15)',  text:'<strong>Rahul</strong> called Priya Mehta – discussed Q3 requirements',       time:'5 min ago'  },
  { icon:'fa-envelope',     color:'#06b6d4', bg:'rgba(6,182,212,.15)',   text:'Proposal email sent to <strong>Sunita Rao</strong> (InfoEdge)',               time:'22 min ago' },
  { icon:'fa-circle-check', color:'#10b981', bg:'rgba(16,185,129,.15)',  text:'<strong>Meera Joshi</strong> deal closed – ₹31L won by Rahul S.',             time:'1 hr ago'   },
  { icon:'fa-user-plus',    color:'#8b5cf6', bg:'rgba(139,92,246,.15)',  text:'New lead <strong>Raj Khanna</strong> added from Bajaj Finance campaign',       time:'2 hr ago'   },
  { icon:'fa-calendar-plus',color:'#f59e0b', bg:'rgba(245,158,11,.15)',  text:'Demo scheduled with <strong>Rohit Sharma</strong> on Jun 26 at 11 AM',        time:'3 hr ago'   },
  { icon:'fa-chart-line',   color:'#ef4444', bg:'rgba(239,68,68,.15)',   text:'<strong>Arjun</strong> updated pipeline – Swiggy opportunity moved to Closed', time:'5 hr ago'   },
  { icon:'fa-comment',      color:'#06b6d4', bg:'rgba(6,182,212,.15)',   text:'<strong>Anjali</strong> logged follow-up note for Kavya Singh (Zomato)',       time:'Yesterday'  },
  { icon:'fa-star',         color:'#f59e0b', bg:'rgba(245,158,11,.15)',  text:'<strong>Aryan Bose</strong> (Swiggy) moved to <em>Customer</em> segment',     time:'Yesterday'  },
];

const FUNNEL_DATA = [
  { label:'Lead Capture',    count:248, pct:100, color:'#6366f1' },
  { label:'Contact Created', count:210, pct:85,  color:'#8b5cf6' },
  { label:'Qualification',   count:162, pct:65,  color:'#06b6d4' },
  { label:'Follow-Up',       count:120, pct:48,  color:'#f59e0b' },
  { label:'Opportunity',     count:89,  pct:36,  color:'#ec4899' },
  { label:'Closed Won',      count:84,  pct:34,  color:'#10b981' },
];

const EVENTS_DATA = [
  { day:'24', mon:'JUN', title:'Sync – Rahul & Anjali',     sub:'Pipeline review Q2',          time:'10:00 AM', color:'#6366f1' },
  { day:'25', mon:'JUN', title:'Demo – Paytm Enterprise',   sub:'Rohit Sharma + Vikram Patel', time:'11:30 AM', color:'#06b6d4' },
  { day:'26', mon:'JUN', title:'Board Reporting Session',   sub:'Sales Director presentation', time:'3:00 PM',  color:'#8b5cf6' },
  { day:'28', mon:'JUN', title:'Proposal deadline – HCL',   sub:'Deepak Kumar follow-up',      time:'EOD',      color:'#f59e0b' },
  { day:'30', mon:'JUN', title:'Month-end Pipeline Close',  sub:'All reps finalize entries',   time:'All Day',  color:'#ef4444' },
];

const QUICK_DATA = [
  { icon:'fa-trophy',      bg:'rgba(245,158,11,.15)',  col:'#f59e0b', label:'Best Rep',       value:'Rahul Sharma · 24 deals'       },
  { icon:'fa-fire',        bg:'rgba(239,68,68,.15)',   col:'#ef4444', label:'Hottest Lead',   value:'Sunita Rao · ₹22L potential'   },
  { icon:'fa-clock',       bg:'rgba(139,92,246,.15)',  col:'#8b5cf6', label:'Avg Deal Cycle', value:'18 days (↓3 vs last month)'    },
  { icon:'fa-sack-dollar', bg:'rgba(16,185,129,.15)',  col:'#10b981', label:'Pipeline Value', value:'₹1.28 Cr open opportunities'   },
  { icon:'fa-bullseye',    bg:'rgba(99,102,241,.15)',  col:'#6366f1', label:'Target Pace',    value:'79% to monthly goal'           },
  { icon:'fa-chart-line',  bg:'rgba(6,182,212,.15)',   col:'#06b6d4', label:'Churn Rate',     value:'4% (industry avg: 8%)'         },
];

const KPI_DATA = [
  { icon:'fa-bolt',            bg:'rgba(99,102,241,.15)',  col:'#6366f1', target:248,  prefix:'',  suffix:'',  label:'Total Leads',        hint:'↑ 37 new this month',      trend:'up',   pct:'18%' },
  { icon:'fa-users',           bg:'rgba(6,182,212,.15)',   col:'#06b6d4', target:1342, prefix:'',  suffix:'',  label:'Active Contacts',     hint:'↑ 88 added this month',    trend:'up',   pct:'7%'  },
  { icon:'fa-indian-rupee-sign',bg:'rgba(16,185,129,.15)',col:'#10b981', target:47,   prefix:'₹', suffix:'L', label:'Revenue This Month',  hint:'Target: ₹60L · 78% done', trend:'up',   pct:'23%' },
  { icon:'fa-percent',         bg:'rgba(245,158,11,.15)',  col:'#f59e0b', target:34,   prefix:'',  suffix:'%', label:'Conversion Rate',     hint:'↓ Review follow-ups',      trend:'down', pct:'2%'  },
  { icon:'fa-handshake',       bg:'rgba(236,72,153,.15)',  col:'#ec4899', target:89,   prefix:'',  suffix:'',  label:'Deals Closed',        hint:'↑ Best month in Q2',       trend:'up',   pct:'11%' },
  { icon:'fa-shield-halved',   bg:'rgba(139,92,246,.15)',  col:'#8b5cf6', target:96,   prefix:'',  suffix:'%', label:'Customer Retention',  hint:'Industry avg: 88% — great', trend:'up',  pct:'1%'  },
];

const PIPELINE_STAGES = ['Lead Capture','Qualification','Follow-Up','Opportunity','Proposal Sent','Closed Won'];

const REVENUE_MONTHLY = [28,34,29,41,38,47];
const LEADS_MONTHLY   = [160,180,155,210,198,248];

/* ─────────────────────────────────────────────────────────
   NOTIFICATIONS
──────────────────────────────────────────────────────────── */
let NOTIFICATIONS = [
  { id:1, icon:'fa-user-plus', color:'#10b981', bg:'rgba(16,185,129,.15)', text:'New lead <strong>Priya Mehta</strong> added from TechCorp India', time:'5 min ago', unread:true },
  { id:2, icon:'fa-circle-check', color:'#6366f1', bg:'rgba(99,102,241,.15)', text:'Deal <strong>Meera Joshi (₹31L)</strong> marked as Closed Won', time:'1 hr ago', unread:true },
  { id:3, icon:'fa-calendar-plus', color:'#f59e0b', bg:'rgba(245,158,11,.15)', text:'Demo scheduled with <strong>Rohit Sharma</strong> on Jun 26 at 11 AM', time:'3 hr ago', unread:true },
  { id:4, icon:'fa-chart-line', color:'#06b6d4', bg:'rgba(6,182,212,.15)', text:'Pipeline updated: <strong>Arjun</strong> moved Swiggy to Closed Won', time:'5 hr ago', unread:false },
  { id:5, icon:'fa-envelope', color:'#8b5cf6', bg:'rgba(139,92,246,.15)', text:'Proposal sent to <strong>Sunita Rao</strong> (InfoEdge · ₹22L)', time:'Yesterday', unread:false },
];
let notifIdCounter = 100;

function addNotification(icon, color, bg, text) {
  notifIdCounter++;
  NOTIFICATIONS.unshift({ id:notifIdCounter, icon, color, bg, text, time:'Just now', unread:true });
  renderNotifPanel();
  updateNotifDot();
}

function renderNotifPanel() {
  const list = document.getElementById('notifList');
  const empty = document.getElementById('notifEmpty');
  if (!list) return;
  list.innerHTML = '';
  if (NOTIFICATIONS.length === 0) {
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  NOTIFICATIONS.forEach(n => {
    const div = document.createElement('div');
    div.className = 'notif-item' + (n.unread ? ' unread' : '');
    div.innerHTML = `
      <div class="notif-icon" style="background:${n.bg};color:${n.color}"><i class="fa-solid ${n.icon}"></i></div>
      <div class="notif-body">
        <div class="notif-text">${n.text}</div>
        <div class="notif-time">${n.time}</div>
      </div>
    `;
    div.addEventListener('click', () => {
      n.unread = false;
      renderNotifPanel();
      updateNotifDot();
    });
    list.appendChild(div);
  });
}

function updateNotifDot() {
  const dot = document.getElementById('notifDot');
  if (!dot) return;
  const hasUnread = NOTIFICATIONS.some(n => n.unread);
  dot.style.display = hasUnread ? 'block' : 'none';
}

function toggleNotifPanel() {
  const panel = document.getElementById('notifPanel');
  if (!panel) return;
  panel.classList.toggle('open');
  if (panel.classList.contains('open')) {
    renderNotifPanel();
  }
}

/* ─────────────────────────────────────────────────────────
   INIT
──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setLiveDate();
  renderKPIs();
  renderQuick();
  renderLeads(LEADS_DATA, 'leadsBody');
  renderTasks();
  renderTeam('teamList');
  renderTeam('teamListReport');
  renderContacts();
  renderActivity();
  renderFunnel();
  renderEvents();
  renderPipeline();
  renderContactsBig('contactsBig', CONTACTS_DATA);
  renderContactsBig('customersBig', CONTACTS_DATA.filter(c => c.tag === 'Customer'));
  renderSettTeam();
  animateInfoBoxes();
  drawRevenueChart('revenueChart');
  drawPipelineChart();
  drawSourceChart('sourceChart');
  drawRevenueChart('reportRevChart');
  drawTeamChart();
  drawSourceChart('reportSourceChart');
  updateTaskCounts();
  renderTasksFull();
  setupNav();
  setupModal();
  setupButtons();
  setupSearch();
  setupTheme();
  setupHamburger();
  updateNotifDot();
});

/* ─ DATE ─ */
function setLiveDate() {
  const d = new Date();
  const opts = { year:'numeric', month:'long', day:'numeric' };
  const el = document.getElementById('liveDate');
  if (el) el.textContent = d.toLocaleDateString('en-IN', opts);
}

/* ─ KPIs ─ */
function renderKPIs() {
  const row = document.getElementById('kpiRow');
  if (!row) return;
  row.innerHTML = '';
  KPI_DATA.forEach(k => {
    const card = document.createElement('div');
    card.className = 'kpi-card';
    card.style.borderTopColor = k.col;
    card.innerHTML = `
      <div class="kpi-top">
        <div class="kpi-icon" style="background:${k.bg};color:${k.col}"><i class="fa-solid ${k.icon}"></i></div>
        <span class="kpi-trend ${k.trend}"><i class="fa-solid fa-caret-${k.trend}"></i> ${k.pct}</span>
      </div>
      <div class="kpi-num" data-target="${k.target}" data-prefix="${k.prefix}" data-suffix="${k.suffix}">0</div>
      <div class="kpi-lbl">${k.label}</div>
      <div class="kpi-hint">${k.hint}</div>
    `;
    row.appendChild(card);
  });
  animateKPIs();
}

function animateKPIs() {
  document.querySelectorAll('.kpi-num[data-target]').forEach(el => {
    const target = +el.dataset.target;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = target / 50;
    const iv = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = prefix + Math.floor(current).toLocaleString('en-IN') + suffix;
      if (current >= target) { clearInterval(iv); el.textContent = prefix + target.toLocaleString('en-IN') + suffix; }
    }, 20);
  });
}

function animateInfoBoxes() {
  document.querySelectorAll('.ib-num[data-target]').forEach(el => {
    const target = +el.dataset.target;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    let c = 0;
    const step = target / 40;
    const iv = setInterval(() => {
      c = Math.min(c + step, target);
      el.textContent = prefix + Math.floor(c) + suffix;
      if (c >= target) clearInterval(iv);
    }, 20);
  });
}

/* ─ QUICK INSIGHTS ─ */
function renderQuick() {
  const list = document.getElementById('quickList');
  if (!list) return;
  list.innerHTML = '';
  QUICK_DATA.forEach(q => {
    const chip = document.createElement('div');
    chip.className = 'ins-chip';
    chip.innerHTML = `
      <div class="qi-icon" style="background:${q.bg};color:${q.col}"><i class="fa-solid ${q.icon}"></i></div>
      <div><strong>${q.label}</strong><span>${q.value}</span></div>
    `;
    list.appendChild(chip);
  });
}

/* ─ LEADS ─ */
function stageClass(stage) {
  const m = { 'Lead Capture':'new','Contact Created':'new','Qualification':'qual','Follow-Up':'followup','Opportunity':'opp','Closed Won':'won','Closed Lost':'lost','Proposal Sent':'prop','Negotiation':'prop' };
  return m[stage] || 'new';
}

function renderLeads(data, tbodyId) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  tbody.innerHTML = '';
  if (!data.length) { tbody.innerHTML = `<tr><td colspan="9" class="no-data">No leads found</td></tr>`; return; }
  const displayData = tbodyId === 'leadsBody' ? data.slice(0, 5) : data;
  displayData.forEach(l => {
    const tr = document.createElement('tr');
    const isFullTable = tbody.id === 'leadsBody2';
    if (isFullTable) {
      tr.innerHTML = `
        <td><b>${l.name}</b></td>
        <td>${l.company}</td>
        <td>${l.email}</td>
        <td><span class="stage-pill stage-${stageClass(l.stage)}">${l.stage}</span></td>
        <td>₹${l.value}L</td>
        <td>${l.owner}</td>
        <td class="pri-${l.priority.toLowerCase()}">${l.priority}</td>
        <td style="color:var(--text2);font-size:11px">${l.date}</td>
        <td><button class="action-btn" onclick="viewLead(${l.id})">View</button></td>
      `;
    } else {
      tr.innerHTML = `
        <td><b>${l.name}</b></td>
        <td>${l.company}</td>
        <td><span class="stage-pill stage-${stageClass(l.stage)}">${l.stage}</span></td>
        <td>₹${l.value}L</td>
        <td>${l.owner}</td>
        <td class="pri-${l.priority.toLowerCase()}">${l.priority}</td>
        <td><button class="action-btn" onclick="viewLead(${l.id})">View</button></td>
      `;
    }
    tbody.appendChild(tr);
  });
}

function viewLead(id) {
  const l = LEADS_DATA.find(x => x.id === id);
  if (l) showToast(`📋 ${l.name} · ${l.company} · ${l.stage} · ₹${l.value}L`);
}

/* ─ TASKS ─ */
function renderTasks() {
  const list = document.getElementById('taskList');
  if (!list) return;
  list.innerHTML = '';
  const pending = TASKS_DATA.filter(t => !t.done);
  pending.slice(0,5).forEach(t => renderTaskItem(list, t));
}

function renderTasksFull() {
  const list = document.getElementById('taskListFull');
  if (!list) return;
  list.innerHTML = '';
  TASKS_DATA.forEach(t => renderTaskItem(list, t));
}

function renderTaskItem(container, t) {
  const div = document.createElement('div');
  div.className = 'task-item' + (t.done ? ' done' : '');
  div.innerHTML = `
    <div class="task-cb ${t.done ? 'checked' : ''}" onclick="toggleTask(${t.id})"></div>
    <span class="task-text${t.done ? ' done' : ''}">${t.text}</span>
    <span class="task-due${t.overdue ? ' overdue' : ''}">${t.due}</span>
  `;
  container.appendChild(div);
}

function toggleTask(id) {
  const t = TASKS_DATA.find(x => x.id === id);
  if (t) {
    t.done = !t.done;
    if (t.done) t.overdue = false;
    renderTasks();
    renderTasksFull();
    updateTaskCounts();
    showToast(t.done ? '✅ Task marked complete!' : '↩ Task reopened');
  }
}

function updateTaskCounts() {
  const total = TASKS_DATA.length;
  const done  = TASKS_DATA.filter(t => t.done).length;
  const pend  = TASKS_DATA.filter(t => !t.done).length;
  const over  = TASKS_DATA.filter(t => t.overdue && !t.done).length;
  const set = (id, v) => { const el = document.getElementById(id); if(el) el.textContent = v; };
  set('taskTotalNum', total);
  set('taskDoneNum',  done);
  set('taskPendNum',  pend);
  set('taskOverNum',  over);
}

function addTask(text) {
  if (!text || !text.trim()) return;
  TASKS_DATA.push({ id: Date.now(), text: text.trim(), due:'Today', done:false, overdue:false });
  renderTasks();
  renderTasksFull();
  updateTaskCounts();
  addNotification('fa-list-check', '#6366f1', 'rgba(99,102,241,.15)', `New task added: <strong>${text.trim()}</strong>`);
  showToast('✅ Task added!');
}

/* ─ TEAM ─ */
function renderTeam(containerId) {
  const list = document.getElementById(containerId);
  if (!list) return;
  list.innerHTML = '';
  TEAM_DATA.forEach(t => {
    const initials = t.name.split(' ').map(x=>x[0]).join('').slice(0,2);
    const pct = Math.round((t.deals / t.target) * 100);
    const div = document.createElement('div');
    div.className = 'team-item';
    div.innerHTML = `
      <div class="tm-avatar" style="background:${t.color}22;color:${t.color}">${initials}</div>
      <div class="tm-info">
        <div class="tm-name">${t.name}</div>
        <div class="tm-stat">${t.deals}/${t.target} deals · ${pct}%</div>
      </div>
      <div class="tm-bar-wrap">
        <div class="tm-bar"><div class="tm-fill" style="background:${t.color}" data-pct="${pct}"></div></div>
      </div>
    `;
    list.appendChild(div);
  });
  setTimeout(() => {
    document.querySelectorAll('.tm-fill[data-pct]').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 200);
}

/* ─ CONTACTS ─ */
const TAG_BG  = { 'Hot Lead':'rgba(239,68,68,.2)', 'Customer':'rgba(16,185,129,.2)', 'Prospect':'rgba(99,102,241,.2)', 'Qualified':'rgba(139,92,246,.2)', 'Follow-Up':'rgba(245,158,11,.2)' };
const TAG_COL = { 'Hot Lead':'#ef4444', 'Customer':'#10b981', 'Prospect':'#6366f1', 'Qualified':'#8b5cf6', 'Follow-Up':'#f59e0b' };

function renderContacts() {
  const grid = document.getElementById('contactsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  CONTACTS_DATA.slice(0,6).forEach(c => {
    const initials = c.name.split(' ').map(x=>x[0]).join('').slice(0,2);
    const div = document.createElement('div');
    div.className = 'contact-tile';
    div.innerHTML = `
      <div class="ct-avatar" style="background:${c.color}22;color:${c.color}">${initials}</div>
      <div class="ct-name">${c.name}</div>
      <div class="ct-co">${c.company}</div>
      <div class="ct-value">${c.value}</div>
      <span class="ct-tag" style="background:${TAG_BG[c.tag]||'rgba(99,102,241,.2)'};color:${TAG_COL[c.tag]||'#6366f1'}">${c.tag}</span>
    `;
    div.addEventListener('click', () => showToast(`👤 ${c.name} · ${c.company} · ${c.value}`));
    grid.appendChild(div);
  });
}

function renderContactsBig(containerId, data) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';
  data.forEach(c => {
    const initials = c.name.split(' ').map(x=>x[0]).join('').slice(0,2);
    const div = document.createElement('div');
    div.className = 'contact-big-tile';
    div.innerHTML = `
      <div class="ct-avatar" style="background:${c.color}22;color:${c.color};width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;margin:0 auto 8px">${initials}</div>
      <div class="ct-name" style="font-size:13px;font-weight:700">${c.name}</div>
      <div class="ct-co" style="font-size:11px;color:var(--text2);margin:2px 0">${c.company}</div>
      <div class="ct-value" style="font-size:12px;font-weight:700;color:var(--green)">${c.value}</div>
      <div style="margin-top:6px"><span class="ct-tag" style="background:${TAG_BG[c.tag]||'rgba(99,102,241,.2)'};color:${TAG_COL[c.tag]||'#6366f1'}">${c.tag}</span></div>
      <div style="font-size:11px;color:var(--text2);margin-top:4px">${c.email}</div>
    `;
    div.addEventListener('click', () => showToast(`👤 ${c.name} · ${c.email}`));
    grid.appendChild(div);
  });
}

function renderSettTeam() {
  const list = document.getElementById('settTeamList');
  if (!list) return;
  renderTeam('settTeamList');
}

/* ─ ACTIVITY ─ */
function renderActivity() {
  const feed = document.getElementById('activityFeed');
  if (!feed) return;
  feed.innerHTML = '';
  ACTIVITY_DATA.forEach(a => {
    const div = document.createElement('div');
    div.className = 'activity-item';
    div.innerHTML = `
      <div class="act-dot" style="background:${a.bg};color:${a.color}"><i class="fa-solid ${a.icon}"></i></div>
      <div class="act-body">
        <div class="act-text">${a.text}</div>
        <div class="act-time">${a.time}</div>
      </div>
    `;
    feed.appendChild(div);
  });
}

/* ─ FUNNEL ─ */
function renderFunnel() {
  const wrap = document.getElementById('funnelWrap');
  if (!wrap) return;
  wrap.innerHTML = '';
  FUNNEL_DATA.forEach(f => {
    const div = document.createElement('div');
    div.className = 'funnel-row';
    div.innerHTML = `
      <div class="funnel-label">${f.label}</div>
      <div class="funnel-bar-outer"><div class="funnel-bar-inner" style="background:${f.color}" data-pct="${f.pct}">${f.count}</div></div>
      <div class="funnel-pct">${f.pct}%</div>
    `;
    wrap.appendChild(div);
  });
  setTimeout(() => {
    document.querySelectorAll('.funnel-bar-inner[data-pct]').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 250);
}

/* ─ EVENTS ─ */
function renderEvents() {
  const list = document.getElementById('eventList');
  if (!list) return;
  list.innerHTML = '';
  EVENTS_DATA.forEach(e => {
    const div = document.createElement('div');
    div.className = 'event-item';
    div.innerHTML = `
      <div class="event-date" style="background:${e.color}22;color:${e.color}"><div class="event-day">${e.day}</div><div class="event-mon">${e.mon}</div></div>
      <div class="event-info"><div class="event-title">${e.title}</div><div class="event-sub">${e.sub}</div></div>
      <div class="event-time">${e.time}</div>
    `;
    list.appendChild(div);
  });
}

/* ─ PIPELINE BOARD ─ */
function renderPipeline() {
  const board = document.getElementById('pipelineBoard');
  if (!board) return;
  board.innerHTML = '';
  const stageColors = {
    'Lead Capture':'#6366f1','Qualification':'#06b6d4','Follow-Up':'#f59e0b',
    'Opportunity':'#8b5cf6','Proposal Sent':'#ec4899','Closed Won':'#10b981'
  };
  PIPELINE_STAGES.forEach(stage => {
    const leads = LEADS_DATA.filter(l => l.stage === stage);
    const col = document.createElement('div');
    col.className = 'pipeline-col';
    col.style.borderTop = `2px solid ${stageColors[stage]||'#6366f1'}`;
    col.innerHTML = `<div class="pipeline-col-hd" style="color:${stageColors[stage]||'#6366f1'}">${stage} <span class="col-count">${leads.length}</span></div>`;
    leads.forEach(l => {
      const card = document.createElement('div');
      card.className = 'pipeline-card';
      card.innerHTML = `<div class="pc-name">${l.name}</div><div class="pc-co">${l.company}</div><div class="pc-val">₹${l.value}L</div>`;
      card.addEventListener('click', () => showToast(`📋 ${l.name} · ${l.stage} · ₹${l.value}L`));
      col.appendChild(card);
    });
    board.appendChild(col);
  });
}

/* ─ CHARTS ─ */
function drawRevenueChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [
        { label:'Revenue (₹L)', data: REVENUE_MONTHLY, backgroundColor:'rgba(99,102,241,.7)', borderRadius:5, borderSkipped:false },
        { label:'Leads', data: LEADS_MONTHLY, type:'line', yAxisID:'y2', borderColor:'#06b6d4', backgroundColor:'rgba(6,182,212,.1)', tension:.4, fill:true, pointBackgroundColor:'#06b6d4', pointRadius:3 }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend:{ display:false }, tooltip:{ mode:'index', intersect:false } },
      scales: {
        x: { grid:{ color:'rgba(255,255,255,.04)' }, ticks:{ color:'#8a8fac', font:{ size:11 } } },
        y: { grid:{ color:'rgba(255,255,255,.04)' }, ticks:{ color:'#8a8fac', font:{ size:11 } }, position:'left' },
        y2:{ grid:{ display:false }, ticks:{ color:'#8a8fac', font:{ size:11 } }, position:'right' }
      }
    }
  });
}

function drawPipelineChart() {
  const canvas = document.getElementById('pipelineChart');
  if (!canvas) return;
  const labels = ['Lead Capture','Qualification','Follow-Up','Opportunity','Closed Won','Lost'];
  const data   = [62,41,30,22,22,12];
  const colors = ['#6366f1','#06b6d4','#f59e0b','#8b5cf6','#10b981','#ef4444'];
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type:'doughnut',
    data:{ labels, datasets:[{ data, backgroundColor:colors, borderColor:'#1e2236', borderWidth:2, hoverOffset:6 }] },
    options:{ responsive:true, cutout:'65%', plugins:{ legend:{ display:false }, tooltip:{ callbacks:{ label: ctx => ` ${ctx.label}: ${ctx.raw} leads` } } } }
  });
  const legend = document.getElementById('donutLegend');
  if (legend) {
    legend.innerHTML = '';
    labels.forEach((l,i) => {
      legend.innerHTML += `<span><span class="dl-dot" style="background:${colors[i]}"></span>${l}</span>`;
    });
  }
}

function drawSourceChart(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type:'bar',
    data:{
      labels:['Website','Referral','Cold Email','LinkedIn','Events','Ads'],
      datasets:[{ data:[68,45,32,54,28,21], backgroundColor:['#6366f1','#06b6d4','#8b5cf6','#f59e0b','#ef4444','#10b981'], borderRadius:5, borderSkipped:false }]
    },
    options:{
      indexAxis:'y', responsive:true,
      plugins:{ legend:{ display:false } },
      scales:{
        x:{ grid:{ color:'rgba(255,255,255,.04)' }, ticks:{ color:'#8a8fac', font:{ size:11 } } },
        y:{ grid:{ display:false }, ticks:{ color:'#8a8fac', font:{ size:11 } } }
      }
    }
  });
}

function drawTeamChart() {
  const canvas = document.getElementById('reportTeamChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type:'bar',
    data:{
      labels: TEAM_DATA.map(t => t.name.split(' ')[0]),
      datasets:[
        { label:'Deals', data: TEAM_DATA.map(t=>t.deals), backgroundColor:'rgba(99,102,241,.7)', borderRadius:5 },
        { label:'Target', data: TEAM_DATA.map(t=>t.target), backgroundColor:'rgba(255,255,255,.08)', borderRadius:5 }
      ]
    },
    options:{
      responsive:true,
      plugins:{ legend:{ labels:{ color:'#8a8fac', font:{ size:11 } } } },
      scales:{
        x:{ grid:{ display:false }, ticks:{ color:'#8a8fac', font:{ size:11 } } },
        y:{ grid:{ color:'rgba(255,255,255,.04)' }, ticks:{ color:'#8a8fac', font:{ size:11 } } }
      }
    }
  });
}

/* ─ NAVIGATION ─ */
function setupNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      if (!page) return;
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      const target = document.getElementById('page-' + page);
      if (target) {
        target.classList.add('active');
        animateInfoBoxes();
      }
      // close mobile menu
      document.getElementById('navLinks').classList.remove('open');
    });
  });
}

/* ─ MODAL ─ */
function openModal() { document.getElementById('modalOverlay').classList.add('open'); }
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

function setupModal() {
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('cancelModal').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target.id === 'modalOverlay') closeModal();
  });
  document.getElementById('saveLead').addEventListener('click', () => {
    const name     = document.getElementById('m_name').value.trim();
    const company  = document.getElementById('m_company').value.trim();
    const email    = document.getElementById('m_email').value.trim();
    const phone    = document.getElementById('m_phone').value.trim();
    const stage    = document.getElementById('m_stage').value;
    const value    = parseFloat(document.getElementById('m_value').value) || 0;
    const owner    = document.getElementById('m_owner').value;
    const priority = document.getElementById('m_priority').value;
    const notes    = document.getElementById('m_notes').value.trim();
    if (!name) { showToast('⚠️ Name is required', true); return; }
    const newLead = { id: Date.now(), name, company: company||'—', email: email||'—', phone: phone||'—', stage, value, owner, priority, notes, date: new Date().toISOString().split('T')[0] };
    LEADS_DATA.unshift(newLead);
    renderLeads(LEADS_DATA, 'leadsBody');
    renderLeads(LEADS_DATA, 'leadsBody2');
    renderPipeline();
    ACTIVITY_DATA.unshift({ icon:'fa-user-plus', color:'#10b981', bg:'rgba(16,185,129,.15)', text:`New lead <strong>${name}</strong> added${company?' from '+company:''}`, time:'Just now' });
    renderActivity();
    addNotification('fa-user-plus', '#10b981', 'rgba(16,185,129,.15)', `New lead <strong>${name}</strong> added${company ? ' from ' + company : ''}${value ? ' · ₹' + value + 'L' : ''}`);
    closeModal();
    showToast(`✅ Lead "${name}" added!`);
    ['m_name','m_company','m_email','m_phone','m_value','m_notes'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  });
}

/* ─ BUTTONS ─ */
function setupButtons() {
  // Open modal buttons
  ['openModal','openModal2','openModalLeads'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', openModal);
  });

  // Export CSV buttons
  ['exportBtn','exportBtn2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', exportCSV);
  });

  // Add task buttons
  const addTaskBtn = document.getElementById('addTaskBtn');
  if (addTaskBtn) addTaskBtn.addEventListener('click', () => {
    const text = prompt('New task:');
    addTask(text);
  });

  const addTaskPageBtn = document.getElementById('addTaskPageBtn');
  if (addTaskPageBtn) addTaskPageBtn.addEventListener('click', () => {
    const text = prompt('New task:');
    addTask(text);
  });

  // Clear activity feed
  const clearFeed = document.getElementById('clearFeed');
  if (clearFeed) clearFeed.addEventListener('click', () => {
    document.getElementById('activityFeed').innerHTML = '<div class="no-data">Feed cleared</div>';
    showToast('Activity feed cleared');
  });

  // Notification btn
  const notifBtn = document.getElementById('notifBtn');
  if (notifBtn) notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleNotifPanel();
  });

  // Mark all read
  const markAllRead = document.getElementById('markAllRead');
  if (markAllRead) markAllRead.addEventListener('click', () => {
    NOTIFICATIONS.forEach(n => n.unread = false);
    renderNotifPanel();
    updateNotifDot();
  });

  // Close panel when clicking outside
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('notifPanel');
    const btn = document.getElementById('notifBtn');
    if (panel && !panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.remove('open');
    }
  });

  // Quick Analysis button
  const qaBtn = document.getElementById('quickAnalysisBtn');
  if (qaBtn) qaBtn.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const reportsLink = document.querySelector('[data-page="reports"]');
    if (reportsLink) reportsLink.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const reportsPage = document.getElementById('page-reports');
    if (reportsPage) { reportsPage.classList.add('active'); animateInfoBoxes(); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─ EXPORT ─ */
function exportCSV() {
  const headers = ['Name','Company','Email','Stage','Value (₹L)','Owner','Priority','Date'];
  const rows = LEADS_DATA.map(l => [l.name, l.company, l.email||'', l.stage, l.value, l.owner, l.priority, l.date]);
  const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type:'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'nexcrm_leads.csv'; a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Leads exported as CSV!');
}

/* ─ SEARCH ─ */
function setupSearch() {
  const gSearch = document.getElementById('globalSearch');
  if (gSearch) gSearch.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    const results = !q ? LEADS_DATA : LEADS_DATA.filter(l =>
      l.name.toLowerCase().includes(q) ||
      l.company.toLowerCase().includes(q) ||
      l.stage.toLowerCase().includes(q) ||
      l.owner.toLowerCase().includes(q)
    );
    renderLeads(results, 'leadsBody');
  });

  const lf1 = document.getElementById('leadFilter');
  if (lf1) lf1.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    renderLeads(!q ? LEADS_DATA : LEADS_DATA.filter(l =>
      l.name.toLowerCase().includes(q) || l.company.toLowerCase().includes(q) || l.stage.toLowerCase().includes(q)
    ), 'leadsBody');
  });

  const lf2 = document.getElementById('leadFilter2');
  if (lf2) lf2.addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    renderLeads(!q ? LEADS_DATA : LEADS_DATA.filter(l =>
      l.name.toLowerCase().includes(q) || l.company.toLowerCase().includes(q) || l.stage.toLowerCase().includes(q)
    ), 'leadsBody2');
  });

  // Populate leads table 2
  renderLeads(LEADS_DATA, 'leadsBody2');
}

/* ─ THEME ─ */
function setupTheme() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    const icon = btn.querySelector('i');
    icon.className = document.body.classList.contains('light') ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  });
}

/* ─ HAMBURGER ─ */
function setupHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('open'));
}

/* ─ TOAST ─ */
let toastTimer;
function showToast(msg, isError=false) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.borderLeftColor = isError ? '#ef4444' : '#10b981';
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}
