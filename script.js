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
        }>
          ${link.label}
        </a>
      `
    )
    .join("")
);
