require('dotenv').config();
const m = require('masto');

const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io/',
    accessToken: process.env.TOKEN
});

const timeZones = Intl.supportedValuesOf("timeZone"); // Get all available time zones



async function findTimeZonesAtFivePM() {
    const now = new Date(); 
    // filtuering through the time zones, I got this through chatgpt, but I tried to understand it rather than letting it code for me blindly.
    const matchingZones = timeZones.filter(timeZone => {
        const options = { timeZone, hour: 'numeric', hour12: false };   //this picks out only the hour, and the hour12 uses the 24 hour format
        const localHour = new Intl.DateTimeFormat('en-US', options).format(now);//this is formatting the object Options, when you check a new place
        return parseInt(localHour, 10) === 17; //this is finally checking if the local hour is equal to 17
    });

    return matchingZones;
}


async function fetchRandomDrink() {
    try {
        let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');//luckily this api has a random cocktail url
        let data = await response.json();
        return data.drinks[0]; // Return the drink for the async function
    } catch (error) {
        console.error('Error fetching random cocktail:', error);
        return null;
    }
}


async function makeStatus() {
    const fivePMZones = await findTimeZonesAtFivePM();
    const drink = await fetchRandomDrink(); //grabbing the function 

    let postText;// variable for giving the text for the bot to post with
    let emojis = ['🍺', '🍷', '🍸','🍹','🥂','🍾','🥃'];
  
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  //I had a problem where it would show ALL of the timezones where it was 5, so i did a randomizer from the array of time zones at 5PM
    if (fivePMZones.length > 0) {
        const randomZone = fivePMZones[Math.floor(Math.random() * fivePMZones.length)];
        postText = `It's 5 PM in ${randomZone}! Make youself a ${drink.strDrink}! ${randomEmoji}`;
    } else {
        postText = "It's not 5pm anywhere, but drink anyways!";
    }

    const status = await masto.v1.statuses.create({
        status: postText,
        visibility: 'public' // Change to 'public' if you want it visible to everyone
    });

    console.log(status.url);

}


let lastPostedHour = new Date().getHours(); // Start with the current hour

setInterval(async () => {
    const currentHour = new Date().getHours();
    if (currentHour !== lastPostedHour) {
        await makeStatus(); // Only run when the hour changes
        lastPostedHour = currentHour;
    }
}, 5000); // Still checks every 5 seconds
