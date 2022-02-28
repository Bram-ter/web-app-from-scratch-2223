# Week 3: ‘Design & refactor’ 🛠

[Minor Web Development](https://github.com/cmda-minor-web/) - [Web App From Scratch](https://github.com/cmda-minor-web/web-app-from-scratch-2122)

## Intention

### Goal this week: ‘Design & refactor’ 🛠

Iterate on the user story. Add routes and states. refactor code into modules.

### Next week: ‘Wrapping up’ 🎁

Final iteration on user story. Manipulate, filter and sort data

---

## Assignment

Refactor your Single Page Web App.

### Sub tasks

1. [Handle routes to manage state](#1-handle-routes-to-manage-state)
2. [Refactor code into modules](#2-refactor-code-into-modules)

### Slides

1. Routes en Modules - Week 3 Maandag 28 feb
2. UI Principles - Week 3 Dinsdag 1 mrt

--- 

## 1. Handle routes to manage state 

On a single page web app (SPA) you will have to create the URLs (or routes) to the different "pages" in JavaScript. 

### Hash router

The hash-part of an url points to a specific resource in the web page. An element with a corresponding value for the id attribute. The hash-part of an url isn’t send to the server. It is interpreted by the browser and accessible through JavaScript... If you want to be able to navigate to a detail page in an SPA, you can do this by using the hash (#) in the url, in combination with the _hashchange event_.

If you use the hash-part of the url to navigate different "pages" of the SPA, the History API exposes useful methods and properties that let you navigate back and forth through the user's history.


1. Define the pages/states of your SPA you want to navigate to.  
2. Implement the hashchange event in your code to navigate to the different pages/states.
3. Making a router yourself is quite complicated, so this is a good opportunity to use a micro library. Routie.js is a simple hash router that you can use.

### Resources

- [Window: hashchange event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)
- [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [Vanilla JavaScript Hash Router](https://dev.to/aminnairi/a-router-without-a-web-server-in-vanilla-javascript-3bmg)  
- [Router Microjs libs](http://microjs.com/#router)
- [Routie - hash router](http://projects.jga.me/routie/)  



## 2. Refactor code into modules 

Up until now, in your JavaScript code, you are fetching data from an api, render the data into the HTML page and you added a router to be able to switch the different states of your application. Your code can become harder and harder to read and maintain. This is a good time to refactor the structure of your app by splitting up your code in different ES modules. 

<img width="738" alt="image" src="https://user-images.githubusercontent.com/1391509/155955513-c87f78a1-3c59-4ddf-bf8b-539fdc4cf2a1.png">

Make sure to check the issues you received from the peer review and fix code issues after you refactored your code.    
And check the [JavaScript Best Pactices](https://github.com/cmda-minor-web/best-practices/blob/master/javascript.md) for clean coding tips and tricks.

#### Resources

- [JavaScript modules, background and example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Introduction to ES Modules](https://flaviocopes.com/es-modules/)    


