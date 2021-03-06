# Notes on Google Map Production #

## First Some Debugging Points ##
First let's reiterate some debugging points

* Use a border on the `<div>` *{border:solid 1px black;}*
* Double-check your `<div>` *id*
* Don't use 'map' as an *id*
* Open up the console (watch files load & watch for Javascript errors)
* Load synchronously when testing, regardless of vendor directions

## Asyncronously vs. Syncronously ##
Asyncronously, means that a callback is made by the callee, once the callee is ready. This differs from the caller. 

In our case, once our javascript has loaded, it assumes the remainder of the HTML has loaded. As such, it can safely call it's own routines. 

Looking at the code now, there are two (2) HTML files - sync.html and async.html. Both start out the same, and remain the same until after the close of the body *(</body>)*, after that they differ.

The main difference is
* async.html calls *loadMapScripts()*
* sync.html calls *initializeMap()*

Both routines are in the javascript file: `mapBasic.js`

* Async - *loadMapScripts()* creates a document node to load some javascript (including the "callback=initializeMap"), then it waits to be called-back *initializeMap()*.

* Sync - *initializeMap()* expects the google library to be loaded. Then, it creates the "map" objects and calls all the components to complete the map (slider,buttons,labels,etc.).

>
> 1. Alternatively, you could use `<body onload="onBodyLoad()">`
>
