import React from "react"
import "./App.css"
import boxes from "./boxes"
import Box from "./Box"

export default function App(){
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  // console.log("render");
  // const [squares, setSquares] = React.useState(boxes)

  // function toggle(id){
  //   console.log(id);
  //   setSquares(prevSquares => {
  //     const newSquares = []
  //     for(let i = 0; i < prevSquares.length; i++){
  //       const currentSquare = prevSquares[i]
  //       if(currentSquare.id === id){
  //         const updatedSquare = {
  //           ...currentSquare, 
  //           on: !currentSquare.on
  //         }
  //         newSquares.push(updatedSquare)
  //       }else{
  //         newSquares.push(currentSquare)
  //       }
  //     }
  //   return newSquares
  //   })
  // }

  // function toggle(id){
  //   setSquares(prevSquares => {
  //     return prevSquares.map((square) => {
  //       return square.id === id ? {...square, on: !square.on} : square
  //     })
  //   })
  // }

  // const squareElements = squares.map(square => (
  //   <Box 
  //     key={square.id}
  //     on={square.on} 
  //     toggle={()=>toggle(square.id)}
  //   />
  // ))

  React.useEffect(function(){
    console.log("Effect Ran");
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  },[count])

  return(
    <div>
      <h2>This count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount+1)}>Get next character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}
