import Link from 'next/link';
import '@/app/ui/cart2.css';

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

        </div>
      <div className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-4">
              <h2 className="heading-section">Cart</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table">
                  <thead className="thead-primary">
                    <tr>
                      <th>&nbsp;</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>total</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="alert" role="alert">
                      <td>
                        <label className="checkbox-wrap checkbox-primary">
                          {/*<input type="checkbox" checked>*/}
                            <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <div className="email">
                          <span><b>Awesome Food </b></span>
                          <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                        </div>
                      </td>
                      <td>$44.99</td>
                      <td className="quantity">
                        <div className="input-group">
                          {/* <input type="text" name="quantity" className="quantity form-control input-number" value="2" min="1" max="100">*/}
                        </div>
                      </td>
                      <td>$89.98</td>
                      <td>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true"><i className="fa fa-close"></i></span>
                        </button>
                      </td>
                    </tr>

                    <tr className="alert" role="alert">
                      <td>
                        <label className="checkbox-wrap checkbox-primary">
                          {/*<input type="checkbox">*/}
                            <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <div className="email">
                          <span><b>My Mom's Favorite Soup</b> </span>
                          <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                        </div>
                      </td>
                      <td>$30.99</td>
                      <td className="quantity">
                        <div className="input-group">
                          {/*<input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100">*/}
                        </div>
                      </td>
                      <td>$30.99</td>
                      <td>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true"><i className="fa fa-close"></i></span>
                        </button>
                      </td>
                    </tr>

                    <tr className="alert" role="alert">
                      <td>
                        <label className="checkbox-wrap checkbox-primary">
                          {/*<input type="checkbox">*/}
                            <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <div className="email">
                          <span><b>Whatever Evan Rapoza is Cooking for Dinner</b> </span>
                          <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                        </div>
                      </td>
                      <td>$35.50</td>
                      <td className="quantity">
                        <div className="input-group">
                          {/*<input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100">*/}
                        </div>
                      </td>
                      <td>$35.50</td>
                      <td>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true"><i className="fa fa-close"></i></span>
                        </button>
                      </td>
                    </tr>

                    <tr className="alert" role="alert">
                      <td>
                        <label className="checkbox-wrap checkbox-primary">
                          {/*<input type="checkbox">*/}
                            <span className="checkmark"></span>
                        </label>
                      </td>
                      <td>
                        <div className="email">
                          <span><b>Totally not Dog Meat</b></span>
                          <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                        </div>
                      </td>
                      <td>$76.99</td>
                      <td className="quantity">
                        <div className="input-group">
                          {/*<input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100">*/}
                        </div>
                      </td>
                      <td>$76.99</td>
                      <td>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true"><i className="fa fa-close"></i></span>
                        </button>
                      </td>
                    </tr>

                    <tr className="alert" role="alert">
                      <td className="border-bottom-0">
                        <label className="checkbox-wrap checkbox-primary">
                          {/*<input type="checkbox">*/}
                            <span className="checkmark"></span>
                        </label>
                      </td>
                      <td className="border-bottom-0">
                        <div className="email">
                          <span><b>Elephant</b></span>
                          <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                        </div>
                      </td>
                      <td className="border-bottom-0">$40.00</td>
                      <td className="quantity border-bottom-0">
                        <div className="input-group">
                          {/*<input type="text" name="quantity" className="quantity form-control input-number" value="1" min="1" max="100">*/}
                        </div>
                      </td>
                      <td className="border-bottom-0">$40.00</td>
                      <td className="border-bottom-0">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true"><i className="fa fa-close"></i></span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="banner-text">
          <a href="/checkout">Checkout</a>
        </div>
    <footer>
            <p>Local Luxuries, Copyright © 2024</p>
      </footer>
    </div>
  );
}