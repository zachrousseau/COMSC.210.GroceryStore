import Link from 'next/link';
import '@/app/ui/cart.css';

export default function Cart() {
  return (
    <div>
      <header>
        <nav>
        <Link href="/">Home</Link>
        <Link href="/Items">Items</Link>
        </nav>
      </header>
      <main>
        <h1>Welcome Guest!</h1>

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
    </div>
  );
}