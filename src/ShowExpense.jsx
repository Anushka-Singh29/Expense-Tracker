const ShowExpense = (props) => {

    const { all, setallExpenses } = props;

    const deleteHandle = (index) => {
        // const newUser = { username, city, gender }
        
        const copyexp = [...all]
        copyexp.splice(index,1)
        setallExpenses(copyexp)
      }

    let data = <h2>Expenses will be shown below:</h2>
    if (all.length > 0) {
      data = all.map((all, index) => {
        return (
          <div key={index}>
            <div id="card">
            <h1> {all.des}</h1>
            <h1> {all.category}</h1>
              <button style={{
                height:'40px',
                width:'80px',
                backgroundColor:'#B0413E',
                color:'white',
                borderRadius:'5px'
              }} onClick={()=>deleteHandle(index)}>Delete Expense</button> 
            
            </div>
            
          </div>
        )
      })
    }

  return (
    <div>
      <h2 style={{
        top:'50%',
        left:'21%',
        fontWeight:'200',
        fontSize:'17px',
        fontFamily:'gilroy',
        position:'absolute'
      }}>{data}</h2>
    </div>
  )
}

export default ShowExpense