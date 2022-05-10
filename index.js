save.addEventListener("click", function () {

    // CREATING NOTE ELEMENTS
    const newNote = document.createElement("li");
    const newTitle = document.createElement("p");
    const hr = document.createElement("hr");
    const newContent = document.createElement("p");
    const buttonGroup = document.createElement("span");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");


    createNote = () => {
        if (noteContentInput.value === "") {
            alert("Please enter a note!");
        }

        else {

            // READING VALUES OF NOTE TITLE AND CONTENT AND SAVING TO LOCAL STORAGE
            let note = { title: noteTitleInput.value, content: noteContentInput.value };
            let myNoteJSON = JSON.stringify(note);
            localStorage.setItem("noteJSON", myNoteJSON);


            // APPENDING NOTE ELEMENT TO ORDERED LIST OF NOTES
            noteListOL.append(newNote);
            newNote.classList.add("note-item");
        }
    }

    buildNoteElements = () => {
        // reading note details from local storage and displaying them on the page
        let myNotefromJSON = localStorage.getItem("noteJSON");
        let myNote = JSON.parse(myNotefromJSON);


        // adding attributes to the li elements
        newTitle.classList.add("display-note-title");
        newContent.classList.add("display-note-content");


        // APPENDING LI ELEMENTS TO LI
        newNote.append(newTitle, hr, newContent, buttonGroup);
        buttonGroup.append(editButton, deleteButton);
        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";
        newTitle.textContent = myNote.title;
        newContent.textContent = myNote.content;
        editButton.classList.add("edit");
        deleteButton.classList.add("delete");
    }


    // CALLING THE FUNCTIONS
    createNote();
    buildNoteElements();
    clearContent();


    // ADDING EVENT LISTENERS TO EDIT AND DELETE BUTTONS
    // FOR DELETE BUTTON
    [...document.querySelectorAll('.delete')].map((el) => {
        el.addEventListener("click", function () {
            // deleting the note from the page
            el.parentElement.parentElement.remove();
        }
        )
    }
    )

    // FOR EDIT BUTTON
    let edit = document.querySelectorAll(".edit");
    [...edit].map(el => {
        el.addEventListener("click", function () {
            // editing the note
            noteTitleInput.value = el.parentElement.parentElement.children[0].textContent;
            noteContentInput.value = el.parentElement.parentElement.children[2].textContent;
            el.parentElement.parentElement.remove();
        }
        )
    })
}
);

clearContent = () => {
    noteTitleInput.value = "";
    noteContentInput.value = "";
}