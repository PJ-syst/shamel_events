/* Shamel Events — interactions */
(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Mobile navigation
  ------------------------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && window.innerWidth <= 650) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------------------------------------------------------
     Gallery filters
  ------------------------------------------------------------------ */
  var filterBar = document.querySelector(".filter-bar");
  var galleryItems = document.querySelectorAll(".gallery-item[data-category]");

  if (filterBar && galleryItems.length) {
    filterBar.addEventListener("click", function (event) {
      var button = event.target.closest(".filter-btn");
      if (!button) return;

      filterBar.querySelectorAll(".filter-btn").forEach(function (btn) {
        btn.classList.toggle("is-active", btn === button);
      });

      var filter = button.getAttribute("data-filter");

      galleryItems.forEach(function (item) {
        var match = filter === "all" || item.getAttribute("data-category") === filter;
        item.style.display = match ? "" : "none";
      });
    });
  }

  /* ------------------------------------------------------------------
     Reveal on scroll
  ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ------------------------------------------------------------------
     Contact form (static site: client-side validation + status message)
  ------------------------------------------------------------------ */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var type = form.elements["event-type"].value;
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !emailPattern.test(email) || !type) {
        status.textContent =
          "Please add your name, a valid email address, and an event type so we can plan your consultation.";
        status.classList.add("is-visible");
        status.style.borderColor = "#b82837";
        return;
      }

      status.textContent =
        "Thank you, " +
        name.split(" ")[0] +
        ". Your enquiry is on its way — a Shamel Events planner will reach out within one business day.";
      status.style.borderColor = "#77b829";
      status.classList.add("is-visible");
      form.reset();
    });
  }
})();
