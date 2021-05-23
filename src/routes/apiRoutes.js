const { Router } = require("express");

const {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
} = require("../controller/notes");

const router = Router();

router.get("/notes", getAllNotes);

router.get("/notes/:id", getNoteById);

router.get("/notes", createNote);

router.get("/notes/:id", deleteNote);

module.exports = router;
