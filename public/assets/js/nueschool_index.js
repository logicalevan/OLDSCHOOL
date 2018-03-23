var currentNote;
var id=0;

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".notes-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var note=$("note-input");
    var newNote = {
      note: $("#note-input").val().trim(),
    };
    console.log(newNote);

    // Send the POST request.
    $.ajax("/api/notes", {
      type: "POST",
      data: newNote
    }).then(
      function() {
        console.log("created new note");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".edit-btn").on("click", function(event) {
    event.preventDefault();
    id = $(this).data("noteid");
    console.log(id);
    document.getElementById("edit-box").style.display = "inline";
  });

  $(".delete-btn").on("click", function(event) {
    var id = $(this).data("noteid");
    // Send the DELETE request.
    $.ajax("/api/notes/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted note", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$(".edit-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    document.getElementById("edit-box").style.display = "none";

    var editNote = {
      note: $("#edit-box").val().trim(),
    };
    console.log(editNote);
    // Send the POST request.
    $.ajax("/api/notes/" + id, {
      type: "PUT",
      data: editNote
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
});



