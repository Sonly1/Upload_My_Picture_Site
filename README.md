1. Open Visual Studio Code.
2. Create several seperate file for multiple JavaScript, CSS for the sytle and HTML for the site. 
3. Create an HTML file and use the code from site.html. 
4. Create a CSS file and use the code from stylesite.css
5. Create a JS file and use the code for File_Upload.js. 
6. Make sure your project directure sturcure looks like this: 

file-upload-site
 > public/
      > site.html
      > style.css
      > file_upload.js
> upload/
> package.json.
> package-lock.json
> server.js

7. Once everything is well structure, install the following in your terminal: 

> npm init -y. 
It will return athe value in json format. Make sure to install async, axios package.

> npm install express multer
You should  have about 60 to 347 package installed. 

8. In the terminal, make sure to be in the right directory. 

> cd xxxx

9. Once there, start the server: 

> npm start. You should receive the following return: 

 NAME_Of_Your_Project@1.0.0 start
> node server.js

Server started on http://localhost:{{port}} // set it to the standard 3000. 

10. Now access it in any browser: http://localhost:3000/
