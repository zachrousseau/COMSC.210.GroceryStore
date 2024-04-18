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

          <center>
          <main>
        <table className="item-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple Pie</td>
              <td>$10.00</td>
              <td>1</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Loaf of Bread</td>
              <td>$5.00</td>
              <td>3</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td>Cheese Pizza</td>
              <td>$10.00</td>
              <td>2</td>
              <td>$20.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      <section id="checkout">
      <Link href="/checkout">Checkout</Link>
    </section>
    </main>
    </center>
  </div>
  </div>
  );
}