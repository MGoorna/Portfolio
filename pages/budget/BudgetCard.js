import { Box, Grid, LinearProgress, Typography, TextField, Button, Avatar } from '@mui/material';
import { deepOrange, indigo } from '@mui/material/colors';
import { BsCreditCard2Front } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSave } from 'react-icons/bs'; 
import { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import ModalApp from '../../components/ModalApp'

const styles = {
    paper: {
        fontFamily: "IBM Plex Sans",
        color: 'rgb(255, 255, 255)',    
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '10px',
        background: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
        boxShadow: 'rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px',
        overflow: 'hidden',
        minHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        padding: '25px',
        gap: '8px',
        position:'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            zIndex: 1,
            width: '210px',
            height: '210px',
            background: 'rgb(21, 101, 192)',
            borderRadius: '50%',
            top: '-125px',
            right: '-15px',
            opacity: '0.5',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            zIndex: 1,
            width: '210px',
            height: '210px',
            background: 'rgb(21, 101, 192)',
            borderRadius: '50%',          
            top: '-85px',
            right: '-95px',
          }
    },
    p: {
        margin: '0px',
        lineHeight: '1.334em',
        fontFamily: 'Roboto, sans-serif',
        color: 'rgb(144, 202, 249)',
        fontSize: '1.1rem',
        fontWeight: '500',
        opacity: '0.75',
    },
    avatar:{
        position: 'relative',
        display: 'flex',
        webkitBoxAlign: 'center',
        alignItems: 'center',
        webkitBoxPack: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        fontFamily: 'Roboto, sans-serif',
        lineHeight: 1,
        overflow: 'hidden',
        userSelect: 'none',
        background: 'rgb(0, 89, 178)',
        /*background: indigo.A200,*/
        cursor: 'pointer',
        borderRadius: '8px',
        width: '44px',
        height: '44px',
        fontSize: '1.5rem',
        color: 'rgb(255, 255, 255)',
        marginTop: '8px',
    }
};

const BudgetCard = ({ name, progress }) => {
    const [newBudget, setNewBudget] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const { budget, expenses, dispatch } = useContext(BudgetContext);
    const totalSpent = expenses.reduce((total,item)=>{return total=total+item.value},0)
    const totalRemaining = budget - totalSpent 
    const x = name === 'Remaining' ? totalRemaining : totalSpent;
    const type = name === 'Budget' ? budget : x ;
    const exp = expenses.reduce((total,item)=>{return total=total+item.value},0)
    const sales = exp/budget*100
    const remaining = 100-sales

    const handleBudgetChange = (e) => {
        setNewBudget(e.target.value)
    }
    const changeBudget = () => {
        if(newBudget != 0){
            dispatch({
                type: 'CHANGE_BUDGET',
                payload: newBudget
            })
            setIsOpen(false)
        }
    }
    return( 
        <Grid item xs={12} md={4} sx={styles.paper}>
            <Avatar sx={ styles.avatar } variant="rounded">
                {name === 'Remaining' && <BsCreditCard2Front />}
                {name === 'Sales' && <AiOutlineShoppingCart /> }
                {name === 'Budget' && <GiCash />}
            </Avatar>        
            <Typography variant="h3" component="h2">${type}</Typography>
            <Typography variant="subtitle1" component="p"  sx={styles.p}>{name}</Typography>
            <Typography variant="subtitle1" gutterBottom component="div"></Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {progress&& <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={name === 'Remaining'? remaining : sales } color="secondary" />
                </Box>}
                {progress&&<Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2">{name === 'Remaining'? `${Math.round(remaining)}%` : `${Math.round(sales)}%`}</Typography>
                </Box>}
            </Box>
            { name === 'Budget' && 
                <ModalApp buttonTitle='Edit' isOpen={isOpen} setIsOpen={setIsOpen} >
                    <Box sx={{ display:'flex', flexDirection:'column', rowGap: '24px'}}>
                        <TextField
                            required
                            focused
                            label="Change budget"
                            variant="standard"
                            value={newBudget== null ? '' : newBudget} onChange={handleBudgetChange}
                        />
                        <Button type='submit' variant='contained' color='secondary' onClick={changeBudget} endIcon={<BsSave />}>Save</Button>
                    </Box>
                </ModalApp>
            }
        </Grid>
    )
}

export default BudgetCard 