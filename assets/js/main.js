/**
 * Maison Vélure Paris — Main Interactive JavaScript Engine
 * Handbag & Purse E-Commerce Website Template
 */

(function () {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. Core State & Storage Keys
  // ------------------------------------------------------------------------
  const CART_KEY = 'velure_cart';
  const WISHLIST_KEY = 'velure_wishlist';
  const THEME_KEY = 'velure_theme';
  const DIR_KEY = 'velure_dir';

  let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [
    // Pre-populate with 1 signature item for instant demonstration
    {
      id: 'tote-palermo',
      name: 'Palermo Full-Grain Leather Work Tote',
      price: 345,
      image: 'assets/images/products/totes/tote-1.jpg',
      color: 'Cognac Tan',
      quantity: 1
    }
  ];

  let wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [
    'clutch-vendome',
    'shoulder-saint-germain'
  ];

  let appliedPromo = null; // { code: 'LUXE20', discount: 0.20 }

  // ------------------------------------------------------------------------
  // 2. Theme & RTL Initialization
  // ------------------------------------------------------------------------
  function initThemeAndDirection() {
    // Theme
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    updateThemeToggleIcons(savedTheme);

    // RTL
    const savedDir = localStorage.getItem(DIR_KEY) || 'ltr';
    document.documentElement.setAttribute('dir', savedDir);
    updateRTLToggleLabel(savedDir);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    updateThemeToggleIcons(newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark Luxe' : 'Light Atelier'} mode`);
  }

  function updateThemeToggleIcons(theme) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
      }
    });
  }

  function toggleDirection() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem(DIR_KEY, newDir);
    updateRTLToggleLabel(newDir);
    showToast(`Direction switched to ${newDir.toUpperCase()}`);
  }

  function updateRTLToggleLabel(dir) {
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    });
  }

  // ------------------------------------------------------------------------
  // 3. Cart Management
  // ------------------------------------------------------------------------
  function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCart();
    updateBadges();
  }

  function addToCart(productId, selectedColor, qty) {
    qty = parseInt(qty, 10) || 1;
    const product = typeof window.getProductById === 'function' ? window.getProductById(productId) : null;
    if (!product) return;

    const colorName = selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    const existingIndex = cart.findIndex(item => item.id === productId && item.color === colorName);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        color: colorName,
        quantity: qty
      });
    }

    saveCart();
    showToast(`Added "${product.name}" to your shopping bag!`, 'bi-bag-check');
    openCartDrawer();
  }

  function updateCartQuantity(index, delta) {
    if (cart[index]) {
      cart[index].quantity += delta;
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
        showToast('Item removed from shopping bag');
      }
      saveCart();
    }
  }

  function removeFromCart(index) {
    if (cart[index]) {
      const name = cart[index].name;
      cart.splice(index, 1);
      saveCart();
      showToast(`Removed "${name}" from bag`);
    }
  }

  function renderCart() {
    const cartContainer = document.getElementById('cartDrawerItems');
    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const discountRow = document.getElementById('cartDiscountRow');
    const discountEl = document.getElementById('cartDiscount');
    const totalEl = document.getElementById('cartTotal');
    const progressEl = document.getElementById('freeShippingProgress');
    const shippingTextEl = document.getElementById('freeShippingText');

    if (!cartContainer) return;

    if (cart.length === 0) {
      cartContainer.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-bag text-muted display-4 mb-3 d-block"></i>
          <h5 class="font-serif">Your shopping bag is empty</h5>
          <p class="small text-muted mb-4">Discover our handcrafted leather creations.</p>
          <a href="shop.html" class="btn btn-primary btn-sm">Explore Handbags</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '$0.00';
      if (shippingEl) shippingEl.textContent = '$0.00';
      if (totalEl) totalEl.textContent = '$0.00';
      if (discountRow) discountRow.style.display = 'none';
      if (progressEl) progressEl.style.width = '0%';
      if (shippingTextEl) shippingTextEl.innerHTML = 'Add <strong>$150.00</strong> more for Complimentary Express Shipping';
      return;
    }

    let subtotal = 0;
    cartContainer.innerHTML = cart.map((item, index) => {
      subtotal += item.price * item.quantity;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
          <div class="cart-item-details">
            <h6 class="cart-item-title">${item.name}</h6>
            <div class="cart-item-meta">Color: ${item.color}</div>
            <div class="d-flex align-items-center justify-content-between mt-2">
              <div class="cart-stepper">
                <button type="button" class="btn-stepper-minus" data-index="${index}"><i class="bi bi-dash"></i></button>
                <input type="text" value="${item.quantity}" readonly>
                <button type="button" class="btn-stepper-plus" data-index="${index}"><i class="bi bi-plus"></i></button>
              </div>
              <div class="fw-bold">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          </div>
          <button type="button" class="btn-close ms-2 btn-remove-item" data-index="${index}" aria-label="Remove item"></button>
        </div>
      `;
    }).join('');

    // Shipping threshold ($150 for free shipping)
    const freeShippingThreshold = 150;
    let shipping = subtotal >= freeShippingThreshold ? 0 : 25;
    let discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
    let total = Math.max(0, subtotal - discount + shipping);

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`;
    if (discountRow) {
      if (discount > 0) {
        discountRow.style.display = 'flex';
        if (discountEl) discountEl.textContent = `-$${discount.toFixed(2)} (${appliedPromo.code})`;
      } else {
        discountRow.style.display = 'none';
      }
    }
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    // Free shipping bar
    if (progressEl && shippingTextEl) {
      const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
      progressEl.style.width = `${progressPercent}%`;
      if (subtotal >= freeShippingThreshold) {
        shippingTextEl.innerHTML = '<span class="text-success"><i class="bi bi-check-circle-fill me-1"></i> You unlocked Complimentary Express Shipping!</span>';
      } else {
        const remaining = (freeShippingThreshold - subtotal).toFixed(2);
        shippingTextEl.innerHTML = `Add <strong>$${remaining}</strong> more for Complimentary Express Shipping`;
      }
    }
  }

  function applyPromoCode(code) {
    code = (code || '').trim().toUpperCase();
    if (!code) return;

    if (code === 'LUXE20' || code === 'WELCOME15') {
      const discount = code === 'LUXE20' ? 0.20 : 0.15;
      appliedPromo = { code, discount };
      saveCart();
      showToast(`Promo code "${code}" applied! You save ${(discount * 100)}%`, 'bi-tag-fill');
    } else {
      showToast('Invalid or expired promo code. Try "LUXE20"', 'bi-exclamation-circle');
    }
  }

  function openCartDrawer() {
    const offcanvasEl = document.getElementById('cartOffcanvas');
    if (offcanvasEl && typeof bootstrap !== 'undefined') {
      const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
      bsOffcanvas.show();
    }
  }

  // ------------------------------------------------------------------------
  // 4. Wishlist Management
  // ------------------------------------------------------------------------
  function saveWishlist() {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    updateBadges();
    renderWishlistModal();
    updateWishlistButtonStates();
  }

  function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const product = typeof window.getProductById === 'function' ? window.getProductById(productId) : null;
    const title = product ? product.name : 'Handbag';

    if (index > -1) {
      wishlist.splice(index, 1);
      showToast(`Removed "${title}" from Wishlist`);
    } else {
      wishlist.push(productId);
      showToast(`Saved "${title}" to your Wishlist`, 'bi-heart-fill');
    }
    saveWishlist();
  }

  function updateWishlistButtonStates() {
    document.querySelectorAll('.btn-wishlist[data-product-id]').forEach(btn => {
      const id = btn.getAttribute('data-product-id');
      const icon = btn.querySelector('i');
      if (wishlist.includes(id)) {
        btn.classList.add('active');
        if (icon) icon.className = 'bi bi-heart-fill text-danger';
      } else {
        btn.classList.remove('active');
        if (icon) icon.className = 'bi bi-heart';
      }
    });
  }

  function renderWishlistModal() {
    const container = document.getElementById('wishlistItemsContainer');
    if (!container) return;

    if (wishlist.length === 0) {
      container.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-heart text-muted display-4 mb-3 d-block"></i>
          <h5 class="font-serif">Your Wishlist is empty</h5>
          <p class="small text-muted mb-4">Tap the heart on any bag to curate your private favorites list.</p>
          <a href="shop.html" class="btn btn-primary btn-sm">Explore Collection</a>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="row g-3">
        ${wishlist.map(id => {
          const item = typeof window.getProductById === 'function' ? window.getProductById(id) : null;
          if (!item) return '';
          return `
            <div class="col-md-6">
              <div class="d-flex align-items-center p-2 border rounded border-theme bg-surface">
                <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 75px; object-fit: cover; border-radius: 4px;" class="me-3">
                <div class="flex-grow-1">
                  <h6 class="font-serif mb-1" style="font-size: 0.95rem;">${item.name}</h6>
                  <div class="fw-bold small text-gold mb-2">$${item.price.toFixed(2)}</div>
                  <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-primary py-1 px-2 btn-move-to-cart" data-product-id="${item.id}" style="font-size: 0.7rem;">
                      Move to Bag
                    </button>
                    <button class="btn btn-sm btn-outline-secondary py-1 px-2 btn-remove-wishlist" data-product-id="${item.id}" style="font-size: 0.7rem;">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function updateBadges() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-badge-count').forEach(badge => {
      badge.textContent = cartCount;
      badge.style.display = cartCount > 0 ? 'flex' : 'none';
    });

    const wishlistCount = wishlist.length;
    document.querySelectorAll('.wishlist-badge-count').forEach(badge => {
      badge.textContent = wishlistCount;
      badge.style.display = wishlistCount > 0 ? 'flex' : 'none';
    });
  }

  // ------------------------------------------------------------------------
  // 5. Toast Notifications
  // ------------------------------------------------------------------------
  function showToast(message, iconClass = 'bi-info-circle') {
    let container = document.querySelector('.toast-container-luxe');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container-luxe';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-luxe';
    toast.innerHTML = `
      <i class="bi ${iconClass} text-gold fs-5"></i>
      <div class="flex-grow-1">${message}</div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ------------------------------------------------------------------------
  // 6. Quick View Modal
  // ------------------------------------------------------------------------
  function openQuickView(productId) {
    const product = typeof window.getProductById === 'function' ? window.getProductById(productId) : null;
    if (!product) return;

    const modalEl = document.getElementById('quickViewModal');
    if (!modalEl) return;

    const modalTitle = modalEl.querySelector('#quickViewTitle');
    const modalCategory = modalEl.querySelector('#quickViewCategory');
    const modalPrice = modalEl.querySelector('#quickViewPrice');
    const modalOldPrice = modalEl.querySelector('#quickViewOldPrice');
    const modalDesc = modalEl.querySelector('#quickViewDesc');
    const modalMaterial = modalEl.querySelector('#quickViewMaterial');
    const modalDimensions = modalEl.querySelector('#quickViewDimensions');
    const modalMainImg = modalEl.querySelector('#quickViewMainImg');
    const modalGallery = modalEl.querySelector('#quickViewGallery');
    const modalSwatches = modalEl.querySelector('#quickViewSwatches');
    const modalAddBtn = modalEl.querySelector('#quickViewAddBtn');
    const modalLink = modalEl.querySelector('#quickViewDetailsLink');

    if (modalTitle) modalTitle.textContent = product.name;
    if (modalCategory) modalCategory.textContent = product.categoryLabel;
    if (modalPrice) modalPrice.textContent = `$${product.price.toFixed(2)}`;
    if (modalOldPrice) {
      if (product.originalPrice) {
        modalOldPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
        modalOldPrice.style.display = 'inline';
      } else {
        modalOldPrice.style.display = 'none';
      }
    }
    if (modalDesc) modalDesc.textContent = product.description;
    if (modalMaterial) modalMaterial.textContent = product.material;
    if (modalDimensions) modalDimensions.textContent = product.dimensions;
    if (modalMainImg) {
      modalMainImg.src = product.image;
      modalMainImg.alt = product.name;
    }

    if (modalLink) {
      modalLink.href = `product-details.html?id=${product.id}`;
    }

    // Gallery thumbnails
    if (modalGallery && product.gallery && product.gallery.length > 1) {
      modalGallery.style.display = 'flex';
      modalGallery.innerHTML = product.gallery.map((imgUrl, i) => `
        <img src="${imgUrl}" alt="Gallery ${i + 1}" class="${i === 0 ? 'active' : ''}" data-full="${imgUrl}">
      `).join('');

      modalGallery.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
          modalGallery.querySelectorAll('img').forEach(el => el.classList.remove('active'));
          img.classList.add('active');
          if (modalMainImg) modalMainImg.src = img.getAttribute('data-full');
        });
      });
    } else if (modalGallery) {
      modalGallery.innerHTML = '';
      modalGallery.style.display = 'none';
    }

    // Swatches
    if (modalSwatches && product.colors) {
      modalSwatches.innerHTML = product.colors.map((c, i) => `
        <label class="btn btn-outline-secondary btn-sm p-1 d-flex align-items-center gap-1 ${i === 0 ? 'active' : ''}">
          <input type="radio" name="quickViewColor" value="${c.name}" class="d-none" ${i === 0 ? 'checked' : ''}>
          <span style="display:inline-block; width:14px; height:14px; border-radius:50%; background:${c.hex}; border:1px solid rgba(0,0,0,0.2);"></span>
          <span style="font-size: 0.75rem;">${c.name}</span>
        </label>
      `).join('');
    }

    if (modalAddBtn) {
      modalAddBtn.onclick = () => {
        const selectedColorInput = modalEl.querySelector('input[name="quickViewColor"]:checked');
        const color = selectedColorInput ? selectedColorInput.value : (product.colors[0]?.name || 'Default');
        const qty = parseInt(modalEl.querySelector('#quickViewQty')?.value, 10) || 1;
        addToCart(product.id, color, qty);
        const bsModal = bootstrap.Modal.getInstance(modalEl);
        if (bsModal) bsModal.hide();
      };
    }

    const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    bsModal.show();
  }

  // ------------------------------------------------------------------------
  // 7. Global Search Modal with Live Auto-Suggest
  // ------------------------------------------------------------------------
  function initSearchModal() {
    const searchInput = document.getElementById('globalSearchInput');
    const resultsContainer = document.getElementById('globalSearchResults');
    if (!searchInput || !resultsContainer || typeof window.PRODUCTS_DATA === 'undefined') return;

    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.trim().toLowerCase();
      if (!term) {
        resultsContainer.innerHTML = '<p class="text-muted small text-center py-3">Type bag silhouette, category, or leather finish...</p>';
        return;
      }

      const matches = window.PRODUCTS_DATA.filter(p =>
        p.name.toLowerCase().includes(term) ||
        p.categoryLabel.toLowerCase().includes(term) ||
        p.material.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div class="text-center py-4">
            <p class="text-muted mb-2">No handbags found matching "<strong>${term}</strong>"</p>
            <a href="shop.html" class="btn btn-outline-luxe btn-sm">Browse All Products</a>
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = `
        <div class="list-group list-group-flush">
          ${matches.slice(0, 5).map(p => `
            <a href="product-details.html?id=${p.id}" class="list-group-item list-group-item-action d-flex align-items-center gap-3 py-2 bg-transparent text-body">
              <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
              <div class="flex-grow-1">
                <div class="fw-semibold small">${p.name}</div>
                <div class="text-muted" style="font-size: 0.72rem;">${p.categoryLabel}</div>
              </div>
              <div class="fw-bold text-gold small">$${p.price.toFixed(2)}</div>
            </a>
          `).join('')}
        </div>
      `;
    });
  }

  // ------------------------------------------------------------------------
  // 8. Form Validations (Contact, Newsletter, Demo Checkout)
  // ------------------------------------------------------------------------
  function initFormValidations() {
    // Contact Form
    const contactForm = document.getElementById('contactUsForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        const nameField = document.getElementById('contactName');
        const emailField = document.getElementById('contactEmail');
        const phoneField = document.getElementById('contactPhone');
        const subjectField = document.getElementById('contactSubject');
        const messageField = document.getElementById('contactMessage');

        // Name Validation: Rejects numeric-only, requires at least 2 letters
        const nameVal = nameField?.value.trim() || '';
        const nameHasLetters = /[a-zA-Z]/.test(nameVal);
        const nameIsPureNumbers = /^\d+$/.test(nameVal);
        if (!nameVal || nameIsPureNumbers || !nameHasLetters || nameVal.length < 2) {
          nameField?.classList.add('is-invalid');
          nameField?.classList.remove('is-valid');
          isValid = false;
        } else {
          nameField?.classList.remove('is-invalid');
          nameField?.classList.add('is-valid');
        }

        // Email Validation: RFC pattern
        const emailVal = emailField?.value.trim() || '';
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailVal)) {
          emailField?.classList.add('is-invalid');
          emailField?.classList.remove('is-valid');
          isValid = false;
        } else {
          emailField?.classList.remove('is-invalid');
          emailField?.classList.add('is-valid');
        }

        // Phone Validation: Rejects alphabetic characters, accepts 7-15 digits
        const phoneVal = phoneField?.value.trim() || '';
        const phoneHasAlpha = /[a-zA-Z]/.test(phoneVal);
        const cleanDigits = phoneVal.replace(/[\s\-\+\(\)]/g, '');
        if (phoneHasAlpha || cleanDigits.length < 7 || cleanDigits.length > 15) {
          phoneField?.classList.add('is-invalid');
          phoneField?.classList.remove('is-valid');
          isValid = false;
        } else {
          phoneField?.classList.remove('is-invalid');
          phoneField?.classList.add('is-valid');
        }

        // Subject required
        if (!subjectField?.value) {
          subjectField?.classList.add('is-invalid');
          subjectField?.classList.remove('is-valid');
          isValid = false;
        } else {
          subjectField?.classList.remove('is-invalid');
          subjectField?.classList.add('is-valid');
        }

        // Message required: >= 15 chars
        const msgVal = messageField?.value.trim() || '';
        if (msgVal.length < 15) {
          messageField?.classList.add('is-invalid');
          messageField?.classList.remove('is-valid');
          isValid = false;
        } else {
          messageField?.classList.remove('is-invalid');
          messageField?.classList.add('is-valid');
        }

        if (isValid) {
          const feedbackArea = document.getElementById('contactFeedbackAlert');
          if (feedbackArea) {
            feedbackArea.innerHTML = `
              <div class="alert alert-success d-flex align-items-start gap-3 p-3">
                <i class="bi bi-check-circle-fill fs-4 mt-1"></i>
                <div>
                  <h6 class="alert-heading mb-1 fw-bold">Message Validated & Logged (Demonstration Mode)</h6>
                  <p class="mb-0 small">Thank you, <strong>${nameVal}</strong>. As this is a frontend demonstration template, no live backend server is attached. Your enquiry inputs have passed all validation rules successfully.</p>
                </div>
              </div>
            `;
            feedbackArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          contactForm.reset();
          document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        }
      });
    }

    // Newsletter Forms
    document.querySelectorAll('.newsletter-form').forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const val = emailInput?.value.trim() || '';
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(val)) {
          showToast('Please enter a valid email address', 'bi-exclamation-triangle');
          emailInput?.focus();
          return;
        }

        showToast('Welcome to Maison Vélure! Use code "WELCOME15" for 15% off your first order.', 'bi-gift');
        form.reset();
      });
    });

    // Checkout Trigger
    const btnCheckoutTrigger = document.getElementById('btnProceedCheckout');
    if (btnCheckoutTrigger) {
      btnCheckoutTrigger.addEventListener('click', () => {
        if (cart.length === 0) {
          showToast('Your shopping bag is empty. Add a bag before checkout.');
          return;
        }
        window.location.href = 'checkout.html';
      });
    }

    // Checkout Form Simulation
    const checkoutDemoForm = document.getElementById('checkoutDemoForm');
    if (checkoutDemoForm) {
      checkoutDemoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const demoAlert = document.getElementById('checkoutDemoSuccess');
        if (demoAlert) {
          demoAlert.style.display = 'block';
        }
        cart = [];
        saveCart();
        setTimeout(() => {
          showToast('Demonstration order simulated successfully. Bag cleared.');
        }, 1200);
      });
    }
  }

  // ------------------------------------------------------------------------
  // 9. Global Document Event Delegation
  // ------------------------------------------------------------------------
  function initEventDelegation() {
    document.addEventListener('click', function (e) {
      // Add to Cart button
      const addBtn = e.target.closest('.btn-add-to-cart');
      if (addBtn) {
        e.preventDefault();
        const id = addBtn.getAttribute('data-product-id');
        const color = addBtn.getAttribute('data-color') || null;
        const qty = addBtn.getAttribute('data-qty') || 1;
        addToCart(id, color, qty);
        return;
      }

      // Wishlist toggle button
      const wishlistBtn = e.target.closest('.btn-wishlist');
      if (wishlistBtn) {
        e.preventDefault();
        const id = wishlistBtn.getAttribute('data-product-id');
        toggleWishlist(id);
        return;
      }

      // Quick View button
      const quickBtn = e.target.closest('.btn-quickview');
      if (quickBtn) {
        e.preventDefault();
        const id = quickBtn.getAttribute('data-product-id');
        openQuickView(id);
        return;
      }

      // Cart Stepper Plus
      const plusBtn = e.target.closest('.btn-stepper-plus');
      if (plusBtn) {
        const idx = parseInt(plusBtn.getAttribute('data-index'), 10);
        updateCartQuantity(idx, 1);
        return;
      }

      // Cart Stepper Minus
      const minusBtn = e.target.closest('.btn-stepper-minus');
      if (minusBtn) {
        const idx = parseInt(minusBtn.getAttribute('data-index'), 10);
        updateCartQuantity(idx, -1);
        return;
      }

      // Remove from Cart
      const removeBtn = e.target.closest('.btn-remove-item');
      if (removeBtn) {
        const idx = parseInt(removeBtn.getAttribute('data-index'), 10);
        removeFromCart(idx);
        return;
      }

      // Wishlist Modal -> Move to Cart
      const moveToCartBtn = e.target.closest('.btn-move-to-cart');
      if (moveToCartBtn) {
        const id = moveToCartBtn.getAttribute('data-product-id');
        addToCart(id, null, 1);
        const idx = wishlist.indexOf(id);
        if (idx > -1) {
          wishlist.splice(idx, 1);
          saveWishlist();
        }
        return;
      }

      // Wishlist Modal -> Remove
      const removeWishlistBtn = e.target.closest('.btn-remove-wishlist');
      if (removeWishlistBtn) {
        const id = removeWishlistBtn.getAttribute('data-product-id');
        toggleWishlist(id);
        return;
      }

      // Theme toggle button
      if (e.target.closest('.theme-toggle-btn')) {
        e.preventDefault();
        toggleTheme();
        return;
      }

      // RTL toggle button
      if (e.target.closest('.rtl-toggle-btn')) {
        e.preventDefault();
        toggleDirection();
        return;
      }

      // Promo Code Apply Button
      const applyPromoBtn = e.target.closest('#btnApplyPromo');
      if (applyPromoBtn) {
        e.preventDefault();
        const promoInput = document.getElementById('promoCodeInput');
        applyPromoCode(promoInput?.value);
        return;
      }
    });
  }

  // ------------------------------------------------------------------------
  // 10. Boutique Real Interactive Map Controller
  // ------------------------------------------------------------------------
  function initBoutiqueMap() {
    const mapFrame = document.getElementById('boutiqueMapFrame');
    if (!mapFrame) return;

    const boutiqueData = {
      paris: {
        name: 'Paris Flagship Salon',
        badge: 'Coordinates: 48.8698° N, 2.3204° E',
        address: '18 Rue du Faubourg Saint-Honoré, 75008 Paris, France',
        hours: 'Mon – Sat: 10:00 – 19:00',
        phone: '+33 (0)1 42 68 55 00',
        mapUrl: 'https://maps.google.com/maps?q=18+Rue+du+Faubourg+Saint-Honor%C3%A9+75008+Paris+France&t=&z=16&ie=UTF8&iwloc=&output=embed',
        directionsUrl: 'https://maps.google.com/?q=18+Rue+du+Faubourg+Saint-Honor%C3%A9+75008+Paris+France'
      },
      milan: {
        name: 'Milan Flagship Atelier',
        badge: 'Coordinates: 45.4695° N, 9.1963° E',
        address: 'Via Montenapoleone 14, 20121 Milano, Italy',
        hours: 'Mon – Sat: 10:30 – 19:30',
        phone: '+39 02 7600 3411',
        mapUrl: 'https://maps.google.com/maps?q=Via+Montenapoleone+14+20121+Milano+Italy&t=&z=16&ie=UTF8&iwloc=&output=embed',
        directionsUrl: 'https://maps.google.com/?q=Via+Montenapoleone+14+20121+Milano+Italy'
      },
      newyork: {
        name: 'New York Flagship Salon',
        badge: 'Coordinates: 40.7667° N, -73.9687° W',
        address: '740 Madison Avenue, New York, NY 10065, USA',
        hours: 'Mon – Sat: 11:00 – 18:00',
        phone: '+1 (212) 843-9200',
        mapUrl: 'https://maps.google.com/maps?q=740+Madison+Avenue+New+York+NY+10065+USA&t=&z=16&ie=UTF8&iwloc=&output=embed',
        directionsUrl: 'https://maps.google.com/?q=740+Madison+Avenue+New+York+NY+10065+USA'
      }
    };

    const nameEl = document.getElementById('mapBoutiqueName');
    const badgeEl = document.getElementById('mapBoutiqueBadge');
    const addressEl = document.getElementById('mapBoutiqueAddress');
    const hoursEl = document.getElementById('mapBoutiqueHours');
    const phoneEl = document.getElementById('mapBoutiquePhone');
    const directionsEl = document.getElementById('mapDirectionsLink');
    const spinnerEl = document.getElementById('mapLoadingSpinner');

    function switchBoutique(key) {
      const data = boutiqueData[key];
      if (!data) return;

      if (spinnerEl) spinnerEl.style.display = 'flex';
      mapFrame.src = data.mapUrl;

      if (nameEl) nameEl.textContent = data.name;
      if (badgeEl) badgeEl.textContent = data.badge;
      if (addressEl) addressEl.innerHTML = `<i class="bi bi-pin-map text-gold me-1"></i>${data.address}`;
      if (hoursEl) hoursEl.innerHTML = `<i class="bi bi-clock text-gold me-1"></i>${data.hours}`;
      if (phoneEl) phoneEl.innerHTML = `<i class="bi bi-telephone text-gold me-1"></i>${data.phone}`;
      if (directionsEl) directionsEl.href = data.directionsUrl;

      document.querySelectorAll('.boutique-map-btn').forEach(btn => {
        if (btn.getAttribute('data-boutique') === key) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    document.querySelectorAll('.boutique-map-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const key = this.getAttribute('data-boutique');
        switchBoutique(key);
      });
    });

    document.querySelectorAll('.boutique-select-trigger').forEach(trigger => {
      trigger.addEventListener('click', function () {
        const key = this.getAttribute('data-boutique');
        switchBoutique(key);
        const mapCard = document.getElementById('boutiqueMapCard');
        if (mapCard) {
          mapCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }

  // ------------------------------------------------------------------------
  // 11. Bootstrap DOM Initialization
  // ------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initThemeAndDirection();
    renderCart();
    renderWishlistModal();
    updateBadges();
    updateWishlistButtonStates();
    initSearchModal();
    initFormValidations();
    initEventDelegation();
    initBoutiqueMap();

    // Auto-update copyright year
    document.querySelectorAll('.current-year').forEach(el => {
      el.textContent = new Date().getFullYear();
    });
  });

  // Expose global helpers
  window.Velure = {
    addToCart,
    toggleWishlist,
    openQuickView,
    showToast,
    toggleTheme,
    toggleDirection
  };

})();

