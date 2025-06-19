import Link from 'next/link';
export default function Header() {
    return(
        <header className="bg-white shadow-md">
            <div className="max-w-7x1 mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">
                    <Link href="/">MyStore</Link>
                </h1>
                <nav className="space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
                    <Link href="/products" className="text-gray-600 hover:text-black">Products</Link>
                </nav>
            </div>

        </header>

    );
}