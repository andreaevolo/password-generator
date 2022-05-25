## Password Generator
A simple app that generates passwords and uses JWT authentification, sequelize, express.js and mariadb.
run `npm start` to start parcel dev server
run `npm run start-server` to run the express.js server
create your .env file and add your configuration variables.
###  DB Config
This app utilize sequelize ORM, to init your database of choice, in api/db.js

        // Option 3: Passing parameters separately (other dialects)  
    const sequelize =  new  Sequelize(DB_NAME, DB_USER, DB_PASSWORD  {  
    host:  'localhost',  
    dialect:  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */  
    });
Or if you want to test  it with SQLite:

    // Option 2: Passing parameters separately (sqlite)  
    const sequelize =  new  Sequelize({  
    dialect:  'sqlite',  
    storage:  'path/to/database.sqlite'  
    });
