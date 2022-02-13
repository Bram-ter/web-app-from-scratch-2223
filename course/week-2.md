# Week 2: ‘Hello API’ 🐒

Minor Web Development - Web App From Scratch

## Intention

The coming three weeks you will create a client side Single Page web App (SPA) during this course. Based upon data from the API of your chosen user story, you design, build and test a prototype in three iterations. You write vanilla HTML, CSS and JavaSCript, and avoid to use frameworks or libraries as much as possible - with the exception of a micro library if neccessary. 

### Goals this week: ‘Hello API’ 🐒

Pick an user story. Design the interface. Retrieve data from the chosen API and build the interface.

### Next week: ‘Design & refactor’ 🛠

Iterate on the user story. Add routes and states. Refactor code into modules. [Check it out](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/week-3.md)

---  

## Assignment

Design and build a Single Page web App based on a User Story.

### Sub tasks

1. [Pick a user story and design the interface](#1-pick-a-user-story-and-design-the-interface)
2. [Load data from the API and build the interface](#2-loading-data-from-the-api-and-build-the-interface)
3. [Fork GitHub repository for this course and setup the README.md](#3-fork-github-repository-for-this-course-and-setup-the-readmemd)
4. [Conduct Code Review via GitHub](#4-conduct-code-review-add-issues-on-github)


---  

## 1. Pick a user story and design the interface

### User stories

1. Als student digital design, wil ik inspirerende web design quotes kunnen bekijken, zodat ik weer een beetje energie krijg wanneer ik het even niet meer zie zitten met al die hard-core deadlines die op me afkomen.
[FDND Web Design Quotes API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/fdnd-quotes.md)
2. As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown
[Rijksmuseum - RijksData API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/rijksmuseum.md)
3. As a frisbee player, I want to be able to save and pass on the scores after a match, so I know where and when we have to play the next game. 
[Frisbee Tournament - Leaguevine API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/frisbee-tournament.md)
4. As a foodie, I want to be able to easily search and view information about a product while shopping,
so that I can make a good choice whether it fits my diet.
[Healthy Food Checker - Open Food Facts API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/healthy-food-checker.md)
5. As a patient, I want to be able to make a reliable diagnosis at home, so that I can better estimate whether I should make an appointment with the doctor.
[EndlessMedical API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/endless-medical.md)
6. ~~As a artist, I want to sketch and design a t-shirt online, so I can sell my t-shirt-artwork.
[Printify API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/t-shirt-maker.md)~~
7. As a children's book author, I want to experiment with innovative Dutch-language voice interaction patterns, so I can tell my stories in an entirely new way.
[Storytelling - Web Speech API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/storytelling.md)

- Do you have an idea you want to design and develop? Yes you can ... Write a User Story and present what you are planning to do. 


### Design the interface

1. Investigate API
2. Sketch Userflow in a Wireflow
3. Sketch Breakdown-graph: break the wireflow down in HTML, CSS and JS.   

### Resources

- [What is a Single Page Application](https://www.monocubed.com/what-is-single-page-application/)
- [Wat is een User Story?](https://agilescrumgroup.nl/wat-is-een-user-story/)
- [Wireframing User Flow with Wireflows](https://balsamiq.com/learn/articles/wireflows/)


---

## 2. Loading data from the API and build the interface

Requesting data from an API can take a relatively long time that your program would not have to wait for.   
That is why you are going to make an asynchronous request to the API.

### Fetch data from your API

Create a request object in your code with which you load data (a list of items) with an asynchronous call from the chosen API.  
Parse the JSON into a JavaScript object.

### Build the interface

Render the data object into structured HTML and style the interface with CSS.  

### Resources

- [How to use the Fetch API with vanilla JS](https://gomakethings.com/how-to-use-the-fetch-api-with-vanilla-js/)
- [Promises in JavaScript](https://gomakethings.com/promises-in-javascript/)
- [Promises chaining](https://javascript.info/promise-chaining)
- [Easy Creation of HTML with JavaScript’s Template Strings](https://wesbos.com/template-strings-html)
- [You don’t know JS; Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20&%20performance/README.md#you-dont-know-js-async--performance)
- [The Event Loop, the inner workings of asynchronous code in JavaScript](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---  

## 3. Fork GitHub repository for this course and setup the README.md 

All code and documentation that you write (for all courses and projects in this minor) will be in a GitHub repository. Make a neat layout of files and folders. Make sure that the code can also be viewed via GitHub Pages as rendered HTML, CSS & JavaScript. A Github repo is only complete if it contains a description and readme (with a poster image of the project). We have already prepared a repository that you can fork.

Fork this repository: https://github.com/cmda-minor-web/web-app-from-scratch-2021

Open issues on your repo so that you can get feedback!
Publish your web app with Github pages and add the link to the web app in the repo description.

A good app comes with a good README.md in which you describe the application. Add the chapters below and document your app.

* linkToLiveDemo? review (assignment): assignGrade (1);  
* What does your app do, what is the goal? (passing butter)  
* Which actors are there in your application? (actor diagram)  
* Which API is used and what are the limitations? (rate limit)  
* How does flowed interaction through the application? (interaction diagram)  
* Which design patterns and best practices  
* What would you like to add (feature wishlist / backlog)  

*(Also see the commented hints in the README.md)*

### Resources

- [GitHub Hello World (getting started)](https://guides.github.com/activities/hello-world/)
- [Git command explorer](https://gitexplorer.com/)
- [Github Pages](https://pages.github.com/)
- [A list of awesome READMEs](https://github.com/cmda-minor-web/web-app-from-scratch-1819/network/members)

---  

## 4. Conduct code review: add issues on GitHub

On GitHub you can use Issues to suggest changes to a colleague developer's code. You can do this online via the GitHub website.
Create at least 2 issues for different peer students. You can look at improvements / suggestions for or questions about HTML, CSS & JavaScript code. 
