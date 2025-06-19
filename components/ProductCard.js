import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition duration-200 cursor-pointer">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-1">{product.description}</p>
        <p className="text-green-600 font-bold">${product.price}</p>
      </div>
    </Link>
  );
}
