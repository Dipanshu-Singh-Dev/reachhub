## Optimisations as measured in Core Web Vitals, with Web Vitals chrome extension
    - 50% reduction in LCP & FCP after using localstorage for saving data and not reloading if its not more than a day old.(Had to remove because of server side authorisation)
    - .47(poor) -> 0(good) CLS with Suspense to use loading fallbacks for Charts on player page 
    - Further optimisations could be made if the app was made in Next.js like SSR & SSG.
    - Since CSV generation takes some time, implemented a separated function which generates the CSV on server start and then in intervals of a day and sends the same on request.

## Security Considerations
    - Only cookies used for authorisation
    - httpOnly flag true to prevent client-side scripts from accessing cookie
    - secure flag true to prevent data from being transferred over unsafe connections

## Compromises, Several compromises that I had to make
    - I couldn't configure authentication correctly in Swagger