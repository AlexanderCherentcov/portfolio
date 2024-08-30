import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Стили
import './style/style.scss';

const root = document.getElementById('root');

// Проверяем, существует ли элемент с id root
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
