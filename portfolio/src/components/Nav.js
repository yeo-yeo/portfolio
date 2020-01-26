import React from "react";

function Nav() {
  const [rocketStyle, setRocketStyle] = React.useState({
    transform: `rotate(0deg) translateX(0px)`
  });

  //used to track rocket position state for benefit of event handlers which can't see updated state
  const rocketPositionRef = React.useRef(0);

  //navbar ref, to get its width
  const navline = React.useRef();

  //add event listener to move rocket when window is scrolled
  React.useEffect(() => {
    window.addEventListener("scroll", rocketFly);
    return () => window.removeEventListener("scroll", rocketFly);
  }, []);

  function rocketFly() {
    const windowScroll = document.documentElement.scrollLeft;
    const width =
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth;
    const scrolled = windowScroll / width;
    const navlineWidth = navline.current.width;
    const pixelsToMove = scrolled * navlineWidth;

    //check if rocket is moving fwd or back
    if (pixelsToMove < rocketPositionRef.current) {
      console.log("shouldnt log here");
      //going back: rotate and adjust position accordingly
      setRocketStyle({
        transform: `rotate(180deg) translateX(${-pixelsToMove}px)`
      });
    } else {
      console.log("shouldnt log here");
      //going forwards: no rotation
      setRocketStyle({
        transform: `rotate(0deg) translateX(${pixelsToMove}px)`
      });
    }
    rocketPositionRef.current = pixelsToMove;
  }

  //declared so can be seen by multiple fns (may not work)
  let initialMousePositionX;

  //rocket draggability
  function startRocketDrag(event) {
    //THIS ISN'T WORKING!
    window.removeEventListener("scroll", rocketFly);
    event.preventDefault();
    initialMousePositionX = event.clientX;

    //remove when let go of mouse
    document.addEventListener("mouseup", endRocketDrag);
    // call a function whenever the cursor moves:
    document.addEventListener("mousemove", rocketDrag);
  }

  function rocketDrag(event) {
    event.preventDefault();
    // calculate the new cursor position:
    let newPositionX = event.clientX;

    //limit dragging to navline width
    const maxLeftPos = 0;
    const maxRightPos = navline.current.width;

    const rocketDragPosition =
      newPositionX - navline.current.getBoundingClientRect().left;

    //new dragged position but taking into account constraints
    const boundedRocketPosition = Math.max(
      maxLeftPos,
      Math.min(rocketDragPosition, maxRightPos)
    );

    if (newPositionX < initialMousePositionX) {
      console.log("goback");
      setRocketStyle({
        transform: `rotate(180deg) translateX(${-boundedRocketPosition}px)`
      });
    } else {
      console.log("go fwd");
      setRocketStyle({
        transform: `rotate(0deg) translateX(${boundedRocketPosition}px)`
      });
    }
    rocketPositionRef.current = boundedRocketPosition;

    //to scroll the page accordingly
    const siteWidth =
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth;
    const navRange = maxRightPos - maxLeftPos;
    document.documentElement.scrollLeft =
      (boundedRocketPosition / navRange) * siteWidth;
  }

  function endRocketDrag() {
    // stop moving when mouse button is released:
    document.removeEventListener("mouseup", endRocketDrag);
    document.removeEventListener("mousemove", rocketDrag);
    //reactivate normal scrolling rule
    window.addEventListener("scroll", rocketFly);
  }

  return (
    <nav id="rocket-nav">
      <img
        src={require("../assets/navline.svg")}
        alt=""
        id="navline"
        ref={navline}
      />
      <img
        src={require("../assets/rocket-svgrepo-com 1.svg")}
        alt=""
        id="rocket"
        style={rocketStyle}
        onMouseDown={startRocketDrag}
      />
    </nav>
  );
}

export default Nav;
