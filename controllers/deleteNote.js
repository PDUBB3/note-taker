const {read, write} = require("../../db/database");

const deleteNote = (req, res) => {
  const data = JSON.parse(read());
  const id = req,params,id;
  const newData = data.filter((each) => {
    return each.id !== id;
  });
  write(newData);
  res.JSON(newData);
};

module.exports = deleteNote;