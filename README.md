*Currently pretty inefficient*


# A web server

## !!Notice!!
So... how the f*** do you get those goddamn pages on the website?

### 1. Place the file into the correct directory:
Folder structure should look like this:
```
    -Install Folder
     |
     |
     \_Pages_
     |       \     index.html (will be displayed on entry to the site)
     |        \     page.html (will be accessed at example.org/page)
     |         \ demo.min.html (will be accessed by accessing the website with a header so the url will remain example.org/)
     |          \  test.c.html (will be accessed with parameters e.g example.com/page?=teset)
     |
     Other content
```
To conclude:
- .html will be displayed as example.org/FILENAME
- .min.html will be accessed at example.org/ but will be passed a header on travel to the site
- .c.html will be accessed using parameters

### 2. How the f*** do I send headers in a link
I'll make it easy and plop a bit of JavaScript here which will probably work like this:
`travel('PAGENAME')`
That would go inside an onclick statement for example if I wanted to go to demo.min.html:
```html
<a class="cool-button" href="#" onclick="travel('demo');">Lets surf those internet waves!<br>Signed<br> -Your Grandma</a>
```
This is all to keep our url all nice and tidy so it looks more professional!

### 3. A note
Make sure `href="#"` is added if you aren't leaving the website. By using the JavaScript function keep in mind that it will refresh the page to access the new content. 

## What is this
A Node.JS based API that also functions as content delivery. It's main purpose is to provide authentication/ACL and also to deliver content like websites and application/* data

This is going to be used for an application I'm currently making.

## Usage
The application can be launched in multiple environment modes (this is still a WIP, going to introduce features into each environment like security features etc)

Using an environment:
`NODE_ENV=env-name node.`

The current env-name's in the project are:
- production
- staging
- idiot
- lessidiot

If there is no environment defined when starting the application then it defaults to staging

## Dependancies
None(ish)!

I have no imports, no need for a package.json or any dependacy management. But this *DOES* require Node 8.*.

## To-do
- Logging
- Change how the console displays requests and content
- Actually build the authentication part of the API, at the minute it may only deliver content (poorly) and make some simple RESTful requests. I haven't actually put mutch into the API yet.

### Credits
No other contributors but me. I'll add people here if they do end up joining in and pushing some changes.
