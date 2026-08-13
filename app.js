/* =============================================
   ALICHO RESTAURANT — APP.JS
   ============================================= */

'use strict';

// ─── Constants ───────────────────────────────
const WA_NUMBER = '994552405777';
const PAGE_SCROLL_MAP = {};
let currentPage = 'home';
let currentModalProduct = null;
let currentVacancy = null;
let cart = [];

// ─── DATA ─────────────────────────────────────

const MENU_IMG = 'images/menu-category.jpg';

const menuData = {
  kabablar: [
    {
      id: 'k1',
      name: 'Lülə',
      desc: 'Əl ilə yoğrulmuş mincə ət kababı, ocaqda hazırlanır. Ləzzəti inanılmazdır.',
      price: 7.50,
      weight: '1 ədəd',
      img: MENU_IMG,
      badge: 'Populyar'
    },
    {
      id: 'k2',
      name: 'Tika',
      desc: 'Seçilmiş ət parçalarından hazırlanmış tika kabab, ocaqda mükəmməl bişirilir.',
      price: 8.50,
      weight: '1 ədəd',
      img: MENU_IMG
    },
    {
      id: 'k3',
      name: 'Antrikot Qoşa',
      desc: 'İki ədəd antrikot, xüsusi marinad ilə hazırlanmış, yumuşaq və dadlı.',
      price: 9.00,
      weight: '2 ədəd',
      img: MENU_IMG
    },
    {
      id: 'k4',
      name: 'Quzu Kabab',
      desc: 'Təzə quzu ətindən hazırlanmış kabab, ocaqda kömür ətri ilə bişirilir.',
      price: 7.00,
      weight: '1 ədəd',
      img: MENU_IMG,
      badge: 'Ən Sevilən'
    },
    {
      id: 'k5',
      name: 'Ciyər Quyruq',
      desc: 'Ciyər və quyruq yağından hazırlanmış şişlik, dadlı və ətirli.',
      price: 8.00,
      weight: '1 ədəd',
      img: MENU_IMG
    },
    {
      id: 'k6',
      name: 'Dana Başdırma',
      desc: 'Dana əti ilə hazırlanmış başdırma, xüsusi üsulla bişirilir.',
      price: 9.50,
      weight: '1 ədəd',
      img: MENU_IMG
    },
    {
      id: 'k7',
      name: 'Toyuq Kabab Broyler (Kanal)',
      desc: 'Broyler toyuq kanalı, ocaqda hazırlanmış, müxtəlif çəkilərdə mövcuddur.',
      price: 5.00,
      weight: 'Kanal',
      img: MENU_IMG,
      badge: '5-16 AZN'
    },
    {
      id: 'k8',
      name: 'Toyuq File',
      desc: 'Toyuq filesi kabab, sulu və yumşaq, ocaqda bişirilmiş.',
      price: 6.00,
      weight: '1 ədəd',
      img: MENU_IMG
    },
    {
      id: 'k9',
      name: 'Toyuq Lülə',
      desc: 'Toyuq ətindən hazırlanmış lülə kabab, yüngül və dadlı.',
      price: 6.50,
      weight: '1 ədəd',
      img: MENU_IMG
    },
    {
      id: 'k10',
      name: 'Xan Kababı',
      desc: 'Əfsanəvi Xan kababı, xüsusi resept üzrə hazırlanmış, restoran imzası.',
      price: 8.00,
      weight: '1 ədəd',
      img: MENU_IMG,
      badge: 'İmza'
    },
    {
      id: 'k11',
      name: 'Hinduşka',
      desc: 'Hinduşka kabab, 0.5–1 kq arası, qiymət çəkiyə görə dəyişir.',
      price: 0,
      weight: '0.5–1 kq',
      img: MENU_IMG
    },
    {
      id: 'k12',
      name: 'Bildirçin',
      desc: 'Bütöv bildirçin kabab, yüngül ət, suda tutulmuş marinad ilə.',
      price: 4.00,
      weight: '1 ədəd',
      img: MENU_IMG
    },
    {
      id: 'k13',
      name: 'Balıq (Qızıl, Astarın, Kütüm, Forel, Sazan, Beluga)',
      desc: 'Müxtəlif növ balıq — qızıl, astarın, kütüm, forel, sazan, beluga. Qiymət növə görə.',
      price: 0,
      weight: 'Növə görə',
      img: MENU_IMG
    }
  ],
  qazanyemeleri: [
    {
      id: 'q1',
      name: 'Plov',
      desc: 'Ənənəvi Azərbaycan plovu, xüsusi düyü ilə hazırlanmış, nazik qazıyanlı.',
      price: 7.00,
      weight: '1 porsiya',
      img: MENU_IMG,
      badge: 'Klassik'
    },
    {
      id: 'q2',
      name: 'Şəkərçörəkli Plov',
      desc: 'Şəkərçörək ilə bişirilmiş xüsusi plov, bayramlıq məzə.',
      price: 8.00,
      weight: '1 porsiya',
      img: MENU_IMG
    },
    {
      id: 'q3',
      name: 'Qazan Kababı',
      desc: 'Qazanda bişirilmiş ət kabab, öz şirəsi ilə, lüləyə bənzər ancaq yumuşaq.',
      price: 9.00,
      weight: '1 porsiya',
      img: MENU_IMG,
      badge: 'Populyar'
    },
    {
      id: 'q4',
      name: 'Bozbash',
      desc: 'Ənənəvi Azərbaycan bozbashı, noxud və kartof ilə bişirilmiş.',
      price: 6.00,
      weight: '1 porsiya',
      img: MENU_IMG
    },
    {
      id: 'q5',
      name: 'Parça Bozartma',
      desc: 'Quzu əti parçaları ilə bişirilmiş bozartma, zəngin ətirli.',
      price: 8.50,
      weight: '1 porsiya',
      img: MENU_IMG
    },
    {
      id: 'q6',
      name: 'Dolu Kəllə-Paça',
      desc: 'Ənənəvi üsulla hazırlanmış kəllə-paça, səhər yeməyi üçün ideal.',
      price: 10.00,
      weight: '1 porsiya',
      img: MENU_IMG
    }
  ],
  salatlar: [
    {
      id: 'sa1',
      name: 'Kənd Salatı',
      desc: 'Təzə pomidor, xiyar, bibər, soğan, göyərti ilə hazırlanmış kənd salatı.',
      price: 3.50,
      weight: '300q',
      img: MENU_IMG
    },
    {
      id: 'sa2',
      name: 'Çoban Salatı',
      desc: 'Iri doğranmış tərəvəz, zeytun, pendir ilə hazırlanmış çoban salatı.',
      price: 4.00,
      weight: '300q',
      img: MENU_IMG
    },
    {
      id: 'sa3',
      name: 'Göyərti Salatı',
      desc: 'Müxtəlif göyərti — nanə, reyhan, kəklikotu, cəfəri — təzə servis.',
      price: 2.50,
      weight: '1 porsiya',
      img: MENU_IMG
    },
    {
      id: 'sa4',
      name: 'Turşu',
      desc: 'Ev hazırlaması turşu — xiyar, kələm, bibər, pomidor.',
      price: 3.00,
      weight: '1 porsiya',
      img: MENU_IMG
    }
  ],
  ickilər: [
    {
      id: 'ic1',
      name: 'Ayran',
      desc: 'Təzə ev hazırlaması ayran, kababın yanında ideal seçim.',
      price: 2.00,
      weight: '500ml',
      img: MENU_IMG,
      badge: 'Populyar'
    },
    {
      id: 'ic2',
      name: 'Şərbət',
      desc: 'Müxtəlif meyvəli ev şərbəti, soyuq servis.',
      price: 2.50,
      weight: '400ml',
      img: MENU_IMG
    },
    {
      id: 'ic3',
      name: 'Coca-Cola',
      desc: 'Soyuq Coca-Cola, kabab ilə mükəmməl cütlük.',
      price: 2.00,
      weight: '0.33L',
      img: MENU_IMG
    },
    {
      id: 'ic4',
      name: 'Su (Mineral)',
      desc: 'Soyuq mineral su.',
      price: 1.00,
      weight: '0.5L',
      img: MENU_IMG
    },
    {
      id: 'ic5',
      name: 'Çay',
      desc: 'Qaynar çay, armudu stəkanda servis edilir.',
      price: 1.50,
      weight: '1 dəst',
      img: MENU_IMG
    }
  ]
};

