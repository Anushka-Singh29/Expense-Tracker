import { useState } from 'react'
import './App.css'
import CreateExpense from './CreateExpense.jsx'
import ShowExpense from './ShowExpense.jsx'
// import Total from './Total.jsx'


const App = () => {

  const [all, setallExpenses] = useState([])

  return (

    <div>

      <CreateExpense all={all} setallExpenses={setallExpenses}
 />
      {/* //calling shareable data */}
    
      <ShowExpense all={all} setallExpenses={setallExpenses}
      />
      {/* <h3 style={{fontFamily:'gilroy', color:'brown', fontWeight:400, fontSize:'16px'}}>{JSON.stringify(users.username)}</h3> */}

{/* <Total all={all} /> */}
    </div>
  )
}


export default App
