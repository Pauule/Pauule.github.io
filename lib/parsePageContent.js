window.onload(parseContent());

function parseContent() {
  var container = document.getElementsByClassName("main")[0];
  var input;
  var file = new XMLHttpRequest();
  file.open("GET", "res/pageContent.json", false);
  file.send();
  input = JSON.parse(file.responseText);
  input.reverse();
  for (var i = 0; i < input.length; i++) {
    createEntry(input[i], container);
  }
}

function createEntry(data, container) {
  var entryContainer = document.createElement("div");
  entryContainer.setAttribute("class", "contentEntry");

  var text = document.createElement("div");
  text.setAttribute("class", "contentText");
  text.innerHTML = data.content;

  var title = document.createElement("h1");
  title.setAttribute("class", "contentTitle");
  title.innerHTML = data.title;

  var date = document.createElement("div");
  date.setAttribute("class", "contentDate");
  date.innerHTML = data.date;

  var author = document.createElement("div");
  author.setAttribute("class", "contentAuthor");
  author.innerHTML = "by " + data.author;

  entryContainer.appendChild(title);
  entryContainer.appendChild(author);
  entryContainer.appendChild(text);
  entryContainer.appendChild(date);
  container.appendChild(entryContainer);
}
