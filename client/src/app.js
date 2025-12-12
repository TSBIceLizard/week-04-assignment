//TODO: Collect user data from the HTML form and send it to the DB!

//submit event to collect users' data

//fetch the POST server route

// fetch("url", {
//     method:,
//     headers: {

//     },
//     body: JSON.stringify()
// })

//! Once you finish your project, replace your localhost url with the deployed server URL from Render!!!
//=================================

//TODO: Display guest data (left messages) on the guestbook interface!

//fetch the GET route from the server

// Render the data using DOM elements like normal! (One per piece of data)

const guestbookForm = document.getElementById("guest-book-form");
console.log(guestbookForm);

function handleGuestSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(guestbookForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
  fetch("https://week-04-assignment-gybp.onrender.com/guestbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

guestbookForm.addEventListener("submit", handleGuestSubmit);

//================================================
// Getting guestbook messages from the database!

const guestBookContent = document.getElementById("guestbook-content");
const guestBookMessage1 = document.createElement("p");
const guestBookMessage2 = document.createElement("p");
const guestBookMessage3 = document.createElement("p");
const guestBookMessage4 = document.createElement("p");
const guestBookMessage5 = document.createElement("p");
const guestBookMessage6 = document.createElement("p");
const guestBookMessage7 = document.createElement("p");
const guestBookMessage8 = document.createElement("p");

//================================================
// Generate the guestbook

async function handleGrabGuestBook() {
  const response = await fetch(
    "https://week-04-assignment-gybp.onrender.com/guestbookread"
  );
  const loadGuestBook = await response.json();
  //   let guestBookParsed = JSON.parse(loadGuestBook);
  console.log(`Guestbook is loaded? ${loadGuestBook}`);
  //   let guestBookMsgQueue = [
  //     {
  //       idOrder: 1,
  //       firstname: guestBookParsed[8].firstname,
  //       surname: guestBookParsed[8].surname,
  //       rating: guestBookParsed[8].rating,
  //       comment: guestBookParsed[8].comment,
  //     },
  //     {
  //       idOrder: 2,
  //       firstname: guestBookParsed[7].firstname,
  //       surname: guestBookParsed[7].surname,
  //       rating: guestBookParsed[7].rating,
  //       comment: guestBookParsed[7].comment,
  //     },
  //     {
  //       idOrder: 3,
  //       firstname: guestBookParsed[5].firstname,
  //       surname: guestBookParsed[5].surname,
  //       rating: guestBookParsed[5].rating,
  //       comment: guestBookParsed[5].comment,
  //     },
  //     {
  //       idOrder: 4,
  //       firstname: guestBookParsed[4].firstname,
  //       surname: guestBookParsed[4].surname,
  //       rating: guestBookParsed[4].rating,
  //       comment: guestBookParsed[4].comment,
  //     },
  //     {
  //       idOrder: 5,
  //       firstname: guestBookParsed[3].firstname,
  //       surname: guestBookParsed[3].surname,
  //       rating: guestBookParsed[3].rating,
  //       comment: guestBookParsed[3].comment,
  //     },
  //     {
  //       idOrder: 6,
  //       firstname: guestBookParsed[2].firstname,
  //       surname: guestBookParsed[2].surname,
  //       rating: guestBookParsed[2].rating,
  //       comment: guestBookParsed[2].comment,
  //     },
  //     {
  //       idOrder: 7,
  //       firstname: guestBookParsed[1].firstname,
  //       surname: guestBookParsed[1].surname,
  //       rating: guestBookParsed[1].rating,
  //       comment: guestBookParsed[1].comment,
  //     },
  //     {
  //       idOrder: 8,
  //       firstname: guestBookParsed[0].firstname,
  //       surname: guestBookParsed[0].surname,
  //       rating: guestBookParsed[0].rating,
  //       comment: guestBookParsed[0].comment,
  //     },
  //   ];
}

handleGrabGuestBook();
