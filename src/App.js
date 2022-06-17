import React, { useState, useEffect } from 'react'
import Loading from './components/Loading.js';
import Tours from './components/Tours.js';

const url = 'https://course-api.com/react-tours-project'

function App() {
  // 初始化狀態
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  // 請求數據
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])
  // console.log(tours)

  // 刪除卡片
  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  //判斷加載
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // 判斷沒有目的地資訊
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>沒有旅遊目的地資料</h2>
          <button className='btn' onClick={() => { fetchTours() }}>重新獲取</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
