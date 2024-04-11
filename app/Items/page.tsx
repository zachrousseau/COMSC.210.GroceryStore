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
        <h1>Here are all the current items we have in stock</h1>
        <table className="item-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Origin Store</th>
              <th>Freshness Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple Pie</td>
              <td>$10.00</td>
              <td>Bakery</td>
              <td>10/10</td>
            </tr>
            <tr>
              <td>Loaf of Bread</td>
              <td>$5.00</td>
              <td>Bakery</td>
              <td>9/10</td>
            </tr>
            <tr>
              <td>Cheese Pizza</td>
              <td>$10.00</td>
              <td>Rocco's Pizzera</td>
              <td>Hot n' Ready</td>
            </tr>
            <tr>
              <td>Beef Wellington</td>
              <td>$10.00</td>
              <td>Dave's Butcher</td>
              <td>9/10</td>
            </tr>
            <tr>
              <td>Milk</td>
              <td>$3</td>
              <td>Green Grocer</td>
              <td>8/10</td>
            </tr>
            <tr>
              <td>Eggs</td>
              <td>$2</td>
              <td>Green Grocer</td>
              <td>9/10</td>
            </tr>
            <tr>
              <td>Apples</td>
              <td>$4</td>
              <td>Green Grocer</td>
              <td>9/10</td>
            </tr>
            <tr>
              <td>Bananas</td>
              <td>$3</td>
              <td>Green Grocer</td>
              <td>Ripe</td>
            </tr>
          </tbody>
        </table>

      <section id="checkout">
      <Link href="/cart">Cart</Link>
      </section>
      </main>
    </div>
  );
}