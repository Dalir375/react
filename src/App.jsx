import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { VIDEOS } from './videos';
import Vidosik from './Vidosik/Vidosik';
import './App.css';

function App() {
  const [clicksLeft, setClicksLeft] = useState(10);
  const [sentences, setSentences] = useState([]);
  const [count, setCount] = useState(0); // Добавьте это состояние

  const handleClick = () => {
    if (clicksLeft > 0) {
      setSentences([...sentences, "Это предложение "]);
      setClicksLeft(clicksLeft - 1); // Уменьшаем количество доступных кликов
    }
  };

  return (
    <>
      <div className='video-container'>
        {/* <Vidosik title = "Magic" channelName = "shuler" img = {reactLogo}/> */}
        {VIDEOS.map((videos) => (
          <Vidosik 
            key={videos.id}
            title={videos.title} 
            channelName={videos.channelName}
            img={videos.img}
          />
        ))}
      </div>

      <button onClick={() => setCount(count + 1)}>
        Нажми меня {count}
      </button>

      <div>
        <button onClick={handleClick} disabled={clicksLeft === 0}>
          Добавить предложение (Осталось нажатий: {clicksLeft})
        </button>

        <div style={{ marginTop: '20px' }}>
          {sentences.map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
