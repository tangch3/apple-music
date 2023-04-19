# Apple Music Web App

## Description

This project is a full-stack web application that utilizes ReactJS for the frontend and Express for the backend. The iTunes API was used to retrieve data for the application. Users can search for specified media content and add or remove items to/from their list of favorites.

## Deployment

The application has been deployed at https://applemusicapi.herokuapp.com. To install the project, first create a folder to store all files. Then, in the terminal or command prompt, navigate to the project's directory by typing "cd" and the folder name.

## Installation
To install all modules simply type in:

```
npm start
```

It will install everything for you and launch the application.

## Testing

The backend and frontend is tested with Mocha and Chai.

### Front end testing

The server must be live in order the tests to be passed otherwise it will throw a network error.

Please ensure you have started the application by

```
npm start
```

cd into the client folder and run npm test

```
cd client
```

```
npm test
```

### Back end testing

You have to kill the server by writing

```
killall node
```

Then navigate into the root of the project Apple Music

```
npm test
```

No API keys were used in this project to access the iTunes data. However, if they were used, an .env file would need to be created outside of the src folder and added to the .gitignore file for privacy concerns.

## Usage

- Open the website. 
- The user can search for songs / albums / podcasts / etc
- User can navigate between the home page and their list of saved media items
- User can add or remove items to and from their saved list.

When changes are made to project items, the server will restart and update these changes. This is because the Nodeman devDependency is installed. Changes made to the frontend of the application can be viewed at http://localhost:3000.