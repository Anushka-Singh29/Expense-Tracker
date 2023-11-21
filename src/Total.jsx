const Total = ({ all }) => {
    const totalIncome = all.reduce((sum, expense) => {
      return expense.isIncome ? sum + expense.amount : sum;
    }, 0);
  
    const totalExpenses = all.reduce((sum, expense) => {
      return !expense.isIncome ? sum + expense.amount : sum;
    }, 0);
  
    return (
      <div style={{position:'absolute', fontFamily:'gilroy', display:'flex',color:'#2e4057', gap:'30px', top:'46%' , left:'31%', fontSize:'12px'}}>
        <h2>Total Summary:</h2>
        <h2>Total Income: Rs.{totalIncome}</h2>
        <h2>Total Expenses: Rs.{totalExpenses}</h2>
      </div>
    );
  };
  
  export default Total;
  