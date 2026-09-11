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

const moreContent = document.querySelector(".moreContent");
const toggleLinkReadMore = document.querySelector(".toggleButtonReadMore");

let isShowMore = false;
 
toggleLinkReadMore.addEventListener('click', (event)=>{
    event.preventDefault();
    isShowMore = !isShowMore;
    if (isShowMore){
        moreContent.style.display = "block";
        toggleLinkReadMore.textContent = "Read Less";

    } else {
        moreContent.style.display = "none";
        toggleLinkReadMore.textContent = "Read More";
    }
});