const faqData = [
  {
    q: 'Rezervasiya üçün nə etməliyəm?',
    a: 'Rezervasiya üçün WhatsApp (+994 55 200 71 74) vasitəsilə bizimlə əlaqə saxlayın və ya saytdakı Rezervasiya formasını doldurun. Tarix, saat və nəfər sayını bildirin.'
  },
  {
    q: 'Alicho Restaurant harada yerləşir?',
    a: 'Restoranımız Rəşid İsmayılov 70, Bileceri dairəsi, Bakı, Azərbaycan ünvanında yerləşir.'
  },
  {
    q: 'Rezervasiya üçün depozit tələb olunurmu?',
    a: 'Xeyr, rezervasiya tamamilə pulsuzdur. Masa saxlamaq üçün heç bir ödəniş tələb edilmir. Sadəcə gəlmədiyiniz halda xəbər verməyinizi rica edirik.'
  },
  {
    q: 'Ailə şənliyi, ad günü, toy üçün yer var?',
    a: 'Bəli! Alicho Restaurant ailavi bir restoran olaraq xüsusi tədbirlər — ad günü, kına gecəsi, iş yemək görüşləri üçün uyğundur. WhatsApp vasitəsilə bizimlə əlaqə saxlayın.'
  },
  {
    q: 'Ödəniş üsulları hansılardır?',
    a: 'Nağd pul, bank kartı (Kapital Bank, ABB, PASHA Bank) və onlayn ödəniş qəbul edilir.'
  },
  {
    q: 'Korporativ sifarişlər mümkündürmü?',
    a: 'Bəli! Şirkətlər, böyük qruplar üçün xüsusi menyu və endirim proqramlarımız mövcuddur. WhatsApp vasitəsilə bizimlə əlaqə saxlayın.'
  },
  {
    q: 'Restoranın iş saatları necədir?',
    a: 'B.E – Cümə: 10:00–23:00 | Şənbə: 10:00–24:00 | Bazar: 11:00–23:00.'
  },
  {
    q: 'Balıq növlərinin qiyməti niyə yoxdur?',
    a: 'Balıq növlərinin (qızıl, astarın, kütüm, forel, sazan, beluga) qiyməti çəkiyə və sezona görə dəyişir. Dəqiq qiymət üçün bizimlə əlaqə saxlayın.'
  }
];

