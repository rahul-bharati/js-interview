# Interview Exercise

## Brief

Hey there! Thank you for taking the time to work on this exercise as part of the interview process. Relax and enjoy this exercise. When you do, you will be at your best. If you are not in your best condition right now, have a coffee, then come back for this.

To assure you, not completing this exercise doesn’t mean you are not a good fit for us. Being part of a team takes more than just competence. Character, chemistry, and culture fit are equally important to us.

Without further ado, let’s jump into the fun part!

To give you an overview, you will be working on these tasks:

1. Create a backend with a set of RESTful API. (Node.js, Express, Sequelize with sqlite)
2. Create a frontend that consumes it. (React)
3. Push it to a public GIT repository.
4. Setup CICD.

Complete the respective tasks with minimal effort based on the role you are applying for. 

| Role                 | Requirements                                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Frontend Developer   | The interviewer should have shared information on backend APIs with you. <br>You should complete (2) and (3). <br>(4) is optional. |
| Backend Developer    | You should complete (1) and (3). <br> (4) is optional.                                                                             |
| Full Stack Developer | You should complete (1), (2) and (3).<br>(4) is optional.                                                                          |
| DevOps Engineer      | The interviewer should have shared a git repository to implement (4).                                                              |

---

## Task 1 - Create RESTful APIs

Using Node.js, express and sequelize (sqlite), accomplish the following HTTP contract. Please fork this repository and work on it.

BaseURL: https://dev.svested.com/interview/api

| Path     | Method | Description                                                                                                                                                 |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /signup  | POST   | Takes in email and password. Returns a JWT Token for authorization                                                                                          |
| /process | POST   | Validate JWT token in the header. Process ./data/data.json file by inserting records into database using sequelize (ORM) where randAlphabet is 'a' and 'b'. This endpoint verify JWT Token in the HTTP Header 'Authoriszation Bearer <JWT Token>'. |
| /fetch   | GET    | Fetch the persisted data and return them as HTTP Response Body.                                                                                            |

---

## Task 2 - Create React Frontend

Using React, create a signup screen and a home screen. The signup screen should consume _POST /signup endpoint_. The home screen should have a button that calls endpoint _POST /process_ (requires standard authorization header) to start processing some data in the backend upon click. Then, another button that calls endpoint _GET /fetch_ to retrieve the processed data. 

_GET /fetch_ endpoint would return an array of objects that look like this:

```json
[
    {
        "id":1,
        "randAlphabet":"a"
    },
    {
        "id":304,
        "randAlphabet":"b"
    },
    ...
]
```

For every object in the array received in the response body, render a square element with the value of property `randAlphabet` displayed in it using a grid layout on the home screen.

BaseURL: https://dev.svested.com/interview/api

---

## Task 3 - Push to a GIT Repository

Once you are done with the tasks, push them to a personal GIT repository (not the one you cloned from) and squash it. Share the repository with the interviewer.

---

## Task 4 - Create CICD Pipeline

Choose a CICD platform of your choice and create CICD pipeline with the GIT repository. Share the admin rights to the CICD platform with your interviewer.
