const wrapper = document.getElementById("wrapper");

console.log(wrapper);

const planets = [
  {
    name: "Mars",
    order: 4,
    diameterKm: 6779,
    funFact: "Mars is only about half of Earth's diameter, but its dry-land surface area is roughly the same as Earth's."
  },
  {
    name: "Jupiter",
    order: 5,
    diameterKm: 139820,
    funFact: "Jupiter has the shortest day of any planet in the solar system, it spins all the way around in just 9.9 hours."
  },
  {
    name: "Saturn",
    order: 6,
    diameterKm: 116460,
    funFact: "Saturn is so light for its size that it's the only planet in the solar system less dense than water."
  },
  {
    name: "Uranus",
    order: 7,
    diameterKm: 50724,
    funFact: "Uranus is tilted 97.77°. it rolls like a ball, giving each pole 21 year days and 21 year nights."
  },
  {
    name: "Neptune",
    order: 8,
    diameterKm: 49528,
    funFact: "Neptune is the windiest place in the solar system."
  },
  {
    name: "Mercury",
    order: 1,
    diameterKm: 4879,
    funFact: "A single Mercury day (sunrise to sunrise) lasts 176 Earth days, nearly two full Mercury years."
  }
];
function renderPlanets() {
  wrapper.innerHTML = "";
planets.forEach((planet, index) => {
  const card = document.createElement("div");
  card.classList.add("planet-card");
  card.innerHTML = `
  <h2>${planet.name}</h2>
  <p>Order from the Sun: ${planet.order}</p>
  <p>Diameter: ${planet.diameterKm} km</p>
`;
  const details = document.createElement("p");
  card.appendChild(details);

  card.addEventListener("click", () => {
    details.innerHTML = planet.funFact;
  });
const deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
deleteButton.addEventListener("click", (event) => {
  event.stopPropagation();
  planets.splice(index, 1);
  renderPlanets();
});
card.appendChild(deleteButton);
  wrapper.appendChild(card);
});
}

renderPlanets();
const sortOrderButton = document.getElementById("sortOrder");

let closestFirst = true;

sortOrderButton.addEventListener("click", () => {
  if (closestFirst) {
    planets.sort((a, b) => a.order - b.order);
  } else {
    planets.sort((a, b) => b.order - a.order);
  }

  closestFirst = !closestFirst;
  renderPlanets();
});
const sortDiameterButton = document.getElementById("sortDiameter");

let smallestFirst = true;

sortDiameterButton.addEventListener("click", () => {
  if (smallestFirst) {
    planets.sort((a, b) => a.diameterKm - b.diameterKm);
  } else {
    planets.sort((a, b) => b.diameterKm - a.diameterKm);
  }

  smallestFirst = !smallestFirst;
  renderPlanets();
});
