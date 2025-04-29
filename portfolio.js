
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');   // Show/hide dropdown
    burger.classList.toggle('toggle');     // Burger icon animation
});


function openPopup(imageSrc, description) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupDesc = document.getElementById('popup-desc');

    popup.style.display = 'flex';
    popupImg.src = imageSrc;
    popupDesc.textContent = description;
}

// Close Popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


let slideIndexAuto = 0;
autoSlideShow();

function autoSlideShow() {
  let slides = document.querySelectorAll(".slide-img");
  slides.forEach(slide => slide.classList.remove("active"));

  slideIndexAuto++;
  if (slideIndexAuto > slides.length) slideIndexAuto = 1;

  slides[slideIndexAuto - 1].classList.add("active");

  setTimeout(autoSlideShow, 3000); // Change image every 3 seconds
}

function openModal(imageSrc) {
    console.log('Opening modal with image:', imageSrc);
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imageSrc;
    modal.style.display = 'flex';
  }

  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
  }


