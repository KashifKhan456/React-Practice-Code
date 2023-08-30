import React from 'react'

export default function Tutorial() {
  return (
    <div>
      <h1>Hello guys this is new tutorail...</h1>
      <p>You can also write some brief description about today lecture that you are gonna be discuss in this lecture, okay so with that set let's get started. This is how you can create and a components and with the help of jsx. JSX is basically the combination of HTML markup language and JavaScript so finally we are getting JSX. With that introduction let's start some other stuff in React - Kashif Noor</p>

      <ul>
        <h2>This is just for reprensentation of <i>Ul list in JSX.</i></h2>
        <li><a href='/'>Home </a>- Now this is an anchor tag</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Contact Us</li>
        <li>Feedback</li>
        <li>In this lecture we have seen so far that how you can create your react project.</li>
        <li>In the next Lecture we will start discussion about conditional statement and props.

        </li>
        <hr style={{marginTop:'20px', backgroundColor: 'red', padding:'1px'}}/>
      </ul>
    </div>
  )
}
