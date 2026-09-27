let containerElement = document.createElement('div');
containerElement.classList.add('container-fluid');
document.body.appendChild(containerElement);

let navElement = document.createElement("nav");
navElement.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light");
containerElement.appendChild(navElement);

let navContainer = document.createElement("div");

let navBrand = document.createElement("a");
navBrand.classList.add("navbar-brand");
navBrand.href = "#";
navBrand.textContent = "ShopEase";
navContainer.appendChild(navBrand);
navElement.appendChild(navContainer);

let navToggler = document.createElement("button");
navToggler.classList.add("navbar-toggler");
navToggler.type = "button";

let navTogglerIcon = document.createElement("span");
navTogglerIcon.classList.add("navbar-toggler-icon");
navToggler.appendChild(navTogglerIcon);
navContainer.appendChild(navToggler);

let navCollapse = document.createElement("div");
navCollapse.classList.add("collapse", "navbar-collapse");
navCollapse.id = "navbarNav";
navContainer.appendChild(navCollapse);

let navList = document.createElement("ul");
navList.classList.add("navbar-nav");
navCollapse.appendChild(navList);

let navItems = [
    { text: "Home", href: "#" },
    { text: "Products", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Contact", href: "#" }
];

navItems.forEach(item => {
    let navItem = document.createElement("li");
    navItem.classList.add("nav-item");
    let navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.href = item.href;
    navLink.textContent = item.text;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
}); 

let imageElement = document.createElement("div");

imageElement.classList.add("image");
imageElement.setAttribute("aria-label", "ShopEase");

containerElement.appendChild(imageElement);