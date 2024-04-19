import Link from 'next/link';
import '@/app/ui/checkout.css';


export default function Cart() {
  return (
    <div>
      <body>
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
        </div>


        <section id='title'> 
            <h1> Shipping Information</h1>
          </section>
        <main>

          <b>Name   &   Phone Number </b>
          <br></br>
          <input type="string" id="name" placeholder="John Doe"></input>
          <input type="string" id="phone" placeholder="000-111-2222"></input>
          <hr/>

          <br></br>
          <b>Email </b>
          <br></br>
          <input type="string" id="email" placeholder="example@email.com"></input>
          <hr/>

          <br></br>

          <b>Address</b>
          <br></br>
          <input type="string" id="address" placeholder="Street Address"></input>
          <hr/>
          <br></br>
          <input type="string" id="city" placeholder="City"></input>
          <input type="string" id="state" placeholder="State"></input>
          <input type="string" id="zipcode" placeholder="Zip Code"></input>
        </main>

          <section id='title'> 
            <h1> Billing Information</h1>
          </section> 

        <main>
          <hr/>
          <br></br>
          
          <b>Name</b>
          <br></br>
          <input type="string" id="name" placeholder="John Doe"></input>
          <hr/>

          <br></br>
          
          <b>Credit or Debit Information</b>
          <br></br>
          <input type="string" id="credit" placeholder="1234 5678 1234 5678"></input>
          <input type="string" id="security_code" placeholder="Security Code"></input>
        </main>

        <div className="banner-text">
          <a href="/thankyou">Order</a>
        </div>
      </body>
      <footer>
            <p>Local Luxuries, Copyright © 2024</p>
        </footer>
    </div>
  );
}