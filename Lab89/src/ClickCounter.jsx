// 1. Додалася ця стрічка
import { useState } from 'react';

function ClickCounter() {
  // 2. Додалася логіка для роботи зі станом
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  // 3. Розмітка трохи змінилася, щоб використовувати стан
  return (
    <div className="counter-box">
      <h2>Лічильник кліків</h2>
      {/* Тепер тут не просто текст, а змінна {count} */}
      <p>Ви натиснули на кнопку {count} разів.</p>
      
      {/* До кнопки додався обробник події onClick */}
      <button onClick={handleIncrement}>Натисни мене</button>
    </div>
  );
}

export default ClickCounter;