/* Connect Student - prototype (sans backend). Données sauvegardées dans le navigateur. */

// ---------- Constantes ----------
const ACCENTS = { red: '#ff0000', blue: '#004d9b', ink: '#18161b' };
const FONTS = {
  default: "Gotham, Montserrat, 'Segoe UI', Arial, sans-serif",
  system: "system-ui, 'Segoe UI', Roboto, Tahoma, sans-serif",
  serif: "Georgia, 'Times New Roman', serif"
};
const SIZES = { s: 0.9, m: 1, l: 1.15 };
const CV_TYPES = ['classic', 'modern', 'academic', 'creative'];
const STATUSES = ['sent', 'reply', 'interview'];

const OFFERS = [
  { id: 1, title: 'UI/UX Designer', company: 'AGH Data Agency Holding SA', city: 'Casablanca, Maroc', domain: 'Digital Design', duration: '3 mois', posted: 'Il y a 3 jours',
    description: "Agence digitale spécialisée dans l'innovation et la création d'expériences mobiles fluides. Elle cherche des stagiaires capables de transformer des idées complexes en interfaces simples et intuitives.",
    responsibilities: ['Concevoir des wireframes et prototypes interactifs pour applications mobiles.', "Contribuer à la mise à jour du Design System de l'agence."],
    profile: ['Maîtrise de Figma (composants, auto layout).', "Bonne compréhension des principes d'ergonomie (UX)."] },
  { id: 2, title: 'Infographiste / Content Creator', company: 'Orange Maroc', city: 'Casablanca, Maroc', domain: 'Télécoms', duration: '6 mois (PFE privilégié)', posted: 'Il y a 5 jours',
    description: 'Orange mise sur une communication visuelle forte et innovante pour engager ses clients sur le digital.',
    responsibilities: ['Créer des visuels et vidéos courtes pour les réseaux sociaux.', 'Appliquer la charte graphique de la marque sur les supports digitaux.'],
    profile: ['Maîtrise de Photoshop, Illustrator et des outils de montage vidéo.', 'Forte culture web et tendances social media.'] },
  { id: 3, title: 'Ingénieur Maintenance', company: 'Lydec', city: 'Casablanca, Maroc', domain: 'Maintenance', duration: '4 mois', posted: 'Il y a 9 jours',
    description: 'Le stage vise à assurer la disponibilité constante des équipements électromécaniques critiques.',
    responsibilities: ['Participer à la maintenance préventive des stations de pompage.', 'Utiliser les outils de GMAO pour suivre les interventions.'],
    profile: ["Formation d'ingénieur en génie mécanique ou électrique.", 'Esprit analytique pour identifier les causes de défaillance.'] },
  { id: 4, title: 'Technicien Réseaux Hydrauliques', company: 'Amendis Tanger', city: 'Tanger, Maroc', domain: "Distribution d'Eau", duration: '4 mois', posted: 'Il y a 7 jours',
    description: "Filiale de Veolia, Amendis gère la distribution d'eau, d'électricité et l'assainissement dans la région de Tanger-Tétouan.",
    responsibilities: ["Participer à la surveillance des réseaux de distribution d'eau potable.", 'Aider à localiser les fuites et anomalies sur le réseau.'],
    profile: ['Technicien spécialisé en réseaux hydrauliques ou génie civil.', 'Aptitude au travail de terrain et sens du service public.'] },
  { id: 5, title: 'Graphic Designer', company: 'Inwi (via agences partenaires)', city: 'Casablanca / À distance', domain: 'Médias & Télécoms', duration: '6 mois', posted: 'Il y a 5 jours',
    description: 'Inwi cherche à dynamiser sa présence en ligne à travers des designs percutants et modernes.',
    responsibilities: ['Produire des visuels pour les campagnes marketing digitales.', 'Adapter les concepts créatifs à différents formats (bannières, stories, posts).'],
    profile: ['Compétences en design graphique print et digital.', 'Maîtrise de la suite Adobe Creative Cloud.'] },
  { id: 6, title: 'UX Designer Junior (Stage)', company: 'Devoteam Maroc', city: 'Rabat', domain: 'Conseil en Technologies', duration: '6 mois (PFE privilégié)', posted: 'Il y a 3 jours',
    description: "Cabinet de conseil en transformation digitale qui recherche des profils capables d'accompagner de grands comptes.",
    responsibilities: ['Participer à des ateliers de Design Thinking.', "Réaliser des maquettes haute fidélité et des tests d'utilisabilité."],
    profile: ["Profil orienté UX, bonne capacité d'écoute et d'analyse.", 'Maîtrise des outils de prototypage (Figma, Adobe XD).'] },
  { id: 7, title: "Ingénieur Traitement d'Eau", company: 'ONEE Branche Eau', city: 'Casablanca, Maroc', domain: 'Hydraulique', duration: '6 mois', posted: 'Il y a 4 jours',
    description: "L'ONEE est le pilier de la gestion des ressources hydriques au Maroc.",
    responsibilities: ['Assister les ingénieurs dans le suivi des processus de traitement.', 'Réaliser des analyses physico-chimiques en laboratoire.'],
    profile: ["Formation d'ingénieur en hydraulique, génie des procédés ou environnement.", 'Rigueur scientifique et respect des protocoles de sécurité.'] }
];

