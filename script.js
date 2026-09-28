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
            console.log(breed, image);
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
