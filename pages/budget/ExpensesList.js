import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { BudgetContext } from '../context/BudgetContext'
import ExpensesItem from './ExpensesItem'

const ExpensesList = () => {
    const { expenses } = useContext(BudgetContext);


    return (
        <>
          <ExpensesItem rows={expenses} />
        </>
    )
}

export default ExpensesList;