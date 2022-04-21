const note = { title: "x", content: "y", Date: "z" };
var createTitle = document.getElementById("title");
var createContent = document.getElementById("note-content");

save = () => {
    // reading note details and saving them to local storage
    let note = { title: createTitle.value, content: createContent.value };
    let myNoteJSON = JSON.stringify(note);
    localStorage.setItem("noteJSON", myNoteJSON);

    // reading note details from local storage and displaying them on the page
    let myNotefromJSON = localStorage.getItem("noteJSON");
    let myNote = JSON.parse(myNotefromJSON);

    // creating a new note element and adding class to it
    const newNote = document.createElement("li");
    newNote.classList.add("note-item");

    // creating a new title and content element and adding class to them
    const newTitle = document.createElement("p");
    const newContent = document.createElement("p");
    newTitle.classList.add("display-note-title");
    newContent.classList.add("display-note-content");

    // to display the created note on the page
    document.getElementById("note-list").style.display = "grid";

    // adding a note to the ol
    document.getElementById("note-list").appendChild(newNote);

    // adding the title and content to the new note on the list
    newNote.appendChild(newTitle);
    newNote.appendChild(newContent);
    newTitle.innerHTML = myNote.title;
    newContent.innerHTML = myNote.content;

    clearContent();
};

clearContent = () => {
    createTitle.value = "";
    createContent.value = "";
}