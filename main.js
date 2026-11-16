// JavaScript equivalent of main.ts so the portfolio works immediately without a build step.
const projects = [
  {
    number: "01",
    date: "Mar 2026",
    name: "Goodside",
    description: "A calmer way to split plans, keep track, and enjoy time together.",
    category: "Product design · Mobile app",
    color: "#171512",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Phone mockup representing a shared-plans app",
    link: "mailto:hello@example.com?subject=Goodside%20case%20study",
  },
  {
    number: "02",
    date: "Jan 2026",
    name: "Fieldnotes",
    description: "Helping new teammates find their footing from day one.",
    category: "Research · Digital experience",
    color: "#f3c744",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Bright collaborative office and project space",
    link: "mailto:hello@example.com?subject=Fieldnotes%20case%20study",
  },
  {
    number: "03",
    date: "Oct 2025",
    name: "Little Rituals",
    description: "A friendly toolkit for making the small everyday habits stick.",
    category: "Brand · Web design",
    color: "#3156d3",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "A sunny desk with a notebook and creative materials",
    link: "mailto:hello@example.com?subject=Little%20Rituals%20case%20study",
  },
];

const projectList = document.querySelector("#project-list");

if (projectList) {
  projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card" style="--project-color: ${project.color}">
          <div class="project-copy">
            <p class="project-number">✦ Project ${project.number} · ${project.category}</p>
            <p class="project-date">● ${project.date}</p>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a class="project-link" href="${project.link}">View project ↗</a>
          </div>
          <div class="project-visual">
            <img src="${project.image}" alt="${project.imageAlt}" loading="lazy" />
          </div>
        </article>
      `,
    )
    .join("");
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation?.classList.toggle("is-open", !isExpanded);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
