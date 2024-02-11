## Notes
 - This is a MERN app, I had confirmed with someone with authority as Masai that this was acceptable.
 - Please make sure third-party cookies are allowed.
 - The backend is deployed on Render, apps sleep thus making a request after some time may take unusually long time
## Deployed Links
  [Frontend](https://client-reachhub.vercel.app)
  <br/>
  [API Docs](https://reachhub-server-pi6v.onrender.com/api-docs)
## Setup
  - Ensure that node is installed and preferably a Code Editor
  - Clone the repo
  - Open the repo directory
  - cd into client and run 'npm install' (in separate terminal instance)
  - cd into server and run 'npm install' (in separate terminal instance)
  - create an .env file inside server directory
  - add variable with name : MONGO_DB = 'connection string to your mongoDB cluster'/'Database name'
  - add variable with name : JWT_SECRET (the secret used by jsonwebtoken)
  - In client directory, npm start to run client
  - In server directory, npm start to run server
  - To access the Swagger api-docs, open 'http://localhost:3000/api-docs' in your browser after starting the server

## Optimisations
    - 50% reduction in LCP & FCP after using localstorage for saving data and not reloading if its not more than a day old.(Had to remove because of server side authorisation)
    - .47(poor) -> 0(good) CLS with Suspense to use loading fallbacks for Charts on player page 
    - Since CSV generation takes time, implemented a separate function which generates the CSV on server start and then in intervals of a day and the file is sent on request.
    - Further optimisations could be made if the app was made in Next.js using SSR & SSG.

## Security Considerations
    - Only cookies used for authorisation
    - httpOnly flag true to prevent client-side scripts from accessing cookie
    - secure flag true to prevent data from being transferred over unsafe connections
    - CORS policies have been configured to avoid requests from untrusted sources

## Compromises
    - Authentication isn't configured correctly with Swagger, since it is wholly cookie based,After login the user is automatically authenticated
    - CSV generation, the data is fairly complicated and would be suited more to a xlxs format with a multi sheet spreadsheet thus the csv is fairly minimal
