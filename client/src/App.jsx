import React, { useState } from 'react'

const App = () => {

//   const [age, setAge] = useState(0)
//   // age is read only variable
//   // setAge is a write only variable.

//   // and useState has default value of age which is read only variable

//   const changeAge = () => {
//     setAge(age + 1)
//   }

  
//   return (
//     <div>
//       <h1>age is {age}</h1>
//       <button onClick={changeAge}>change </button>
//     </div>
//   )
// }


// const [button, setButton] = useState(false)
// return (
//   <div>
//     <h1>Toggle button</h1>
//     <button onClick={() => setButton(!button)}>
//       {button ? "on" : "off"}
//     </button>
//   </div>
// )

// const [text, setText] = useState("")
// return (
//   <div>
//     <h2>type something</h2>
//     <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='type here..'/>
//     <p>you typed: {text}</p>
//   </div>
// )

const [visible, setVisible] = useState(true)
return(
  <div>
    <h2>show/hide example</h2>
    <button onClick={() => setVisible(!visible)}>
      {visible ? "hide" : "show"} Text
    </button>
    {visible && <p>this text can be hidden or shown</p>}
  </div>
)
}

export default App