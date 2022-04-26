import { useState, useContext, useLayoutEffect } from 'react'
import { Stack, Typography, Box, Paper, InputAdornment, TextField, Button } from '@mui/material';
import { BsSave } from 'react-icons/bs'; 
import { BudgetContext } from '../../context/BudgetContext';
import { v4 as uuidv4 } from 'uuid'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { Formik, Form, Field} from 'formik';
import * as yup from 'yup';

const style = {
    borderBottom: '10px',
    height: '100%'
}


const AddExpenseForm = () => {
    const { dispatch } = useContext(BudgetContext)
    const [now, setNow] = useState('')

    useLayoutEffect(() => { setNow(new Date()) },[])

    const validationSchema = yup.object({
        name: yup
          .string('Enter your name')
          .required('Name is required')
          .min(3),
        cost: yup 
          .number().positive()        
          .required('Cost is required'),
      });
      
    return (
        
        <>
            <Box xs={12} sx={style}>
            <Paper elevation={1} sx={{padding: '20px', height: '100%', borderRadius: '10px'}}>                       
                <Typography id="expenses-title" variant="h6" component="h2">
                    Add Expenses 
                </Typography>   

                <Formik
                    initialValues={{
                        name: '',
                        cost: '',
                        date: new Date(),
                    }}
                    validationSchema= {validationSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();   
                        actions.setSubmitting(false);            
                        const expense = {
                            id: values.name,
                            name: values.name,
                            value: parseInt(values.cost),
                            label:uuidv4(),
                            date:values.date.toLocaleDateString("us-US"),
                        }  
                        dispatch({
                            type: 'ADD_EXPENSE',
                            payload: expense
                        })                        
                    }}
                >
                {({values, submitForm, resetForm, isSubmitting, touched, errors, handleChange, setFieldValue, handleBlur }) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack direction="column" spacing={2} justifyContent="space-between">
                    <Form>
                        <Field
                            component={TextField}
                            sx={{width: '100%'}}
                            name="name"
                            label="Name"
                            type="text"
                            variant='standard'
                            color='secondary' 
                            size='small'
                            value={values.name}
                            onChange={handleChange('name')}
                            onBlur={handleBlur}                            
                        />                       
                        <Typography variant="subtitle2" component="h6" sx={{paddingBottom: '10px'}} color='error'>
                            {errors.name && touched.name && errors.name}
                        </Typography>
                        <Field 
                            component={TextField}
                            sx={{width: '100%'}}
                            name="cost" 
                            label="Cost"
                            type="text"
                            variant='standard' 
                            color='secondary' 
                            size='small'
                            InputProps={{
                                startAdornment: <InputAdornment position='start'>$</InputAdornment>
                            }}
                            value={values.cost}
                            onChange={handleChange('cost')}
                            onBlur={handleBlur}
                        />
                        <Typography variant="subtitle2" component="h6" sx={{paddingBottom: '10px'}} color='error'>
                            {errors.cost && touched.cost && errors.cost}
                        </Typography>
                        
                        <Field 
                            component={DesktopDatePicker}
                                label="Date"   
                                id="date-input"
                                sx={{width: '100%'}}
                                name="date"                        
                                type="datetime-local"
                                //inputFormat="dd.mm.yyyy"
                                //defaultValue={new Date()}
                                renderInput={(params) => <TextField 
                                    {...params} 
                                    sx={{width: '100%', paddingBottom: '10px'}} 
                                    size='small' 
                                    variant='standard' 
                                    color='success' />}
                                value={values.date}
                                onChange={value => setFieldValue('date', value)}
                        />                                                              
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button 
                                variant="contained" 
                                endIcon={<BsSave />} 
                                color='primary' 
                                fullWidth
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Save
                            </Button>                           
                            <Button
                                sx={{margin: 1}}
                                variant="contained"
                                color="secondary"
                                fullWidth
                                disabled={isSubmitting}
                                onClick={() => {
                                    resetForm();
                                }}
                            >
                            Reset
                            </Button>
                        </Stack>
                       {/*} <pre>{JSON.stringify(values, null, 2)}</pre>*/}
                        </Form>
                    </Stack>
                    </LocalizationProvider>
                )}
                </Formik>         
                </Paper> 
            </Box>   
        </>
    )
}

export default AddExpenseForm