const MODULES = [
  { id: 'm1', duration: '23 min', tag: 'Com/Digital' },
  { id: 'm2', duration: '18 min', tag: 'IA/Digital' },
  { id: 'm3', duration: '25 min', tag: 'Communication' },
  { id: 'm4', duration: '12 min', tag: 'Communication' },
  { id: 'm5', duration: '25 min', tag: 'Communication' }
];

const DEFAULT = {
  user: null, lang: 'fr', theme: 'light', accent: 'red', font: 'default', size: 'm',
  photo: null,
  profile: { nom: '', email: '', telephone: '', ville: '', formation: '', bio: '', competences: '' },
  cvType: 'classic', cvDraft: '',
  applied: {}, favs: [], completed: [],
  messages: {
    devoteam: { name: 'Fatima EL Amrani', company: 'Devoteam Maroc', msgs: [
      { me: false, text: 'Bonjour ! Nous avons bien reçu votre candidature pour le poste de UX Designer.' },
      { me: false, text: 'Votre profil nous intéresse beaucoup. Seriez-vous disponible pour un entretien à nos bureaux de Casablanca cette semaine ?' }
    ] },
    inwi: { name: 'Youssef Benali', company: 'Inwi', msgs: [
      { me: false, text: 'Bonjour ! Nous avons bien reçu votre candidature pour le poste de Graphic Designer.' }
    ] }
  }
};

const KEY = 'connectstudent_v2';
let state = load();
let onboardingIndex = 0;

function load() {
  try { return { ...structuredClone(DEFAULT), ...JSON.parse(localStorage.getItem(KEY) || '{}') }; }
  catch (e) { return structuredClone(DEFAULT); }
}
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }

// ---------- Utilitaires ----------
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const go = (p) => { location.hash = '#/' + p; };
const val = (f, n) => f.elements[n].value;
const t = (k) => (I18N[state.lang] && I18N[state.lang][k]) ?? I18N.fr[k] ?? k;
const initial = () => esc(((state.profile.nom || state.user?.name || '?')[0] || '?').toUpperCase());
const avatar = (cls = '') => state.photo
  ? `<div class="avatar ${cls}"><img src="${state.photo}" alt=""></div>`
  : `<div class="avatar ${cls}">${initial()}</div>`;
const statusText = (s) => ({ sent: t('stSent'), reply: t('stReply'), interview: t('stInterview') })[s];
const statusClass = (s) => (s === 'interview' ? 'interview' : s === 'reply' ? 'reply' : '');
const domainOf = (o) => o.domain;

function logo(size = 40) {
  return `<div class="logo-wrap">
    <svg width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
      <rect width="100" height="100" rx="22" fill="var(--accent)"/>
      <path d="M20 36 C30 38, 36 48, 40 62 C43 70, 46 74, 50 74 C54 74, 57 70, 60 62 C64 48, 70 38, 80 36 C82 58, 70 78, 50 78 C30 78, 18 58, 20 36Z" fill="#ffe5e5"/>
      <circle cx="50" cy="40" r="8" fill="#ffe5e5"/>
    </svg>
    <div class="logo-text"><b>Connect</b><span>Student</span></div>
  </div>`;
}

