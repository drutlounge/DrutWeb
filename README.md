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
A Node.JS based web server. That's it.

Can run in HTTP/s or both at the same time if that's your thing (weird flex, but ok).

## Usage
The application can be launched in multiple environment modes (this is still a WIP, going to introduce features into each environment like security features etc)

Using an environment:
`NODE_ENV=env-name node.`

The current env-name's in the project are:
- production (8081[HTTPS]:8080[HTTP])
- staging (443[HTTPS]:80[HTTP])


If there is no environment defined when starting the application then it defaults to staging

## Creating configs
First of all fire up an IDE and open config.js, then you may continue. I have a staff, so you may not pass...

Some shit like that.

### Create a new config
Under the area for custom configs add the following line:
```javascript
environments.<name of your new config> = {
    env:"<name of your new config>"
}
```
### Changing configs
Each config has the following options (**ALL** must be added):

-Ports       - the port the server will run on (http and https options - httpport, httpsport)
-Env         - the name of the environment
-Ip          - The IP to attach to
-Secured     - Enable HTTPS
-KeepHTTPOn  - Enable HTTP
-CertLOC     - Location of your SSL public certificate
-KeyLOC      - Location of your SSL private key

You can then implement these into your config (all settings are in **LOWERCASE**):
```javascript
environments.NameOfMyConfig = {
    httpport : 1234,
    httpsport: 1235,
    env : "NameOfMyConfig",
    ip : "123.456.789.012",
    secured: (true or false),
    keephttpon: (true or false), //This is actually the HTTP toggle, true=allow http and false=deny http
    certloc: (path of your certificate),
    keyloc: (path of your private key)

}
```

## Dependancies
None(ish)!

I have no imports, no need for a package.json or any dependacy management. But this *DOES* require Node 8.*.

## To-do
- Logging
- Change how the console displays requests and content

### Credits
No other contributors but me. I'll add people here if they do end up joining in and pushing some changes.
