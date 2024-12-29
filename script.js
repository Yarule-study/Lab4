let isFirstClick = true;
let firstElementClicked = false;

function handleClick(event) {
    const target = event.target;

    if (target.id === 'hobby-title') {
        if (isFirstClick) {
            const element = document.getElementById('hobby-title');
            element.style.backgroundColor = '#4CAF50';
            element.style.color = 'white';
            isFirstClick = false;
        } else {
            const element = document.getElementById('hobby-title');
            element.style.backgroundColor = '';
            element.style.color = '';
            isFirstClick = true;
        }
        firstElementClicked = true;
    }

    if (firstElementClicked && target.id === 'hobby1') {
        const element = document.querySelector('#hobby1');
        if (element.style.backgroundColor === '' || element.style.backgroundColor === 'rgb(76, 175, 80)') {
            element.style.backgroundColor = '#FF5722';
            element.style.color = 'white';
        } else {
            element.style.backgroundColor = '';
            element.style.color = '';
        }
    }
}

document.getElementById('hobby-title').addEventListener('click', handleClick);
document.getElementById('hobby1').addEventListener('click', handleClick);

let imageAdded = false;
let imageElement = null;
let imageSize = 800;

document.getElementById('add-image').addEventListener('click', function() {
    if (!imageAdded) {
        imageElement = document.createElement('img');
        imageElement.src = "https://cdn.interesniy.kiev.ua/wp-content/uploads/2014/02/1-Vladimir-2009-05-0524.jpg";
        imageElement.alt = "Київ";
        imageElement.width = imageSize;
        imageElement.id = "kyiv-img";

        document.body.appendChild(imageElement);
        imageAdded = true;
    }
});

document.getElementById('increase-size').addEventListener('click', function() {
    if (imageAdded && imageElement) {
        imageSize += 100;
        imageElement.width = imageSize;
    }
});

document.getElementById('decrease-size').addEventListener('click', function() {
    if (imageAdded && imageElement && imageSize > 100) {
        imageSize -= 100;
        imageElement.width = imageSize;
    }
});

document.getElementById('remove-image').addEventListener('click', function() {
    if (imageAdded && imageElement) {
        document.body.removeChild(imageElement);
        imageAdded = false;
        imageElement = null;
    }
});