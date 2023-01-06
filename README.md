
# React Express Todo App

An todo list web application. I used this to help me understand
the React front-end framework, and how it interacts with with
Express as the back-end.




## Installation

Install this application with Github CLI

```bash
  git clone https://github.com/IssiahB/ReactExpress-Todo-List.git
  cd ReactExpress-Todo-List
```

Then to install packages run
```bash
  npm install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

Optional:
`SERVER_PORT`

**MONGO_URI** is a String variable used to connect with a mongoDB database
an example of this would be:
`MONGO_URI="mongodb://127.0.0.1:27017/userDB"`

**SERVER_PORT** is optional, it is just an integer specifying the port to
host the express server.

## Run Locally

To run the project and view the webpage first we need to
start up the back-end. With one terminal start the server
by running:

```bash
  npm run backend
```

Then with a seperate terminal run the command:

```bash
  npm start
```

This should automatically open a tab in your browser displaying
the project. If not navigate to `http://localhost:3000`
## Author

- [@Issiah Banda](https://www.github.com/IssiahB)

