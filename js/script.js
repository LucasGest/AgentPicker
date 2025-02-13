// script.js

const agents = [
  {
    name: "Jett",
    image: "../img/jett.webp",
  },
  {
    name: "Brimstone",
    image: "../img/brimstone.webp",
  },
  {
    name: "Phoenix",
    image: "../img/phoenix.webp",
  },
  {
    name: "Sage",
    image: "../img/sage.webp",
  },
  {
    name: "Reyna",
    image: "../img/reyna.webp",
  },
  {
    name: "Raze",
    image: "../img/raze.webp",
  },
  {
    name: "Omen",
    image: "../img/omen.webp",
  },
  {
    name: "Viper",
    image: "../img/viper.webp",
  },
  {
    name: "Breach",
    image: "../img/breach.webp",
  },
  {
    name: "Cypher",
    image: "../img/cypher.webp",
  },
  {
    name: "Sova",
    image: "../img/sova.webp",
  },
  {
    name: "Astra",
    image: "../img/astra.webp",
  },
  {
    name: "Killjoy",
    image: "../img/killjoy.webp",
  },
  {
    name: "Yoru",
    image: "../img/yoru.webp",
  },
  {
    name: "Vyse",
    image: "../img/vyse.webp",
  },
  {
    name: "Clove",
    image: "../img/clove.webp",
  },
  {
    name: "Deadlock",
    image: "../img/deadlock.webp",
  },
  {
    name: "Harbor",
    image: "../img/harbor.webp",
  },
  {
    name: "Neon",
    image: "../img/neon.webp",
  },
  {
    name: "Iso",
    image: "../img/iso.webp",
  },
  {
    name: "Kay/O",
    image: "../img/kayo.webp",
  },
  {
    name: "Gekko",
    image: "../img/gekko.webp",
  },
  {
    name: "Chamber",
    image: "../img/chamber.webp",
  },
  {
    name: "Skye",
    image: "../img/skye.webp",
  },
  {
    name: "Fade",
    image: "../img/fade.webp",
  },
  {
    name: "Tejo",
    image: "../img/tejo.webp",
  },
];

const btn = document.getElementById("randomize-btn");
const agentName = document.getElementById("agent-name");
const agentImage = document.getElementById("agent-image");

function createParticles() {
  for (let i = 0; i < 30; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    anime({
      targets: particle,
      translateX: [x, x + (Math.random() - 0.5) * 200],
      translateY: [y, y + (Math.random() - 0.5) * 200],
      opacity: [1, 0],
      scale: [1, 0],
      duration: 2000,
      easing: "easeOutQuad",
      complete: function (anim) {
        particle.remove();
      },
    });
  }
}

btn.addEventListener("click", function () {
  const randomAgent = agents[Math.floor(Math.random() * agents.length)];

  // Affichage du nom et de l'image de l'agent
  agentName.textContent = randomAgent.name;
  agentImage.src = randomAgent.image;
  agentImage.style.display = "block";

    anime({
    targets: "#display",
    opacity: [0, 1],
    scale: [0.5, 1],
    duration: 800,
    easing: "easeOutElastic",
  });

  createParticles();
});
