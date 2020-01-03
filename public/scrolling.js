window.addEventListener("wheel", horizontalScroll, { passive: false });
window.addEventListener("scroll", rocketFly);
window.addEventListener("load", initialRocketPosition);

function horizontalScroll(event) {
  //see note here about safari vs other browsers RE where scrolling happens
  //https://www.w3schools.com/jsref/prop_element_scrollleft.asp
  if (window.innerWidth > 1000) {
    event.preventDefault();
    document.documentElement.scrollLeft += event.deltaY;
    document.documentElement.scrollLeft += event.deltaX;
  }
}

//rocket position on load (e.g. in case of refresh in middle) - NB this reuses code
//from rocketFly and could be abstracted
function initialRocketPosition() {
  const windowScroll = document.documentElement.scrollLeft;
  const width =
    document.documentElement.scrollWidth - document.documentElement.clientWidth;
  const scrolled = windowScroll / width;
  const navBarWidth = document.getElementById("navline").width;
  let rocketPosition = scrolled * navBarWidth;
  rocket.style.transform = "rotate(0deg) translateX(" + rocketPosition + "px)";
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
function dragElement(element) {
  let newPositionX = 0;

  element.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    //disable normal scrolling rules which will interfere
    window.removeEventListener("scroll", rocketFly);
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    initialMousePositionX = e.clientX;

    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    newPositionX = e.clientX;

    //limit dragging to navline width
    const maxLeftPos = 0;
    const maxRightPos = document.getElementById("navline").width;

    const rocketDragPosition =
      newPositionX -
      document.getElementById("navline").getBoundingClientRect().left;

    //new dragged position but taking into account constraints
    const boundedRocketPosition = Math.max(
      maxLeftPos,
      Math.min(rocketDragPosition, maxRightPos)
    );

    //copied from above
    console.log(newPositionX, initialMousePositionX);
    if (newPositionX < initialMousePositionX) {
      rocket.style.transform =
        "rotate(180deg) translateX(" + -boundedRocketPosition + "px)";
    } else {
      rocket.style.transform =
        "rotate(0deg) translateX(" + boundedRocketPosition + "px)";
    }

    //update the initial position set
    // initialMousePositionX = abs(boundedRocketPosition);

    //to scroll the page accordingly
    const siteWidth =
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth;

    const navRange = maxRightPos - maxLeftPos;

    document.documentElement.scrollLeft =
      (boundedRocketPosition / navRange) * siteWidth;
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;

    //reactivate normal scrolling rule
    window.addEventListener("scroll", rocketFly);
  }
}
