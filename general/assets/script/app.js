import { currentAccount, postsData } from "./main.js";
import { getToday } from "./utils/date.js";


function toggleButtonState(input, file, btn) {
  const textOk = input.value.trim().length > 0;
  const fileOk = file.files.length > 0;
  btn.disabled = !(textOk || fileOk);
}

function buildPostElement(data, username) {
  const wrapper = document.createElement("div");
  wrapper.className = "card";

  let imagePart = "";
  if (data.img) {
    imagePart = `<img src="${data.img}">`;
  }

  wrapper.innerHTML = `
    <h4>${username}</h4>
    <small>${data.date}</small>
    <p>${data.text}</p>
    ${imagePart}
  `;

  return wrapper;
}


