# Assignment 04 Reflections

While this page is not visually impressive, I'm really pleased with how I'm now able to interface a client <-> server <-> backend database. In the app logic, I tried to do a different approach with the code instead of the way in which I did my previous projects and this time I ended up using alot of object methods to display comments left by 'users'. When you enter the required fields on the guest book, it will post the data through the server <-> to the database and store it, and also the full-stack system gets those past entries from the DB and sorts them from most current to oldest.

I also ensured that this full stack page is responsive for phones this time. Tested it on multiple different devices and no apparent issues!

## The premise of this assignment

As our objective was to make a guest book, I felt like designing the site for what you'd expect a modest rural cottage airbnb would have.

### Requirements achieved:

- The HTML form fully works and can submit data that arrives at it's backend destination

- The project is responsive (tested on 4 devices)

- The GET API is able to show the last 8 submitted guest messages on the guestbook lower down the page

- The POST API works, that's how the user is able to submit their messages that arrive at the backend DB.

- I had myself and several friends and family populate the guest book with dummy data. I didn't need to use the Supabase query editor that much as it worked through the site which was a slightly more 'to life' experience

## What I wish I could fix

Currently the only way to show recent guestbook messages is to refresh the page, unfortunately I wasn't sure how to directly and immediately display the latest comment(s) on the page in realtime. This I felt like was the biggest problem.

The webpage for the end user doesn't have much going on about it, it's quite functional but isn't visually appealing. I've been rather burnt out since the week 03 assignment so I chose to conserve my energy for the following week instead of going the extra extra mile.

## Thanks very much for reading! That's the week 04 assignment completed!
