var renderTitle = function (title) {
  var tagBody = document.querySelector("body");
  tagBody.innerHTML = `<h1>${title}</h1>`;
};

var renderTitleI = function (title) {
  var tagBody = document.querySelector("body");
  tagBody.innerHTML = `<i style="font-size: 3rem">${title}</i>`;
};

var main = function (callBack) {
  callBack("Hai");
};

main(renderTitleI);
