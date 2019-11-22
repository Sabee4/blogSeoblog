On Terminal, 
mkdir udemy
cd udemy
mkdir seoblog
cd seoblog
mkdir frontend
mkdir backend
cd backend
npm init -y
npm i express mongoose body-parser cookie-parser morgan nodemon dotenv cors

 
Create .git_ignore 
	add node_module in .git_ignore
Create .env
	NODE_ENV=development
	PORT=8000
	CLIENT_URL=http://localhost:3000
Create server.js

Database setup locally
Install mongodb locally (https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-windows/)	
 Restart the server

Separating routes
1.create the folder routes in backend directory
2.create blog.js in routes directory
	- require express
	- require Routes() from express
	- get request on '/' route
	- export router
3. update server.js
	- require blog.js
	- add middleware for routes. Have endpoints starting with api
	- delete app.get() from server.js
4. restart the server

Controllers
1.create the folder controllers in backend directory
2.create blog.js in controllers directory
	- copy the callbackfunction from blog.js in routes to /controllers/blog.js
3. export the the callbackfunction from blog.js in controllers to blog.js in routes




