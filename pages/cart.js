import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
  <div
    key={index}
    className="border p-4 rounded flex justify-between items-center"
  >
    <div>
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p className="text-gray-600">${item.price} each</p>
      <div className="flex items-center space-x-2 mt-2">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
        >
          -
        </button>
        <span className="font-medium">x{item.quantity}</span>
        <button
          onClick={() => increaseQuantity(item.id)}
          className="px-2 py-1 bg-gray-200 text-gray-800 rounded"
        >
          +
        </button>
      </div>
    </div>

    <button
      onClick={() => removeFromCart(item.id)}
      className="text-red-600 hover:underline"
    >
      Remove
    </button>
  </div>
))}


          <div className="text-right mt-6">
            <p className="text-lg font-semibold">
              Total: <span className="text-green-600">${total.toFixed(2)}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
