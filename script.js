async function grabAllBreeds() {

    const response = await fetch(
        "https://dog.ceo/api/breeds/list/all"
    );

    const data = await response.json();

    const breeds = Object.keys(data.message);

    const firstEight = breeds.slice(0, 8);

    console.log(firstEight);

    return firstEight;
}


grabAllBreeds().then((breeds) => {

    breeds.forEach((breed) => {

        grabBreedImage(breed).then((image) => {
            renderBreed(breed, image);
        });

    });

});


async function grabBreedImage(breed) {

    const response = await fetch(
        "https://dog.ceo/api/breed/" + breed + "/images/random"
    );

    const data = await response.json();

    return data.message;
}


function renderBreed(breed, image) {

    const ele = document.createElement("div");

    const eleName = document.createElement("h2");
    eleName.innerHTML = breed;

    const eleImage = document.createElement("img");
    eleImage.src = image;
    eleImage.alt = breed;

    ele.appendChild(eleImage);
    ele.appendChild(eleName);

    document.getElementById("wrapper").appendChild(ele);
}
