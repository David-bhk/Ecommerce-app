import { CartProvider } from '../context/CartContext';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster position="top-right" reverseOrder={false} />
      </Layout>
    </CartProvider>
  );
}
