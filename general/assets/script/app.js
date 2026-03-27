import { currentAccount, postsData } from "./main.js";
import { getToday } from "./utils/date.js";


function toggleButtonState(input, file, btn) {
  const textOk = input.value.trim().length > 0;
  const fileOk = file.files.length > 0;
  btn.disabled = !(textOk || fileOk);
}

