const { Router } = require("express");

const { getNotes, writeNotes, deleteNote } = require("../controller/notes");

const router = Router();

router.get("/notes", getNotes);

router.post("/notes", writeNotes);

router.delete("/notes/:id", deleteNote);

module.exports = router;
