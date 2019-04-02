# Mega Flix

## Purpose
Mega Flix is a film database built for independent video stores to increase production, increase revenue, and attract new customers. This version of the application is for demo purposes and can be modified at many levels based on what the store in particular prefers.

## Usage
The user will be presented with a login page

![Login](public/images/readme-login-large.png "Login")

After logging in the user will be presented with a home screen with a selection of genres and 4 movies from each of the selected genres.

![Customer Home](public/images/readme-custhome.png?raw=true "Customer Home")

The user can then click on a movie and be presented with information about the film (year of release, director, plot, runtime) the modal will also tell the user if the film is available to be reserved or if it has already been reserved or checked out.

![Modal](public/images/readme-modal.png?raw=true "Modal")

The user can also search for a film by title which will return all films that include the search term.

## Manager Account

If the user is the store manager they have access to the administrator account of the database/storefront.

The user can see a list of all films that have been reserved and change the boolean in the database to be "checked out" and prepare the film for the user in the physical store.

The manager can also add a film to the database as these films are released on physical media throughout the year. The manager can also edit a film's information and delete a film from the inventory entirely.

#### Languages and Technologies
HTML, CSS, Bootstrap, JavaScript, jQuery, MySQL, Node.js, Express.js, Express-handlebars, Passport.io, Sequelize, OMdB API, ESLint

#### Built Using
Visual Studio Code, MySQLWorkbench, Terminal, Trello.

#### Deployment
Deployed on Heroku [here](https://rhubarb-cobbler-89467.herokuapp.com/).

Class presentation can be viewed [here](https://docs.google.com/presentation/d/1YXl3Z-FhuNcVnpjXQt2bWAiwhDQjI_dphw4qq7_xwX0/edit#slide=id.g555e874c95_0_5).

Built by Ryan Gartner, Shehan Peiris, Chad Dunnam and Zach Bray - Nerds at Northwestern
