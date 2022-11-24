require('dotenv').config(); // this is important!
module.exports = {
  "development": { //test
    "username": "postgres",
    "password": "root",
    "database": "Ministera",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "root",
    "database": "SOLAR",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "54uakco3f2zmlzfj1uv3",
    "password": "pscale_pw_GQuAPoGryxpurNlTVPL6gIpUqgLj28eKJdBijwffsGd",
    "database": "solar",
    "host": "us-east.connect.psdb.cloud",
    "dialect": "mysql",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": "true",
      },
    },
  }
};


