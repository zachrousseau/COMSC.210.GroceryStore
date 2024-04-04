import Image from 'next/image'
import { sql } from "@vercel/postgres";


export default function Page() {
  return (
    <div>

      
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width"/>
    <meta name="description" content="Affordable and professional web design"/>
	  <meta name="keywords" content="web design, affordable web design, professional web design"/>
  	<meta name="author" content="Zach Rousseau"/>
    <title>I love computers</title>


    <link rel="stylesheet" href="./css/style.css"/>    {/*Pointer to Style Sheet*/}
    <header>
      <div className="container">
        <div id="branding">
          <h1><span className="highlight">Zach Rousseau</span> Computers</h1> {/*Span keeps it in the same line */}
        </div>	
        <nav> {/*Nav Tag */}
          <ul>
            <li className="current"><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
          </ul>
        </nav>
      </div>
    </header>
    {/*Showcase Section */}
    <section id="showcase">
      <div className="container">
        <h1>High Quality Computers for You!</h1>
        {/* Dummy text is from www.lipsum.com */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</p>
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
    {/* Adding in the Boxes section under the newsletter section 
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
          <h3>Super Computers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
        </div>
        <div className="box">
        <Image
            src="/logo_css.png" 
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
        />
          <h3>Apple Computers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
        </div>
        <div className="box">
          <Image
            src="/logo_brush.png" 
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
          <h3>Windows Computers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
        </div>
      </div>
    </section>
    <footer>
      <p>Zach Rousseau, Copyright © 2024</p>
    </footer>
  </div>
  );
}
