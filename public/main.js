window.addEventListener("wheel", horizontalScroll, { passive: false });
window.addEventListener("scroll", rocketFly);

function horizontalScroll(event) {
  //see note here about safari vs other browsers RE where scrolling happens
  //https://www.w3schools.com/jsref/prop_element_scrollleft.asp

  event.preventDefault();
  document.documentElement.scrollLeft += event.deltaY;
  document.documentElement.scrollLeft += event.deltaX;
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
  short: "this is a short bio",
  medium: "this is a medium bio",
  long: "this is a long bio"
};
