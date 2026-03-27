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

function displayPosts(list, container, username) {
  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const element = buildPostElement(list[i], username);
    container.appendChild(element);
  }
}

function readFileAsImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function showUserInfo(user, box) {
  const info = user.getInfo();

  box.innerHTML = `
    <p>Name: ${info.name}</p>
    <p>Email: ${info.email}</p>
    <p>Pages: ${info.pages}</p>
    <p>Groups: ${info.groups}</p>
  `;
}

const messageBox = document.getElementById("postMessage");
const fileInput = document.getElementById("uploadImage");
const postButton = document.getElementById("submitPost");
const feed = document.getElementById("feedContainer");

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");
const profileIcon = document.getElementById("profileIcon");
const userDetails = document.getElementById("userDetails");

messageBox.addEventListener("input", () => {
  toggleButtonState(messageBox, fileInput, postButton);
});

fileInput.addEventListener("change", () => {
  toggleButtonState(messageBox, fileInput, postButton);
});

document.getElementById("postAreaForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  let imageData = "";

  if (fileInput.files[0]) {
    imageData = await readFileAsImage(fileInput.files[0]);
  }
  postsData.unshift({
    text: messageBox.value,
    img: imageData,
    date: getToday()
  });

  displayPosts(postsData, feed, currentAccount.name);

  e.target.reset();
  postButton.disabled = true;
});
