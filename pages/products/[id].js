import { useRouter } from 'next/router';
import products from '../../data/products';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center py-10">Product not found.</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2 text-lg">{product.description}</p>
      <p className="text-xl font-semibold text-green-600 mb-4">${product.price}</p>

      <button
        onClick={() => {addToCart(product);
          toast.success(`${product.name} added to cart!`);
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
