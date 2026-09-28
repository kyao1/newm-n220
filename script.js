async function grabAllBreeds() {

    const response = await fetch(
        "https://dog.ceo/api/breeds/list/all"
    );

    const data = await response.json();

    const breeds = Object.keys(data.message);

    const featuredBreeds = breeds.slice(0, 8);

    console.log(featuredBreeds);

    return featuredBreeds;
}

grabAllBreeds();
