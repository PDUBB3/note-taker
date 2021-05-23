const { v4: uuidv4 } = require("uuid");

const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");

const getNotes = (req, res) => {
  const notes = getFromDb();

  res.json(notes);
};

const writeNotes = (req, res) => {
  const { title, text } = req.body;
  const notes = getFromDb();
  const id = uuidv4();
  const newNote = { title, text, id };
  notes.push(newNote);

  writeToDb(JSON.stringify(notes));

  res.json(notes);
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  const notes = getFromDb();
  const newData = notes.filter((each) => each.id !== id);

  writeToDb(JSON.stringify(newData));

  res.json(newData);
};

module.exports = {
  getNotes,
  writeNotes,
  deleteNote,
};
