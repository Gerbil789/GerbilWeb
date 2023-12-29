async function search() {
    console.log("Search function called!");
    var searchTerm = document.getElementById('search').value;
    console.log("Search for: " + searchTerm + " " + currentSection);
    try {
        const response = await fetch(`http://localhost:5202/api/demo?section=${currentSection}&search=${searchTerm}`);
        const data = await response.json();

        switch (currentSection){
            case 'images':
                processImageResults(data);
                break;
            case 'audio':
                processAudioResults(data);
                break;
            default:
                console.log('Invalid section');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function processImageResults(images) {
    const imageListContainer = document.getElementById('imageList');

    // Clear previous content
    imageListContainer.innerHTML = '';

    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = `data:image/${image.extension};base64,${image.base64String}`;
        imageElement.alt = image.title;
        imageElement.style.maxWidth = '200px';
        imageElement.style.margin = '10px';

        imageListContainer.appendChild(imageElement);
        console.log(image.title + ' ' + image.extension + " loaded");
    });
}

document.getElementById('searchButton').addEventListener('click', search);

