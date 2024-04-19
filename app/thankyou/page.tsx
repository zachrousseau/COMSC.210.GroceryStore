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
            <h1><b>Thank Your For Ordering!</b></h1>
            <a href="/">Back to Home</a>
          </div>


        </div>
        <footer>
            <p>Local Luxuries, Copyright © 2024</p>
        </footer>
      </div>
  );
}
