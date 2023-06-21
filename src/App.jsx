import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const data = [
    {author: "알버트 아인슈타인" , context: "성공한 사람이 아니라 가치있는 사람이 되기 위해 힘쓰라."},
    {author: "토마스 아 켐피스" , context: "절대 허송세월 하지마라. 책을 읽든지, 쓰든지, 기도를 하든지, 명상을 하든지, 또는 공익을 위해 노력하든지, 항상 뭔가를 해라."},
    {author: "마하트마 간디" , context: "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다."},
    {author: "캘빈 쿨리지" , context: "나는 중요한 일을 이루려 노력할 때 사람들의 말에 너무 신경쓰지 않는 것이 바람직하다는 사실을 깨달았다. 예외 없이 이들은 안된다고 공언한다. 하지만 바로 이 때가 노력할 절호의 시기이다."},
  ]
  
  const [month, setMonth] = useState(new Date().getMonth());
  const [date, setDate] = useState(new Date().getDate());
  const [day, setDay] = useState(new Date().getDay());

  const [number, setNumber] = useState(0);

  function nextData() {
    //const next = number;
    {
      number < 3 ?
      setNumber(number + 1)
      : setNumber(0)   
    }
  }

  useEffect(()=>{
    const interval = setInterval(() => {
      setNumber(prevNumber => (prevNumber + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
    },[])

  return (
    <>
      <div className='App'>
        <div className="text">
          <p>{data[number].context}</p>
          <p>{data[number].author}</p>
        </div>
        <div className="date">
          <p id='day'>
            {
          day === 0 ? '일요일' :  day === 1 ? '월요일' :  day === 2 ? '화요일' : day === 3 ? '수요일' : day === 4 ? '목요일' : day === 5 ? '금요일' : day === 6 ? '토요일' : null 
          }
          </p>
          <p id='month'>{month + 1}/{date}</p>
        </div>
        <button onClick={nextData} id='btn'>더보기</button>
      </div>
    </>
  )
}

export default App
