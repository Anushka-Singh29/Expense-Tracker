const ShowExpense = (props) => {

  const { all, setallExpenses } = props;

  const deleteHandle = (index) => {
    // const newUser = { username, city, gender }

    const copyexp = [...all]
    copyexp.splice(index, 1)
    setallExpenses(copyexp)
  }

  let data = <h2>Expenses will be shown below:</h2>
  if (all.length > 0) {
    data = all.map((all, index) => {
      return (

        <div key={index}>

          <div id="card" style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: '#DEE7E7',
            color: '#2E2E3A',
            width: '500px',
            margin: '20px 10px',
            height: '100px',
            borderRadius: '10px',
            padding: '10px 10px'
          }}>
            <div id="text" style={{ display: 'flex' }}>
              <h1 style={{ paddingRight: '50px' }}> {all.des}</h1>
              <h1> {all.category}</h1>
              <h1> {all.amount}</h1>

            </div>
            <button style={{
              height: '40px',
              width: '180px',
              backgroundColor: '#B0413E',
              color: 'white',
              position: 'relative',
              borderRadius: '5px'
            }} onClick={() => deleteHandle(index)}>Delete Expense</button>

          </div>

        </div>
      )
    })
  }

  return (
    <div>
      <h2 style={{
        top: '50%',
        left: '21%',
        fontWeight: '200',
        fontSize: '12px',
        fontFamily: 'gilroy',
        position: 'absolute'
      }}>{data}</h2>
    </div>
  )
}

export default ShowExpense