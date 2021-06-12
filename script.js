var month = new Date();
console.log(month);
console.log(month.getMonth());

switch (month.getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    this.month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
}

const makeBig = function (el) {
  el.classList.add("big");
  console.log("made big");
};
const boxes = document.querySelectorAll("th");
boxes.forEach((box) => {
  var index = box.innerHTML;
  box.addEventListener("mouseover", function (box) {
    console.log(index);
    var boxId = document.getElementById(index);
    makeBig(boxId);
  });
});
console.log(boxes);
// make box bigger

// change month from int to month name
const monthClass = document.querySelector(".month");
monthClass.textContent = month;
