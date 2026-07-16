const start_waiting_date = Date.UTC(2025, 5, 18, 21, 0, 0);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const copy_text = document.querySelector(".copy-text");
const copy_row = document.querySelector(".copy-row");
const copy_feedback = document.querySelector(".copy-feedback");

function update_timer() {
  let ms_difference = Date.now() - start_waiting_date;
  let difference_array = [
    Math.floor(ms_difference / 86400000),
    Math.floor(((ms_difference / 1000) % 86400) / 3600),
    Math.floor(((ms_difference / 1000) % 3600) / 60),
    Math.floor((ms_difference / 1000) % 60),
  ];

  days.innerText = (difference_array[0] + "").padStart(2, "0");
  hours.innerText = (difference_array[1] + "").padStart(2, "0");
  minutes.innerText = (difference_array[2] + "").padStart(2, "0");
  seconds.innerText = (difference_array[3] + "").padStart(2, "0");

  copy_text.innerText = `жду им день ${difference_array[0] + 1}`;
}

copy_row.addEventListener("click", () => {
  navigator.clipboard.writeText(copy_text.innerText);
  copy_feedback.classList.add("show");
  setTimeout(() => {
    copy_feedback.classList.remove("show");
  }, 1000);
});

update_timer();
setInterval(update_timer, 1000);
