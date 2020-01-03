//for project gallery: descriptions show on hover and link to github on click
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
  image.addEventListener("click", () => {
    window.location = projectLinks[index];
  });
});

const projectLinks = {
  0: "https://github.com/fac18/week2-ajnp-sbs-todolist",
  1: "https://github.com/fac18/week3-ABEH-trialbytrivia",
  2: "https://github.com/fac18/week4-ABEH-autocomplete",
  3: "https://github.com/fac18/week5-famk-backend-api"
};

//load default bio
window.addEventListener("load", defaultBio);

function defaultBio() {
  document.getElementById("bio-text").innerHTML = bios["medium"];
}

//change bio when radio buttons clicked
Array.from(document.getElementsByName("bio-length")).forEach(button => {
  button.addEventListener("click", radioClick);
});

function radioClick(event) {
  if (event.target.checked) {
    console.log(event.target.value);
    document.getElementById("bio-text").innerHTML = bios[event.target.value];
  }
}

const bios = {
  short:
    "<p>I'm Gillian, a recent graduate of the <a href='https://www.foundersandcoders.com/'>Founders and Coders</a> full-stack bootcamp.  I'm looking for full-stack/back-end developer opportunities.</p><p>Previously, I spent 4 years in finance and 2 years teaching English.</p><p>I'm looking forward to honing my development skills in a team environment, while bringing my previously developed skills to the table too.</p>",
  medium:
    "<p>I'm Gillian, a recent graduate of the <a href='https://www.foundersandcoders.com/'>Founders and Coders</a> full-stack bootcamp.  I'm currently looking for full-stack or back-end developer opportunities.</p><p>Before moving into tech, I spent 4 years in finance in London and Bermuda and 2 years teaching English in sunny Rome.</p><p>I have a First Class degree from the University of Edinburgh in English Literature and Latin</p><p>I'm looking forward to honing my development skills in a team environment, while bringing my previously developed skills to the table too.</p>",
  long:
    "<p>I'm Gillian, a recent graduate of the <a href='https://www.foundersandcoders.com/'>Founders and Coders</a> full-stack bootcamp.  I'm currently looking for full-stack or back-end developer opportunities.</p><p>Before moving into tech, I spent 4 years in finance in London and Bermuda and 2 years teaching English in sunny Rome.  While working in finance I did a lot of large-scale spreadsheet modelling which was a sort of introduction to coding.  It gave me a lot of insight into how business processes and technology are integrated, and how in traditional industries there is room for improvement.</p><p>I have a First Class degree from the University of Edinburgh in English Literature and Latin.  While it might not be the 100% traditional background for a developer, I think the literary and linguistic analsysis, and rigorous application of grammar and syntax in Latin are actually a perfect preparation for programming.</p><p>I'm looking forward to honing my development skills in a team environment, while bringing my previously developed skills to the table too.</p>"
};

//function to autogenerate stars for each section
function stars() {
  const sections = document.getElementsByTagName("section");
  Array.from(sections).forEach(section => {
    for (let i = 0; i < 30; i++) {
      let newStar = document.createElement("img");
      newStar.src = "./temp resources/star.svg";
      newStar.classList.add("star");
      newStar.style.top = Math.random() * window.innerHeight + "px";
      newStar.style.left = Math.random() * window.innerWidth + "px";
      section.appendChild(newStar);
    }
  });
}

window.onload = stars();
