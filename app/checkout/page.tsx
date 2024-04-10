import Link from 'next/link';
import '@/app/ui/cart.css';


export default function Cart() {
  return (
    <div>
      <body>
          <h1> Shipping and Billing Information</h1>

          <input type="string" id="address" placeholder="Address"></input>

          <button id="review">Review Details</button>

          <h3>Order Details: <output id="orderdetails"></output></h3>
          <script src="./client.ts"></script>
      </body>
    </div>
  );
}