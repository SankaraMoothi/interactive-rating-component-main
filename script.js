let rate = 0;
function rating(num, value) {
  const list = document.getElementsByTagName("li");
  const arr = Array.from(list);

  // using forEach
  arr.forEach((el) => {
    el.classList.remove("back");
  });

  console.log(num);
  rate = num;
  const li = document.getElementById(value);
  li.classList.add("back");
}

function onSubmit() {
  if (rate === 0) {
    alert("give rating");
  } else {
    const main = document.querySelector(".main");
    main.style.display = "none";
    const context = document.querySelector(".context");
    context.style.display = "flex";
    const output = document.querySelector(".output");
    output.innerHTML = `You selected ${rate} out of 5`;
  }
}
