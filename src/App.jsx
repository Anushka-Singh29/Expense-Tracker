import { useState } from 'react'
import './App.css'
import CreateExpense from './CreateExpense.jsx'
import ShowExpense from './ShowExpense.jsx'
import Total from './Total.jsx'

// const App = () =>{


// let a =[{username:"hello", city:'bhopal'}, {what: "bello"}, {city: " hi"}]
// console.log(a)
//   return (
// <>
// <h2>{a.username}</h2>
// </>

//   )

// }

const App = () => {

  const [all, setallExpenses] = useState([])

  // const deleteHandler = (index) =>{
  //   const copyUser = [...users]
  //   copyUser.splice(index, 1)
  //   setuser(copyUser)
  // }


  
  // let data = <h2>Loading Data....</h2>

  

  // if (users.length > 0) {
  //   data = users.map((user, index) => {
  //     return (
  //     <div key={index}>
  //       <h1> 
  //       {user.username}
  //        <p onClick={()=>deleteHandler(index)}>❌</p>
  //       </h1>
  //     </div> 
  //     )
  // })


  return (

    <div>

      <CreateExpense all={all} setallExpenses={setallExpenses} />
      {/* //calling shareable data */}
    
      <ShowExpense all={all} setallExpenses={setallExpenses} />
      {/* <h3 style={{fontFamily:'gilroy', color:'brown', fontWeight:400, fontSize:'16px'}}>{JSON.stringify(users.username)}</h3> */}

<Total all={all} />
    </div>
  )
}


export default App
