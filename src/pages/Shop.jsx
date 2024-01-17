import { Link } from 'react-router-dom';
import Product from '../components/Product';
import useGetProducts from '../hooks/useGetProducts';
import styles from './Shop.module.css';

function Shop() {
  const { products } = useGetProducts();

  return (
    <div className={styles.container}>
      {products.map((product) => {
        const { id } = product;

        return (
          <Link to={`/product/${id}`} key={id}>
            <Product product={product} />
          </Link>
        );
      })}
    </div>
  );
}

export default Shop;
