const BASEURL = 'https://rickandmortyapi.com/api/character'
const box = document.getElementById('box');

async function aMakeRequest(url, method = 'GET') {
    let response = await fetch(url, {method});
    if (response.ok) {
        return await response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

function createCharacterCard({name, image, status, species, type, gender, origin, location}) {

    const card = document.createElement('div');
    card.className = 'card m-3';
    card.style.maxWidth = '70%';
    container.append(card)

    const cardRow = document.createElement('div');
    cardRow.className = 'row g-0';
    card.append(cardRow)

    const cardSize1 = document.createElement('div');
    cardSize1.className = 'col-md-6';
    cardRow.append(cardSize1);

    const img = document.createElement('img');
    img.src = image;
    img.className = "card-img-top";
    img.style.height = "100%";
    cardSize1.append(img);

    const cardSize2 = document.createElement('div');
    cardSize2.className = 'col-md-6';
    cardRow.append(cardSize2);

    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    cardSize2.append(cardBody);

    const characterName = document.createElement('h4');
    characterName.innerText = name;

    const characterStatus = document.createElement('p');
    characterStatus.innerText = `Status: ${status}`;

    const characterSpecies = document.createElement('p');
    characterSpecies.innerText = `Species: ${species}`;

    const characterType = document.createElement('p');
    characterType.innerText = `Type: ${type}`;

    const characterGender = document.createElement('p');
    characterGender.innerText = `Gender: ${gender}`;

    const characterOrigin = document.createElement('p');
    characterOrigin.innerText = `Origin: ${origin.name}`;

    const characterLocation = document.createElement('p');
    characterLocation.innerText = `Location: ${location.name}`;

    const cardText = document.createElement('div');
    // cardText.className = "card-text";
    cardText.append(
        characterName,
        characterStatus,
        characterSpecies,
        characterType,
        characterGender,
        characterOrigin,
        characterLocation
    )
    cardText.style.textAlign = "center";
    cardBody.append(cardText);

    box.append(card)
}

async function getData(event) {
    event.preventDefault();
    try {
        let urlParams = new URLSearchParams(window.location.search);
        let param = urlParams.get('id');
        let data = await aMakeRequest(`${BASEURL}/${param}`)
        await createCharacterCard(data);
    } catch (error) {
        console.log(error)
    }
}

window.addEventListener('load', getData)
