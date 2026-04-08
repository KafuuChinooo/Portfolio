const portfolioContent = {
  siteTitle: "Phan Cong Anh (Kafuu) | Portfolio",
  navBrand: "kafuu",
  hero: {
    name: "Phan Cong Anh (Kafuu)",
    role: "AI, Data Science Student",
    title: "I build AI and data tools people can actually use.",
    intro:
      "I'm a 3rd-year Technology and Innovation student at UEH University. Most of my work is around AI workflows, automation, and data systems that solve small but real problems.",
    ctaLabel: "See My Work",
    focus: [
      "Small language model apps",
      "Data analysis and pipelines",
      "Automation for day-to-day work"
    ]
  },
  about:
    "I'm based in Ho Chi Minh City and I like building systems that save time and make messy processes easier to manage. I work mostly with Python, FastAPI, data workflows, and API integrations, especially when there's a chance to turn manual work into something cleaner and more reliable.",
  skills: [
    "Python (automation, data pipelines)",
    "FastAPI (backend APIs, logic layers)",
    "SQL (querying, structured data)",
    "SLMs (local deployment, integration)",
    "Data Analysis (cleaning, exploration)",
    "Google APIs (Sheets, Calendar workflows)",
    "Telegram Bots (alerts, task flows)",
    "Git (version control, collaboration)"
  ],
  projects: [
    {
      title: "VirtuHire",
      category: "VR & AI Engineering",
      description:
        "A VR interview simulator built with Unity, FastAPI, and SLM-based logic. The goal was to make interview practice feel less static and more like an actual conversation.",
      impact:
        "Takes interview prep out of the usual PDF-question-bank format and turns it into something interactive.",
      stack: ["Unity", "C#", "FastAPI", "SLM", "Python"],
      links: [
        {
          label: "GitHub Repository",
          url: "https://github.com/KafuuChinooo/InterviewSimulator"
        }
      ]
    },
    {
      title: "LifeOS Ecosystem",
      category: "System Automation",
      description:
        "A personal system that ties together Telegram, Google Workspace, and Python scripts for tracking deadlines, logging expenses, and handling recurring tasks.",
      impact:
        "Cuts down on repeated admin work and keeps personal tracking in one place instead of scattered across apps.",
      stack: ["Python", "Telegram API", "Google Sheets/Calendar API"],
      links: []
    },
    {
      title: "Behavioral Data Research",
      category: "Data Science & Research",
      description:
        "A research project focused on behavioral data, local SLMs, and lightweight processing pipelines that can still run under limited compute.",
      impact:
        "Explores whether smaller models can still be useful when deployment constraints are part of the problem.",
      stack: ["Python", "Data Visualization", "SLM", "Statistical Analysis"],
      links: []
    }
  ],
  contact: {
    text:
      "I'm looking for internship opportunities in AI, automation, or data-focused teams. If you're building something practical and need someone who likes implementation, feel free to reach out.",
    email: "phananh2492005@gmail.com",
    links: [
      { label: "GitHub", url: "https://github.com/KafuuChinooo/" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/phanconganh/" },
      { label: "Facebook", url: "https://www.facebook.com/shuvikafuu/" },
      { label: "Instagram", url: "https://www.instagram.com/shuvikafuu/" },
      { label: "Email", url: "mailto:phananh2492005@gmail.com" }
    ]
  },
  footer: "(c) 2026 Phan Cong Anh (Kafuu). All rights reserved."
};

document.title = portfolioContent.siteTitle;

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

const setHtml = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
};

const socialIcons = {
  GitHub: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.22 1.83 1.22 1.08 1.82 2.82 1.29 3.5.99.11-.76.42-1.29.76-1.58-2.66-.3-5.47-1.31-5.47-5.86 0-1.3.47-2.36 1.22-3.2-.12-.3-.53-1.52.12-3.16 0 0 1-.31 3.3 1.22a11.6 11.6 0 0 1 6 0c2.3-1.53 3.3-1.22 3.3-1.22.65 1.64.24 2.86.12 3.16.76.84 1.22 1.9 1.22 3.2 0 4.56-2.82 5.55-5.5 5.85.43.37.82 1.09.82 2.21v3.28c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"/>
    </svg>
  `,
  LinkedIn: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48a2.49 2.49 0 0 0-.02-4.98ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.82 2.54 4.82 5.84V21h-4v-5.72c0-1.36-.03-3.11-1.95-3.11-1.95 0-2.25 1.46-2.25 3V21h-4Z"/>
    </svg>
  `,
  Facebook: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.25-1.46 1.53-1.46H16.7V5.02c-.3-.04-1.3-.12-2.48-.12-2.45 0-4.12 1.45-4.12 4.13V11H7.3v3h2.8v8h3.4Z"/>
    </svg>
  `,
  Instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5A3.95 3.95 0 0 0 7.75 20.2h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.86A5.14 5.14 0 1 1 6.86 12 5.14 5.14 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 15.34 12 3.34 3.34 0 0 0 12 8.66Z"/>
    </svg>
  `,
  Email: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.3L4 7.2V17h16V7.2Zm8-.74V7l-8 5-8-5v4.56l8 5 8-5Z"/>
    </svg>
  `
};

setText("nav-brand", portfolioContent.navBrand);
setText("hero-name", portfolioContent.hero.name);
setText("hero-role", portfolioContent.hero.role);
setText("hero-title", portfolioContent.hero.title);
setText("hero-intro", portfolioContent.hero.intro);
setText("about-text", portfolioContent.about);
setText("contact-text", portfolioContent.contact.text);
setText("footer-copy", portfolioContent.footer);

const heroCta = document.getElementById("hero-cta");
if (heroCta) {
  heroCta.textContent = portfolioContent.hero.ctaLabel;
}

const contactEmail = document.getElementById("contact-email");
if (contactEmail) {
  contactEmail.textContent = portfolioContent.contact.email;
  contactEmail.href = `mailto:${portfolioContent.contact.email}`;
}

setHtml(
  "hero-focus-list",
  portfolioContent.hero.focus.map((item) => `<li>${item}</li>`).join("")
);

setHtml(
  "skills-cloud",
  portfolioContent.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")
);

setHtml(
  "projects-grid",
  portfolioContent.projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-meta">${project.category}</div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-impact">
            <p class="project-impact-label">Why it matters</p>
            <p class="project-impact-text">${project.impact}</p>
          </div>
          <div class="project-stack">
            ${project.stack.map((item) => `<span>${item}</span>`).join("")}
          </div>
          ${
            project.links.length
              ? `
                <div class="project-links">
                  ${project.links
                    .map(
                      (link) => `
                        <a class="project-link" href="${link.url}" ${
                          link.url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""
                        }>
                          ${link.label}
                        </a>
                      `
                    )
                    .join("")}
                </div>
              `
              : '<div class="project-links"><span class="project-link">WIP</span></div>'
          }
        </article>
      `
    )
    .join("")
);

setHtml(
  "contact-links",
  portfolioContent.contact.links
    .map(
      (link) => `
        <a class="contact-link" href="${link.url}" ${
          link.url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""
        } aria-label="${link.label}" title="${link.label}">
          <span class="contact-link-icon">${socialIcons[link.label] || ""}</span>
          <span class="sr-only">${link.label}</span>
        </a>
      `
    )
    .join("")
);
