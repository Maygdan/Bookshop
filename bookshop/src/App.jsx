import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import CategoryList from './components/CategoryList/CategoryList';
import BookCard from './components/BookCard/BookCard';
import { fetchBooksByCategory } from './api/googleBooksApi';
import { getCart, addToCart, removeFromCart, isInCart } from './utils/localStorageHelper';
import styles from './App.module.css';

function App() {
  const [books, setBooks] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('Architecture');
  const [startIndex, setStartIndex] = useState(0);
  const [cart, setCart] = useState(getCart());
  const maxResults = 6;

  const loadBooks = async (category, startIdx) => {
    const newBooks = await fetchBooksByCategory(category, startIdx, maxResults);
    setBooks(prev => [...prev, ...newBooks]);
    setStartIndex(prev => prev + maxResults);
  };

  useEffect(() => {
    setBooks([]);
    setStartIndex(0);
    loadBooks(currentCategory, 0);
  }, [currentCategory]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  const handleLoadMore = () => {
    loadBooks(currentCategory, startIndex);
  };

  const handleToggleCart = (bookId) => {
    if (isInCart(bookId)) {
      removeFromCart(bookId);
    } else {
      addToCart(bookId);
    }
    
    setCart(getCart());
  };

  return (
    <div className={styles.App}>
      <Header cartCount={cart.length} />
      <main className={styles.main}>
        <Slider />
        <section className={styles.contentSection}>
          <aside className={styles.sidebar}>
            <CategoryList
              activeCategory={currentCategory}
              onCategoryChange={handleCategoryChange}
            />
          </aside>
          <div className={styles.bookGrid}>
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isInCart={isInCart(book.id)}
                onToggleCart={handleToggleCart}
              />
            ))}
          </div>
        </section>
        <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
          LOAD MORE
        </button>
      </main>
    </div>
  );
}

export default App;