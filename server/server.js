//imports

import express from "express";

//We need to configure CORS to allow our client to send data (cross-origin)
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();

//Config
app.use(cors());

app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server is running in port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Viola! My root route!!" });
});

app.post("/guestbook", (req, res) => {
  //receive the data from the client
  const newGuestBookEntry = req.body.formValues;
  console.log(newGuestBookEntry);
  //We use parameters in SQL to protect the data and reuse the query
  const query = db.query(
    `INSERT INTO guestbook (firstname, surname, rating, comment) VALUES ($1, $2, $3, $4)`,
    [
      newGuestBookEntry.firstname,
      newGuestBookEntry.surname,
      newGuestBookEntry.rating,
      newGuestBookEntry.comment,
    ]
  );

  res.json({ status: "success", values: newGuestBookEntry });
});

//================================
// Get the last 8 added guestbook comments

app.get("/guestbookread", async function (req, res) {
  const guestBookGet = await db.query(
    `SELECT * FROM guestbook FETCH LAST 8 ROWS ONLY`
  );
  res.json({ status: "success", values: guestBookGet.rows });
});
