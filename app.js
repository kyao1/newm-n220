
const wrapper = document.getElementById("wrapper");
const popUp = document.getElementById("pop");
const view = document.getElementById("view");

fetch("gallery.json")
    .then(response => response.json())
    .then(list => {
        console.log(list);

        const elements = list.map(itm => {
            const ele = document.createElement("img");

            ele.src = itm.src;
            ele.alt = itm.caption;

            return ele;
        });

        elements.forEach(itm => {
            wrapper.appendChild(itm);
        });

        function popAppear(index) {
            if (index >= 0) {
                view.innerHTML = "";

                const photo = document.createElement("img");
                photo.src = list[index].src;
                photo.alt = list[index].caption;

                const caption = document.createElement("p");
                caption.textContent = list[index].caption;

                view.appendChild(photo);
                view.appendChild(caption);

                popUp.style.display = "flex";
            }
        }

        wrapper.addEventListener("click", (event) => {
            const index = elements.indexOf(event.target);

            if (index >= 0) {
                popAppear(index);
            }
        });

        popUp.addEventListener("click", (event) => {
            if (event.target === popUp || event.target.id === "closeButt") {
                popUp.style.display = "none";
            }
        });

    });
