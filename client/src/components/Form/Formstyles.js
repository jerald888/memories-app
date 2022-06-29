import { createTheme } from "@mui/material" /* 13.2 */

export const theme = createTheme()

export const rootTextFieldMargin = {
  "&.MuiTextField-root":{
    margin: 1
  }
}

export const paper = {
  padding: theme.spacing(2)
}

export const form = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}

export const fileInput = {
  width: '97%',
  margin: '10px 0'
}

export const buttonSubmit = {
  marginBottom: 1,
  marginTop:1
}

