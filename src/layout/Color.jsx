import React from 'react'

export const Color = () => {


  const handleClick = () =>{
    const a= document.getElementById('a')
    let n1 = Math.floor(Math.random() * 254)
    let n2 = Math.floor(Math.random() * 254)
    let n3 = Math.floor(Math.random() * 254)

    a.style.background =  `rgb(${n1},${n2},${n3})`
  }
  return (
    <div id='a' className='padre'>

      <button onClick={ ()=>handleClick() }>PULSA AQUÍ</button>

    </div>
  )
}
