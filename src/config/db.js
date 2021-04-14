const { MongoClient } = require('mongodb');

const {
  MONGODB_URI: dbUri,
  BASE_DB: baseDb
} = process.env;


let connectionInstance;

const getDbClient = async () => {
  const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  if (connectionInstance === undefined) {
    connectionInstance = await MongoClient.connect(dbUri, dbOptions);
  }
  return connectionInstance;
};

const coreDb = async () => {
  await getDbClient();
  if (connectionInstance === undefined) {
    throw new Error('No connection instance present');
  }
  return connectionInstance.db(baseDb);
};

exports = {
  getDbClient,
  coreDb
};
