const { coreDb } = require('../config/db');

const dbController = async (req, res) => {
  try {
    const db = await coreDb();
    const Test = db.collection('test');
    const data = await Test.find().toArray();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  dbController
};
