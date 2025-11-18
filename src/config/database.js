   import sqlite3 from 'sqlite3';

   const db = new sqlite3.Database('library_db.sqlite3', (err) => {
         if (err) {

            console.error('Could not connect to database', err.message);
            } else {
    
              console.log('Connected to the SQLite database.'); 
            
            }                
   })


    export default db;
   