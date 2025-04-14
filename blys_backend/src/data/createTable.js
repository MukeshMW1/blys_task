const db =require('../config/db.config')




const userTable = async () =>{
const queryText =`
CREATE TABLE  IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL, 
    email VARCHAR(200) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
)

`

try {
    
db.query(queryText);
console.log('User Table Created Succesfully');

} catch (error) {
    console.log('Failed to create user table ',err)
}
}



const taskTable =async () =>{

const queryText = `

CREATE TABLE  IF NOT EXISTS tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'in progress', 'completed')),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE

)
` 
try {
    
    db.query(queryText);
    console.log('task Table Created Succesfully');
    
    } catch (error) {
        console.log('Failed to create task table ',err)
    }
}


module.exports = {userTable,taskTable}