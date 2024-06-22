//Active links menu
const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("active");
    }
}

links.forEach(activeLink);

//Active itens budget page
const parameters = new URLSearchParams(location.search);
parameters.forEach(activeProduct);

function activeProduct(parameter) {
    const element = document.getElementById(parameter);
    if (element) {
        element.checked = true;
    }
}

// Asks(Page insurance)
const asks = document.querySelectorAll(".asks button");

function activeAsk(event) {
    const ask = event.currentTarget;
    const controls = ask.getAttribute("aria-controls");
    const idResponse = document.getElementById(controls);

    idResponse.classList.toggle("active");
    const active = idResponse.classList.contains("active");

    ask.setAttribute("aria-expanded", active);
}

function eventsAsks(ask) {
    ask.addEventListener("click", activeAsk);
}

asks.forEach(eventsAsks);

// Bikes gallery
const gallery = document.querySelectorAll(".bicycle-images img");
const galleryContainer = document.querySelector(".bicycle-images");

function changeImage(event) {
    const img = event.currentTarget;
    const media = window.matchMedia('(min-width: 1000px)').matches;
    
    if(media){
        galleryContainer.prepend(img);
    }
}

function eventsGallery(img) {
    img.addEventListener("click", changeImage);
}

gallery.forEach(eventsGallery);


// Animations
if(window.SimpleAnime){
    new SimpleAnime();
}