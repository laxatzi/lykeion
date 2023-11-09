const deadline = new Date("dec 31, 2024 15:37:25").getTime();

const timeInterval = setInterval(() => {
  const now = new Date().getTime();
  const interval = deadline - now;

  const days = Math.floor(interval / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((interval % (1000 * 60)) / 1000);

  // time output on page
  document.querySelector("#js--day").innerHTML = days;
  document.querySelector("#js--hour").innerHTML = hours;
  document.querySelector("#js--min").innerHTML = minutes;
  document.querySelector("#js--sec").innerHTML = seconds;
}, 1000);
