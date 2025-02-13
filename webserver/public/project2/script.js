let seconds = 0;
let clockType = "Boring Clock"; // Default clock type
let dadJoke = "";
const dadJokes = [
  "Time for you to get a watch!",
  "It's always time for adventure!",
  "2 Late!",
];

window.onload = () => {
  // Execute `time` function every second
  setInterval(time, 1000);

  // Create a single element to display the time
  const span = document.createElement("span");
  span.classList.add("textBody");

  const container2 = document.getElementById("container2");
  if (container2) {
    container2.appendChild(span); // Add span to container2
  }

  // Styling
  Object.assign(span.style, {
    padding: "10px",
    margin: "10px",
    zIndex: "1000",
  });

  time();

  // BUTTON THAT I REMOVED BELOW
  // Set up the button toggle behavior
  // let btn = document.getElementById("myBtn");
  // let boxH = document.getElementById("container2");
  // let b = boxH.classList;

  // btn.addEventListener("click", () => {
  //   if (b.contains("containerButton")) {
  //     b.remove("containerButton");
  //     b.add("containerHidden");

  //     // Reappear after 8 seconds (ONLY ONCE PER CLICK)
  //     // setTimeout(() => {
  //     //   if (b.contains("containerHidden")) {
  //     //     b.remove("containerHidden");
  //     //     b.add("containerButton");
  //     //   }
  //     // }, 8000);
  //   }
  // });

  // Set up event listeners for clock buttons ONCE// THIS is for the buttons, it changes the clock type so that I can change the text in the time function
  let cowboyClock = document.getElementById("cowboyClock");
  if (cowboyClock) {
    cowboyClock.addEventListener("click", () => {
      clockType = "Cowboy Clock";
    });
  }
  let oldClock = document.getElementById("oldClock");

  if (oldClock) {
    oldClock.addEventListener("click", () => {
      clockType = "Old Clock";
    });
  }
  let boringClock = document.getElementById("boringClock");

  if (boringClock) {
    boringClock.addEventListener("click", () => {
      clockType = "Boring Clock";
    });
  }

  let dadClock = document.getElementById("dadClock");
  if (dadClock) {
    dadClock.addEventListener("click", () => {
      clockType = "Dad Clock";
      dadJoke = randomJoke(dadJokes);
    });
  }

  let alienClock = document.getElementById("alienClock");

  if (alienClock) {
    alienClock.addEventListener("click", () => {
      clockType = "Alien Clock";
    });
  }
  let meanClock = document.getElementById("meanClock");

  if (meanClock) {
    meanClock.addEventListener("click", () => {
      clockType = "Sassy Clock";
    });
  }
};

// TIME FUNCTION HANDLES THE CLOCK AND THE SPAN, IT GETS thE MINUTES, which change the way the sassy clcok and boring clock works.
// also it handles changing the span text when you click other clocks, like the cowboy clock and the dad clock

function time() {
  const date = new Date();
  const span = document.querySelector(".textBody");

  // Get the current hour and last hour
  const currentHour = date.getHours();
  const minutes = date.getMinutes();

  let displayHour = currentHour % 12 || 12;
  const title = document.getElementById("clockTitle");
  title.textContent = clockType;
  // Display time normally, but change text based on conditions
  if (clockType === "Cowboy Clock") {
    span.style.fontStyle = "normal";

    span.textContent = "It's high noon somewhere";
    span.style.fontFamily = "Cinzel";
    title.style.fontFamily = "Cinzel";
  } else if (clockType === "Boring Clock") {
    span.style.fontFamily = "initial";
    span.style.fontStyle = "normal";
    title.style.fontFamily = "initial";
    title.style.fontStyle = "normal";
    span.textContent = date.toLocaleTimeString(); // Default time display
  } else if (clockType === "Dad Clock") {
    span.style.fontFamily = "Comic Neue";
    span.style.fontStyle = "Normal";
    title.style.fontFamily = "Comic Neue";
    span.textContent = dadJoke;
  } else if (clockType === "Alien Clock") {
    span.style.fontStyle = "normal";
    span.style.fontFamily = "initial";
    title.style.fontFamily = "initial";
    title.style.fontStyle = "normal";
    span.textContent = "⟟⏁'⌇ ⚏"; // Special text
  } else if (clockType === "Sassy Clock") {
    span.style.fontStyle = "italic";
    span.style.fontFamily = "initial";
    title.style.fontFamily = "initial";
    title.style.fontStyle = "italic";

    //  CODE FOR SASSY CLOCK< WHICH CHANGES EVERY 15 or 30 minutes.
    if (minutes >= 0 && minutes <= 15) {
      span.textContent = "It's basically " + displayHour;
    } else if (minutes > 15 && minutes <= 45) {
      span.textContent = "It's like " + displayHour + ":30";
    } else if (minutes > 45 && minutes <= 59) {
      span.textContent = "It's pretty much " + ((currentHour + 1) % 12 || 12);
    } else {
      span.textContent = date.toLocaleTimeString();
    }
  } else {
    span.textContent = date.toLocaleTimeString();
  }

  // Debugging output (you can remove this later)
  console.log(`Clock Type: ${clockType}`);
  console.log(`Current Hour: ${currentHour}, Minutes: ${minutes}`);
}

function randomJoke(arr) {
  // Math.random() -- returns a decimal between 0 and 1
  // console.log(Math.random())
  // convert index to not be a decimal
  // we need a proportion calculation to get 4
  // console.log(Math.random() * arr.length)
  // console.log(Math.floor(Math.random() * arr.length))
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
