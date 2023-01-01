import React from 'react'
import { postNewTask } from './../actions' 
import { Grid, TextField } from '@material-ui/core/';


export const InputComponent = ({ dispatch }) => {
    const [title, setTitle] = React.useState('')
    const [isValidateError, SetIsValidateError] = React.useState(false)
    const [helperText, SetErrorHelperText] = React.useState(null)

    const submitTask = () => {
        if (title === ''){
            SetIsValidateError(true)
            SetErrorHelperText('The field cannot be empty')
        }else {
            SetIsValidateError(false)
            SetErrorHelperText(null)
            dispatch(postNewTask(title))
            setTitle('')
        }
        
    }
    return (
        <Grid item xs={12}>
                <TextField onChange={(e)=>{setTitle(e.target.value)}}
                    id="outlined-full-width"
                    value={title}
                    label="Type in a new task and press Enter"
                    placeholder="Task name"
                    helperText={helperText}
                    fullWidth
                    margin="normal"
                    autoFocus
                    onKeyPress={(event)=>{
                        if(event.key === 'Enter'){
                            submitTask()
                        }
                    }}
                    error={isValidateError}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
    )
}