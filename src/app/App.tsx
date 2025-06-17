import { ProductCard } from '../components/ProductCard/ProductCard';
import { products } from '../data/products';
import './App.css';

export const App = () => {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="app-title">Наши товары</h1>
      </header>
      
      <section className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </main>
  );
};