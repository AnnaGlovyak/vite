import "../css/dashboard.scss";
import "../css/styles.scss";
// import forEach from "lodash/forEach"; // use with lodas
import {forEach} from "lodash-es";
import buttonStyle from "../css/buttonStyle.module.scss";
import movieDb from "../assets/movieDb.json";

const userType = "regular";

const actionMoviesContainer = document.getElementById("action-movies-container");
const animatedMoviesContainer = document.getElementById("animated-movies-container");
const signoutBtn = document.getElementById("signout");

console.log(buttonStyle);
const buttonClass = userType === "premium" ? buttonStyle["button-premium"] : buttonStyle["button-regular"];
signoutBtn.classList.add(buttonClass);

const actionMoviesList = [
    { img: "avengers.jpg", name: "Avengers" },
    { img: "batman.webp", name: "Batman" },
    { img: "extraction.jpeg", name: "Extraction" },
    { img: "flash.jpeg", name: "Flash" },
    { img: "mission-impossible.jpeg", name: "Mission Impossible" },
    { img: "thor.jpeg", name: "Thor" },
];

const animatedMoviesList = [
    { img: "bugs-life.jpeg", name: "Bugs Life" },
    { img: "coco.jpeg", name: "Coco" },
    { img: "inside-out.jpeg", name: "Inside Out" },
    { img: "kungfu-panda.jpg", name: "Kungfu Panda" },
    { img: "moana.jpeg", name: "Moana" },
    { img: "ratatouille.jpeg", name: "Ratatouille" },
    { img: "the-incredibles.jpeg", name: "The Incredibles" },
];

signoutBtn.addEventListener("click", function(){
    window.location.replace('/');
})

function renderTitles(movieList, containerElement) {
    forEach(movieList, (movie) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const movieTitle = document.createElement("p");

        div.classList.add("d-flex", "flex-column");
        // img.src = `../assets/${movie.img}`;
        img.src = new URL(`../assets/${movie.img}`, import.meta.url).href;
        movieTitle.innerText = movie.name;
        movieTitle.classList.add(
            "align-self-center",
            "m-2",
            "font-monospace",
            "fw-bolder",
            "text-light"
        );

        div.appendChild(img);
        div.appendChild(movieTitle);

        containerElement.appendChild(div);
    });
}

renderTitles(actionMoviesList, actionMoviesContainer);
renderTitles(animatedMoviesList, animatedMoviesContainer);
