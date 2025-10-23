const API_KEY = 'AIzaSyAZ7zUvKGlqq6ELhJ-mfdGqMASBIPGAOnE'; // Замените на свой ключ!

export const fetchBooksByCategory = async (category, startIndex = 0, maxResults = 6) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(category)}&key=${API_KEY}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Ошибка загрузки книг:', error);
    return [];
  }
};