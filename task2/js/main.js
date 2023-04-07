const BASEURL = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20'
const row = document.getElementById('row');

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

function createCharacterCard({name, image, id}) {
    const cardSize = document.createElement('div');
    cardSize.className = 'col-sm-6 col-xl-3 my-3';

    const cardLink = document.createElement('a');
    cardLink.href = `character.html?id=${id}`;
    cardLink.style.textDecoration = 'none';
    cardLink.style.color = 'grey'
    cardSize.append(cardLink)

    const card = document.createElement('div');
    card.className = 'card';
    cardLink.append(card)


    const img = document.createElement('img');
    img.src = image
    img.className = "card-img-top"
    card.append(img)

    const cardBody = document.createElement('div');
    cardBody.className = "card-body"
    card.append(cardBody)

    const cardText = document.createElement('p');
    cardText.className = "card-text"
    cardText.innerText = name
    cardText.style.textAlign = "center"
    cardBody.append(cardText)

    row.append(cardSize)
}

async function getData(event) {
    event.preventDefault();
    try {
        let data = await aMakeRequest(BASEURL)
        for (let character of data) {
            createCharacterCard(character)
        }

    } catch (error) {
        console.log(error)
    }
}

window.addEventListener('load', getData)