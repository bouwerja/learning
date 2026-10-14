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
            const respValue = await response.json()

            if (response.status === 404) {
                throw new Error(respValue.error.message + " | Not Found! Maybe check your spelling.")
            }

            throw new Error("Error Message: " + respValue.error.message);
        }

        const jsonResponse = await response.json();
        const animeData = jsonResponse.data;

        const initialQuote = document.getElementById("initial_quote");
        if (initialQuote) {
            initialQuote.remove();
        }

        let quoteCount = 1;
        let historyArray = [];
        const uList = document.createElement("ul");
        
        animeData.forEach(element => {
            const itemName = `quote-item-${quoteCount}`;
            let iList = document.getElementById(itemName);
            if (!iList) {
                iList = document.createElement("li");
                iList.id = itemName;
            }

            const quote = `Quote ${quoteCount}: ` + element.content;
            iList.textContent = quote;
            quoteCount++;
            historyArray.push(quote);

            uList.appendChild(iList);

        });

        document.body.appendChild(uList);

        const oldHeading = document.getElementById("prev-quote");
        if (oldHeading) {
            oldHeading.remove();
        }

        const oldList = document.getElementById("prev-quote-list");
        if (oldList) {
            oldList.remove();
        }

        const storage = localStorage.getItem("prevQuote");

        if (storage !== null) {
            const quotes = JSON.parse(storage);

            if (quotes && quotes.length > 0) {
                const prevQuoteHeading = document.createElement("h2");
                prevQuoteHeading.id = "prev-quote";
                prevQuoteHeading.textContent = "These are your previous quotes.";
                document.body.appendChild(prevQuoteHeading);

                const prevQuoteList = document.createElement("ul");
                prevQuoteList.id = "prev-quote-list";

                quotes.forEach(quoteText => {
                    const li = document.createElement("li");
                    li.textContent = quoteText;
                    prevQuoteList.appendChild(li);
                });

                document.body.appendChild(prevQuoteList);
            }
        }

        localStorage.setItem("prevQuote", JSON.stringify(historyArray));


    } catch (error) {
        let message = "A error has occured: " + error.message;
        console.error(message);
        alert(message);
    }
}