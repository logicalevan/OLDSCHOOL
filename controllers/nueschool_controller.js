var express = require("express");

var router = express.Router();

var note = require("../models/nueschool.js");

router.get("/", function(req, res) {
  note.selectAll(function(data) {
    var hbsObject = {
      notes: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/api/notes", function(req, res) {
  note.insertOne("name", "note", req.body.note, function(result) {
    // Send back the ID of the new note
    console.log(result);
    res.json({ id: result.insertId });
  });
});

router.put("/api/notes/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  console.log(req.body.note);
  note.updateOne(req.body.note, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/notes/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  note.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;