// Mock Product Database
const PRODUCTS = [
  {
    id: 1,
    name: "Blushing Grace Bouquet",
    price: 65.00,
    rating: 4.8,
    reviews: 42,
    images: [
      "https://i.pinimg.com/1200x/af/a5/34/afa5343f9234efea4b944351320cdd84.jpg",
      "https://i.pinimg.com/736x/83/22/f0/8322f00d5173cc0c94e246df5c33a254.jpg",
      "https://i.pinimg.com/1200x/72/e4/79/72e4790c854e6cbf78026312af8a6cf8.jpg"
    ],
    category: "Roses",
    occasion: "Anniversary",
    badge: "Best Seller",
    featured: true,
    description: "An elegant mixture of hand-tied pastel pink roses, cream carnations, and silver dollar eucalyptus. Perfect for expressing romantic admiration or celebrating milestones.",
    careInstructions: [
      "Cut the stems at a 45-degree angle before placing in water.",
      "Change the vase water every two days and wash the vase.",
      "Keep the bouquet away from direct sunlight, heating vents, and ripening fruit."
    ]
  },
  {
    id: 2,
    name: "Sun-Drenched Serenade",
    price: 49.00,
    rating: 4.6,
    reviews: 28,
    images: [
      "https://i.pinimg.com/1200x/4f/97/8a/4f978a63de1632daf9077887291e0e1e.jpg?auto=format&fit=crop&q=80&w=600",
      "https://i.pinimg.com/736x/1f/d9/0b/1fd90b1f7b83aab396d68910c22cc6ad.jpg?auto=format&fit=crop&q=80&w=600"
    ],
    category: "Sunflowers",
    occasion: "Thank You",
    badge: "Warmth",
    featured: true,
    description: "Vibrant local sunflowers bundled with golden solidago and wild baby's breath. Brings the cheerful warmth of summer fields straight to their living room.",
    careInstructions: [
      "Sunflowers drink a lot of water; check the level daily.",
      "Remove any leaves that fall below the waterline to avoid bacteria.",
      "Avoid drafts to help the petals stay firm and attached."
    ]
  },
  {
    id: 3,
    name: "White Lily Lily-Pad Elegance",
    price: 75.00,
    rating: 4.9,
    reviews: 51,
    images: [
      "https://i.pinimg.com/736x/59/14/b0/5914b0d625c9e8b7b428e00f5f7405d1.jpg?auto=format&fit=crop&q=80&w=600",
      "https://i.pinimg.com/736x/e5/f0/c4/e5f0c4cc84d4776582595f6ef7b8dade.jpg?auto=format&fit=crop&q=80&w=600"
    ],
    category: "Lilies",
    occasion: "Sympathy",
    badge: "Premium",
    featured: true,
    description: "Stately white oriental lilies coupled with delicate white roses and emerald green hypericum berries. Offers a serene expression of hope and heartfelt condolences.",
    careInstructions: [
      "Snip off the yellow pollen anthers carefully to avoid staining petals or fabrics.",
      "Lilies open sequentially; pinch off older blossoms as they fade.",
      "Use lukewarm water with the provided flower preservative packet."
    ]
  },
  {
    id: 4,
    name: "Tuscan Peach Tulips",
    price: 55.00,
    rating: 4.7,
    reviews: 19,
    images: [
      "https://i.pinimg.com/736x/f1/84/f8/f184f8a06e5044364942744abd465f13.jpg?auto=format&fit=crop&q=80&w=600",
      "https://i.pinimg.com/736x/f2/2e/37/f22e37ee2a0d03714b2e1e854d1fe5c0.jpg?auto=format&fit=crop&q=80&w=600"
    ],
    category: "Tulips",
    occasion: "Birthday",
    badge: "Seasonal",
    featured: true,
    description: "A gorgeous collection of double-petal tulips in soft peach, amber, and coral hues. Evokes a sense of springtime bliss and joyful celebration.",
    careInstructions: [
      "Tulips continue to grow in the vase! Keep them in cold water to slow growth.",
      "They naturally bend toward light sources; rotate the vase daily.",
      "Do not mix tulips with daffodils in the same water."
    ]
  },
  {
    id: 5,
    name: "Imperial Amethyst Orchid",
    price: 110.00,
    rating: 4.9,
    reviews: 64,
    images: [
      "https://i.pinimg.com/736x/53/2e/31/532e3145737ecda337466e53e7624ace.jpg?auto=format&fit=crop&q=80&w=600",
      "https://i.pinimg.com/736x/ae/cd/43/aecd43568d7cf551419eb2e052047c17.jpg?auto=format&fit=crop&q=80&w=600"
    ],
    category: "Orchids",
    occasion: "Congrats",
    badge: "Luxury",
    featured: false,
    description: "A breathtaking double-stemmed phalaenopsis orchid in a metallic ceramic pot. A standard-bearer for sophisticated modern design and long-lasting congratulations.",
    careInstructions: [
      "Water with 3 ice cubes or 1/4 cup of water once a week.",
      "Ensure excess water drains out; do not let the roots sit in water.",
      "Place in bright, indirect light (east or south-facing window is best)."
    ]
  },
  {
    id: 6,
    name: "Crimson Romance Roses",
    price: 89.00,
    rating: 5.0,
    reviews: 83,
    images: [
      "https://i.pinimg.com/736x/a3/89/b7/a389b72e056c87e6e986363cc34d248b.jpg?auto=format&fit=crop&q=80&w=600",
      "https://i.pinimg.com/736x/25/c8/2f/25c82f0f7aa13bddb720b9389769daf5.jpg?auto=format&fit=crop&q=80&w=600"
    ],
    category: "Roses",
    occasion: "Love & Romance",
    badge: "Must Buy",
    featured: false,
    description: "Two dozen classic velvety red roses combined with lush salal leaves. The ultimate timeless expression of romantic passion and absolute adoration.",
    careInstructions: [
      "Remove any outer 'guard petals' if they look slightly bruised—they are there to protect the bloom.",
      "Cut stems underwater if possible to prevent air bubbles.",
      "Add fresh cold water daily."
    ]
  },
  {
    id: 7,
    name: "Sweet Carnation Swirl",
    price: 39.00,
    rating: 4.4,
    reviews: 15,
    images: [
      "https://i.pinimg.com/736x/ae/b8/18/aeb818d7482f0d88827625e3757b62ff.jpg?auto=format&fit=crop&q=80&w=600",
      "https://i.pinimg.com/736x/94/cb/0c/94cb0c6a77ee261775c5a60a902da76f.jpg?auto=format&fit=crop&q=80&w=600",
    ],
    category: "Carnations",
    occasion: "Birthday",
    badge: "Affordable",
    featured: false,
    description: "A fluffy cloud of pink, cream, and lavender carnations. Known for their incredible scent and outstanding vase life, they represent warmth and maternal love.",
    careInstructions: [
      "Carnations are highly durable; they will easily last up to two weeks.",
      "Keep away from ripening bananas or apples, which emit ethylene gas and shorten bloom life.",
      "Snip stems just above a node for better water intake."
    ]
  },
  {
    id: 8,
    name: "Rustic Meadow Bunch",
    price: 58.00,
    rating: 4.5,
    reviews: 22,
    images: [
      "https://i.pinimg.com/736x/90/49/00/904900eeac06d213d5a34db384304e37.jpg?auto=format&fit=crop&q=80&w=600",
      "https://i.pinimg.com/736x/94/58/11/945811a60f9af909d3b43ce5cae477e4.jpg?auto=format&fit=crop&q=80&w=600"
    ],
    category: "Mixed",
    occasion: "Thank You",
    badge: "Eco-Friendly",
    featured: false,
    description: "A wild, organic composition of lavender, chamomile daisies, dried seed pods, and decorative wheat. Wrapped in biodegradable kraft paper.",
    careInstructions: [
      "Remove the packaging and trim stems.",
      "Arrange in a clean vase with room temperature water.",
      "Some elements like lavender can be dried afterward for lasting fragrance."
    ]
  }
];

