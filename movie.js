// JavaScript code
function search_movie() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('movie');

    console.log("input is ", x);
    let movies = []
    for (i = 0; i < x.length; i++) {
        movies.push(x[i].innerHTML.toLowerCase());
    }
    let start = 0;
    let end = movies.length - 1;
    let found = "";

    let letter = String(input);
    if (letter.length == 0) {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "list-item";
        }
    }
    else {
        // to search the input
        for(i = 0; i < x.length; i++) {
            if (movies[i].includes(letter)) {
                x[i].style.display = "list-item";
            }
            else {
                x[i].style.display = "none";
            }
        }
    }
}


const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

