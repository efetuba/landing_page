# Landing Page Project

## Table of Contents

- [Instructions](#instructions)
- [Implementation](#implementation)
- [Performance](#performance)

## Instructions

* The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily -the JavaScript file.

* To get started, open `js/app.js` and start building out the app's functionality

* For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Implementation

* Active sections in view and related links are highlighted when scrolling.
* A button at the bottom to smooth scroll to the top of the page is added.
* The navigation bar is hidden when scrolling and reappears when the user stops scrolling.
* Smooth scrooling is enabled to each section with offset compensation for the sticky navigation bar.

## Performance

* The javascript file app.js is linked in the html head section with the defer attribute on.
* In this project I implemented a rudimentary delay to filter down the frequency of firing scroll events.
* In CSS styling, I added media query to make navbar smaller.
* I added click event at the navigation bar level to bubble up all the individual link clicks. 
* In matters of styling I used the hide/change/show strategy for  the navbar visibility to avoid extra reflow and trigger repaint only.