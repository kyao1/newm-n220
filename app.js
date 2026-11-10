
const wrapper = document.getElementById("wrapper");
const search = document.getElementById("search");
const count = document.getElementById("count");

function convertString(str) {
    return str.toLowerCase().replaceAll(" ", "");
}

fetch("glossary.json")
    .then(response => response.json())
    .then(list => {
        console.log(list);

        list.sort((a, b) => {
            return a.term.localeCompare(b.term);
        });

        function renderTerms(terms) {
            wrapper.innerHTML = "";

            terms.forEach(item => {
                const ele = document.createElement("div");

                const title = document.createElement("h3");
                title.textContent = item.term;

                const definition = document.createElement("p");
                definition.textContent = item.definition;

                ele.appendChild(title);
                ele.appendChild(definition);
                wrapper.appendChild(ele);
            });

            count.textContent = "Showing " + terms.length + " of " + list.length + " terms";
        }

        renderTerms(list);

        search.addEventListener("input", function () {
            const searchValue = convertString(search.value);

            const results = list.filter(item => {
                return convertString(item.term).includes(searchValue);
            });

            renderTerms(results);
        });
    });
