import Link from 'next/link';
import '@/app/ui/Items.css';

export default function Page() {
  return (
    <div>
        <meta charSet="utf-8" />
        <link rel="icon" href="/customers/amy-burns.png" />
        <meta name="viewport" content="width=device-width" />
        <title>Grocery Store</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet" />
        <div className="banner">
          <header>
            <h1>Grocery Store</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/Items">Items</Link>
              <Link href="/cart">Cart</Link>
            </nav>
          </header>
          <div className="banner-text">
            <p>Better Food Locally</p>
            <h1>Starts With You</h1>
          </div>
        </div>

          {/*Boxes Section  */}
      <section id="boxes">
      <div className="container">
        <div className="box">
          <h3><b>Dine In</b></h3>
          <p>Sit down and enjoy a meal</p>
        </div>
        <div className="box">

          <h3><b>Take Home</b></h3>
          <p>Restaurants and stores that you can take food home from</p>
        </div>
        <div className="box">
          <h3><b>Delivery</b></h3>
          <p>Businesses that offer delivery through a driver or 3rd party apps</p>
        </div>
      </div>
    </section>
    <footer>
      <p>Local Luxuries, Copyright © 2024</p>
    </footer>
  </div>
  
  );
}
