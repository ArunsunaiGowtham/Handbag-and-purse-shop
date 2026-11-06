/**
 * Maison Vélure Paris — Single Master Reusable Navbar Component
 * Pure Client-Side JavaScript (No Python, No Backend, No Build Step)
 *
 * HOW IT WORKS:
 * 1. Put <div id="velure-navbar-mount"></div> on any page.
 * 2. Load <script src="assets/js/navbar.js"></script> right after it (or at the bottom).
 * 3. The entire navbar is rendered from this single file. Any edit here updates ALL pages.
 */

(function () {
  'use strict';

  const VelureNavbar = {
    /**
     * Determines current active page from window.location
     */
    getCurrentPage: function () {
      const path = window.location.pathname;
      const page = path.split('/').pop() || 'index.html';
      return page.toLowerCase().split('?')[0].split('#')[0];
    },

    /**
     * Master Navbar HTML Template
     */
    getHTML: function () {
      const current = this.getCurrentPage();

      const isHome1 = current === 'index.html' || current === '' || current === '/';
      const isHome2 = current === 'index-2.html';
      const isHome = isHome1 || isHome2;

      const isShop = current === 'shop.html' || current === 'product-details.html' || current === 'checkout.html';
      const isGifting = current === 'gifting.html';
      const isAbout = current === 'about.html';

      const isBlogGrid = current === 'blog.html';
      const isBlogDetails = current === 'blog-details.html';
      const isBlog = isBlogGrid || isBlogDetails;

      const isPricing = current === 'pricing.html';
      const isLogin = current === 'login.html';
      const isRegister = current === 'register.html';
      const is404 = current === '404.html';
      const isComingSoon = current === 'coming-soon.html';
      const isPages = isPricing || isLogin || isRegister || is404 || isComingSoon;

      const isContact = current === 'contact.html';

      // Current cart count
      let cartCount = 1;
      try {
        const cart = JSON.parse(localStorage.getItem('velure_cart'));
        if (Array.isArray(cart)) {
          cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        }
      } catch (e) {
        cartCount = 1;
      }

      // Current wishlist count
      let wishlistCount = 2;
      try {
        const wishlist = JSON.parse(localStorage.getItem('velure_wishlist'));
        if (Array.isArray(wishlist)) {
          wishlistCount = wishlist.length;
        }
      } catch (e) {
        wishlistCount = 2;
      }

      return `
  <!-- Single Luxury Navbar (Unified 1-Bar Navigation, No Top Bar) -->
  <header class="navbar navbar-expand-lg navbar-luxe sticky-nav">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Brand Logo -->
      <a class="navbar-brand order-1 order-lg-1 mx-auto mx-lg-0" href="index.html" aria-label="Maison Vélure Paris Home">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" width="160" height="40" fill="none">
          <g transform="translate(10, 8)">
            <circle cx="22" cy="22" r="21" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.6"/>
            <circle cx="22" cy="22" r="18" stroke="currentColor" stroke-width="1.2"/>
            <path d="M14 15 L22 30 L30 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 15 L22 24 L26 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="22" cy="12" r="1.5" fill="currentColor"/>
          </g>
          <text x="64" y="32" font-family="'Cormorant Garamond', Georgia, serif" font-size="24" font-weight="600" letter-spacing="4" fill="currentColor">VÉLURE</text>
          <text x="66" y="46" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="600" letter-spacing="4.5" fill="currentColor" opacity="0.75">PARIS · ATELIER 1984</text>
        </svg>
      </a>

      <!-- Primary Navigation Links -->
      <nav class="collapse navbar-collapse justify-content-center order-4 order-lg-2 w-100 w-lg-auto" id="navbarVelureMenu">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
          <!-- Home Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle ${isHome ? 'active' : ''}" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              Home <i class="bi bi-chevron-down ms-1" style="font-size: 0.65rem;"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-luxe">
              <li><a class="dropdown-item dropdown-item-luxe ${isHome1 ? 'active' : ''}" href="index.html">Home 1 — General Store</a></li>
              <li><a class="dropdown-item dropdown-item-luxe ${isHome2 ? 'active' : ''}" href="index-2.html">Home 2 — Fashion & Collection</a></li>
            </ul>
          </li>

          <!-- Shop -->
          <li class="nav-item">
            <a class="nav-link ${isShop ? 'active' : ''}" href="shop.html">Shop</a>
          </li>

          <!-- Gifting Suite -->
          <li class="nav-item">
            <a class="nav-link ${isGifting ? 'active' : ''}" href="gifting.html">Gifting Suite</a>
          </li>

          <!-- Pricing -->
          <li class="nav-item">
            <a class="nav-link ${isPricing ? 'active' : ''}" href="pricing.html">Pricing</a>
          </li>

          <!-- About Us -->
          <li class="nav-item">
            <a class="nav-link ${isAbout ? 'active' : ''}" href="about.html">About Us</a>
          </li>

          <!-- Blog -->
          <li class="nav-item">
            <a class="nav-link ${isBlog ? 'active' : ''}" href="blog.html">Blog</a>
          </li>

          <!-- Contact Us -->
          <li class="nav-item">
            <a class="nav-link ${isContact ? 'active' : ''}" href="contact.html">Contact Us</a>
          </li>
        </ul>
      </nav>

      <!-- Action Icons (Theme, RTL, Wishlist, Cart) -->
      <div class="d-flex align-items-center gap-2 order-2 order-lg-3">
        <!-- Theme Toggle -->
        <button class="btn-icon theme-toggle-btn" type="button" title="Toggle Light/Dark Theme" aria-label="Toggle Theme">
          <i class="bi bi-moon-stars"></i>
        </button>
        <!-- RTL Toggle -->
        <button class="btn-icon rtl-toggle-btn" type="button" title="Toggle RTL Direction" aria-label="Toggle RTL" style="font-size: 0.72rem; font-weight: 700;">
          RTL
        </button>
        <!-- Wishlist Trigger (Redirects to Shop Page) -->
        <a href="shop.html" class="btn-icon" title="Wishlist — View Shop" aria-label="View Shop">
          <i class="bi bi-heart"></i>
          <span class="badge-count wishlist-badge-count" style="${wishlistCount > 0 ? 'display:flex;' : 'display:none;'}">${wishlistCount}</span>
        </a>
        <!-- Cart Trigger -->
        <button class="btn-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" title="Shopping Bag" aria-label="View Shopping Bag">
          <i class="bi bi-bag"></i>
          <span class="badge-count cart-badge-count" style="${cartCount > 0 ? 'display:flex;' : 'display:none;'}">${cartCount}</span>
        </button>
      </div>

      <!-- Mobile Hamburger Button (On the Right on Mobile) -->
      <button class="navbar-toggler border-0 p-0 text-body order-3 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVelureMenu" aria-controls="navbarVelureMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list fs-2"></i>
      </button>
    </div>
  </header>
      `.trim();
    },

    /**
     * Renders into target element
     */
    render: function (target) {
      if (typeof target === 'string') {
        target = document.querySelector(target);
      }
      if (!target) {
        target = document.getElementById('velure-navbar-mount') ||
                 document.getElementById('main-navbar') ||
                 document.querySelector('velure-navbar');
      }
      if (target) {
        target.outerHTML = this.getHTML();
        // Guard: remove any duplicate static header if present
        const headers = document.querySelectorAll('header.navbar-luxe');
        if (headers.length > 1) {
          for (let i = 1; i < headers.length; i++) {
            headers[i].remove();
          }
        }
      }
    },

    /**
     * Auto initializes
     */
    init: function () {
      const mount = document.getElementById('velure-navbar-mount') ||
                    document.getElementById('main-navbar') ||
                    document.querySelector('velure-navbar');
      if (mount) {
        this.render(mount);
      }
    }
  };

  // Immediate execution if mount point is already in DOM
  VelureNavbar.init();

  // Also bind to DOMContentLoaded as fallback
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      VelureNavbar.init();
    });
  }

  // Web Component <velure-navbar>
  if (typeof customElements !== 'undefined' && !customElements.get('velure-navbar')) {
    class VelureNavbarElement extends HTMLElement {
      connectedCallback() {
        this.outerHTML = VelureNavbar.getHTML();
      }
    }
    customElements.define('velure-navbar', VelureNavbarElement);
  }

  window.VelureNavbar = VelureNavbar;
})();