const vacanciesData = [
  {
    id: 'v1',
    icon: '🔥',
    title: 'Kabab Ustası',
    type: 'Tam Ştat',
    salary: '800 – 1200 AZN',
    schedule: 'Dəyişən növbə (2/2)',
    requirements: 'Ən az 1 il kabab hazırlama təcrübəsi, gigiyena sertifikatı',
    desc: 'Alicho mətbəxinə peşəkar kabab ustası axtarırıq. Kreativlik, dəqiqlik və komanda ruhu vacibdir.',
    duties: 'Menyu maddələrinin hazırlanması, freshness nəzarəti, müştəri sifarişlərinin icrasını'
  },
  {
    id: 'v2',
    icon: '🍽️',
    title: 'Aşpaz (Milli Mətbəx)',
    type: 'Tam Ştat',
    salary: '700 – 1000 AZN',
    schedule: 'Dəyişən növbə',
    requirements: 'Azərbaycan milli mətbəxini bilmək, gigiyena sertifikatı',
    desc: 'Qazan yeməkləri, plov, bozbash hazırlayan peşəkar aşpaz axtarırıq.',
    duties: 'Milli yeməklər hazırlamaq, keyfiyyəti saxlamaq, yeni reseptlər inkişaf etdirmək'
  },
  {
    id: 'v3',
    icon: '👩‍💼',
    title: 'Kassir / Operator',
    type: 'Tam Ştat',
    salary: '600 – 900 AZN',
    schedule: 'Dəyişən növbə',
    requirements: 'Kompüter savadlılığı, ünsiyyət bacarığı, 18+ yaş',
    desc: 'Müştəri xidmətləri üzrə kassir/operator axtarırıq. Gülərüz olmaq vacibdir.',
    duties: 'Sifarişlərin qəbulu, ödəniş əməliyyatları, müştəri məmnuniyyəti'
  },
  {
    id: 'v4',
    icon: '🧹',
    title: 'Sanitar Texnik',
    type: 'Tam Ştat',
    salary: '500 – 650 AZN',
    schedule: 'Günlük, 09:00–18:00',
    requirements: 'Gigiyena standartları bilikləri, fiziki hazırlıq',
    desc: 'Mətbəx və restoran sahəsinin gigiyena standartlarına uyğun saxlanılması üçün işçi axtarırıq.',
    duties: 'Restoran sahəsinin təmizliyi, sanitariya standartlarına riayət'
  }
];

// ─── PAGE NAVIGATION ───────────────────────────

