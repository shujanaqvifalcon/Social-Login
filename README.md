# Social Logins
Installation steps to run server locally

1. Open a terminal
2. Clone the project from the git clone link ( Command : git clone url)
3. Go into project directory.
4. Run Yarn
5. Create a copy of .env.example and rename it to .env
6. Run nodemon to start the server

That's it
Sorry not that's it :(

//Google Login
           ~Google Console Project Setup
1) https://console.cloud.google.com/apis/credentials open this Link 
2) Press Create credentials button then select oauthclient option
3) Select type of application in which you want use google login Strategy(mobile app /web app etc) 
4) Add Name  of project e.g(my-social-login)
      Now you have to  your server url in this project
        ~Authorized JavaScript origins section
4) In this section  add urls of server , request can come from 
    e.g my local server url is http://localhost:5000 or my live server url is https://social-login-api-dev.falconweb.app/
       ~Authorized redirect URIs
5)In this section we need add callback url, this callback  url will help user to complete authentication.
    e.g   my local server callback url will be http://localhost:5000/auth/google/callback
      ~on your right-top side
6) Copy ClientID and Client-Secret(and save them in .env file) chk env for demo  :} Enjoy


//FaceBook Login
           ~FaceBook for  Project Setup
1) https://developers.facebook.com/ open this Link  then sign up
2) Create New Application
3)Go to setting and select basic in App Domains add domain of your app like (https://www.falconit.com/ and https://localhost:5000/) and go to bottom and press add platform button and now add callback url of facebook where you want to redirect
4)copy APP ID and App Secret and past them in env file(for refrence please check .env file) :} Enjoy


//LinkedIn Login
           ~LinkedIn for  Project Setup
1) Go to https://www.linkedin.com/developers/ and login with your Linkedin account.
2) Once you have registered, click on the create app link and add the required details to create an app
3) Provide basic details about your app
~App name
~Company
~Privacy policy URL
~Business email
~App logo
4)Go to auth option  copy APP_ID and APP_SECRET and past them in env file(for refrence please check .env file) :} Enjoy
