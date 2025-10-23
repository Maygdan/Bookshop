import React from 'react';
import styles from './BookCard.module.css';

const BookCard = ({ book, isInCart, onToggleCart }) => {
  const { volumeInfo, saleInfo } = book;
  const cover = volumeInfo.imageLinks?.thumbnail || '/assets/images/placeholder.jpg';
  const authors = volumeInfo.authors?.join(', ') || 'Unknown Author';
  const title = volumeInfo.title || 'No Title';
  const averageRating = volumeInfo.averageRating;
  const ratingsCount = volumeInfo.ratingsCount;
  const description = volumeInfo.description || '';
  const price = saleInfo?.retailPrice?.amount ? `$${saleInfo.retailPrice.amount}` : null;

  let desc = description;
  if (desc.length > 150) {
    desc = desc.substring(0, 150) + '...';
  }

  const ratingStars = averageRating ? Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(averageRating) ? '★' : '☆'
  ).join('') : '';

  const btnText = isInCart ? 'IN THE CART' : 'BUY NOW';
  const btnClass = isInCart ? styles.buyBtnInCart : styles.buyBtn;

  return (
    <div className={styles.bookCard}>
      {/* Обложка */}
      <img src={cover} alt={title} className={styles.cover} />

      {/* Информация о книге */}
      <div className={styles.info}>
        <p className={styles.author}>{authors}</p>
        <h3 className={styles.title}>{title}</h3>
        {averageRating && (
          <div className={styles.rating}>
            {ratingStars} ({ratingsCount})
          </div>
        )}
        <p className={styles.description}>{desc}</p>
        {price && <p className={styles.price}>{price}</p>}
        <button
          className={btnClass}
          onClick={() => onToggleCart(book.id)}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default BookCard;