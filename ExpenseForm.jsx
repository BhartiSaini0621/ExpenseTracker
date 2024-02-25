import React, {useState} from "react";
import  "./ExpenseForm.css";


 function ExpenseForm() {

     const [user, setUser]= useState({
      ExpenseName:" ", Type:" ", Category:" ", Amount:" "
     });
     let name, value;

     const handleInputs = (e)=>{
      console.log(e);
      name= e.target.name;
      value = e.target.value;
     }
    return (
      
        <div className="outline">
        <form className="form-outline">
            <div className="main-heading">Expenses</div>
            <div >
                <div className="key">
                    <label className="key-name">Expense Name</label><br/>
                    <input  className="key-input " type="text" name="ExpenseName"
                        value ={user.ExpenseName}
                        onChange={handleInputs}
                    />         
                </div>
                <div className="key">
                    <label className="key-name">Type</label><br/>
                    <select className="key-input " name="type" >
                      <option value="debit">Debit</option>
                      <option value="credit">Credit</option>
                      value ={user.type}
                        onChange={handleInputs}
                    </select>       
                </div>
                <div className="key">
                    <label className="key-name">Category</label><br/>
                    {/* <input type="text" name="category" />          */}
                    <select  className="key-input " name="Category">
                      <option value="grocery">Grocery</option>
                      <option value="shopping">Shopping</option>
                      <option value="bill">Bill</option>
                      <option value="food">Food</option>
                      <option value="travel">Travel</option>
                      <option value="other">Other</option>
                      value ={user.Category}
                        onChange={handleInputs}
                    </select>
                </div>
                <div className="key">
                    <label className="key-name">Amount</label><br/>
                    <input  className="key-input " type="number" name="amount"
                    value ={user.amount}
                    onChange={handleInputs}
                    />         
                </div>
                <button className=" btn">Submit</button>
            </div>
        </form>
      </div>
      
      
        
    );
  }



export default ExpenseForm;