function addToCart(imageSrc) {
    // Create an image element
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
  
    // Get the cart items container
    var cartItemsContainer = document.getElementById("cartItems");
  
    // Append the image to the cart items container
    cartItemsContainer.appendChild(imageElement);
  }
  