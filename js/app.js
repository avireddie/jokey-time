// Jokey Time Hall of Fame — flipbook engine

const PAGES = [
  { type: 'cover' },
  { type: 'image', src: 'images/00_preface.png', alt: 'Preface page' },

  // Joke images — src maps to images/NN.png; alts match joke text
  // Placeholders (no PNG yet) use type:'placeholder'

  { type: 'image',       src: 'images/01.png', alt: 'Joke 1: Why do birds fly south for the winter? Because it\'s too far to walk.' },
  { type: 'image',       src: 'images/02.png', alt: 'Joke 2: Where do people go with two broken legs? Nowhere.' },
  { type: 'image',       src: 'images/03.png', alt: 'Joke 3: Why was the cell phone scared to go to the dentist? Because it didn\'t want its blue tooth removed.' },
  { type: 'image',       src: 'images/04.png', alt: 'Joke 4: Why did the golfer bring two pairs of pants? In case he got a hole in one.' },
  { type: 'image',       src: 'images/05.png', alt: 'Joke 5: Why did the teacher wear sunglasses? Because the students were too bright.' },
  { type: 'image',       src: 'images/06.png', alt: 'Joke 6: Why don\'t skeletons fight each other? They don\'t have the guts.' },
  { type: 'image',       src: 'images/07.png', alt: 'Joke 7: Why did the computer go to the doctor? Because it caught a virus.' },
  { type: 'image',       src: 'images/08.png', alt: 'Joke 8: Why don\'t calendars ever get lonely? Because they have so many dates.' },
  { type: 'image',       src: 'images/09.png', alt: 'Joke 9: Why did the stadium get so hot? Because all the fans left.' },
  { type: 'image',       src: 'images/10.png', alt: 'Joke 10: Why did a boy carry a ladder to school? Because he wanted to go to high school.' },
  { type: 'image',       src: 'images/11.png', alt: 'Joke 11: Why don\'t eggs tell jokes? Because they\'d crack up.' },
  { type: 'image',       src: 'images/12.png', alt: 'Joke 12: Why did the bicycle fall over? Because it was two-tired.' },
  { type: 'image',       src: 'images/13.png', alt: 'Joke 13: Why did the math book look so sad? Because it had so many problems.' },
  { type: 'image',       src: 'images/14.png', alt: 'Joke 14: Why is 10 afraid of 7? Because 7 8 (ate) 9.' },
  { type: 'image',       src: 'images/15.png', alt: 'Joke 15: What gets wetter the more it dries? A towel.' },
  { type: 'image',       src: 'images/16.png', alt: 'Joke 16: What has hands but can\'t clap? A clock.' },
  { type: 'image',       src: 'images/17.png', alt: 'Joke 17: What has a head and a tail but no body? A coin.' },
  { type: 'image',       src: 'images/18.png', alt: 'Joke 18: What has a ring but no finger? A phone.' },
  { type: 'image',       src: 'images/19.png', alt: 'Joke 19: What happens to a plane that goes in reverse? It gets wet.' },
  { type: 'image',       src: 'images/20.png', alt: 'Joke 20: What has teeth but can\'t bite? A comb.' },
  { type: 'image',       src: 'images/21.png', alt: 'Joke 21: What do you call a bear with no ears? A B.' },
  { type: 'image',       src: 'images/22.png', alt: 'Joke 22: What do you call a man with no body and no nose? Nobody knows.' },
  { type: 'image',       src: 'images/23.png', alt: 'Joke 23: Why did the kid sit on his watch? He wanted to be on time.' },
  { type: 'image',       src: 'images/24.png', alt: 'Joke 24: Why did the kid put his phone in the freezer? He wanted cool apps.' },
  { type: 'image',       src: 'images/25.png', alt: 'Joke 25: Why did the kid stare at the orange juice box? Because it said "concentrate."' },
  { type: 'image',       src: 'images/26.png', alt: 'Joke 26: What did zero say to eight? Nice belt.' },
  { type: 'image',       src: 'images/27.png', alt: 'Joke 27: Knock knock. Who\'s there? Icy. Icy who? Icy you peeking through the door.' },
  { type: 'image',       src: 'images/28.png', alt: 'Joke 28: Knock knock. Who\'s there? Nobel. Nobel who? No-bell — just knock!' },
  { type: 'image',       src: 'images/29.png', alt: 'Joke 29: Knock knock. Who\'s there? Spell. Spell who? Okay — W-H-O.' },
  { type: 'image',       src: 'images/30.png', alt: 'Joke 30: Knock knock. Who\'s there? Woo. Woo who? Don\'t get excited — it\'s just a joke.' },
  { type: 'image',       src: 'images/31.png', alt: 'Joke 31: Did you hear about the tiny mountain? It was hill-arious.' },
  { type: 'image',       src: 'images/32.png', alt: 'Joke 32: What did the left eye say to the right eye? Between us, something smells.' },
  { type: 'image',       src: 'images/33.png', alt: 'Joke 33: What does a car name his son? Carlson.' },
  { type: 'image',       src: 'images/34.png', alt: 'Joke 34: What do you call a bunny that\'s a transformer? Hoptimus Prime.' },
  { type: 'image',       src: 'images/35.png', alt: 'Joke 35: What\'s a bunny\'s favorite genre of music? Hip hop.' },
  { type: 'image',       src: 'images/36.png', alt: 'Joke 36: What kind of tree fits in your hand? A palm tree.' },
  { type: 'image',       src: 'images/37.png', alt: 'Joke 37: What do you call a sleeping bull? A bulldozer.' },
  { type: 'image',       src: 'images/38.png', alt: 'Joke 38: What do you call a fish that can play piano? A tuna.' },
  { type: 'image',       src: 'images/39.png', alt: 'Joke 39: What do you call a boomerang that doesn\'t come back? A stick.' },
  { type: 'image',       src: 'images/40.png', alt: 'Joke 40: What do you call a dinosaur that is sleeping? A dino-snore.' },
  { type: 'image',       src: 'images/41.png', alt: 'Joke 41: What did the ocean say to the beach? Nothing… it just waved.' },
  { type: 'image',       src: 'images/42.png', alt: 'Joke 42: What did the big flower say to the little flower? Hi, bud.' },
  { type: 'image',       src: 'images/43.png', alt: 'Joke 43: What do you call a bee that can\'t make up its mind? A maybe.' },
  { type: 'image',       src: 'images/44.png', alt: 'Joke 44: What do you call a dog that loves magic? A labracadabrador.' },
  { type: 'image',       src: 'images/45.png', alt: 'Joke 45: What do you call a pig that knows karate? A pork chop.' },
  { type: 'image',       src: 'images/46.png', alt: 'Joke 46: What do cats play at a party? Meowsical chairs.' },
  { type: 'image',       src: 'images/47.png', alt: 'Joke 47: Where do sharks go for holiday? Finland.' },
  { type: 'image',       src: 'images/48.png', alt: 'Joke 48: What food can you eat in the bath? Showerma.' },
  { type: 'placeholder', num: 49, setup: 'How many tickles does it take to make an octopus laugh?', punchline: 'Ten-tickles.' },
  { type: 'image',       src: 'images/50.png', alt: 'Joke 50: If Abu Dhabi was one big restaurant, what would it be called? Abu Dhaba.' },

  { type: 'closing' },
];

