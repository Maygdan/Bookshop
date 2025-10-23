
import styles from './CategoryList.module.css';

const categories = [
  'Architecture',
  'Art & Fashion',
  'Biography',
  'Business',
  'Crafts & Hobbies',
  'Drama',
  'Fiction',
  'Food & Drink',
  'Health & Wellbeing',
  'History & Politics',
  'Humor',
  'Poetry',
  'Psychology',
  'Science',
  'Technology',
  'Travel & Maps'
];

const CategoryList = ({ activeCategory, onCategoryChange }) => {
  return (
    <ul className={styles.categoryList}>
      {categories.map(category => (
        <li
          key={category}
          className={`${styles.categoryItem} ${category === activeCategory ? styles.categoryItemActive : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;