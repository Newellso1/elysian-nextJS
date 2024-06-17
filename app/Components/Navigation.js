import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-2 w-dvw">
      <ul className="flex justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/account">Account</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
