const express = require('express');
const PORT  = 3000;
const authRoutes = require('./routes/auth.route')
const taskRoutes = require('./routes/task.route')
const cors = require('cors');
const db = require('./config/db.config')
const errorHandler = require('./middlewares/errorHandler')
const cookieHandler = require('./middlewares/cookieHandler')
const cookieParser = require('cookie-parser');
const { taskTable, userTable } = require('./data/createTable');

const app = express();

const allowedOrigins = [
    'http://localhost:5173',
    'https://blys-task-ac2tj89sm-mukeshmw1s-projects.vercel.app',
    'https://blys-task.vercel.app', 
    'https://blys-task.vercel.app/tasks', 
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
  
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);  
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
  }));


  
app.use(express.json());
app.use(cookieParser())


app.get('/db',async (req,res)=>{
    const result = await db.query('SELECT * from user');
    res.json(result);
})


app.use('/auth/',authRoutes);
app.use('/task/',cookieHandler,taskRoutes);


app.use(errorHandler);

userTable();
taskTable();


app.get('/',(req,res)=>{

    res.end('This is an express server.');
})


app.listen(PORT,()=>{
    console.log(`The server is listening at ${PORT}`)
})