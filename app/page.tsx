import Image from 'next/image'
import { sql } from "@vercel/postgres";
// import {BrowserRouter, Link, NavLink, Route, Routes} from 'react-router-dom';
import Link from 'next/link';

export default function Page() {
  return <Link href="/cart">Cart</Link>
}
