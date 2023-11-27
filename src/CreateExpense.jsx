import { useState } from 'react'



const CreateExpense = (props) => {


    // console.log(props)
    const { all, setallExpenses } = props;
    const [des, setdes] = useState("")
    const [category, setcategory] = useState("")
    const [amount, setamount] = useState("")

    
    const [total, setTotal] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log("sab select kiya gaya hai")
        // console.log({ username, city, gender })
        const newExp = { des, category, amount }

        if (des.trim().length === 0) {
            return toast('Enter Description Please', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
            });
        }

        const copyexp = [...all]
        copyexp.push(newExp)
        setallExpenses(copyexp)

        // setuser([...users, newUser])
    }


    const handleInputChange = (event) => {
        setamount(event.target.value);
    };

    const handleEnter = () => {
        const number = parseFloat(amount);

        if (!isNaN(number)) {
            setTotal((prevTotal) => prevTotal + number);
            setamount('');
        } else {
            alert('Please enter a valid amount!');
        }
    };

    return (
        <div>
            <h2 style={{
                fontFamily: 'gilroy',
                fontWeight: '500',
                fontSize: '50px',
                position: 'absolute',
                left: ' 36%',
                top: '7%'

            }}>Expense Tracker</h2>
            <form style={{
                padding: '20px 20px',
                height: ' 130px',
                width: '800px',
                backgroundColor: '#DEE7E7',
                borderRadius: '10px',
                border: '1px rgb(0, 0, 0)',
                left: '50%',
                top: '40%',
                fontFamily: 'gilroy',
                transform: 'translate(-50%, -50%)',
                position: 'absolute'
            }} onSubmit={submitHandler}>
                <input
                    style={{
                        fontSize: '15px',
                        height: '50px',
                        padding: '10px',
                        margin: '10px',
                        fontFamily: 'gilroy',
                        borderRadius: '7px'
                    }}
                    type="text"
                    placeholder='Description'
                    onChange={(e) => setdes(e.target.value)}
                    value={des} />
                <select style={{
                    fontSize: '15px',
                    height: '72px',
                    padding: '10px',
                    margin: '10px',
                    fontFamily: 'gilroy',
                    borderRadius: '7px'
                }} defaultValue={category} onChange={(e) => setcategory(e.target.value)}>
                    <option value="Bills">bills</option>
                    <option value="Groceries">groceries</option>
                    <option value="Savings">savings</option>
                    <option value="Other">other</option>
                </select>

                <input style={{
                    fontSize: '15px',
                    height: '50px',
                    padding: '10px',
                    margin: '10px',
                    fontFamily: 'gilroy',
                    borderRadius: '7px'
                }} placeholder='Enter Expense amount' type="text" value={amount} onChange={handleInputChange} />
                <button onClick={handleEnter} style={{
                    backgroundColor: 'Highlight',
                    color: 'whitesmoke',
                    fontSize: '15px',
                    height: '50px',
                    padding: '10px',
                    margin: '10px',
                    fontFamily: 'gilroy',
                    borderRadius: '7px'
                }}>Add Expense</button>
                <p>Total Expenses: {total}</p>
           
            </form>
        </div >
    )
}

export default CreateExpense