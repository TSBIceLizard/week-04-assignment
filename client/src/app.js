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
console.log(guestBookForm);

function handleGuestSubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(guestbookForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
  //TODO: send the data in a request to the server
  // We'll use the URL where our server is located! http://localhost:8080/new-staff temporarily (make sure that you are fetching the specific POST route that you are requesting data)
  // We'll use fetch to connect our client <---> server!
  fetch("http://localhost:8080/new-staff", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

guestbookForm.addEventListener("submit", handleGuestSubmit);
