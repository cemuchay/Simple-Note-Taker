//DEFAULT HTML ELEMENTS
save.addEventListener("click", function () {
    if (noteTitleInput.value === "") {
        alert("Please enter a title for your note!");
    }

    if (noteContentInput.value === "") {
        alert("Please enter a note!");
    }

    else {
        // reading note details and saving them to local storage
        let note = { title: noteTitleInput.value, content: noteContentInput.value };
        let myNoteJSON = JSON.stringify(note);
        localStorage.setItem("noteJSON", myNoteJSON);

        // reading note details from local storage and displaying them on the page
        let myNotefromJSON = localStorage.getItem("noteJSON");
        let myNote = JSON.parse(myNotefromJSON);

        // creating a new note element and adding class to it
        const newNote = document.createElement("li");
        const newTitle = document.createElement("p");
        const newContent = document.createElement("p");
        const buttonGroup = document.createElement("span");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        newNote.classList.add("note-item");

        // creating a new title and content element and adding class to them

        newTitle.classList.add("display-note-title");
        newContent.classList.add("display-note-content");

        // to display the created note on the page
        noteListOL.style.display = "grid";

        // adding a note to the ol
        noteListOL.append(newNote);


        // adding the title and content to the new note on the list
        newNote.append(newTitle, newContent, buttonGroup);
        buttonGroup.append(editButton, deleteButton);
        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";
        newTitle.textContent = myNote.title;
        newContent.textContent = myNote.content;
        editButton.classList.add("edit");
        deleteButton.classList.add("delete");


        // edit button function
        const allEditButtons = document.querySelectorAll(".edit");
        allEditButtons.forEach(function (allEditButtons) {
            console.log(allEditButtons);
            allEditButtons.addEventListener("click", function () {
                noteTitleInput.value = myNote.title;
                noteContentInput.value = myNote.content;
                newNote.style.display = "none";
            })
        })

        const allDeleteButtons = document.querySelectorAll(".delete");
        allDeleteButtons.forEach(function (allDeleteButtons) {
            allDeleteButtons.addEventListener("click", function () {
                newNote.remove();
            })
        })
        clearContent();
    }
});

clearContent = () => {
    noteTitleInput.value = "";
    noteContentInput.value = "";
}


