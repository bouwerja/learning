document.addEventListener("DOMContentLoaded", () => {
    // console.log("The DOM is fully loaded.");
    pageLoadQuote();
})

async function pageLoadQuote() {
    const url = "https://api.animechan.io/v1/quotes/random";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("HTTP Error Code: " + response.status);
        }
        const jsonResp = await response.json();

        const newQuote = document.createElement("p");
        newQuote.textContent = jsonResp.data.content;
        newQuote.id = "initial_quote";

        document.body.appendChild(newQuote);
    } catch (error) {
        const warn = document.createElement("h2");
        warn.textContent = error.message + " | Check console.";
        document.body.appendChild(warn);

        console.error(error.message);
    }
}

async function searchAnimeTitle() {
    try {

        const inputElement = document.getElementById("searchInput");
        const inputValue = inputElement.value;
        if (inputValue.length < 1) {
            throw new Error("No title entered.");
        }

        const url = "https://api.animechan.io/v1/quotes?anime=" + String(inputValue);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("HTTP Error Code: " + response.status);
        }
        const jsonResponse = await response.json();
        const animeData = jsonResponse.data;

        const initialQuote = document.getElementById("initial_quote");
        if (initialQuote) {
            initialQuote.remove();
        }

        animeData.forEach(element => {
            console.log(element.content);
        });
        
    } catch (error) {
        let message = "A error has occured" + error.message;
        console.error(message);
        alert(message);
    }
}

async function displayLoader(responseValue) {

    const timeOut = 30;

    for (let i = 0; i < timeOut; i++) {

        if (responseValue !== undefined && i >= 3) {
            document.getElementById("Loading").remove();
            return
        }

        let message = "Loading.";
        if (i%2 === 0) {
            message = "Loading..";
        } else if (i%3 === 0) {
            message = "Loading...";
        }

        let loading = document.getElementById("Loading");
        loading.textContent = message;

        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(500);
    }

    alert("You have timed out.")
    
    return
}