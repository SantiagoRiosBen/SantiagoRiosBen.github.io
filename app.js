document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = Array.from(
    document.querySelectorAll('.nav-menu a[href^="#"]')
  );
  const footerText = document.querySelector(".site-footer p");
  const mobileBreakpoint = window.matchMedia("(max-width: 920px)");

  let isMenuOpen = false;
  let isLightboxOpen = false;

  const syncBodyScrollLock = () => {
    document.body.style.overflow = isMenuOpen || isLightboxOpen ? "hidden" : "";
  };

  const sections = navLinks
    .map((link) => {
      const targetId = link.getAttribute("href");
      return document.querySelector(targetId);
    })
    .filter(Boolean);

  const isMobileView = () => mobileBreakpoint.matches;

  const updateToggleState = (shouldOpen) => {
    if (!navToggle || !navMenu) return;

    isMenuOpen = shouldOpen;
    navToggle.setAttribute("aria-expanded", String(shouldOpen));
    navToggle.setAttribute(
      "aria-label",
      shouldOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
    navToggle.textContent = shouldOpen ? "Cerrar" : "Menú";

    navMenu.classList.toggle("is-open", shouldOpen);
    syncBodyScrollLock();
  };

  const closeMenu = () => updateToggleState(false);
  const toggleMenu = () => updateToggleState(!isMenuOpen);

  if (navToggle && navMenu) {
    updateToggleState(false);

    navToggle.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (isMobileView()) closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!isMobileView() || !isMenuOpen) return;

      const clickedInsideMenu = navMenu.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
      }
    });

    const handleViewportChange = () => {
      if (!isMobileView()) closeMenu();
    };

    if (typeof mobileBreakpoint.addEventListener === "function") {
      mobileBreakpoint.addEventListener("change", handleViewportChange);
    } else {
      mobileBreakpoint.addListener(handleViewportChange);
    }
  }

  const setActiveNavLink = (id) => {
    navLinks.forEach((link) => {
      const linkTarget = link.getAttribute("href");
      if (linkTarget === `#${id}`) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if ("IntersectionObserver" in window && sections.length > 0) {
    let currentSectionId = "";

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const mostVisibleSection = visibleEntries[0].target;
          if (mostVisibleSection.id !== currentSectionId) {
            currentSectionId = mostVisibleSection.id;
            setActiveNavLink(currentSectionId);
          }
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));
  } else if (sections.length > 0) {
    const updateActiveSectionOnScroll = () => {
      const offset = 160;
      let activeId = sections[0].id;

      sections.forEach((section) => {
        if (window.scrollY + offset >= section.offsetTop) {
          activeId = section.id;
        }
      });

      setActiveNavLink(activeId);
    };

    window.addEventListener("scroll", updateActiveSectionOnScroll, {
      passive: true,
    });

    updateActiveSectionOnScroll();
  }

  if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace(
      /&copy;\s*\d{4}|©\s*\d{4}/,
      `&copy; ${new Date().getFullYear()}`
    );
  }

  /* Lightbox para dashboards */
  const dashboardImages = Array.from(document.querySelectorAll(".project-image img"));

  if (dashboardImages.length > 0) {
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.className = "lightbox-overlay";
    lightboxOverlay.setAttribute("aria-hidden", "true");

    lightboxOverlay.innerHTML = `
      <div
        class="lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Vista ampliada del dashboard"
      >
        <button
          type="button"
          class="lightbox-close"
          aria-label="Cerrar imagen ampliada"
        >
          ×
        </button>

        <img class="lightbox-image" src="" alt="" />
      </div>
    `;

    document.body.appendChild(lightboxOverlay);

    const lightboxDialog = lightboxOverlay.querySelector(".lightbox-dialog");
    const lightboxImage = lightboxOverlay.querySelector(".lightbox-image");
    const lightboxClose = lightboxOverlay.querySelector(".lightbox-close");

    const openLightbox = (image) => {
      if (!image || !lightboxImage) return;

      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || "Dashboard ampliado";

      lightboxOverlay.classList.add("is-active");
      lightboxOverlay.setAttribute("aria-hidden", "false");
      isLightboxOpen = true;
      syncBodyScrollLock();

      lightboxClose.focus();
    };

    const closeLightbox = () => {
      lightboxOverlay.classList.remove("is-active");
      lightboxOverlay.setAttribute("aria-hidden", "true");
      isLightboxOpen = false;
      syncBodyScrollLock();

      window.setTimeout(() => {
        lightboxImage.src = "";
        lightboxImage.alt = "";
      }, 180);
    };

    dashboardImages.forEach((image) => {
      image.setAttribute("role", "button");
      image.setAttribute("tabindex", "0");
      image.setAttribute("aria-label", "Ampliar imagen del dashboard");

      image.addEventListener("click", () => openLightbox(image));

      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(image);
        }
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightboxOverlay.addEventListener("click", (event) => {
      if (event.target === lightboxOverlay) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (isLightboxOpen) {
          closeLightbox();
        } else if (isMenuOpen) {
          closeMenu();
          navToggle?.focus();
        }
      }
    });

    lightboxDialog.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
});