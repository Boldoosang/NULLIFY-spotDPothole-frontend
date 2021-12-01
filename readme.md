# NULLIFY - SpotDPothole Frontend
Welcome to our COMP 3613 Software Engineering Project! This project aims to provide the frontend of an application that is geared towards the logging of potholes located across the roadways of Trinidad and Tobago. This project will be implemented to interface with the corresponding [SpotDPothole Backend](https://github.com/Boldoosang/NULLIFY-spotDPothole-backend). Please note that this project reflects the various prototype stages that will be refined over the course of many sprints. Implemented features of the first prototype can be found below.

## FRONTEND IMPLEMENTED FEATURES
For the first prototype of the application, the following features have been implemented during development:
* Registration and login to application
* Reporting of a pothole via standard interface.
* Reporting of a pothole via driver interface.
* Viewing of reports of other users.
* Viewing of reported potholes.
* Accessing analytical information for potholes.
* Voting on a report of a pothole.

## DEPENDENCIES AND FRAMEWORKS
* [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/) - Bootstrap 5 used for styling and components
* [Picong Party Electoral District API](https://www.thepicongparty.com/home.html) - Picong Party API for electoral district data.
* [Leaflet](https://leafletjs.com/) - Leaflet used the general map.
* [Node.js/NPM](https://nodejs.org/en/) - Used in the installation of the firebase dependency.
* [Firebase](https://firebase.google.com/) - Firebase used for serving application website.
* [Firebase Storage](https://firebase.google.com/) - Firebase storage used for storing reported images.

## CONFIGURATION
After successful installation of Node.js from the [website](https://nodejs.org/en/), the execution of the following command can be used to install firebase-tools:
```
npm install -g firebase-tools
```
After installing firebase-tools, login to the firebase CLI using the following command:
```
firebase login
```
Upon successful login, the firebase project can be initialized using:
```
firebase init
```
Create a new project or choose an existing one. Be sure to select firebase hosting when prompted to select a service. Configure the rest of prompts as needed or press enter for the rest. This should complete the firebase setup.

## SERVING THE PROJECT
In the development environment, the frontend webpage can be served using:
```
$ firebase serve
```
  
In the production environment, the frontend webpage can be deployed using:
```
$ firebase deploy
```

## PROJECT DELIVERABLES
* [SpotDPothole Web Application](https://spotdpothole.justinbaldeo.com/)
* [Project Report](https://spotdpothole.justinbaldeo.com/projectReport)