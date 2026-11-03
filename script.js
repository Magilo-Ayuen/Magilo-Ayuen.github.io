const swiper = new Swiper('.testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el:'.testimonials-pagination',
        clickable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    }
});

// SIDEBAR 

// function showSideBar() {
//     const sidebar = document.querySelector(".sideBar");
//     sidebar.style.display="flex";
// }
// SHOW SIDEBAR
const showSideBar = () => {
    const sidebar = document.querySelector(".sideBar");
    sidebar.style.display = "flex";
}

// HIDE SIDEBAR
const hideSideBar = () => {
    const hidesidebar = document.querySelector(".sideBar");
    hidesidebar.style.display = "none";
}

// READ MORE - READ LESS

const toggleButtons = document.querySelectorAll('.toggleButtonReadMore');
const moreContentSpans = document.querySelectorAll('.moreContent');

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the page from jumping to the top

    const hiddenText = moreContentSpans[index];

    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
      hiddenText.style.display = 'inline';
      button.textContent = 'Read Less';
    } else {
      hiddenText.style.display = 'none';
      button.textContent = 'Read More';
    }
  });
});



