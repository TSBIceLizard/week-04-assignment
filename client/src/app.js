//=================================

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
const guestBookMessage1Auth = document.createElement("p");
const guestBookMessage2Auth = document.createElement("p");
const guestBookMessage3Auth = document.createElement("p");
const guestBookMessage4Auth = document.createElement("p");
const guestBookMessage5Auth = document.createElement("p");
const guestBookMessage6Auth = document.createElement("p");
const guestBookMessage7Auth = document.createElement("p");
const guestBookMessage8Auth = document.createElement("p");

const guestBookMessage1Cell = document.createElement("div");
const guestBookMessage2Cell = document.createElement("div");
const guestBookMessage3Cell = document.createElement("div");
const guestBookMessage4Cell = document.createElement("div");
const guestBookMessage5Cell = document.createElement("div");
const guestBookMessage6Cell = document.createElement("div");
const guestBookMessage7Cell = document.createElement("div");
const guestBookMessage8Cell = document.createElement("div");

//================================================
// Generate the guestbook

async function handleGrabGuestBook() {
  const response = await fetch(
    "https://week-04-assignment-gybp.onrender.com/guestbookread"
  );
  const loadGuestBook = await response.json();
  console.log(`Guestbook is loaded? ${loadGuestBook}`);
  // Now that the guestbook is fetched, we can DOM manipulate it and distribute them on the page

  let guestBookMsgQueue = [
    {
      idOrder: 1,
      firstname: loadGuestBook[7].firstname,
      surname: loadGuestBook[7].surname,
      rating: loadGuestBook[7].rating,
      comment: loadGuestBook[7].comment,
    },
    {
      idOrder: 2,
      firstname: loadGuestBook[6].firstname,
      surname: loadGuestBook[6].surname,
      rating: loadGuestBook[6].rating,
      comment: loadGuestBook[6].comment,
    },
    {
      idOrder: 3,
      firstname: loadGuestBook[5].firstname,
      surname: loadGuestBook[5].surname,
      rating: loadGuestBook[5].rating,
      comment: loadGuestBook[5].comment,
    },
    {
      idOrder: 4,
      firstname: loadGuestBook[4].firstname,
      surname: loadGuestBook[4].surname,
      rating: loadGuestBook[4].rating,
      comment: loadGuestBook[4].comment,
    },
    {
      idOrder: 5,
      firstname: loadGuestBook[3].firstname,
      surname: loadGuestBook[3].surname,
      rating: loadGuestBook[3].rating,
      comment: loadGuestBook[3].comment,
    },
    {
      idOrder: 6,
      firstname: loadGuestBook[2].firstname,
      surname: loadGuestBook[2].surname,
      rating: loadGuestBook[2].rating,
      comment: loadGuestBook[2].comment,
    },
    {
      idOrder: 7,
      firstname: loadGuestBook[1].firstname,
      surname: loadGuestBook[1].surname,
      rating: loadGuestBook[1].rating,
      comment: loadGuestBook[1].comment,
    },
    {
      idOrder: 8,
      firstname: loadGuestBook[0].firstname,
      surname: loadGuestBook[0].surname,
      rating: loadGuestBook[0].rating,
      comment: loadGuestBook[0].comment,
    },
  ];

  let guestBookMessageA = [
    {
      headerString: `By ${guestBookMsgQueue[0].firstname} ${guestBookMsgQueue[0].surname} who rated us as ${guestBookMsgQueue[0].rating}!`,
    },
    {
      headerString: `By ${guestBookMsgQueue[1].firstname} ${guestBookMsgQueue[1].surname} who rated us as ${guestBookMsgQueue[1].rating}!`,
    },
    {
      headerString: `By ${guestBookMsgQueue[2].firstname} ${guestBookMsgQueue[2].surname} who rated us as ${guestBookMsgQueue[2].rating}!`,
    },
    {
      headerString: `By ${guestBookMsgQueue[3].firstname} ${guestBookMsgQueue[3].surname} who rated us as ${guestBookMsgQueue[3].rating}!`,
    },
    {
      headerString: `By ${guestBookMsgQueue[4].firstname} ${guestBookMsgQueue[4].surname} who rated us as ${guestBookMsgQueue[4].rating}!`,
    },
    {
      headerString: `By ${guestBookMsgQueue[5].firstname} ${guestBookMsgQueue[5].surname} who rated us as ${guestBookMsgQueue[5].rating}!`,
    },
    {
      headerString: `By ${guestBookMsgQueue[6].firstname} ${guestBookMsgQueue[6].surname} who rated us as ${guestBookMsgQueue[6].rating}!`,
    },
    {
      headerString: `By ${guestBookMsgQueue[7].firstname} ${guestBookMsgQueue[7].surname} who rated us as ${guestBookMsgQueue[7].rating}!`,
    },
  ];

  const msgCell = [
    {
      placeFrame: function () {
        guestBookContent.appendChild(guestBookMessage1Cell);
        guestBookMessage1Cell.class = "guest-book-message-cell";
      },
    },
    {
      placeFrame: function () {
        guestBookContent.appendChild(guestBookMessage2Cell);
        guestBookMessage2Cell.class = "guest-book-message-cell";
      },
    },
    {
      placeFrame: function () {
        guestBookContent.appendChild(guestBookMessage3Cell);
        guestBookMessage3Cell.class = "guest-book-message-cell";
      },
    },
    {
      placeFrame: function () {
        guestBookContent.appendChild(guestBookMessage4Cell);
        guestBookMessage4Cell.class = "guest-book-message-cell";
      },
    },
    {
      placeFrame: function () {
        guestBookContent.appendChild(guestBookMessage5Cell);
        guestBookMessage5Cell.class = "guest-book-message-cell";
      },
    },
    {
      placeFrame: function () {
        guestBookContent.appendChild(guestBookMessage6Cell);
        guestBookMessage6Cell.class = "guest-book-message-cell";
      },
    },
    {
      placeFrame: function () {
        guestBookContent.appendChild(guestBookMessage7Cell);
        guestBookMessage7Cell.class = "guest-book-message-cell";
      },
    },
    {
      placeFrame: function () {
        guestBookContent.appendChild(guestBookMessage8Cell);
        guestBookMessage8Cell.class = "guest-book-message-cell";
      },
    },
  ];

  const authorBlock = [
    {
      placeAuthor: function () {
        guestBookMessage1Cell.appendChild(guestBookMessage1Auth);
        guestBookMessage1Auth.textContent = guestBookMessageA[0].headerString;
        guestBookMessage1Auth.class = "author-header";
      },
    },
    {
      placeAuthor: function () {
        guestBookMessage2Cell.appendChild(guestBookMessage2Auth);
        guestBookMessage2Auth.textContent = guestBookMessageA[1].headerString;
        guestBookMessage2Auth.class = "author-header";
      },
    },
    {
      placeAuthor: function () {
        guestBookMessage3Cell.appendChild(guestBookMessage3Auth);
        guestBookMessage3Auth.textContent = guestBookMessageA[2].headerString;
        guestBookMessage3Auth.class = "author-header";
      },
    },
    {
      placeAuthor: function () {
        guestBookMessage4Cell.appendChild(guestBookMessage4Auth);
        guestBookMessage4Auth.textContent = guestBookMessageA[3].headerString;
        guestBookMessage4Auth.class = "author-header";
      },
    },
    {
      placeAuthor: function () {
        guestBookMessage5Cell.appendChild(guestBookMessage5Auth);
        guestBookMessage5Auth.textContent = guestBookMessageA[4].headerString;
        guestBookMessage5Auth.class = "author-header";
      },
    },
    {
      placeAuthor: function () {
        guestBookMessage6Cell.appendChild(guestBookMessage6Auth);
        guestBookMessage6Auth.textContent = guestBookMessageA[5].headerString;
        guestBookMessage6Auth.class = "author-header";
      },
    },
    {
      placeAuthor: function () {
        guestBookMessage7Cell.appendChild(guestBookMessage7Auth);
        guestBookMessage7Auth.textContent = guestBookMessageA[6].headerString;
        guestBookMessage7Auth.class = "author-header";
      },
    },
    {
      placeAuthor: function () {
        guestBookMessage8Cell.appendChild(guestBookMessage8Auth);
        guestBookMessage8Auth.textContent = guestBookMessageA[7].headerString;
        guestBookMessage8Auth.class = "author-header";
      },
    },
  ];

  const messageBlock = [
    {
      placeMessage: function () {
        guestBookMessage1Cell.appendChild(guestBookMessage1);
        guestBookMessage1.textContent = guestBookMsgQueue[0].comment;
        guestBookMessage1.class = "guest-book-message";
      },
    },
    {
      placeMessage: function () {
        guestBookMessage2Cell.appendChild(guestBookMessage2);
        guestBookMessage2.textContent = guestBookMsgQueue[1].comment;
        guestBookMessage2.class = "guest-book-message";
      },
    },
    {
      placeMessage: function () {
        guestBookMessage3Cell.appendChild(guestBookMessage3);
        guestBookMessage3.textContent = guestBookMsgQueue[2].comment;
        guestBookMessage3.class = "guest-book-message";
      },
    },
    {
      placeMessage: function () {
        guestBookMessage4Cell.appendChild(guestBookMessage4);
        guestBookMessage4.textContent = guestBookMsgQueue[3].comment;
        guestBookMessage4.class = "guest-book-message";
      },
    },
    {
      placeMessage: function () {
        guestBookMessage5Cell.appendChild(guestBookMessage5);
        guestBookMessage5.textContent = guestBookMsgQueue[4].comment;
        guestBookMessage5.class = "guest-book-message";
      },
    },
    {
      placeMessage: function () {
        guestBookMessage6Cell.appendChild(guestBookMessage6);
        guestBookMessage6.textContent = guestBookMsgQueue[5].comment;
        guestBookMessage6.class = "guest-book-message";
      },
    },
    {
      placeMessage: function () {
        guestBookMessage7Cell.appendChild(guestBookMessage7);
        guestBookMessage7.textContent = guestBookMsgQueue[6].comment;
        guestBookMessage7.class = "guest-book-message";
      },
    },
    {
      placeMessage: function () {
        guestBookMessage8Cell.appendChild(guestBookMessage8);
        guestBookMessage8.textContent = guestBookMsgQueue[7].comment;
        guestBookMessage8.class = "guest-book-message";
      },
    },
  ];

  const messageDistribution = [
    {
      blockPlace: msgCell[7].placeFrame(),
      msgAuthor: authorBlock[7].placeAuthor(),
      msgContent: messageBlock[7].placeMessage(),
    },
    {
      blockPlace: msgCell[6].placeFrame(),
      msgAuthor: authorBlock[6].placeAuthor(),
      msgContent: messageBlock[6].placeMessage(),
    },
    {
      blockPlace: msgCell[5].placeFrame(),
      msgAuthor: authorBlock[5].placeAuthor(),
      msgContent: messageBlock[5].placeMessage(),
    },
    {
      blockPlace: msgCell[4].placeFrame(),
      msgAuthor: authorBlock[4].placeAuthor(),
      msgContent: messageBlock[4].placeMessage(),
    },
    {
      blockPlace: msgCell[3].placeFrame(),
      msgAuthor: authorBlock[3].placeAuthor(),
      msgContent: messageBlock[3].placeMessage(),
    },
    {
      blockPlace: msgCell[2].placeFrame(),
      msgAuthor: authorBlock[2].placeAuthor(),
      msgContent: messageBlock[2].placeMessage(),
    },
    {
      blockPlace: msgCell[1].placeFrame(),
      msgAuthor: authorBlock[1].placeAuthor(),
      msgContent: messageBlock[1].placeMessage(),
    },
    {
      blockPlace: msgCell[0].placeFrame(),
      msgAuthor: authorBlock[0].placeAuthor(),
      msgContent: messageBlock[0].placeMessage(),
    },
  ];
}

handleGrabGuestBook();
