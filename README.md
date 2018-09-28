## git777   MASTER Branch
 
Cloud demos (if deployed) at:
1. [Heroku](https://git777.herokuapp.com)  

A simple example of using a single router to handle multiple end-points.
Demonstrated by 6 calls that come back asynchronously with a simple message.
Each end-point maps to a http verb using the REST approach for CRUD.

Obviously in a real system the server-side would integrate a persistence solution as appropriate.


Platform requirements to install this application locally:

1. [Installing git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
2. [Installing node.js with npm](https://nodejs.org/en/download/) 
3. [Installing yarn](https://yarnpkg.com/en/)				
4. [optional, installing nodemon](https://www.npmjs.com/package/nodemon/) 

To install locally, assuming platform requirements prepared:

1. use git to clone or manually extract the zip file, 
2. open a command window in the application folder and type the following commands to start on localhost:3443. You may specify a different port number by supplying is as an argument.
    1. yarn install
    2. node server.js [port]    (or nodemon server.js  [port]if nodemon installed)