function showPage(pageId) {
  const oldPage = document.getElementById('page-' + currentPage);
  if (oldPage) {
    PAGE_SCROLL_MAP[currentPage] = window.scrollY;
    oldPage.classList.remove('active');
  }

  currentPage = pageId;

  const newPage = document.getElementById('page-' + pageId);
  if (!newPage) return;
  newPage.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  const savedScroll = PAGE_SCROLL_MAP[pageId] || 0;
  window.scrollTo({ top: savedScroll, behavior: 'instant' });
}

function goBack() {
  PAGE_SCROLL_MAP[currentPage] = window.scrollY;
  showPage('home');
}

// ─── MOBILE MENU ───────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ─── CART ─────────────────────────────────────

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const backdrop = document.getElementById('cartBackdrop');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  backdrop.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function addToCart(productId) {
  const product = findProduct(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  bumpCartCount();
  showToast(`${product.name} səbətə əlavə edildi!`);
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id);
  closeProductModalBtn();
}

function findProduct(id) {
  for (const cat of Object.values(menuData)) {
    const found = cat.find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else renderCart();
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  countEl.textContent = totalItems;
  totalEl.textContent = totalPrice.toFixed(2) + ' AZN';

  const isEmpty = cart.length === 0;
  emptyEl.style.display = isEmpty ? 'flex' : 'none';
  footerEl.style.display = isEmpty ? 'none' : 'block';

  const existingItems = itemsEl.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" />
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(item.name)}</div>
        <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} AZN</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}',-1)" aria-label="Azalt">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}',1)" aria-label="Artır">+</button>
      </div>
    `;
    itemsEl.insertBefore(div, emptyEl);
  });
}

function bumpCartCount() {
  const el = document.getElementById('cartCount');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

function sendOrder() {
  if (cart.length === 0) return;

  let msg = '🍽️ *YENİ SİFARİŞ — Alicho Restaurant*\n\n';
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  cart.forEach((item, idx) => {
    const priceDisplay = item.price > 0 ? `${item.price} AZN` : 'Qiymət üçün zəng edin';
    msg += `${idx + 1}. ${item.name}\n   ${item.qty} × ${priceDisplay}\n`;
  });
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  if (total > 0) msg += `💰 *CƏMİ: ${total.toFixed(2)} AZN*\n\n`;
  msg += '📍 Rezervasiya üçün tarix və saatı bildirin.';

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── MENU RENDERING ───────────────────────────

function renderMenuGrids() {
  Object.entries(menuData).forEach(([cat, items]) => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    grid.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.name);

      const badgeHtml = item.badge
        ? `<div class="menu-card-badge">${escHtml(item.badge)}</div>`
        : '';

      const priceDisplay = item.price > 0
        ? `<span class="menu-card-price">${item.price.toFixed(2)} AZN</span>`
        : `<span class="menu-card-price price-call">Zəng edin</span>`;

      card.innerHTML = `
        <div class="menu-card-img">
          ${badgeHtml}
          <img src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" />
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${escHtml(item.name)}</div>
          <div class="menu-card-desc">${escHtml(item.desc)}</div>
          <div class="menu-card-footer">
            ${priceDisplay}
            ${item.price > 0
              ? `<button class="add-btn" onclick="event.stopPropagation();addToCart('${item.id}')" aria-label="Səbətə əlavə et">+</button>`
              : `<button class="add-btn add-btn-call" onclick="event.stopPropagation();callForPrice('${escHtml(item.name)}')" aria-label="Zəng et">📞</button>`
            }
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProductModal(item));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProductModal(item); });
      grid.appendChild(card);
    });
  });
}

function callForPrice(name) {
  const msg = `Salam! ${name} üçün qiymət öyrənmək istəyirəm.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

function switchTab(tabId) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.menu-section').forEach(s => {
    s.classList.toggle('active', s.id === 'tab-' + tabId);
  });
}

// ─── PRODUCT MODAL ────────────────────────────

function openProductModal(product) {
  currentModalProduct = product;
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = product.price > 0 ? product.price.toFixed(2) + ' AZN' : 'Qiymət üçün zəng edin';
  document.getElementById('modalWeight').textContent = product.weight;
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(e) {
  if (e.target === document.getElementById('productModal')) closeProductModalBtn();
}
function closeProductModalBtn() {
  document.getElementById('productModal').classList.remove('open');
  currentModalProduct = null;
  document.body.style.overflow = '';
}

// ─── FAQ RENDERING ────────────────────────────

function renderFaq() {
  const list = document.getElementById('faqList');
  faqData.forEach(item => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <div class="faq-q" onclick="toggleFaq(this)">
        <span>${escHtml(item.q)}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a">
        <div class="faq-a-inner">${escHtml(item.a)}</div>
      </div>
    `;
    list.appendChild(el);
  });
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ─── VACANCIES RENDERING ──────────────────────

