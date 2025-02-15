const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

const getTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const timeInterval = 6;
  console.log(seconds, minutes, hours);

  secondsHand.style.transform = "rotate(" + seconds * timeInterval + "deg)";
  minutesHand.style.transform =
    "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)";
  hoursHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
};

// getTime();
setInterval(getTime, 100);
