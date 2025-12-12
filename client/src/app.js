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

let guestBookMsgQueue = [
  {
    idOrder: 1,
    firstname: "",
    surname: "",
    rating: 0,
    comment: "",
  },
  {
    idOrder: 2,
    firstname: "",
    surname: "",
    rating: 0,
    comment: "",
  },
  {
    idOrder: 3,
    firstname: "",
    surname: "",
    rating: 0,
    comment: "",
  },
  {
    idOrder: 4,
    firstname: "",
    surname: "",
    rating: 0,
    comment: "",
  },
  {
    idOrder: 5,
    firstname: "",
    surname: "",
    rating: 0,
    comment: "",
  },
  {
    idOrder: 6,
    firstname: "",
    surname: "",
    rating: 0,
    comment: "",
  },
  {
    idOrder: 7,
    firstname: "",
    surname: "",
    rating: 0,
    comment: "",
  },
  {
    idOrder: 8,
    firstname: "",
    surname: "",
    rating: 0,
    comment: "",
  },
];

//================================================
// Generate the guestbook

async function handleGrabGuestBook() {
  const response = await fetch(
    "https://week-04-assignment-gybp.onrender.com/guestbookread"
  );
  const loadGuestBook = await response.json();
  console.log(`Guestbook is loaded? ${loadGuestBook}`);
}
