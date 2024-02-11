## Notes
 - This is a MERN app, I had confirmed with someone with authority as Masai that this was acceptable.
## Setup
  - Ensure that node is installed and preferably a Code Editor
  - Clone the repo
  - Open the repo directory
  - cd into client and run 'npm install' (in separate terminal instance)
  - cd into server and run 'npm install' (in separate terminal instance)
  - In client directory, npm start to run client
  - In server directory, npm start to run server
  - To access the Swagger api-docs, open 'http://localhost:3000/api-docs' in your browser after starting the server

## Optimisations
    - 50% reduction in LCP & FCP after using localstorage for saving data and not reloading if its not more than a day old.(Had to remove because of server side authorisation)
    - .47(poor) -> 0(good) CLS with Suspense to use loading fallbacks for Charts on player page 
    - Further optimisations could be made if the app was made in Next.js like SSR & SSG.
    - Since CSV generation takes some time, implemented a separated function which generates the CSV on server start and then in intervals of a day and sends the same on request.

## Security Considerations
    - Only cookies used for authorisation
    - httpOnly flag true to prevent client-side scripts from accessing cookie
    - secure flag true to prevent data from being transferred over unsafe connections

## Compromises
    - Authentication isn't configured correctly with Swagger, since it is wholly cookie based,After login the user is automatically authenticated
    - CSV generation, the data is fairly complicated and would be suited more to a xlxs format with a multi sheet spreadsheet thus the csv is fairly minimal
