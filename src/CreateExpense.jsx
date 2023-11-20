import { useState } from 'react'
import { toast } from 'react-toastify';


const CreateExpense = (props) => {


    // console.log(props)
    const { all, setallExpenses } = props;

    const [des, setdes] = useState("")
    const [category, setcategory] = useState("")
    const [amount, setamount] = useState("")

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

    return (
        <div>
            <h2 style={{
                fontFamily: 'gilroy',
                fontWeight: '500',
                fontSize: '50px',
                position: 'relative',
                left: ' 36%',

            }}>Expense Tracker</h2>
            <form style={{
                padding: '20px 20px',
                height: ' 100px',
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
                }}
                    type="number"
                    placeholder='amount'
                    onChange={(e) => setamount(e.target.value)}
                    value={amount} />

                <input style={{
                    fontSize: '15px',
                    // height: '50px',
                    padding: '10px',
                    margin: '10px',
                    fontFamily: 'gilroy',
                    borderRadius: '7px'
                }} type="checkbox" /> Is Income
                <button style={{
                    backgroundColor: 'Highlight',
                    color: 'whitesmoke',
                    fontSize: '15px',
                    height: '50px',
                    padding: '10px',
                    margin: '10px',
                    fontFamily: 'gilroy',
                    borderRadius: '7px'
                }}>ADD EXPENSE</button>
            </form>
        </div >
    )
}

export default CreateExpense