import Link from 'next/link';
import '@/app/ui/thankyou.css';


export default function Cart() {
  return (
    <div>
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </header>
            <center>
                <section id='thankyou'>
                    
                    <br/>
                    <br/>
                    <h1> Thanks for Ordering!</h1>
                    <br/>
                    <center>
                        <Link href="/">Back to Home</Link>
                    </center>
                </section>
            </center>


      </body>
    </div>

  );
}