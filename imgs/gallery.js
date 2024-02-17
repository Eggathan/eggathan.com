document.getElementById('updateGallery').addEventListener('click', function() {
    const gallery = document.getElementById('imageGallery');
    gallery.innerHTML = ''; // Clear the gallery

    // GitHub API URL for contents of the image folder
    const apiUrl = 'https://api.github.com/repos/yourUsername/yourRepository/contents/path/to/images/folder';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(file => {
                if(file.type === "file") {
                    const img = document.createElement('img');
                    img.src = file.download_url; // Use the download_url to get the raw image
                    img.alt = 'Gallery image';
                    gallery.appendChild(img);
                }
            });
        })
        .catch(error => console.error('Error loading the images:', error));
});
