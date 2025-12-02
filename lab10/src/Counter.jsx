import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Функція для збільшення
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Функція для зменшення з перевіркою
  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="counter-container">
      <h2 className="counter-display">{count}</h2>
      <div className="counter-buttons">
        <button onClick={handleDecrement}>- Мінус</button>
        <button onClick={handleIncrement}>Плюс +</button>
      </div>
    </div>
  );
}

export default Counter;