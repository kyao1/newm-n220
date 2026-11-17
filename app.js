const trailList = document.getElementById("trailList");
const savedList = document.getElementById("savedList");
const savedCount = document.getElementById("savedCount");

let trails = [];
let savedIds = [];

try {
    savedIds = JSON.parse(localStorage.getItem("week12SavedTrails")) || [];
    if (!Array.isArray(savedIds)) {
        savedIds = [];
    }
    savedIds = savedIds.map(id => String(id));
} catch (error) {
    savedIds = [];
}

function makeCard(trail, showButton) {
    const card = document.createElement("div");
    card.className = "trail-card";
    card.dataset.id = String(trail.id);

    const heading = document.createElement("h3");
    heading.textContent = trail.name || trail.title || "Trail " + trail.id;
    card.appendChild(heading);

    Object.keys(trail).forEach(key => {
        if (key === "id" || key === "name" || key === "title") {
            return;
        }

        const value = trail[key];
        if (typeof value === "string" || typeof value === "number") {
            const detail = document.createElement("p");
            detail.textContent = key + ": " + value;
            card.appendChild(detail);
        }
    });

    if (showButton) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "save-button";
        const isSaved = savedIds.includes(String(trail.id));
        button.textContent = isSaved ? "★ Saved" : "☆ Save";
        button.setAttribute("aria-pressed", String(isSaved));
        card.appendChild(button);
    }

    return card;
}

function renderPage() {
    trailList.innerHTML = "";
    savedList.innerHTML = "";

    trails.forEach(trail => {
        trailList.appendChild(makeCard(trail, true));
    });

    const selectedTrails = trails.filter(trail => {
        return savedIds.includes(String(trail.id));
    });

    savedCount.textContent = "Saved: " + selectedTrails.length;

    if (selectedTrails.length === 0) {
        const message = document.createElement("p");
        message.className = "empty-message";
        message.textContent = "No saved trails yet";
        savedList.appendChild(message);
        return;
    }

    selectedTrails.forEach(trail => {
        savedList.appendChild(makeCard(trail, false));
    });
}

trailList.addEventListener("click", event => {
    if (!event.target.classList.contains("save-button")) {
        return;
    }

    const card = event.target.closest(".trail-card");
    if (!card) {
        return;
    }

    const id = card.dataset.id;

    if (savedIds.includes(id)) {
        savedIds = savedIds.filter(savedId => savedId !== id);
    } else {
        savedIds.push(id);
    }

    localStorage.setItem("week12SavedTrails", JSON.stringify(savedIds));
    renderPage();
});

fetch("trails.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not get trails.json");
        }
        return response.json();
    })
    .then(data => {
        if (!Array.isArray(data)) {
            throw new Error("Could not get trails.json");
        }
        trails = data;
        renderPage();
    })
    .catch(error => {
        trailList.textContent = "Couldn't load trails.json.";
        console.error(error);
    });
