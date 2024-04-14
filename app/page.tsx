import Image from 'next/image'
import { sql } from "@vercel/postgres";
// import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom';
import Link from 'next/link';

export default function Page() {
  return (
    <div>

    <title>Local Luxuries</title>


    <link rel="stylesheet" href="./css/style.css"/>    {/*Pointer to Style Sheet*/}
    <header>
      <div className="container">
        <div id="branding">
          <h1><span className="highlight">Local</span> Luxuries</h1> {/*Span keeps it in the same line */}
        </div>	
        <nav> {/*Nav Tag */}
          <ul>
            <li className="current"><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <Link href="/cart">Cart</Link>
          </ul>
        </nav>
      </div>
    </header>
    {/*Showcase Section */}
    <section id="showcase">
      <div className="container">
        <h1>Find High Quality Local Food</h1>
        {/* Dummy text is from www.lipsum.com */}
        <p>Step away from large food chains you can have anywhere and go local instead</p>
      </div>
    </section>
    {/*
The boxes are in a container class and each box has it's own div

We also add the images to the img folder

*/}
    {/*Boxes Section  */}
    <section id="boxes">
      <div className="container">
        <div className="box">
          <Image
            src="/logo_html.png" 
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
        />
          <h3><b>Dine In</b></h3>
          <p>Sit down and enjoy a meal</p>
        </div>
        <div className="box">
        <Image
            src="/logo_css.png" 
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
        />
          <h3><b>Take Home</b></h3>
          <p>Restaurants and stores that you can take food home from</p>
        </div>
        <div className="box">
          <Image
            src="/logo_brush.png" 
            width={2000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
          <h3><b>Delivery</b></h3>
          <p>Businesses that offer delivery through a driver or 3rd party apps</p>
        </div>
      </div>
    </section>
    {/*Newsletter Section  */}
    <section id="newsletter">
      <div className="container">
        <h1>Subscribe To Our Newsletter</h1>
        <form>
          <input type="email" placeholder="Enter Email..." /> {/*Get the email type, allow the user to submit it */}
          <button type="submit" className="button_1">Subscribe</button>
        </form>
      </div>
    </section>
    <footer>
      <p>Local Luxuries, Copyright © 2024</p>
    </footer>
  </div>
  );
}
