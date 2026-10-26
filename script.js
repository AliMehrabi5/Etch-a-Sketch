const container = document.querySelector(".container");
const newGridButton = document.querySelector("#newGrid");

function addSquares(number) {
    container.style.setProperty("--grid-size", number);

    for (let i = 0; i < number * number; i++) {
        const square = document.createElement("div");

        square.classList.add("square");

        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        square.dataset.color = `rgb(${red}, ${green}, ${blue})`;
        square.dataset.darkness = "0";

        square.addEventListener("mouseover", function () {
            let darkness = Number(square.dataset.darkness);

            if (darkness < 4) {
                darkness++;
                square.dataset.darkness = darkness;

                square.style.backgroundColor = square.dataset.color;
                square.style.opacity = Math.min(darkness * 0.25, 1);
            }
        });

        container.appendChild(square);
    }
}

function createNewGrid() {
    const number = Number(
        prompt("Please enter the number of squares per side (1 to 100):")
    );

    if (
        !Number.isInteger(number) ||
        number < 1 ||
        number > 100
    ) {
        alert("Please enter a valid integer between 1 and 100.");
        return;
    }

    container.innerHTML = "";
    addSquares(number);
}

newGridButton.addEventListener("click", createNewGrid);

// Create the first grid when the page loads
createNewGrid();