function renderVacancies() {
  const grid = document.getElementById('vacancyGrid');
  vacanciesData.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vacancy-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="vacancy-card-icon">${v.icon}</div>
      <div class="vacancy-card-title">${escHtml(v.title)}</div>
      <div class="vacancy-card-type">${escHtml(v.type)}</div>
      <div class="vacancy-card-desc">${escHtml(v.desc)}</div>
      <div class="vacancy-card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    `;
    card.addEventListener('click', () => openVacancyModal(v));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openVacancyModal(v); });
    grid.appendChild(card);
  });
}

// ─── VACANCY MODAL ────────────────────────────

function openVacancyModal(v) {
  currentVacancy = v;
  document.getElementById('vacancyModalIcon').textContent = v.icon;
  document.getElementById('vacancyModalTitle').textContent = v.title;
  document.getElementById('vacancyModalType').textContent = v.type;

  const detailsEl = document.getElementById('vacancyModalDetails');
  detailsEl.innerHTML = `
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">💰 Maaş:</span><span class="vacancy-detail-value">${escHtml(v.salary)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">⏰ Qrafik:</span><span class="vacancy-detail-value">${escHtml(v.schedule)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📋 Tələblər:</span><span class="vacancy-detail-value">${escHtml(v.requirements)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📝 Vəzifələr:</span><span class="vacancy-detail-value">${escHtml(v.duties)}</span></div>
  `;

  document.getElementById('vacancyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVacancyModal(e) {
  if (e.target === document.getElementById('vacancyModal')) closeVacancyModalBtn();
}
function closeVacancyModalBtn() {
  document.getElementById('vacancyModal').classList.remove('open');
  currentVacancy = null;
  document.body.style.overflow = '';
}

function applyVacancy() {
  if (!currentVacancy) return;
  const msg = `👋 *Vakansiyaya Müraciət — Alicho Restaurant*\n\n🔹 *Vəzifə:* ${currentVacancy.title}\n🔹 *İş rejimi:* ${currentVacancy.type}\n\nSalam! Bu vakansiya ilə maraqlanıram. Əlaqə saxlamaq istəyirəm.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── RESERVATION ─────────────────────────────

function submitReservation(e) {
  e.preventDefault();
  const name    = document.getElementById('resName').value.trim();
  const phone   = document.getElementById('resPhone').value.trim();
  const date    = document.getElementById('resDate').value;
  const time    = document.getElementById('resTime').value;
  const guests  = document.getElementById('resGuests').value;
  const note    = document.getElementById('resNote').value.trim();

  if (!name || !phone || !date || !time || !guests) {
    showToast('Zəhmət olmasa bütün məcburi xanaları doldurun!');
    return;
  }

  const formattedDate = formatDate(date);
  let msg = `📅 *REZERVASIYA — Alicho Restaurant*\n\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Ad, Soyad:* ${name}\n`;
  msg += `📞 *Telefon:* ${phone}\n`;
  msg += `📅 *Tarix:* ${formattedDate}\n`;
  msg += `⏰ *Saat:* ${time}\n`;
  msg += `👥 *Nəfər sayı:* ${guests}\n`;
  if (note) msg += `📝 *Qeyd:* ${note}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── GALLERY LIGHTBOX ─────────────────────────

function openLightbox(img) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── TOAST ────────────────────────────────────

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─── UTILS ────────────────────────────────────

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('az-AZ', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

// ─── KEYBOARD ACCESSIBILITY ───────────────────

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('productModal').classList.contains('open')) {
      closeProductModalBtn();
    } else if (document.getElementById('vacancyModal').classList.contains('open')) {
      closeVacancyModalBtn();
    } else if (document.getElementById('lightbox').classList.contains('open')) {
      closeLightbox();
    } else if (document.getElementById('cartPanel').classList.contains('open')) {
      toggleCart();
    } else if (document.getElementById('mobileMenu').classList.contains('open')) {
      toggleMenu();
    }
  }
});

// ─── INIT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  renderMenuGrids();
  renderFaq();
  renderVacancies();
  renderCart();

  const today = new Date().toISOString().split('T')[0];
  const resDate = document.getElementById('resDate');
  if (resDate) resDate.min = today;
});
