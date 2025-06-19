import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">MyStore</Link>
        <div className="space-x-4">
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  );
}
