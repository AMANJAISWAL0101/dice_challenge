import { useState } from "react";
import "./styles.css";

export default function App() {

  const [currentImg,setCurrentImg] = useState(require('./assets/dice1.png'))

  const diceImg = [
    {
        id: 1,
        img: require('../src/assets/dice1.png')
    },
    {
        id: 2,
        img: require('../src/assets/dice2.png')
    },
    {
        id: 3,
        img: require('../src/assets/dice3.png')
    },
    {
        id: 4,
        img: require('../src/assets/dice4.png')
    },
    {
        id: 5,
        img: require('../src/assets/dice5.png')
    },
    {
        id: 6,
        img: require('../src/assets/dice6.png')
    }
  ]

  const imageSelector = () =>{
    var num = (Math.floor((Math.random()*6)+1))
    setCurrentImg(diceImg.filter(item => item.id === num  ).map(item => item.img))
  }

  return (
    <div className="App">
      {/* <div style={{width: "100px",height: "100px"}}> */}

          <img src={currentImg} onClick={imageSelector} alt="diceimg" />

      {/* </div> */}
    </div>
  );
}
