/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

const Skills = [
    {
        name: "HTML5",
        label: "95%",
        icon: 'bx bxl-html5 skills__icon',
        barClass: 'skills__html'
    },
    {
        name: "CSS3",
        label: "90%",
        icon: 'bx bxl-css3 skills__icon',
        barClass: 'skills__css'
    },
    {
        name: "JavaScript",
        label: "85%",
        icon: 'bx bxl-javascript skills__icon',
        barClass: 'skills__js'
    },
    {
        name: "React",
        label: "75%",
        icon: 'bx bxl-react skills__icon',
        barClass: 'skills__react'
    },
];


let skillRoot = document.getElementById("skillsContainer");

Skills.forEach((item) => {
    // Root div
    let skillNode = document.createElement("div");
    skillNode.className = "skills__data";

    // skills__names div
    let skillName = document.createElement("div");
    skillName.className = "skills__names";

    let icon = document.createElement("i");
    icon.className = item.icon;

    let spanName = document.createElement("span");
    spanName.className = "skills__name";
    spanName.innerHTML = item.name;

    skillName.appendChild(icon);
    skillName.appendChild(spanName);

    // skills__bar div
    let skillBar = document.createElement("div");
    skillBar.className = `skills__bar ${item.barClass}`;

    // percentage span
    let percentageWrapper = document.createElement("div");
    let percentage = document.createElement("span");
    percentage.className = "skills__percentage";
    percentage.innerHTML = item.label;

    percentageWrapper.appendChild(percentage);

    // Append all to root
    skillNode.appendChild(skillName);
    skillNode.appendChild(skillBar);
    skillNode.appendChild(percentageWrapper);

    skillRoot.appendChild(skillNode);
});

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio showcasing projects and skills.",
        image: "assets/img/portfolio.png", // single image URL
        link: "https://danishq7080.github.io/Portfolio/",
        code: "https://github.com/danishq7080/Portfolio"
    },
    {
        title: "Weather App",
        description: "Real-time weather info using API.",
        image: "https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg", // single image URL
        link: "https://example.com/weather",
        code: "https://github.com/example/weather"
    }
];

const container = document.getElementById("projectsContainer");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "project-img-wrapper";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    imgWrapper.appendChild(img);
    card.appendChild(imgWrapper);

    const details = document.createElement("div");
    details.className = "project-details";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("span");
    desc.textContent = project.description;

    const buttons = document.createElement("div");
    buttons.className = "project-buttons";

    const codeBtn = document.createElement("button");
    codeBtn.textContent = "Code";
    codeBtn.onclick = () => window.open(project.code, "_blank");

    const viewBtn = document.createElement("button");
    viewBtn.textContent = "View";
    viewBtn.onclick = () => window.open(project.link, "_blank");

    buttons.appendChild(codeBtn);
    buttons.appendChild(viewBtn);

    details.appendChild(title);
    details.appendChild(desc);
    details.appendChild(buttons);

    card.appendChild(details);
    container.appendChild(card);
});

// Education Qualification Data

const educationData = [
    {
      title: "Bachelor of Technology",
      year: "2022 - 2026",
      institution: "Maulana Abul Kalam Azad University of Technology - Computer Science and Engineering"
    },
    {
      title: "Higher Secondary",
      year: "2020 - 2022",
      institution: "Guru Gobind Singh Public School - PCM with Computer Science"
    },
    {
      title: "Secondary",
      year: "2021 - 2022",
      institution: "S K P Vidya Vihar"
    }
  ];
  
  const timelineContainer = document.getElementById("timeline");
  
  educationData.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "timeline-item";
  
    const dot = document.createElement("div");
    dot.className = "timeline-dot";
  
    const content = document.createElement("div");
    content.className = "timeline-content";
  
    const title = document.createElement("h3");
    title.textContent = item.title;
  
    const span = document.createElement("span");
    span.textContent = item.year;
  
    const desc = document.createElement("p");
    desc.textContent = item.institution;
  
    content.appendChild(title);
    content.appendChild(span);
    content.appendChild(desc);
    wrapper.appendChild(dot);
    wrapper.appendChild(content);
  
    timelineContainer.appendChild(wrapper);
  });
// Activity

async function generateDeveloperStatsFromUsernames(githubUsername, leetcodeUsername) {
    // GitHub Stats
    const githubStatsDiv = document.getElementById("githubStats");
    githubStatsDiv.innerHTML = `
      <h3>GitHub Activity</h3>
      <img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=default" alt="GitHub Stats" />
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=default" alt="GitHub Streak" />
    `;
  
    // LeetCode Stats
    const leetcodeStatsDiv = document.getElementById("leetcodeStats");
  
    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
      const data = await response.json();
  
      if (data.totalSolved !== undefined) {
        leetcodeStatsDiv.innerHTML = `
          <h3>LeetCode Activity</h3>
          <p>Total Solved: ${data.totalSolved}</p>
          <p>Easy: ${data.easySolved} | Medium: ${data.mediumSolved} | Hard: ${data.hardSolved}</p>
          <p>Ranking: ${data.ranking}</p>
        `;
      } else {
        leetcodeStatsDiv.innerHTML = `<p>LeetCode profile not found or unavailable.</p>`;
      }
    } catch (error) {
      leetcodeStatsDiv.innerHTML = `<p>Failed to fetch LeetCode data.</p>`;
    }
  }

   generateDeveloperStatsFromUsernames("danishq7080","danishq7080")

//    Internships


const Internships = [
    {
      title: "Web Development Intern",
      Orgination: "CodeCrafterz",
      description: "Built responsive websites using HTML, CSS, and JavaScript.",
      duration: "4 weeks",
      cetificateLink: "https://github.com/example/certificate"
    },
    {
      title: "AI Research Intern",
      Orgination: "",
      description: "Worked on training ML models using Python and TensorFlow.",
      duration: "6 weeks",
      cetificateLink: "https://github.com/example/certificate2"
    }
  ];
  
  const internshipContainer = document.getElementById("internshipList");
  
  Internships.forEach((item) => {
    const card = document.createElement("div");
    card.className = "internship-card";
  
    const orgBadge = item.Orgination
      ? `<span class="org-badge">${item.Orgination}</span>`
      : `<span class="org-badge default">Organization</span>`;
  
    card.innerHTML = `
      ${orgBadge}
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p><strong>Duration:</strong> ${item.duration}</p>
      <a href="${item.cetificateLink}" target="_blank" class="btn">Certificate</a>
    `;
  
    internshipContainer.appendChild(card);
  });
//   icons programing
  const languages = ["Java", "Python", "C++", "MySQL"];

  const iconMap = {
    Java: '<i class="bx bxl-java"></i>',
    Python: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="lang-icon">',
    "C++": '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" class="lang-icon">',
    MySQL: '<i class="bx bxl-mysql"></i>' // if not available, use image
  };
  
  const programingContainer = document.getElementById("languageSkills");
  
  languages.forEach((lang) => {
    const card = document.createElement("div");
    card.className = "skills__data";
    card.innerHTML = `
      <div class="lang-icon-wrapper">
        ${iconMap[lang] || '<i class="bx bx-code-alt"></i>'}
      </div>
      <span class="lang-name">${lang}</span>
    `;
    programingContainer.appendChild(card);
  });
  