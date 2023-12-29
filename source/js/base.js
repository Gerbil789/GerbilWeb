var currentSection = '';

function showContent(section) {
    var contentDiv = document.getElementById('content');
    fetch('../html/content/' + section + '.html')
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
            currentSection = section;
        })
        .then(() => {console.log(section + " loaded");})
        .catch(error => {
            console.error('Error fetching content:', error);
            contentDiv.innerHTML = '<h1>Error Loading Content</h1>';
        });
}




function loadHeader(){
    fetch('../html/content/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerContainer').innerHTML = data;
    })
    .then(() => {console.log('Header loaded');})
    .catch(error => console.error('Error fetching header:', error));
}



document.addEventListener('DOMContentLoaded', function () {
    console.log('The DOM has been loaded');
    loadHeader();
    showContent('home');
    
});
