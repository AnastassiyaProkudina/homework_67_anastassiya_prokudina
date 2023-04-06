const container = document.getElementById('container')
let button = document.getElementById('add-item-btn');

function onButtonClick() {
    const modal = document.createElement('div');
    modal.className = 'modal'
    modal.innerText = 'Элемент создан'
    let modalTimeout = setTimeout(function () {
        modal.style.display = "none";
    }, 5000);
    container.append(modal)
    console.log(modal)
}

button.addEventListener('click', onButtonClick)

