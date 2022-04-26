import { useContext } from 'react'
import BudgetCard from './BudgetCard'
import ExpensesList from './ExpensesList'
import AddExpenseForm from './AddExpenseForm'
import {Container, Grid, Paper, useMediaQuery } from '@mui/material';
import { BudgetContext } from '../../context/BudgetContext'
import { useTheme } from '@material-ui/core/styles';
import BudgetChart from './BudgetChart'

/*const BudgetChart = dynamic(() => import("./BudgetChart"), {
  ssr: false
})*/

const Budget = () => {
    const { expenses } = useContext(BudgetContext)
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return(
      <Container maxWidth="xlg">
        <Grid item container spacing={3}>
          <Grid item sx={{ display: 'flex',
          flexDirection: {xs:'column', md:'row'}, 
          gap:'24px', width: '100%'}}   >
            <BudgetCard name='Budget' />      
            <BudgetCard name='Sales' progress={true}/>
            <BudgetCard name='Remaining' progress={true}/>
          </Grid>
          <Grid item xs={12} md={12} sx={{ display: 'flex',flexDirection: {xs:'column', md:'row'}, alignItems: 'stretch' }}>            
            <Grid item sm={12} md={8} pr={isSmall ? 0 : 3} pb={isSmall ? 3 : 0} >
              <ExpensesList />
            </Grid>
            <Grid item sm={12} md={4} sx={{ alignItems:'stretch' }}>
              <AddExpenseForm /> 
            </Grid>         
          </Grid>
          <Grid item xs={12} md={12} >
            <Paper elevation={0}>
              <BudgetChart data={expenses} minHeight={450} /> 
            </Paper>  
          </Grid>
        </Grid>
      </Container>
    )
}
export default Budget;