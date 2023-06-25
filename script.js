// Написати приклад використання методів функцій window.open()/window.close().


let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
let windowWidth = 400;
let windowHeight = 500;
let topPosition = screenHeight - windowHeight;
let leftPosition = screenWidth - windowWidth;

let openedWindow;

showWindowBtn.onclick = () => {
  openedWindow = window
    .open('https://ithillel.ua/', 'hillel', `top=${topPosition}, left=${leftPosition}, width=${windowWidth}, height=${windowHeight}`);
};


closeWindowBtn.onclick = () => {
  openedWindow.close();
}

