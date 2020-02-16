import imageWeek8 from "../assets/week8.jpg";
import imageWeek5 from "../assets/week5.jpg";
import imageWeek2 from "../assets/week2.jpg";
import imageWeek7 from "../assets/week7.jpg";
import imageApplication from "../assets/application.png";
import imageCalculator from "../assets/calculator.jpg";

const makeProject = (title, imageUrl, githubUrl, text) => {
  return { title, imageUrl, githubUrl, text };
};

const projectList = [
  makeProject(
    "Yearbook",
    imageWeek8,
    "https://github.com/fac18/week-8-AGIL/",
    "A fun yearbook for cohort 18 of the Founders and Coders course"
  ),
  makeProject(
    "Cryptocurrency converter",
    imageWeek5,
    "https://github.com/fac18/week5-famk-backend-api",
    "Check real-time values of popular cryptocurrencies against several major world currencies"
  ),
  makeProject(
    "To do list",
    imageWeek2,
    "https://github.com/fac18/week2-ajnp-sbs-todolist",
    "A to-do list project built using TDD. To-do items can be added, edited, deleted, and marked as done."
  ),
  makeProject(
    "Authorisation game",
    imageWeek7,
    "https://github.com/fac18/week7-coda-squall",
    " A project using databases, user profiles and authentication with a view to being developed into a game"
  ),
  makeProject(
    "Founders and Coders Application",
    imageApplication,
    "https://github.com/yeo-yeo/yeo-yeo.github.io",
    "My application to the Founders and Coders programme"
  ),
  makeProject(
    "Calculator",
    imageCalculator,
    "https://github.com/yeo-yeo/JS_Calculator",
    "A simple Calculator built using Javascript"
  )
];

export default projectList;