// ---------- Apparence ----------
function applySettings() {
  const html = document.documentElement;
  html.lang = state.lang;
  html.dir = I18N[state.lang].dir;
  const dark = state.theme === 'dark' || (state.theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
  html.dataset.theme = dark ? 'dark' : 'light';
  html.style.setProperty('--accent', ACCENTS[state.accent]);
  html.style.setProperty('--font', FONTS[state.font]);
  html.style.setProperty('--scale', SIZES[state.size]);
  html.style.setProperty('--ink-on-accent', state.accent === 'ink' && dark ? '#18161b' : '#ffffff');
}

// ---------- Générateur de CV (assistant local) ----------
function buildCV(type) {
  const p = state.profile;
  const skills = p.competences.split(',').map(s => s.trim()).filter(Boolean);
  const name = p.nom || '—';
  const contact = [p.email, p.telephone, p.ville].filter(Boolean).join(' | ') || '—';
  const edu = p.formation || '—';
  const bio = p.bio || '—';
  const sec = (title, body) => `${title.toUpperCase()}\n${body}\n\n`;
  const list = skills.length ? skills.map(s => '• ' + s).join('\n') : '—';
  const inline = skills.length ? skills.join(' · ') : '—';
  if (type === 'modern') {
    return `${name.toUpperCase()}\n${contact}\n\n` + sec(t('secAbout'), bio) + sec(t('secSkills'), list) + sec(t('secEdu'), edu);
  }
  if (type === 'academic') {
    return `${name}\n${contact}\n\n` + sec(t('secEdu'), edu) + sec(t('secProjects'), bio) + sec(t('secSkills'), skills.join(', ') || '—') + sec(t('secGoal'), t('goalText'));
  }
  if (type === 'creative') {
    return `${name}\n${contact}\n\n` + sec(t('secAbout'), bio) + sec(t('secCanDo'), inline) + sec(t('secContact'), contact);
  }
  return `${name}\n${contact}\n\n` + sec(t('secProfile'), bio) + sec(t('secEdu'), edu) + sec(t('secSkills'), skills.join(', ') || '—');
}

// ---------- Vues ----------
const views = {
  onboarding() {
    const i = onboardingIndex, last = i === ONBOARDING_KEYS.length - 1;
    return `<section class="screen center onboard">
      <button class="link-btn skip" data-action="skip">${t('skip')}</button>
      ${logo(72)}
      <h1>${t('ob' + (i + 1) + 't')}</h1>
      <p>${t('ob' + (i + 1) + 'x')}</p>
      <div class="dots">${ONBOARDING_KEYS.map((_, k) => `<span class="${k === i ? 'on' : ''}"></span>`).join('')}</div>
      <button class="btn primary" data-action="next" style="max-width:320px">${last ? t('start') : t('next')}</button>
    </section>`;
  },

  login() {
    return `<section class="screen">
      <div class="center">${logo(56)}</div>
      <h1 class="center mt">${t('welcomeBack')}</h1>
      <p class="muted center">${t('loginSub')}</p>
      <form class="form" data-form="login">
        <label>${t('email')}<input type="email" name="email" required></label>
        <label>${t('password')}<input type="password" name="password" required minlength="6"></label>
        <button class="btn primary" type="submit">${t('login')}</button>
      </form>
      <p class="center-text">${t('noAccount')} <a href="#/signup">${t('signup')}</a></p>
    </section>`;
  },

  signup() {
    return `<section class="screen">
      <div class="center">${logo(56)}</div>
      <h1 class="center mt">${t('signupTitle')}</h1>
      <p class="muted center">${t('signupSub')}</p>
      <form class="form" data-form="signup">
        <label>${t('fullName')}<input name="nom" required></label>
        <label>${t('email')}<input type="email" name="email" required></label>
        <label>${t('password')}<input type="password" name="password" required minlength="6"></label>
        <label>${t('confirmPwd')}<input type="password" name="confirm" required minlength="6"></label>
        <p class="error"></p>
        <button class="btn primary" type="submit">${t('signup')}</button>
      </form>
      <p class="center-text">${t('haveAccount')} <a href="#/login">${t('login')}</a></p>
    </section>`;
  },

  home() {
    const apps = Object.entries(state.applied);
    const interviews = apps.filter(([, s]) => s === 'interview').length;
    const pct = Math.round(state.completed.length / MODULES.length * 100);
    const activity = [];
    apps.forEach(([id, s]) => {
      const o = OFFERS.find(x => x.id == id);
      if (o && s !== 'sent') activity.push(t('notifStatus').replace('{t}', o.title).replace('{s}', statusText(s)));
    });
    Object.values(state.messages).forEach(c => activity.push(t('notifMsg').replace('{n}', c.name)));
    return `<header class="topbar">${logo(36)}<a href="#/profile" aria-label="${t('navProfile')}">${avatar()}</a></header>
      <div class="screen" style="padding-top:0">
        <h2>${t('hello')} ${esc(state.profile.nom || state.user.name)} !</h2>
        <p class="muted">${t('homeSub')}</p>
      </div>
      <div class="stats">
        <div class="stat"><b>${apps.length}</b><span>${t('statSent')}</span></div>
        <div class="stat"><b>${interviews}</b><span>${t('statInterviews')}</span></div>
        <div class="stat"><b>${pct}%</b><span>${t('statTraining')}</span></div>
      </div>
      <div class="section-title"><h3>${t('quickActions')}</h3></div>
      <div class="quick">
        <a href="#/cv">${t('qaCV')}</a>
        <a href="#/training">${t('qaTraining')}</a>
        <a href="#/favorites">${t('qaFav')}</a>
      </div>
      <div class="section-title"><h3>${t('recommended')}</h3><a href="#/offers">${t('seeAll')}</a></div>
      <div class="list">${offerCards(OFFERS.slice(0, 3))}</div>
      <div class="section-title"><h3>${t('recentActivity')}</h3></div>
      <div class="list">${activity.length
        ? activity.slice(0, 4).map(a => `<div class="card"><p style="margin:0">${esc(a)}</p></div>`).join('')
        : `<p class="empty">${t('noActivity')}</p>`}</div>`;
  },

  offers() {
    const domains = [...new Set(OFFERS.map(domainOf))];
    return `<header class="topbar"><h2>${t('offersTitle')}</h2><a href="#/favorites" class="icon-btn" aria-label="${t('qaFav')}">★</a></header>
      <div class="filters">
        <input id="search" placeholder="${t('searchPh')}">
        <select id="domain"><option value="">${t('allDomains')}</option>
          ${domains.map(d => `<option value="${esc(d)}">${esc(d)}</option>`).join('')}
        </select>
      </div>
      <div id="offers-list" class="list">${offerCards(OFFERS)}</div>`;
  },

  favorites() {
    const list = OFFERS.filter(o => state.favs.includes(o.id));
    return `<header class="topbar"><a class="back" href="#/offers">${state.lang === 'ar' ? '→' : '←'}</a><h2>${t('favsTitle')}</h2><span></span></header>
      <div class="list">${list.length ? offerCards(list) : `<p class="empty">${t('noFavs')}</p>`}</div>`;
  },

  offer(id) {
    const o = OFFERS.find(x => x.id == id);
    if (!o) return `<header class="topbar"><a class="back" href="#/offers">←</a><h2>—</h2></header>`;
    const applied = !!state.applied[o.id];
    const fav = state.favs.includes(o.id);
    return `<header class="topbar"><a class="back" href="#/offers">${state.lang === 'ar' ? '→' : '←'}</a><h2>${t('detailTitle')}</h2>
        <button class="icon-btn" data-action="fav" data-id="${o.id}" aria-label="${t('favAdd')}">${fav ? '★' : '☆'}</button></header>
      <section class="screen-body">
        <h2>${esc(o.title)}</h2>
        <p class="muted">${esc(o.company)} · ${esc(o.city)}</p>
        <div class="chips"><span>${esc(o.domain)}</span><span>${t('duration')}: ${esc(o.duration)}</span><span>${esc(o.posted)}</span></div>
        <h3>${t('description')}</h3><p>${esc(o.description)}</p>
        <h3>${t('responsibilities')}</h3><ul>${o.responsibilities.map(r => `<li>${esc(r)}</li>`).join('')}</ul>
        <h3>${t('profileWanted')}</h3><ul>${o.profile.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      </section>
      <div class="sticky-cta">
        <button class="btn ${applied ? 'ghost' : 'primary'}" data-action="apply" data-id="${o.id}">${applied ? t('withdraw') : t('apply')}</button>
      </div>`;
  },

  applications() {
    const entries = Object.entries(state.applied)
      .map(([id, status]) => ({ o: OFFERS.find(x => x.id == id), status })).filter(e => e.o);
    const count = (s) => entries.filter(e => e.status === s).length;
    return `<header class="topbar"><h2>${t('appsTitle')}</h2><span></span></header>
      <div class="stats">
        <div class="stat"><b>${entries.length}</b><span>${t('sentCount')}</span></div>
        <div class="stat"><b>${count('interview')}</b><span>${t('interviewCount')}</span></div>
        <div class="stat"><b>${count('reply')}</b><span>${t('replyCount')}</span></div>
      </div>
      <div class="list mt">${entries.length ? entries.map(e => `
        <article class="card row">
          <div><h3>${esc(e.o.title)}</h3><p class="meta">${esc(e.o.company)}</p>
            <span class="status ${statusClass(e.status)}">${esc(statusText(e.status))}</span></div>
          <button class="btn small ghost" data-action="advance" data-id="${e.o.id}">${t('changeStatus')}</button>
        </article>`).join('')
        : `<p class="empty">${t('noApps')}<br><a href="#/offers">${t('discover')}</a></p>`}</div>`;
  },

  messages(key) {
    if (!key) {
      const items = Object.entries(state.messages);
      return `<header class="topbar"><h2>${t('msgsTitle')}</h2><span></span></header>
        <div class="list">${items.length ? items.map(([k, c]) => {
          const last = c.msgs[c.msgs.length - 1];
          return `<article class="card conv" data-action="goto" data-to="messages/${esc(k)}">
            <div class="avatar">${esc(c.name[0])}</div>
            <div><h3 style="margin:0">${esc(c.name)}</h3><p class="meta">${esc(c.company)} · ${esc(last ? last.text.slice(0, 45) : '')}…</p></div>
          </article>`;
        }).join('') : `<p class="empty">${t('noConv')}</p>`}</div>`;
    }
    const c = state.messages[key];
    if (!c) return `<p class="empty">${t('convNotFound')}</p>`;
    return `<header class="topbar"><a class="back" href="#/messages">${state.lang === 'ar' ? '→' : '←'}</a>
        <div class="conv"><div class="avatar">${esc(c.name[0])}</div><div><h3 style="margin:0">${esc(c.name)}</h3><p class="meta" style="margin:0">${esc(c.company)}</p></div></div><span></span></header>
      <div class="chat">${c.msgs.map(m => `<div class="bubble ${m.me ? 'me' : 'them'}">${esc(m.text)}</div>`).join('')}</div>
      <form class="composer" data-form="send" data-conv="${esc(key)}">
        <input name="text" placeholder="${t('typeMsg')}" autocomplete="off">
        <button type="submit">${t('send')}</button>
      </form>`;
  },

  cv() {
    const types = CV_TYPES.map(k => `
      <button type="button" class="cv-type ${state.cvType === k ? 'on' : ''}" data-action="cvtype" data-type="${k}">
        ${t('type' + k[0].toUpperCase() + k.slice(1))}
      </button>`).join('');
    return `<header class="topbar"><a class="back" href="#/profile">${state.lang === 'ar' ? '→' : '←'}</a><h2>${t('cvTitle')}</h2><span></span></header>
      <div class="screen-body">
        <h3>${t('cvTypeLabel')}</h3>
        <div class="cv-types">${types}</div>
        <button class="btn primary mt" data-action="gencv">${t('generate')}</button>
        <p class="meta">${t('cvHint')}</p>
        <form data-form="cvdraft" class="form">
          <label>${t('cvDraft')}<textarea name="draft" class="cv-preview" rows="14">${esc(state.cvDraft)}</textarea></label>
          <div class="field-row">
            <button class="btn ghost" type="submit">${t('save')}</button>
            <button class="btn primary" type="button" data-action="downloadcv">${t('downloadTxt')}</button>
          </div>
        </form>
      </div>`;
  },

  training() {
    const pct = Math.round(state.completed.length / MODULES.length * 100);
    return `<header class="topbar"><h2>${t('trainingTitle')}</h2><span></span></header>
      <div class="progress-card"><p>${t('progress')} : ${state.completed.length} / ${MODULES.length}</p>
        <div class="bar"><span style="width:${pct}%"></span></div></div>
      <div class="list">${MODULES.map(m => {
        const done = state.completed.includes(m.id);
        return `<article class="card row">
          <div><span class="badge">${esc(m.tag)}</span><h3>${t('mod_' + m.id)}</h3><p class="meta">${esc(m.duration)}</p></div>
          <button class="btn small ${done ? 'ghost' : 'primary'}" data-action="module" data-id="${m.id}">${done ? t('markUndone') : t('markDone')}</button>
        </article>`;
      }).join('')}</div>`;
  },

  profile() {
    const p = state.profile;
    const keys = ['nom', 'email', 'telephone', 'ville', 'formation', 'bio', 'competences'];
    const pct = Math.round(keys.filter(k => p[k]).length / keys.length * 100);
    return `<header class="topbar"><h2>${t('profileTitle')}</h2><a class="icon-btn" href="#/settings" aria-label="${t('settingsTitle')}">⚙</a></header>
      <div class="profile-head">
        ${avatar('lg')}
        <h2>${esc(p.nom || state.user.name)}</h2>
        <p class="muted">${esc(p.formation || '')}</p>
      </div>
      <div class="info-box">
        <p><b>${t('completion')} ${pct}%</b></p>
        <div class="bar"><span style="width:${pct}%"></span></div>
        <p>${t('email')} : ${esc(p.email || state.user.email)}</p>
        <p>${t('phone')} : ${esc(p.telephone || '—')}</p>
        <p>${t('city')} : ${esc(p.ville || '—')}</p>
        <p>${t('skills')} : ${esc(p.competences || '—')}</p>
      </div>
      <div class="screen-body" style="padding-top:16px">
        <form class="form" data-form="profile" style="margin-top:0">
          <h3>${t('personalInfo')}</h3>
          <div class="field-row">
            <label style="flex:1">${t('photo')}<input type="file" id="photo-input" accept="image/*"></label>
            ${state.photo ? `<button type="button" class="btn small ghost" data-action="rmphoto">${t('removePhoto')}</button>` : ''}
          </div>
          <label>${t('fullName')}<input name="nom" value="${esc(p.nom)}"></label>
          <label>${t('email')}<input name="email" type="email" value="${esc(p.email)}"></label>
          <label>${t('phone')}<input name="telephone" value="${esc(p.telephone)}"></label>
          <label>${t('city')}<input name="ville" value="${esc(p.ville)}"></label>
          <label>${t('formation')}<input name="formation" value="${esc(p.formation)}"></label>
          <label>${t('skills')}<input name="competences" value="${esc(p.competences)}"></label>
          <label>${t('bio')}<textarea name="bio">${esc(p.bio)}</textarea></label>
          <button class="btn primary" type="submit">${t('save')}</button>
        </form>
        <a class="btn ghost gap" href="#/cv">${t('myCV')}</a>
        <button class="btn gap" data-action="logout" style="color:var(--muted);background:transparent">${t('logout')}</button>
      </div>`;
  },

  settings() {
    const choice = (setting, value, label, current) =>
      `<button type="button" class="choice ${current === value ? 'on' : ''}" data-action="set" data-key="${setting}" data-value="${value}">${label}</button>`;
    const langs = Object.entries(I18N).map(([k, v]) => choice('lang', k, v.name, state.lang)).join('');
    return `<header class="topbar"><a class="back" href="#/profile">${state.lang === 'ar' ? '→' : '←'}</a><h2>${t('settingsTitle')}</h2><span></span></header>
      <div class="mt">
        <div class="setting"><h3>${t('theme')}</h3><div class="choices">
          ${choice('theme', 'light', t('themeLight'), state.theme)}
          ${choice('theme', 'dark', t('themeDark'), state.theme)}
          ${choice('theme', 'system', t('themeSystem'), state.theme)}</div></div>
        <div class="setting"><h3>${t('accent')}</h3><div class="choices">
          ${choice('accent', 'red', `<span class="swatch" style="background:#ff0000"></span>${t('accRed')}`, state.accent)}
          ${choice('accent', 'blue', `<span class="swatch" style="background:#004d9b"></span>${t('accBlue')}`, state.accent)}
          ${choice('accent', 'ink', `<span class="swatch" style="background:#18161b"></span>${t('accInk')}`, state.accent)}</div></div>
        <div class="setting"><h3>${t('font')}</h3><div class="choices">
          ${choice('font', 'default', t('fontDefault'), state.font)}
          ${choice('font', 'system', t('fontSystem'), state.font)}
          ${choice('font', 'serif', t('fontSerif'), state.font)}</div></div>
        <div class="setting"><h3>${t('fontSize')}</h3><div class="choices">
          ${choice('size', 's', t('sizeS'), state.size)}
          ${choice('size', 'm', t('sizeM'), state.size)}
          ${choice('size', 'l', t('sizeL'), state.size)}</div></div>
        <div class="setting"><h3>${t('language')}</h3><div class="choices">${langs}</div></div>
      </div>`;
  }
};

const ONBOARDING_KEYS = ['1', '2', '3'];

function offerCards(list) {
  if (!list.length) return `<p class="empty">${t('noOffers')}</p>`;
  return list.map(o => `
    <article class="card" data-action="goto" data-to="offers/${o.id}">
      <div class="field-row" style="justify-content:space-between"><span class="badge">${esc(o.domain)}</span>
        <span class="meta" style="margin:0">${state.favs.includes(o.id) ? '★' : ''}</span></div>
      <h3>${esc(o.title)}</h3>
      <p class="muted" style="margin:0">${esc(o.company)} · ${esc(o.city)}</p>
      <p class="meta">${esc(o.duration)} · ${esc(o.posted)}</p>
    </article>`).join('');
}

function nav(route) {
  const items = [['home', 'navHome'], ['offers', 'navOffers'], ['applications', 'navApps'], ['messages', 'navMessages'], ['profile', 'navProfile']];
  const active = { offer: 'offers', favorites: 'offers', cv: 'profile', settings: 'profile', training: 'home' }[route] || route;
  return `<nav class="bottom-nav">${items.map(([k, l]) =>
    `<a href="#/${k}" class="${active === k ? 'active' : ''}">${t(l)}</a>`).join('')}</nav>`;
}

// ---------- Routeur ----------
const PUBLIC = ['onboarding', 'login', 'signup'];

function render() {
  applySettings();
  const [page, param] = location.hash.replace(/^#\/?/, '').split('/');
  const route = page || (state.user ? 'home' : 'onboarding');
  if (state.user && PUBLIC.includes(route)) return go('home');
  if (!state.user && !PUBLIC.includes(route)) return go('login');
  const map = {
    onboarding: () => views.onboarding(), login: () => views.login(), signup: () => views.signup(),
    home: () => views.home(), offers: () => views.offers(), offer: () => views.offer(param),
    favorites: () => views.favorites(), applications: () => views.applications(),
    messages: () => views.messages(param), cv: () => views.cv(), training: () => views.training(),
    profile: () => views.profile(), settings: () => views.settings()
  };
  if (!map[route]) return go(state.user ? 'home' : 'onboarding');
  $('#app').innerHTML = map[route]() + (PUBLIC.includes(route) ? '' : nav(route));
}

// ---------- Actions ----------
const actions = {
  next() { onboardingIndex++; if (onboardingIndex >= ONBOARDING_KEYS.length) go('login'); else render(); },
  skip() { go('login'); },
  goto(el) { go(el.dataset.to); },
  apply(el) {
    const id = el.dataset.id;
    if (state.applied[id]) delete state.applied[id]; else state.applied[id] = 'sent';
    save(); render();
  },
  advance(el) {
    const id = el.dataset.id;
    const i = STATUSES.indexOf(state.applied[id]);
    state.applied[id] = STATUSES[(i + 1) % STATUSES.length];
    save(); render();
  },
  fav(el) {
    const id = +el.dataset.id;
    state.favs = state.favs.includes(id) ? state.favs.filter(x => x !== id) : [...state.favs, id];
    save(); render();
  },
  module(el) {
    const id = el.dataset.id;
    state.completed = state.completed.includes(id) ? state.completed.filter(x => x !== id) : [...state.completed, id];
    save(); render();
  },
  set(el) {
    state[el.dataset.key] = el.dataset.value;
    save(); render();
  },
  cvtype(el) { state.cvType = el.dataset.type; save(); render(); },
  gencv() { state.cvDraft = buildCV(state.cvType); save(); render(); },
  downloadcv() {
    const blob = new Blob([state.cvDraft || buildCV(state.cvType)], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'CV-ConnectStudent.txt';
    a.click();
    URL.revokeObjectURL(a.href);
  },
  rmphoto() { state.photo = null; save(); render(); },
  logout() { state.user = null; save(); go('login'); }
};

// ---------- Formulaires ----------
const forms = {
  login(f) {
    const email = val(f, 'email').trim();
    state.user = { email, name: email.split('@')[0] };
    state.profile.email = state.profile.email || email;
    save(); go('home');
  },
  signup(f) {
    const err = f.querySelector('.error');
    if (val(f, 'password') !== val(f, 'confirm')) { err.textContent = t('pwdMismatch'); return; }
    const nom = val(f, 'nom').trim(), email = val(f, 'email').trim();
    state.user = { email, name: nom };
    state.profile = { ...state.profile, nom, email };
    save(); go('home');
  },
  profile(f) {
    const keys = ['nom', 'email', 'telephone', 'ville', 'formation', 'competences', 'bio'];
    keys.forEach(k => { state.profile[k] = val(f, k); });
    state.user = { ...state.user, name: state.profile.nom || state.user.name };
    save(); go('profile');
  },
  cvdraft(f) { state.cvDraft = val(f, 'draft'); save(); render(); },
  send(f) {
    const text = val(f, 'text').trim();
    if (!text) return;
    state.messages[f.dataset.conv].msgs.push({ me: true, text });
    save(); render();
  }
};

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (el && actions[el.dataset.action]) actions[el.dataset.action](el);
});
document.addEventListener('submit', (e) => {
  const f = e.target;
  if (f.dataset.form && forms[f.dataset.form]) { e.preventDefault(); forms[f.dataset.form](f); }
});
document.addEventListener('input', (e) => {
  if (e.target.id === 'search' || e.target.id === 'domain') {
    const q = $('#search').value.toLowerCase();
    const d = $('#domain').value;
    const list = OFFERS.filter(o => (o.title + ' ' + o.company + ' ' + o.domain).toLowerCase().includes(q) && (!d || o.domain === d));
    $('#offers-list').innerHTML = offerCards(list);
  }
});
document.addEventListener('change', (e) => {
  if (e.target.id === 'domain') { $('#search') && $('#search').dispatchEvent(new Event('input', { bubbles: true })); }
  if (e.target.id === 'photo-input' && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const size = 256, c = document.createElement('canvas');
        c.width = c.height = size;
        const s = Math.min(img.width, img.height);
        c.getContext('2d').drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
        state.photo = c.toDataURL('image/jpeg', 0.85);
        save(); render();
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (state.theme === 'system') applySettings(); });
window.addEventListener('hashchange', render);
render();