// App State
const state = {
  cart: JSON.parse(localStorage.getItem('flowershop_cart')) || [],
  filters: {
    priceRange: 'all',
    flowerType: 'all',
    occasion: 'all',
    search: '',
    sortBy: 'featured'
  },
  selectedProductId: 1,
  selectedDetailImgIdx: 0,
  promoApplied: null,
  promoDiscount: 0
};

// LocalStorage Persistence helper
function saveCartToStorage() {
  localStorage.setItem('flowershop_cart', JSON.stringify(state.cart));
}

// MPA Page-Level Detection and Router Init
function detectPageAndInit() {
  if (document.getElementById('home-view')) {
    renderHomeView();
  } else if (document.getElementById('shop-view')) {
    // Check if redirect filter carries over from Home Page clicks
    const savedFlower = sessionStorage.getItem('filter_flower');
    if (savedFlower) {
      state.filters.flowerType = savedFlower;
      sessionStorage.removeItem('filter_flower');
      
      const flowerSelect = document.getElementById('filter-flower-select');
      if (flowerSelect) flowerSelect.value = savedFlower;
      const flowerSelectMobile = document.getElementById('filter-flower-select-mobile');
      if (flowerSelectMobile) flowerSelectMobile.value = savedFlower;
    }

    const savedOccasion = sessionStorage.getItem('filter_occasion');
    if (savedOccasion) {
      state.filters.occasion = savedOccasion;
      sessionStorage.removeItem('filter_occasion');
      
      const occasionSelect = document.getElementById('filter-occasion-select');
      if (occasionSelect) occasionSelect.value = savedOccasion;
      const occasionSelectMobile = document.getElementById('filter-occasion-select-mobile');
      if (occasionSelectMobile) occasionSelectMobile.value = savedOccasion;
    }

    renderShopView();
  } else if (document.getElementById('product-detail-view')) {
    const params = new URLSearchParams(window.location.search);
    const pId = parseInt(params.get('id'));
    if (pId && PRODUCTS.some(p => p.id === pId)) {
      state.selectedProductId = pId;
    }
    state.selectedDetailImgIdx = 0;
    renderDetailView();
  } else if (document.getElementById('cart-checkout-view')) {
    renderCartCheckoutView();
  }

  // Update navbar link active states based on current filename path
  const pathname = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href && (pathname.endsWith(href) || (pathname.endsWith('/') && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  updateCartBadge();
}

// Render product card HTML template
function createProductCardHTML(product) {
  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card custom-card h-100">
        ${product.badge ? `<span class="card-tag">${product.badge}</span>` : ''}
        <div class="card-img-wrapper">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        </div>
        <div class="card-body d-flex flex-column p-4">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="text-muted small">${product.category} &bull; ${product.occasion}</span>
            <div class="text-warning small">
              <i class="bi bi-star-fill"></i> ${product.rating} 
              <span class="text-muted">(${product.reviews})</span>
            </div>
          </div>
          <h5 class="card-title mb-2 fs-5 text-truncate" title="${product.name}">${product.name}</h5>
          <p class="card-text text-muted small flex-grow-1">${product.description.substring(0, 85)}...</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="fs-5 fw-bold text-dark">$${product.price.toFixed(2)}</span>
            <div class="btn-group">
              <button onclick="viewProductDetail(${product.id})" class="btn btn-sm btn-outline-primary px-3 rounded-pill me-2">Details</button>
              <button onclick="quickAddCart(${product.id})" class="btn btn-sm btn-primary px-3 rounded-pill" aria-label="Add ${product.name} to cart">
                <i class="bi bi-cart-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------
// 1. HOME VIEW RENDERER
// ----------------------------------------------------------------
function renderHomeView() {
  const featuredGrid = document.getElementById('featured-products-grid');
  if (!featuredGrid) return;
  
  const featured = PRODUCTS.filter(p => p.featured);
  featuredGrid.innerHTML = featured.map(createProductCardHTML).join('');
}

// ----------------------------------------------------------------
// 2. SHOP / CATALOG VIEW RENDERER
// ----------------------------------------------------------------
function renderShopView() {
  const shopGrid = document.getElementById('shop-products-grid');
  if (!shopGrid) return;

  // Gather UI filter variables
  let filtered = [...PRODUCTS];

  // Price Filter
  if (state.filters.priceRange !== 'all') {
    const [min, max] = state.filters.priceRange.split('-').map(Number);
    filtered = filtered.filter(p => {
      if (max) return p.price >= min && p.price <= max;
      return p.price >= min; // over X
    });
  }

  // Flower Type Filter
  if (state.filters.flowerType !== 'all') {
    filtered = filtered.filter(p => p.category.toLowerCase() === state.filters.flowerType.toLowerCase());
  }

  // Occasion Filter
  if (state.filters.occasion !== 'all') {
    filtered = filtered.filter(p => p.occasion.toLowerCase() === state.filters.occasion.toLowerCase());
  }

  // Search Input Filter
  if (state.filters.search) {
    const q = state.filters.search.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }

  // Sort
  if (state.filters.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.filters.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.filters.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Render cards
  if (filtered.length === 0) {
    shopGrid.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search fs-1 text-muted opacity-50 mb-3"></i>
        <h4 class="text-muted">No Bouquets Found</h4>
        <p class="text-secondary small">Try adjusting your filters, query, or check back later.</p>
        <button onclick="resetFilters()" class="btn btn-primary btn-sm mt-3 px-4">Reset Filters</button>
      </div>
    `;
  } else {
    shopGrid.innerHTML = filtered.map(createProductCardHTML).join('');
  }

  // Update item count UI
  const resultsCount = document.getElementById('results-count');
  if (resultsCount) {
    resultsCount.textContent = `${filtered.length} bouquet${filtered.length === 1 ? '' : 's'} available`;
  }
}

// Filter Actions
function updateFiltersFromDOM(type) {
  if (type === 'price') {
    const el = document.querySelector('input[name="priceFilter"]:checked') || document.querySelector('input[name="priceFilterMobile"]:checked');
    state.filters.priceRange = el ? el.value : 'all';
  } else if (type === 'flower') {
    const el = document.getElementById('filter-flower-select') || document.getElementById('filter-flower-select-mobile');
    state.filters.flowerType = el ? el.value : 'all';
  } else if (type === 'occasion') {
    const el = document.getElementById('filter-occasion-select') || document.getElementById('filter-occasion-select-mobile');
    state.filters.occasion = el ? el.value : 'all';
  } else if (type === 'search') {
    const el = document.getElementById('search-products-input');
    state.filters.search = el ? el.value.trim() : '';
  } else if (type === 'sort') {
    const el = document.getElementById('sort-products-select');
    state.filters.sortBy = el ? el.value : 'featured';
  }

  renderShopView();
}

function resetFilters() {
  state.filters = {
    priceRange: 'all',
    flowerType: 'all',
    occasion: 'all',
    search: '',
    sortBy: 'featured'
  };

  // Reset desktop controls
  const searchInput = document.getElementById('search-products-input');
  if (searchInput) searchInput.value = '';
  
  const sortSelect = document.getElementById('sort-products-select');
  if (sortSelect) sortSelect.value = 'featured';

  const defaultPriceInput = document.getElementById('priceAll');
  if (defaultPriceInput) defaultPriceInput.checked = true;

  const defaultPriceInputMobile = document.getElementById('priceAllMobile');
  if (defaultPriceInputMobile) defaultPriceInputMobile.checked = true;

  const flowerSelect = document.getElementById('filter-flower-select');
  if (flowerSelect) flowerSelect.value = 'all';

  const flowerSelectMobile = document.getElementById('filter-flower-select-mobile');
  if (flowerSelectMobile) flowerSelectMobile.value = 'all';

  const occasionSelect = document.getElementById('filter-occasion-select');
  if (occasionSelect) occasionSelect.value = 'all';

  const occasionSelectMobile = document.getElementById('filter-occasion-select-mobile');
  if (occasionSelectMobile) occasionSelectMobile.value = 'all';

  renderShopView();
}

// Category selection trigger from Home View to redirect to Shop Catalog Page
function selectCategoryAndNavigate(category) {
  sessionStorage.setItem('filter_flower', category);
  window.location.href = 'shop_and_catalog.html';
}

function selectOccasionAndNavigate(occasion) {
  sessionStorage.setItem('filter_occasion', occasion);
  window.location.href = 'shop_and_catalog.html';
}

// ----------------------------------------------------------------
// 3. PRODUCT DETAIL VIEW RENDERER
// ----------------------------------------------------------------
function viewProductDetail(productId) {
  window.location.href = `detail.html?id=${productId}`;
}

function renderDetailView() {
  const product = PRODUCTS.find(p => p.id === state.selectedProductId);
  if (!product) return;

  // Set Main Photo
  const mainPhoto = document.getElementById('detail-main-img');
  if (mainPhoto) {
    mainPhoto.src = product.images[state.selectedDetailImgIdx];
    mainPhoto.alt = product.name;
  }

  // Thumbnails
  const thumbContainer = document.getElementById('detail-thumbnails-container');
  if (thumbContainer) {
    thumbContainer.innerHTML = product.images.map((img, idx) => `
      <div class="col-4">
        <div onclick="selectDetailThumbnail(${idx})" class="gallery-thumbnail ratio ratio-1x1 ${idx === state.selectedDetailImgIdx ? 'active-thumb' : ''}">
          <img src="${img}" alt="${product.name} angle ${idx+1}" class="img-fluid object-fit-cover">
        </div>
      </div>
    `).join('');
  }

  // Text details
  document.getElementById('detail-title').textContent = product.name;
  document.getElementById('detail-price').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('detail-rating').innerHTML = `<i class="bi bi-star-fill text-warning me-1"></i> ${product.rating} <span class="text-muted fs-6 font-sans">(${product.reviews} customer reviews)</span>`;
  document.getElementById('detail-category').textContent = product.category;
  document.getElementById('detail-occasion').textContent = product.occasion;
  document.getElementById('detail-description').textContent = product.description;

  // Care instructions accordion list
  const careAccordionBody = document.getElementById('care-instructions-list');
  if (careAccordionBody) {
    careAccordionBody.innerHTML = `<ol class="mb-0 ps-3">${product.careInstructions.map(step => `<li class="mb-2 text-secondary">${step}</li>`).join('')}</ol>`;
  }

  // Related products
  const relatedGrid = document.getElementById('related-products-grid');
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.occasion === product.occasion)).slice(0, 3);
    // Fallback in case no specific match
    const finalRelated = related.length ? related : PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
    relatedGrid.innerHTML = finalRelated.map(createProductCardHTML).join('');
  }

  // Reset Form inputs on details view load
  const qtyInput = document.getElementById('detail-qty-input');
  if (qtyInput) qtyInput.value = 1;

  const dateInput = document.getElementById('delivery-date');
  if (dateInput) {
    // Set min date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
  }
}

function selectDetailThumbnail(idx) {
  state.selectedDetailImgIdx = idx;
  const product = PRODUCTS.find(p => p.id === state.selectedProductId);
  if (product) {
    const mainPhoto = document.getElementById('detail-main-img');
    if (mainPhoto) mainPhoto.src = product.images[idx];
    
    // Toggle active thumbnail styling
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach((t, i) => {
      if (i === idx) t.classList.add('active-thumb');
      else t.classList.remove('active-thumb');
    });
  }
}

function adjustDetailQty(amount) {
  const qtyInput = document.getElementById('detail-qty-input');
  if (!qtyInput) return;
  let val = parseInt(qtyInput.value) || 1;
  val = Math.max(1, val + amount);
  qtyInput.value = val;
}

// ----------------------------------------------------------------
// 4. CART & CHECKOUT CONTROLLER
// ----------------------------------------------------------------
function updateCartBadge() {
  const badgeCount = document.getElementById('cart-badge-count');
  if (badgeCount) {
    const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    badgeCount.textContent = totalQty;
    badgeCount.style.display = totalQty > 0 ? 'inline-block' : 'none';
  }
}

function quickAddCart(productId) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateStr = tomorrow.toISOString().split('T')[0];
  addToCart(productId, 1, dateStr);
}

function addToCart(productId, quantity, deliveryDate) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.product.id === productId && item.deliveryDate === deliveryDate);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      product,
      quantity,
      deliveryDate
    });
  }

  saveCartToStorage();
  updateCartBadge();
  showCartToast(product.name, quantity);
}

function showCartToast(itemName, qty) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toastId = 'toast-' + Date.now();
  const toastHTML = `
    <div id="${toastId}" class="toast align-items-center text-white bg-secondary border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          <i class="bi bi-check-circle-fill me-2 text-white"></i>
          Added ${qty} &times; <strong>${itemName}</strong> to cart!
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', toastHTML);
  const el = document.getElementById(toastId);
  const bsToast = new bootstrap.Toast(el, { delay: 3000 });
  bsToast.show();

  // Remove element from DOM after hide
  el.addEventListener('hidden.bs.toast', () => {
    el.remove();
  });
}

function handleDetailAddToCart() {
  const qtyInput = document.getElementById('detail-qty-input');
  const dateInput = document.getElementById('delivery-date');
  
  const qty = parseInt(qtyInput.value) || 1;
  const date = dateInput.value;

  if (!date) {
    alert("Please select a valid delivery date.");
    return;
  }

  addToCart(state.selectedProductId, qty, date);
}

function renderCartCheckoutView() {
  const cartList = document.getElementById('cart-items-list');
  const emptyCartState = document.getElementById('empty-cart-state');
  const cartPopulatedState = document.getElementById('cart-populated-state');

  if (!cartList) return;

  if (state.cart.length === 0) {
    if (emptyCartState) emptyCartState.classList.remove('d-none');
    if (cartPopulatedState) cartPopulatedState.classList.add('d-none');
    return;
  }

  if (emptyCartState) emptyCartState.classList.add('d-none');
  if (cartPopulatedState) cartPopulatedState.classList.remove('d-none');

  // Render list of items
  cartList.innerHTML = state.cart.map((item, idx) => `
    <div class="list-group-item p-3 border-0 border-bottom">
      <div class="row align-items-center g-3">
        <div class="col-3 col-sm-2">
          <div class="ratio ratio-1x1 rounded-3 overflow-hidden">
            <img src="${item.product.images[0]}" alt="${item.product.name}" class="object-fit-cover">
          </div>
        </div>
        <div class="col-9 col-sm-5 col-md-6">
          <h6 class="mb-1 text-dark fs-6 fw-bold">${item.product.name}</h6>
          <p class="text-secondary small mb-1">Type: ${item.product.category} &bull; Delivery: <i class="bi bi-calendar-event me-1"></i>${item.deliveryDate}</p>
          <button onclick="removeCartItem(${idx})" class="btn btn-link p-0 text-danger small text-decoration-none" aria-label="Remove item">
            <i class="bi bi-trash"></i> Remove
          </button>
        </div>
        <div class="col-6 col-sm-3 col-md-2 d-flex align-items-center">
          <div class="input-group input-group-sm">
            <button onclick="updateCartQty(${idx}, -1)" class="btn btn-outline-secondary btn-sm rounded-start-pill" type="button">-</button>
            <input type="text" class="form-control text-center bg-white" value="${item.quantity}" readonly style="max-width: 40px; font-size:0.8rem;">
            <button onclick="updateCartQty(${idx}, 1)" class="btn btn-outline-secondary btn-sm rounded-end-pill" type="button">+</button>
          </div>
        </div>
        <div class="col-6 col-sm-2 text-end">
          <span class="fw-bold text-dark">$${(item.product.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  `).join('');

  calculateAndRenderSummary();
}

function updateCartQty(idx, amount) {
  const item = state.cart[idx];
  if (!item) return;

  item.quantity = Math.max(1, item.quantity + amount);
  saveCartToStorage();
  updateCartBadge();
  renderCartCheckoutView();
}

function removeCartItem(idx) {
  state.cart.splice(idx, 1);
  saveCartToStorage();
  updateCartBadge();
  renderCartCheckoutView();
}

function applyCouponCode() {
  const couponInput = document.getElementById('coupon-input');
  if (!couponInput) return;

  const code = couponInput.value.trim().toUpperCase();
  const alertBox = document.getElementById('coupon-alert');
  
  if (code === 'BLOOM20') {
    state.promoApplied = 'BLOOM20';
    state.promoDiscount = 0.20; // 20% discount
    if (alertBox) {
      alertBox.className = "alert alert-success mt-2 p-2 small border-0";
      alertBox.textContent = "Promo applied! 20% discount on bouquet totals.";
      alertBox.classList.remove('d-none');
    }
  } else if (code) {
    state.promoApplied = null;
    state.promoDiscount = 0;
    if (alertBox) {
      alertBox.className = "alert alert-danger mt-2 p-2 small border-0";
      alertBox.textContent = "Invalid coupon code.";
      alertBox.classList.remove('d-none');
    }
  }
  calculateAndRenderSummary();
}

function calculateAndRenderSummary() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountVal = subtotal * state.promoDiscount;
  const shippingVal = subtotal > 60 ? 0.00 : 9.99; // Free shipping on orders over $60
  const estTax = (subtotal - discountVal) * 0.0825; // 8.25% Tax rate
  const grandTotal = subtotal - discountVal + shippingVal + estTax;

  const subtotalEl = document.getElementById('summary-subtotal');
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  
  const discountContainer = document.getElementById('summary-discount-row');
  const discountEl = document.getElementById('summary-discount');
  if (discountVal > 0) {
    if (discountContainer) discountContainer.classList.remove('d-none');
    if (discountEl) discountEl.textContent = `-$${discountVal.toFixed(2)}`;
  } else {
    if (discountContainer) discountContainer.classList.add('d-none');
  }

  const shippingText = document.getElementById('summary-shipping');
  if (shippingText) {
    if (shippingVal === 0) {
      shippingText.innerHTML = `<span class="text-success fw-bold">FREE</span>`;
    } else {
      shippingText.textContent = `$${shippingVal.toFixed(2)}`;
    }
  }

  const taxEl = document.getElementById('summary-tax');
  if (taxEl) taxEl.textContent = `$${estTax.toFixed(2)}`;

  const totalEl = document.getElementById('summary-total');
  if (totalEl) totalEl.textContent = `$${grandTotal.toFixed(2)}`;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add('was-validated');
    return;
  }

  // Complete checkout
  const name = document.getElementById('cust-name').value;
  const email = document.getElementById('cust-email').value;

  const modalBody = document.getElementById('checkoutSuccessModalBody');
  const orderNum = 'FS-' + Math.floor(100000 + Math.random() * 900000);
  
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="text-center py-4">
        <div class="text-success mb-3" style="font-size: 3rem;">
          <i class="bi bi-check2-circle"></i>
        </div>
        <h4>Thank you for your order, ${name}!</h4>
        <p class="text-secondary small">Order number: <strong>${orderNum}</strong></p>
        <p class="text-secondary px-3">We have sent a receipt to <strong>${email}</strong>. Our florists will start selecting the freshest blossoms for delivery.</p>
        <hr class="my-4 mx-5 opacity-10">
        <div class="text-start px-3 px-md-5">
          <h6 class="fw-bold mb-2">Order Summary:</h6>
          <ul class="list-unstyled mb-0 text-secondary small">
            ${state.cart.map(item => `<li>${item.quantity} &times; ${item.product.name} (Delivering on ${item.deliveryDate})</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Trigger modal
  const successModal = new bootstrap.Modal(document.getElementById('checkoutSuccessModal'));
  successModal.show();

  // Clear Cart
  state.cart = [];
  state.promoApplied = null;
  state.promoDiscount = 0;
  saveCartToStorage();
  updateCartBadge();
  
  // Reset coupon alert
  const alertBox = document.getElementById('coupon-alert');
  if (alertBox) alertBox.classList.add('d-none');
  const couponInput = document.getElementById('coupon-input');
  if (couponInput) couponInput.value = '';

  // Reset form validation states
  form.reset();
  form.classList.remove('was-validated');

  // When modal closes, navigate to home index.html
  const successModalEl = document.getElementById('checkoutSuccessModal');
  successModalEl.addEventListener('hidden.bs.modal', function () {
    window.location.href = 'index.html';
  }, { once: true });
}

// ----------------------------------------------------------------
// APPLICATION BOOTSTRAP INITIALIZATION
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial page detection and render
  detectPageAndInit();
  
  // 2. Setup event listeners with safe checking
  const filterFlower = document.getElementById('filter-flower-select');
  if (filterFlower) filterFlower.addEventListener('change', () => updateFiltersFromDOM('flower'));

  const filterFlowerMob = document.getElementById('filter-flower-select-mobile');
  if (filterFlowerMob) filterFlowerMob.addEventListener('change', () => updateFiltersFromDOM('flower'));

  const filterOccasion = document.getElementById('filter-occasion-select');
  if (filterOccasion) filterOccasion.addEventListener('change', () => updateFiltersFromDOM('occasion'));

  const filterOccasionMob = document.getElementById('filter-occasion-select-mobile');
  if (filterOccasionMob) filterOccasionMob.addEventListener('change', () => updateFiltersFromDOM('occasion'));

  const sortSelect = document.getElementById('sort-products-select');
  if (sortSelect) sortSelect.addEventListener('change', () => updateFiltersFromDOM('sort'));

  const searchInput = document.getElementById('search-products-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => updateFiltersFromDOM('search'));
  }

  const priceRadios = document.querySelectorAll('input[name="priceFilter"], input[name="priceFilterMobile"]');
  priceRadios.forEach(radio => {
    radio.addEventListener('change', () => updateFiltersFromDOM('price'));
  });

  const checkoutForm = document.getElementById('checkout-billing-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }
});
