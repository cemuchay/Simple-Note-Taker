const body = document.querySelector("body");

// CREATING PARENT ELEMENTS

const titleDiv = document.createElement("div");
const createNoteDiv = document.createElement("div");
const noteListDiv = document.createElement("div");

// CREATING CHILD ELEMENTS

const titleSpan = document.createElement("span");
const notesHeader = document.createElement("h3");
const noteTitleDiv = document.createElement("div");
const noteContentDiv = document.createElement("div");
const saveButton = document.createElement("div");

// CREATING SECOND GENERATION CHILD ELEMENTS

const noteTitleInput = document.createElement("input");
const noteContentInput = document.createElement("textarea");
const save = document.createElement("button");

// CREATING OTHER ELEMENTS

const noteListHeaderDiv = document.createElement("div");
const noteListHeader = document.createElement("span");
const noteListOL = document.createElement("ol");

// APPENDING ELEMENTS
// APPENDING PARENT ELEMENTS TO PAGE

body.append(titleDiv, createNoteDiv, noteListDiv);

// APPENDING CHILD ELEMENTS TO PARENT ELEMENTS

titleDiv.append(titleSpan);
createNoteDiv.append(notesHeader, noteTitleDiv, noteContentDiv, saveButton);

// APPENDING SECOND GENERATION CHILD ELEMENTS TO PARENT ELEMENTS

noteTitleDiv.append(noteTitleInput);
noteContentDiv.append(noteContentInput);
saveButton.append(save);
noteListDiv.append(noteListHeaderDiv, noteListOL);
noteListHeaderDiv.append(noteListHeader);


// SETTING ATTRIBUTES

createNoteDiv.classList.add("center-headers");
titleDiv.classList.add("center-headers", "headers");
titleSpan.classList.add("center-headers", "headers");
titleSpan.textContent = "Simple Note App"
notesHeader.textContent = "New Note:";
noteTitleInput.setAttribute("placeholder", "Title:");
noteTitleInput.setAttribute("type", "text");
noteTitleInput.classList.add("note-title");
noteContentInput.setAttribute("placeholder", "Note:");
noteContentInput.classList.add("note-content");
save.classList.add("button")
save.textContent = "Save";
noteListDiv.classList.add("center-headers");
noteListHeaderDiv.classList.add("center-headers", "headers");
noteListHeader.textContent = "Notes:";
noteListHeader.classList.add("note-list-header", "headers");
noteListOL.id = "note-list";
noteListOL.classList.add("note-list");
noteListOL.style.display = "grid";
