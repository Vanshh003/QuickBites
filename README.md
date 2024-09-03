# QUICK BITES


# Stucture
* Header
    - logo 
    - nav items 

* Body 
    - search 
    - restaurant container 
    - restaurant card 
        - image 
        - name of restaurant 
        - star rating
        - cuisine
        - delivery time

* Footer 
    - copyright 
    - links 
    - address 
    - contact



<br><br>


# Two types of Export/Import


- Default Export/Import

`export default Component`; <br> 
`import Component from "path"`; 


- Named Export/Import

`export const Component;` <br>
`import {Component} from "path";`


<br><br>


# React Hooks

Normal JS utility functions
 - useState() -> used to generate State Variables in React
 - useEffect() -> used if anything needs to be done after rendering a component

<br><br>


# Routing
    
There are 2 types of routing

 - Server Side Routing : <br>
        basically you make a network call and the page about.html is coming from the server    
        it means that… say you have index.html, about.html, contact.html.. if you click on the anchor tag of about.html… it reloads the whole page.. it sends a network call to about.html, fetches the html and renders it on the webpage/ui.. reloads the whole app
 
 - Client Side Routing : <br>
        in which no network calls are made while moving towards the page, because all the components are already loaded into our app. When we load the app for the first time, it already has the code for aboutus, contact and other components.. when we go to aboutus.. it just loads that component.. it doesnt make any network calls

        
