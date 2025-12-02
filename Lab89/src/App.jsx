// 1. Імпортуємо наш компонент на початку файлу
import ClickCounter from './ClickCounter';
import './App.css'; // Залишимо трохи стилів

function App() {
  return (
    <div>
      <h1>Моя перша домашка на React</h1>
      
      {/* 2. Використовуємо наш компонент як HTML-тег */}
      <ClickCounter />

    </div>
  );
}

export default App;