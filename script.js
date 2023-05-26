function addToCart(imageUrl) {
    alert("Item added!");
    let selectedImages = localStorage.getItem('selectedImages');
    if (!selectedImages) {
      selectedImages = [];
    } else {
      selectedImages = JSON.parse(selectedImages);
    }
    
    selectedImages.push(imageUrl);
    
    localStorage.setItem('selectedImages', JSON.stringify(selectedImages));
  }
  