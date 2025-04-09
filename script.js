const featuredWishes = [

    "Wishing you a fantastic birthday filled with joy! 🎂",

    "May this anniversary bring you endless love and happiness! ❤️",

    "Happy Holi! Let the colors of joy spread everywhere! 🌈"

];

const trendingWishes = [

    "Start your Monday with positivity and energy! 💪",

    "Good morning! May your day be filled with success! ☀️",

    "Wishing you a year full of blessings and love! 🎉"

];

function displayWishes() {

    const featuredDiv = document.getElementById("featured-wishes");

    const trendingDiv = document.getElementById("trending-wishes");

    featuredWishes.forEach(wish => {

        let div = document.createElement("div");

        div.classList.add("wish");

        div.innerText = wish;

        featuredDiv.appendChild(div);

    });

    trendingWishes.forEach(wish => {

        let div = document.createElement("div");

        div.classList.add("wish");

        div.innerText = wish;

        trendingDiv.appendChild(div);

    });

}

function searchWish() {

    let query = document.getElementById("search").value.toLowerCase();

    let wishes = document.querySelectorAll(".wish");

    wishes.forEach(wish => {

        if (wish.innerText.toLowerCase().includes(query)) {

            wish.style.display = "block";

        } else {

            wish.style.display = "none";

        }

    });

}

function toggleMenu() {

    let menu = document.getElementById("menu");

    if (menu.style.display === "block") {

        menu.style.display = "none";

    } else {

        menu.style.display = "block";

    }

}


// 🕒 Next Event Date (YYYY, MM (0-based), DD, HH, MM, SS)
const eventDate = new Date(2025, 2, 14, 0, 0, 0); // 14 March 2025 (Holi)

// Function to update countdown
function updateCountdown() {
    const now = new Date();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerHTML = "🎉 Happening Now!";
    }
}

// 🕒 Auto Update Countdown Every Second
setInterval(updateCountdown, 1000);
updateCountdown(); // Run on page load