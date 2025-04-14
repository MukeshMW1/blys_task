

🛡️ Simple Authentication System with Task Manager (MERN + MySQL)


⚠️ Note: This application is hosted on the free tier of Vercel (frontend) and Render (backend), so the response time may be slightly slow on initial load due to server cold starts. Please allow a few seconds for backend services to spin up.
Also note that you have to wait for few secconds after hitting the login button(locally it runs smooth) but with free limited version of render it takes time.


📌 Assignment Overview
Assignment Title: Build a Simple Authentication System with a Basic Feature
Objective: Develop an application that includes user authentication and a task management feature using the MERN stack with a MySQL database.


🚀 Live Links
Frontend (Vercel): https://blys-task.vercel.app/

Backend (Render):https://blys-task.onrender.com

⚙️ Ensure backend is awake by visiting the above backend URL before testing the frontend.

🧰 Tech Stack
Frontend: React.js, Fetch API, Tailwind CSS (optional), Context API /Use State

Backend: Node.js, Express.js

Authentication: JWT (stored in HTTP-only cookies)

Password Hashing: bcrypt

Database: POSTGRESQL(Initially I used a postgres docker image locally but later on I just created a new DB.)

Hosting: Vercel (Frontend), Render (Backend)

✨ Features
🔐 User Authentication
JWT-based authentication

Secure password storage using bcrypt

Session management via HTTP-only cookies

✅ Task Manager
Add new tasks with a title and description

View list of your tasks

Delete tasks

Only authenticated users can manage their tasks

📡 API Endpoints
Method	Endpoint	Description
POST	/register	Register a new user

POST	/login	Login a user

GET	/tasks	Get all user's tasks

POST	/tasks	Create a new task

DELETE	/tasks/:id	Delete a task by ID
