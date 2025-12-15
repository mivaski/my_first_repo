import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTransactionReducer } from '../reducers/reducers';
import { useForm } from 'react-hook-form';
import { NewTransaction } from '../action/action';
import { DelTransaction } from '../action/action';

function ExpenseTracker() {
    const dispatch = useDispatch();
    const aha = useSelector((state) => state.Addtrans).datas;
    let sum = 0;

    const totalIncome = aha.reduce((acc, item) => {
        const amount = parseFloat(item.amt);
        if (!isNaN(amount) && amount > 0) {
            acc += amount;
        }

        return acc;
    }, 0);

    const expense = aha.reduce((acc, item) => {
        const amount = parseFloat(item.amt);
        if (amount < 0) {
            acc += amount
        }
        return acc;
    }, 0);

    let Expence = Math.abs(expense);

    const newBalance = totalIncome - Expence;

    // console.log(totalIncome);

    let { register, handleSubmit, formState: { errors } } = useForm();
    const formdata = (mydata) => {
        dispatch(NewTransaction(mydata))
        // console.log(mydata);
    }
    return (
        <>
            <div className='w-1/4 m-auto text-center mt-10 '>
                <h1 className='text-4xl font-bold mb-6'>Expence Tracker</h1>
                <div className="bal mb-6">
                    <h2 className='text-xl font-bold'>YOUR BALANCE</h2>
                    <h1 className='text-yellow-500 font-semibold text-3xl '>$<span className='text-black ml-2'>{newBalance}</span></h1>
                </div>
                <div className="col flex justify-between bg-white py-4 px-4 mb-6 rounded-lg text-xl font-semibold">
                    <div className="inc w-1/2">
                        <h3>INCOME</h3>
                        <h2 className='text-green-600'>$<span >{
                            totalIncome
                        }</span></h2>
                    </div>
                    <div className="exp w-1/2 border-l-4">
                        <h3>EXPENCE</h3>
                        <h2 className='text-red-600'>$<span className='ml-2'>{expense}</span></h2>
                    </div>
                </div>
                <div className="transactionhistory mb-7">
                    <h1 className='border-b-2 border-gray-300 py-1 text-bold text-black text-2xl' >Transaction History</h1>
                    <div id='show-trans  '>
                        {
                            aha.map((item, index) => {
                                let { des, amt } = item;
                                return <div key={index} className='bg-white flex justify-between my-5 py-2 px-2 font-medium rounded-lg text-lg'><div>{des}</div><div>{amt}</div>
                                    <svg
                                        width="25px"
                                        height="25px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className='bg-red-500 absolute ml-[-45px] rounded-lg cursor-pointer'
                                        onClick={() => dispatch(DelTransaction(index))}
                                    >
                                        <path
                                            d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                                            fill="#0F0F0F"
                                        />
                                    </svg>
                                </div>
                                i

                            })
                        }
                    </div>
                </div>
                <div className="addTransaction">
                    <h1 className='border-b-2 border-gray-300 py-1 text-bold text-black text-2xl font-bold' >Add new transaction</h1>
                    <form onSubmit={handleSubmit(formdata)}>
                        <label className='float-left py-2'>Description</label>
                        <input {...register("des")} type="text" className='py-2 px-1 rounded-lg border-gray-400 border-2 w-full' placeholder='Detail of Transaction' required />
                        <label className='float-left py-2'>Transaction Amount
                            (negative - expense, positive - income)</label>
                        <input {...register("amt")} type="number" className='py-2 px-1 rounded-lg border-gray-400 border-2 w-full' placeholder='Enter A amount' required />

                        <button type="submit" className='w-full bg-purple-600 my-4 py-2 text-white font-bold text-xl rounded-lg'>Add Transaction</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default ExpenseTracker;
