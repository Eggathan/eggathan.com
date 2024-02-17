document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('imageGallery');

    // List your images here
    const images = ['image1.jpg', 'image2.png', 'image3.jpg']; // etc.

    // Alternatively, if you have a large number of images or they change often,
    // consider generating this list dynamically on the server-side, or using a static site generator.

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `./imgs/${image}`;
        imgElement.alt = ''; // Consider adding meaningful alt text for each image
        gallery.appendChild(imgElement);
    });
});
