//---------- Navbar ----------//

window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Portfolio Gallery

let filterContainer = document.querySelector(".gallery-filter");
let galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")){
        // deactivates existing active filter item
        filterContainer.querySelector(".active").classList.remove("active");
        // activates new filter item
        event.target.classList.add("active");
        let filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }

});


    function toggleLecture(id) {
        let content = document.getElementById(id);
        let heading = content.previousElementSibling;
    
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            heading.innerHTML = heading.innerHTML.replace("▼", "▲");
        } else {
            content.style.display = "none";
            heading.innerHTML = heading.innerHTML.replace("▲", "▼");
        }
    }
 
// Review Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:2
        }
    }
})
function toggleLecture(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', function () {
        let filter = this.getAttribute('data-filter');

        document.querySelectorAll('.gallery-item').forEach(el => {
            el.classList.remove('active');
            if (filter === 'all' || el.classList.contains(filter)) {
                el.classList.add('active');
            }
        });
    });
});
document.querySelectorAll('.filter-item').forEach(item => {
item.addEventListener('click', function () {
    let filterValue = this.getAttribute('data-filter');
    
    document.querySelectorAll('.gallery-item').forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
});
});
