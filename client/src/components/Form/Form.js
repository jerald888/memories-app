import React from "react"; /* 10.1 */
import Typography from "@mui/material/Typography"; /* 13.1 */
import Paper from '@mui/material/Paper'; /* 13.1 */
import TextField from '@mui/material/TextField'; /* 13.1 */
import { Button, CssBaseline, ThemeProvider } from "@mui/material"; /* 13.2 */

import { useState } from "react"; /* 13.1 */
import FileBase from "react-file-base64" /* 13.1 
*/

import {
  theme,
  rootTextFieldMargin,
  paper,
  form,
  fileInput,
  buttonSubmit } from  "./Formstyles" /* 13.2 */

import { useDispatch } from "react-redux"; /* 14.3 */
import { createPostsAction } from "../../actions/createPostsAction"; /* 14.3 */



function Form() {
  /* 10.1 */

  const dispatch = useDispatch() /* 14.3 */

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags:"",
    imageFile: ""
  }) /* 13.1 */

  const handleCreator = (event) => {
    setPostData({...postData, creator: event.target.value} )
  } /* 13.1 */
  const handleTitle = (event) => {
    setPostData({...postData, title: event.target.value} )
  } /* 13.1 */
  const handleMessage = (event) => {
    setPostData({...postData, message: event.target.value})
  } /* 13.1 */
  const handleTags = (event) => {
    setPostData({...postData, tags: event.target.value} )  
  } /* 13.1 */

  const handleSubmit = (e) => {
      e.preventDefault() /* 14.3 */

      dispatch(createPostsAction(postData)) /* 14.3 */
  } /* 13.1 */

  const handleClear = () => {

  }

  return (
    <ThemeProvider theme={theme}> {/* 13.2 */}
      <CssBaseline/>  {/* 13.2 */}
      <form className={`${form} ${rootTextFieldMargin}`} autoComplete="off" noValidate onSubmit={handleSubmit}> {/* 13.1 */}
        <Paper sx={paper}>
  
          <Typography sx={{marginBottom: 2}} variant="h6" component="h2">
            CREATE MEMORY
          </Typography> {/* 13.1 */}
    
          <TextField sx={{marginBottom: 2}} name="creator" vairant="outlined" label="Creator" fullWidth value={postData.creator} onChange={handleCreator} ></TextField> {/* 13.1 */}
    
          <TextField sx={{marginBottom: 2}} name="title" vairant="outlined" label="Title" fullWidth value={postData.title} onChange={handleTitle}></TextField> {/* 13.1 */}
    
          <TextField sx={{marginBottom: 2}} name ="message" variant = "outlined" label ="Message" fullWidth value={postData.message} onChange={handleMessage}></TextField> {/* 13.1 */}
    
          <TextField sx={{marginBottom: 2}} name ="tags" variant = "outlined" label = "Tags" fullWidth value={postData.tags} onChange={handleTags}></TextField> {/* 13.1 */}
    
          <div className= {fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={(base64) => {
                setPostData({...postData, imageFile: base64})
              }}
            /> {/* 13.1 */}
          </div> {/* 13.1 */}
    
          <Button  sx={buttonSubmit} variant="contained" color="primary" size="medium" type="submit" fullWidth>Submit</Button> {/* 13.1 */}
    
          <Button variant="contained" color="error" size="small" onClick={handleClear} fullWidth>Clear</Button> {/* 13.1 */}
        </Paper> {/* 13.1 */}
      </form>

    </ThemeProvider>
  );
}

export default Form; /* 10.1 */
