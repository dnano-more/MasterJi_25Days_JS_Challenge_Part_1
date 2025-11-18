const form = document.getElementById('book-form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

let books = [];
let isEditing = false;
let editId = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadBooks();
  renderBooks();
});

// Form submit handler (covers add & update)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const t = title.value.trim();
  const a = author.value.trim();
  const y = year.value.trim();

  if (!t || !a || !y) {
    alert('Please provide Title, Author and Year');
    return;
  }

  if (isEditing && editId !== null) {
    // Update existing book
    books = books.map((b) => (b.id === editId ? { ...b, title: t, author: a, year: y } : b));
    isEditing = false;
    editId = null;
    btn.textContent = 'Add Book';
  } else {
    // Add new book
    const newBook = { id: Date.now(), title: t, author: a, year: y };
    books.push(newBook);
  }

  saveBooks();
  renderBooks();
  clearForm();
});

// Delegate click events for edit/delete
bookList.addEventListener('click', function (e) {
  const target = e.target;
  const id = target.closest('.book-item')?.dataset?.id;
  if (!id) return;

  if (target.classList.contains('delete')) {
    // delete
    books = books.filter((b) => String(b.id) !== id);
    saveBooks();
    renderBooks();
  } else if (target.classList.contains('edit')) {
    // edit
    const book = books.find((b) => String(b.id) === id);
    if (!book) return;
    title.value = book.title;
    author.value = book.author;
    year.value = book.year;
    isEditing = true;
    editId = book.id;
    btn.textContent = 'Update Book';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

function renderBooks() {
  bookList.innerHTML = '';
  if (books.length === 0) {
    bookList.innerHTML = '<p style="padding:10px">No books added yet.</p>';
    return;
  }

  books.forEach((b) => {
    const sec = document.createElement('section');
    sec.className = 'table-section book-item';
    sec.dataset.id = b.id;

    const dTitle = document.createElement('div');
    dTitle.textContent = b.title;
    const dAuthor = document.createElement('div');
    dAuthor.textContent = b.author;
    const dYear = document.createElement('div');
    dYear.textContent = b.year;

    const actions = document.createElement('div');
    actions.style.display = 'flex';
    actions.style.gap = '8px';

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'edit';
    editBtn.textContent = 'Edit';

    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'delete';
    delBtn.textContent = 'Delete';

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    sec.appendChild(dTitle);
    sec.appendChild(dAuthor);
    sec.appendChild(dYear);
    sec.appendChild(actions);

    bookList.appendChild(sec);
  });
}

function clearForm() {
  title.value = '';
  author.value = '';
  year.value = '';
  isEditing = false;
  editId = null;
  btn.textContent = 'Add Book';
}

function saveBooks() {
  try {
    localStorage.setItem('books', JSON.stringify(books));
  } catch (err) {
    console.error('Could not save books to localStorage', err);
  }
}

function loadBooks() {
  try {
    const raw = localStorage.getItem('books');
    books = raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Could not load books from localStorage', err);
    books = [];
  }
}

// Expose helper on window for debugging (optional)
window.__bookApp = { getBooks: () => books };
