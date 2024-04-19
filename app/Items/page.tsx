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
            <a href="/cart">Look At Your Cart</a>
          </div>
        </div>
        <div className="main-content">
          <div className="one-col">
            <h1>Here is ours favorite items of the day</h1>
            <p>Here at grocery Store TM, We love food, so thats why we bring you the best food.</p>
          </div>
          <div className="two-col">
            <div className="two-col1">
              <img src="/customers/apple-pie-transparent-png.png" />
            </div>
            <div className="two-col2">
              <h1>Grandmas Apple Pie</h1>
              <p>Apple pie is a classic dessert that has become synonymous with comfort and tradition in many cultures around the world. 
                This delectable pastry consists of a sweet and spiced apple filling encased in a flaky pastry crust, 
                typically served warm with a scoop of vanilla ice cream or a dollop of whipped cream.
              </p>
              <a href="#">Add To Cart</a>
            </div>
          </div>
          <div className="two-col">
            <div className="two-col2">
              <h1>Garlic Bread from Heaven</h1>
              <p>Garlic bread is a mouthwatering culinary creation that delights taste buds with its irresistible combination of flavors and textures. 
                This beloved dish features slices of bread generously slathered with a savory mixture of garlic-infused butter, herbs, 
                and often grated Parmesan cheese. Once baked or toasted to golden perfection, 
                garlic bread emerges from the oven with a tantalizing aroma that promises a truly satisfying dining experience.
              </p>
              <a href="#">Add To Cart</a>
            </div>
            <div className="two-col1">
              <img src="/customers/Garlic-Bread.png" />
            </div>
          </div>
        </div>
        <footer>
            <p>Local Luxuries, Copyright © 2024</p>
        </footer>
      </div>
  );
}
