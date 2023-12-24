#                                                      Youtube-Subscribers Backend Database Project.
Youtube subscribers backend Api to get the subscribers using specific routes end point made using Node.js , Express.js and MongoDB and Mongoose. By including particular routes end point in the URL, user can access the number of subscribers list,  subscribers name or access subscribers by specific IDs.

## **NOTE**
  <p> This capstone project is associated with <a href="https://www.almabetter.com">Almabetter</a>.</p>
  <p> Submitted By: UJJWAL KUMAR </p>

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Content</summary>
    <ol>
        <li><a href="#demo">Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#technology-languages-used">Technology/ Languages Used</a></li>
        <li><a href="#how-to-run-locally">How to Run Locally</a></li>
    </ol>
</details>


## **MongoDB Schema Structure**

### Field               -->       Type
- _id                 -->       ObjectID
- name                -->       String
- subscribedChannel   -->       String
- subscribedDate      -->       Date
- __v                 -->       Int32

## **Features**

- Access all subscribers from remotely hoisted database
- Access perticular data from database through a specific IDs
- Access only subscriber list with names and subscribed Channels
- Fetch specific data from database via a route
- Fetch all subscribers from remotely hoisted database

## **Technology/ Languages Used**

- Expressjs
- MongoDB
- Mongoose
- HTML,CSS,JS for Docs Page


<!-- HOW TO RUN LOCALLY -->

## **How to Run locally**
- To run this project locally, use the following command in your CLI:

```bash
git clone https://github.com/uk2023/BACKEND-YOUTUBE-SUBSCRIBERS.git
```
- Open your favorite code editor and run locally!
```bash
  npm install
  node index.js
```

- Open any browser and type in address bar> localhost:3000/docs

## **Deployment**
https://youtube-subscribers-backend-amber.vercel.app/

## **DISCLAIMER**
<p> I don't own any of the logos or images used in the project all belongs to their respected owners. </p>
