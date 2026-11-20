/* Snovanta Systems — site scripts */
document.addEventListener("DOMContentLoaded", () => {
  /* 1. Mobile menu */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  /* 2. Highlight the current page in the menu */
  const page = location.pathname.split("/").pop().replace(".html", "") || "index";
  document.querySelectorAll(".nav a").forEach((link) => {
    const target = link.getAttribute("href").replace(".html", "");
    if (target === page) link.setAttribute("aria-current", "page");
  });

  /* 3. Current year in footer */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* 4. Contact form (sends via Web3Forms — see README) */
  const form = document.querySelector("#contact-form");
  if (form) {
    const status = form.querySelector(".form__status");
    const keyField = form.querySelector('input[name="access_key"]');

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form__status";

      // Fallback: if no Web3Forms key has been added yet, open the visitor's email app
      if (!keyField || keyField.value.startsWith("YOUR_")) {
        const data = new FormData(form);
        const body =
          `Name: ${data.get("name")}\nCompany: ${data.get("company") || "-"}\n` +
          `Topic: ${data.get("topic")}\n\n${data.get("message")}`;
        location.href =
          `mailto:${form.dataset.email}?subject=` +
          encodeURIComponent("Website enquiry: " + data.get("topic")) +
          "&body=" + encodeURIComponent(body);
        return;
      }

      status.textContent = "Sending…";
      try {
        const res = await fetch(form.action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        const json = await res.json();
        if (res.ok && json.success) {
          form.reset();
          status.textContent = "Thank you — we'll be in touch shortly.";
          status.classList.add("is-ok");
        } else {
          throw new Error(json.message || "Something went wrong");
        }
      } catch (err) {
        status.textContent = `Sorry, your message couldn't be sent. Please email us at ${form.dataset.email}.`;
        status.classList.add("is-error");
      }
    });
  }
});
