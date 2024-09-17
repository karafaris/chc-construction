// Array of gallery data with all image sources
const galleryData = [
    [
      'img/414 N Denver Ave KCMO, MO 64123.jpg',
      'img/denver-before-and-after.jpg'
    ],
    [
      'img/821 NE Cedar St Lee\'s Summit, MO 64086.jpg',
      'img/cedar-after-photo.jpg'
    ],
    [
      'img/1028 W Fairwood Ln Olathe, KS 66061.jpg',
      'img/olathe-before-and-after.jpg'
    ],
    [
      'img/5433 Norton Ave KCMO, MO 64130.jpg',
      'img/norton-before-and-afters.jpg'
    ],
    [
      'img/Madison-Ave-before-outside-picture.jpg',
      'img/norton-before-and-afters.jpg'
    ]
  ];
  
  let currentGalleryIndex = 0;
  let currentImageIndex = 0;
  
  function openGallery(galleryIndex, imageIndex) {
    currentGalleryIndex = galleryIndex;
    currentImageIndex = imageIndex;
    const zoomedImage = document.getElementById('zoomedImage');
    zoomedImage.src = galleryData[galleryIndex][imageIndex];
    
    document.getElementById('zoomed').style.display = 'flex';
  }
  
  function closeZoom() {
    document.getElementById('zoomed').style.display = 'none';
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryData[currentGalleryIndex].length;
    const zoomedImage = document.getElementById('zoomedImage');
    zoomedImage.src = galleryData[currentGalleryIndex][currentImageIndex];
  }
  
  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryData[currentGalleryIndex].length) % galleryData[currentGalleryIndex].length;
    const zoomedImage = document.getElementById('zoomedImage');
    zoomedImage.src = galleryData[currentGalleryIndex][currentImageIndex];
  }
  