const TOTAL = PAGES.length; // includes cover + preface + 50 jokes + closing

let current = 0;

const book     = document.getElementById('book');
const btnPrev  = document.getElementById('btn-prev');
const btnNext  = document.getElementById('btn-next');
const counter  = document.getElementById('counter');
const progress = document.getElementById('progress-bar');

// ── Build DOM ──────────────────────────────────────────────────────────────

function buildCover() {
  const div = document.createElement('div');
  div.className = 'page page-cover';
  div.innerHTML = `
    <div class="cover-trophy" aria-hidden="true">🏆</div>
    <h1 class="cover-title">Jokey Time<br>Hall of Fame</h1>
    <div class="cover-divider"></div>
    <p class="cover-subtitle">50 Soham-Approved Jokes</p>
    <p class="cover-byline">by Soham &amp; Avvu</p>
  `;
  return div;
}

function buildImagePage(p) {
  const div = document.createElement('div');
  div.className = 'page page-image';
  const img = document.createElement('img');
  img.src = p.src;
  img.alt = p.alt;
  img.loading = 'lazy';
  div.appendChild(img);
  return div;
}

function buildPlaceholder(p) {
  const div = document.createElement('div');
  div.className = 'page page-placeholder';
  div.setAttribute('role', 'img');
  div.setAttribute('aria-label', `Joke ${p.num}: ${p.setup} ${p.punchline}`);
  div.innerHTML = `
    <div class="placeholder-badge" aria-hidden="true">${p.num}</div>
    <p class="placeholder-setup">${p.setup}</p>
    <p class="placeholder-punchline">${p.punchline}</p>
    <span class="placeholder-star" aria-hidden="true">⭐</span>
  `;
  return div;
}

function buildClosing() {
  const div = document.createElement('div');
  div.className = 'page page-closing';
  div.innerHTML = `
    <div class="closing-trophy" aria-hidden="true">🏆</div>
    <h2 class="closing-title">Hall of Fame</h2>
    <p class="closing-score">50 / 100</p>
    <p class="closing-label">Quest for 100</p>
    <p class="closing-msg">Halfway there, Soham!<br>Keep those jokes coming. 😄</p>
  `;
  return div;
}

const pageEls = PAGES.map((p, i) => {
  let el;
  if (p.type === 'cover')       el = buildCover();
  else if (p.type === 'image')  el = buildImagePage(p);
  else if (p.type === 'placeholder') el = buildPlaceholder(p);
  else                          el = buildClosing();
  el.dataset.index = i;
  book.appendChild(el);
  return el;
});

// ── Navigation ─────────────────────────────────────────────────────────────

function goTo(idx) {
  if (idx < 0 || idx >= TOTAL) return;
  pageEls[current].classList.remove('active');
  current = idx;
  const el = pageEls[current];
  el.classList.add('active', 'entering');
  el.addEventListener('animationend', () => el.classList.remove('entering'), { once: true });

  btnPrev.disabled = current === 0;
  btnNext.disabled = current === TOTAL - 1;
  counter.textContent = `${current + 1} / ${TOTAL}`;
  progress.style.width = `${((current + 1) / TOTAL) * 100}%`;
}

btnPrev.addEventListener('click', () => goTo(current - 1));
btnNext.addEventListener('click', () => goTo(current + 1));

// Arrow keys
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  goTo(current + 1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')    goTo(current - 1);
});

// Touch swipe
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
}, { passive: true });

// Init
goTo(0);
