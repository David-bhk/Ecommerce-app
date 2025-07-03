import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty. Please add some products first.</p>
          <Link href="/products" className="text-blue-600 underline mt-4 block">
            Back to Products
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">
                  {item.quantity} × ${item.price} = $
                  {(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-lg font-semibold">
              Total: <span className="text-green-600">${total.toFixed(2)}</span>
            </p>

            <button
              disabled
              className="mt-4 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
              title="Checkout coming soon"
            >
              Complete Checkout (Coming Soon)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
