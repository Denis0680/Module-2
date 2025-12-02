import './App.css';
import Counter from './Counter'; // 1. Імпортуємо наш компонент

function App() {
  return (
    <div>
      <h1>Лічильник</h1>
      <Counter /> {/* 2. Додаємо його сюди */}
    </div>
  );
}

export default App;