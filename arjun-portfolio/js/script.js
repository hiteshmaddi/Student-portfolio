const portfolioData = {
  name: "Arjun",
  role: "Frontend Developer",
  location: "Bengaluru, India",
  availability: "Open to freelance and full-time roles",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Responsive Design",
    "UI/UX",
    "Git",
    "Figma",
    "Performance Optimization",
    "Accessibility"
  ],
  projects: [
    {
      title: "Northstar Dashboard",
      summary: "A sales analytics dashboard focused on quick decision-making and data clarity for growing teams.",
      tech: ["React", "Charts", "CSS"]
    },
    {
      title: "Bloom Studio",
      summary: "A modern portfolio site for a creative brand, designed to showcase work and improve conversion rates.",
      tech: ["HTML", "JavaScript", "UI Design"]
    },
    {
      title: "TaskFlow Pro",
      summary: "A productivity app concept designed to help teams collaborate efficiently through simple workflows.",
      tech: ["JavaScript", "Product Design", "UX Research"]
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById("profile-name");
  const roleEl = document.getElementById("profile-role");
  const locationEl = document.getElementById("location");
  const availabilityEl = document.getElementById("availability");
  const skillsGrid = document.getElementById("skills-grid");
  const projectsGrid = document.getElementById("projects-grid");
  const yearEl = document.getElementById("year");

  if (nameEl) nameEl.textContent = portfolioData.name;
  if (roleEl) roleEl.textContent = portfolioData.role;
  if (locationEl) locationEl.textContent = portfolioData.location;
  if (availabilityEl) availabilityEl.textContent = portfolioData.availability;
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (skillsGrid) {
    skillsGrid.innerHTML = portfolioData.skills
      .map(
        (skill) => `
          <div class="skill-card">
            <span>${skill}</span>
          </div>
        `
      )
      .join("");
  }

  if (projectsGrid) {
    projectsGrid.innerHTML = portfolioData.projects
      .map(
        (project) => `
          <article class="project-card">
            <div class="project-badge">Featured Project</div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="project-tags">
              ${project.tech.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </article>
        `
      )
      .join("");
  }
});
