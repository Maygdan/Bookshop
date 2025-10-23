import styles from './Header.module.css';

const Header = ({ cartCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Bookshop</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><button type="button" className={styles.navBtn}>BOOKS</button></li>
          <li><button type="button" className={styles.navBtn}>AUDIOBOOKS</button></li>
          <li><button type="button" className={styles.navBtn}>STATIONERY & GIFTS</button></li>
          <li><button type="button" className={styles.navBtn}>BLOG</button></li>
        </ul>
      </nav>
      <div className={styles.icons}>
  {/* Иконка пользователя */}
  <button className={styles.iconBtn}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M20 21v-2a4 4 0 0 0-5.656-3.907A4 4 0 0 0 12 17a4 4 0 0 0-2.344-1.093A4 4 0 0 0 4 19v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  </button>

  {/* Иконка поиска */}
  <button className={styles.iconBtn}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </button>

  {/* Иконка корзины с бейджиком */}
  <button className={styles.iconBtn}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
    {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
  </button>
</div>
    </header>
  );
};

export default Header;