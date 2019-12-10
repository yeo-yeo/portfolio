window.addEventListener("wheel", horizontalScroll, { passive: false });
window.addEventListener("scroll", rocketFly);

function horizontalScroll(event) {
  //see note here about safari vs other browsers RE where scrolling happens
  //https://www.w3schools.com/jsref/prop_element_scrollleft.asp
  if (window.innerWidth > 1000) {
    event.preventDefault();
    document.documentElement.scrollLeft += event.deltaY;
    document.documentElement.scrollLeft += event.deltaX;
  }
}

//move rocket when scrolling
let rocketPosition = 0;
const rocket = document.getElementById("rocket");

function rocketFly() {
  const windowScroll = document.documentElement.scrollLeft;
  const width =
    document.documentElement.scrollWidth - document.documentElement.clientWidth;
  const scrolled = windowScroll / width;
  const navBarWidth = document.getElementById("navline").width;
  let pixelsToMove = scrolled * navBarWidth;

  //check if rocket is moving in different direction, flip if so, then move
  if (pixelsToMove < rocketPosition) {
    const rotatedPixelsToMove = pixelsToMove * -1;
    rocket.style.transform =
      "rotate(180deg) translateX(" + rotatedPixelsToMove + "px)";
  } else {
    rocket.style.transform = "rotate(0deg) translateX(" + pixelsToMove + "px)";
  }

  //reset rocketPosition for next movement
  rocketPosition = pixelsToMove;
}

// Make the element draggable:
dragElement(rocket);
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    // set the element's new position:
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";

    //add some more stuff here so page scrolls when you drag the rocket
    //also need to stop it from going over edge of navline
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//for project gallery: descriptions show on hover
const projectImages = document.getElementsByClassName("project-image");
const projectDescriptions = document.getElementsByClassName(
  "project-description"
);
Array.from(projectImages).forEach((image, index) => {
  image.addEventListener("mouseenter", () => {
    image.style.opacity = "0.25";
    projectDescriptions[index].style.opacity = "1";
    projectDescriptions[index].style.display = "block";
  });
  image.addEventListener("mouseleave", () => {
    image.style.opacity = "1";
    projectDescriptions[index].style.opacity = "0";
    projectDescriptions[index].style.display = "none";
  });
});

//change bio when radio buttons clicked
Array.from(document.getElementsByName("bio-length")).forEach(button => {
  button.addEventListener("click", radioClick);
});

function radioClick(event) {
  if (event.target.checked) {
    document.getElementById("bio-text").textContent = bios[event.target.value];
  }
}

bios = {
  short:
    "A shorter bio about me.  TL;DR.  Who I am, what I've done in my life, why I want to be a developer.",
  medium:
    "A medium length bio about me.  This will be the default.  Not too much information, not too little.  Who I am, what I've done in my life, why I want to be a developer.",
  long:
    "A longer bio about me.  More background and details.  Who I am, what I've done in my life, why I want to be a developer."
};

//function to autogenerate stars for each section
function stars() {
  const sections = document.getElementsByTagName("section");
  Array.from(sections).forEach(section => {
    for (let i = 0; i < 30; i++) {
      let newStar = document.createElement("img");
      newStar.src = "../temp resources/star.svg";
      newStar.classList.add("star");
      newStar.style.top = Math.random() * window.innerHeight + "px";
      newStar.style.left = Math.random() * window.innerWidth + "px";
      section.appendChild(newStar);
    }
  });
}

window.onload = stars();
