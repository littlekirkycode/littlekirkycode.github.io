(() => {
  "use strict";
  const header = document.querySelector(".site-header");
  const updateHeader = () =>
    header?.classList.toggle("scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  const links = [...document.querySelectorAll(".navigation a")];
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          links.forEach((link) => {
            if (link.hash === `#${entry.target.id}`)
              link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => sectionObserver.observe(section));
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove("is-pending");
            revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px 30px 0px", threshold: 0.03 },
      );
      document
        .querySelectorAll(
          ".section-heading, .project, .project-small, .career-item, .capability-row, .about-copy",
        )
        .forEach((element) => {
          if (element.getBoundingClientRect().top <= window.innerHeight) return;
          element.classList.add("reveal", "is-pending");
          revealObserver.observe(element);
        });
      window.addEventListener("beforeprint", () =>
        document
          .querySelectorAll(".is-pending")
          .forEach((element) => element.classList.remove("is-pending")),
      );
    }
  }
  const copyButton = document.querySelector(".copy-email");
  const copyStatus = document.querySelector(".copy-status");
  if (copyButton && navigator.clipboard?.writeText && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("james.kirkham00@gmail.com");
        copyStatus.textContent = "Email copied.";
      } catch {
        copyStatus.textContent =
          "Select the email address to copy it, or click it to send a message.";
      }
    });
  }
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
