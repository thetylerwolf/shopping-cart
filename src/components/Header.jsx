import { Link } from 'react-router-dom';
import Cart from './Cart';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}>
          <div>
            <span className={styles.accent}>&rang;Duck</span> Shop
          </div>
        </Link>
        <div>
          <Link to='/cart' className={styles.icon}>
            <Cart />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
