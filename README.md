# Todo App

Tämä on OAMK:n Web Programming Application Project -kurssin yksilötehtävä.  
Sovellus on toteutettu:
- React (frontend)
- Node.js + Express (backend)
- PostgreSQL (tietokanta)

# suoritukset 
olen tehnyt kaikki osiot 1-8 part.
- 1- Creating basic app structure
- 2- creating backend
- 3- Automated testing
- 4- Call Rest Api from React
- 5- Environment variables, routing, middleware for backend
- 6- Authentication and authorisation on backend
- 7- Authentication and authorisation on frontend
- 8- Model-View-Controller architecture



# projektin toiminnallisuuden

- Käyttäjän rekisteröinti ja kirjautuminen
- JWT-pohjainen istunnon hallinta
- Tehtävien lisäys ja poistaminen
- Suojatut sivut kirjautuneille käyttäjille
- PostgreSQL pysyvä tietokanta
- Selkeä MVC-rakenne backendiin
- Virheenkäsittely ja testit


### .env/ server

- PORT=3001
- DB_HOST=localhost
- DB_PORT=5432
- DB_USER=postgres
- DB_PASSWORD=tässä laitat vaikka sun oma salasana 
- DB_NAME=test_todo
- JWT_SECRET= oma avain salasana


# .evn / ToDo-App 
- VITE_API_URL=http://localhost:3001


# käyttöönotto
kun latat sen konella

- Backend  cd server ---> npm install ---> npm run devstart
- frontend  cd src  ---->  npm run dev

ja Avaa selaimessa: 
http://localhost:5173





