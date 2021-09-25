import React from 'react'

export default function Headline(props) {
  let greeting = props.value
  function setValueHandler() {
    greeting = "Hello new year"
    console.log('Set new greeting within component: ', greeting)
  }

  console.log('Value at return: ', greeting)
  return <div>
    <h1>Header: {greeting}</h1>
    <button onClick={setValueHandler}>
      Set new greeting
    </button>
  </div>;
}
