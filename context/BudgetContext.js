import { useReducer, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'

const BudgetReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_BUDGET':
            return {
                ...state,
                budget: action.payload
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case 'REMOVE_EXPENSES':
            return {
                ...state,
                expenses: state.expenses.filter( expense => {
                    //console.log(expense.id, action.payload, expense.id != action.payload)

                     //return expense.id != action.payload 
                    const itemsToRemove = action.payload
                    //let x = !itemsToRemove.includes(expense.id)
                    let x = itemsToRemove.reduce((acc, item) => {
                        console.log('item', item)
                        return acc && !item.includes(expense.id)
                    },true)
                    console.log(x)
                    return x

                    
 

                    })
         
                
                
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 4000,
    expenses: [
        { id: 'clothing', name: 'clothing', value: 350, label: uuidv4(), date: '04/12/2021'},
        { id: 'restaurants', name: 'restaurants', value: 450, label: uuidv4(), date: '08/12/2021',},
        { id: 'food', name: 'food', value: 650, label: uuidv4(), date: '15/12/2021'},        
        { id: 'groceries', name: 'groceries', value: 1650, label: uuidv4(), date: '21/12/2021'},
        { id: 'gifts', name: 'gifts', value: 250, label: uuidv4(), date: '22/12/2021'},
    ]
}

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BudgetReducer, initialState)

    return (
        <BudgetContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch
        }}>
            {children}
        </BudgetContext.Provider>
    )

}

export function useBudget(){}