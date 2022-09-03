window.onload = () => {
  const clock_div = document.querySelector("#clock");

  presec = new Date().getSeconds();
  while (true) {
    if (presec != new Date().getSeconds()) {
      break;
    }
  }

  setInterval(() => {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const secs = String(date.getSeconds()).padStart(2, "0");

    clock_div.innerText = `${hours}:${mins}:${secs}`;
  }, 1000);
};
