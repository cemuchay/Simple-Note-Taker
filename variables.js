const note = { title: "x", content: "y", Date: "z" };
const body = document.querySelector("body");
//parent elements
const titleDiv = document.createElement("div");
const createNoteDiv = document.createElement("div");
const noteListDiv = document.createElement("div");

//child elements
const titleSpan = document.createElement("span");
const notesHeader = document.createElement("h3");
const noteTitleDiv = document.createElement("div");
const noteContentDiv = document.createElement("div");
const saveButton = document.createElement("div");

// second generation child elements
const noteTitleInput = document.createElement("input");
const noteContentInput = document.createElement("textarea");
const save = document.createElement("button");

// third generation child elements
const noteListHeader = document.createElement("span");
const noteListOL = document.createElement("ol");

//appending the parent elements to the page
body.append(titleDiv, createNoteDiv, noteListDiv);
//appending child elements to the parent elements
titleDiv.append(titleSpan);
createNoteDiv.append(notesHeader, noteTitleDiv, noteContentDiv, saveButton);
// appending second generation child elements to the parent elements
noteTitleDiv.append(noteTitleInput);
noteContentDiv.append(noteContentInput);
saveButton.append(save);
noteListDiv.append(noteListHeader, noteListOL);


//adding attributes
createNoteDiv.classList.add("center-headers");
titleDiv.classList.add("center-headers");
titleSpan.classList.add("center-headers");
titleSpan.textContent = "Note App"
notesHeader.textContent = "New Note:";
noteTitleInput.setAttribute("placeholder", "Title:");
noteTitleInput.setAttribute("type", "text");
noteTitleInput.classList.add("note-title");
noteContentInput.setAttribute("placeholder", "Note:");
noteContentInput.classList.add("note-content");
save.classList.add("button")
save.textContent = "Save";
noteListDiv.classList.add("center-headers");
noteListHeader.textContent = "Notes:";
noteListHeader.classList.add("note-list-header");
noteListOL.id = "note-list";
noteListOL.classList.add("note-list");
