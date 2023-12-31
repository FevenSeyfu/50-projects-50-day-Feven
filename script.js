const boxes = document.querySelectorAll(".box");
const nav = document.querySelector(".nav");
const ProjectSection = document.getElementById("projects");

const fixNavbar = () => {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

window.addEventListener("scroll", fixNavbar);

// projects cards
const projects = [
  {
    id: 1,
    name: "expanding-cards",
    img: "assets/Day-1.png",
  },
  {
    id: 2,
    name: "progress-steps",
    img: "assets/Day-2.png",
  },
  {
    id: 3,
    name: "rotating-navigation-animation",
    img: "assets/Day-3.png",
  },
  {
    id: 4,
    name: "hidden-search-widget",
    img: "assets/Day-4.png",
  },
  {
    id: 5,
    name: "blurry-loading",
    img: "assets/Day-5.png",
  },
  {
    id: 6,
    name: "scroll-animation",
    img: "assets/Day-6.png",
  },
  {
    id: 7,
    name: "split-landing-page",
    img: "assets/Day-7.png",
  },
  {
    id: 8,
    name: "form-input-wave",
    img: "assets/Day-8.png",
  },
  {
    id: 9,
    name: "sound-board",
    img: "assets/Day-9.png",
  },
  {
    id: 10,
    name: "dad-jokes",
    img: "assets/Day-10.png",
  },
  {
    id: 11,
    name: "event-keycodes",
    img: "assets/Day-11.png",
  },
  {
    id: 12,
    name: "faq",
    img: "assets/Day-12.png",
  },
  {
    id: 13,
    name: "random-choice-picker",
    img: "assets/Day-13.png",
  },
  {
    id: 14,
    name: "animated-navigation",
    img: "assets/Day-14.png",
  },
  {
    id: 15,
    name: "incrementing-counter",
    img: "assets/Day-15.png",
  },
  {
    id: 16,
    name: "drink-water",
    img: "assets/Day-16.png",
  },
  {
    id: 18,
    name: "background-slider",
    img: "assets/Day-3.png",
  },
  {
    id: 19,
    name: "theme-clock",
    img: "assets/Day-19.png",
  },
  {
    id: 20,
    name: "button-ripple-effect",
    img: "assets/Day-20.png",
  },
  {
    id: 21,
    name: "drag-and-drop",
    img: "assets/Day-21.png",
  },
  {
    id: 22,
    name: "drawing-app",
    img: "assets/Day-22.png",
  },
  {
    id: 23,
    name: "kinetic-loader",
    img: "assets/Day-23.png",
  },
  {
    id: 24,
    name: "content-placeholder",
    img: "assets/Day-24.png",
  },
  {
    id: 25,
    name: "sticky-navigation",
    img: "assets/Day-25.png",
  },
  {
    id: 26,
    name: "double-vertical-slider",
    img: "assets/Day-26.png",
  },
];

const projectBox =  document.getElementById('box')
projects.forEach(project=>{
    projectCard = document.createElement('div')
    projectCard.classList.add('project-card')
    // projectCard.style.backgroundImage = `url(assets/Day-${project.id}.png)`;
    projectCard.setAttribute('data-id', `${project.id}`)
    projectCard.innerHTML =`
        <img src="assets/Day-${project.id}.png" />
        <span class="tag">Day ${project.id}</span>
        <div class="overlay">
            <h2 class="project-name">${project.name}</h2>
            <button class="btn">
                <a href="https://fevenseyfu.github.io/50-projects-50-day-Feven/${project.name}/">Live Demo</a>
            </button>
        </div>
            `
    ProjectSection.appendChild(projectCard)
})
