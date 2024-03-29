import React from 'react' /* 10.1 */


import { classes, theme
 } from './postStyles.js' // 17.2
import Box from '@mui/material/Box'
import { Card, CardMedia } from '@mui/material' /* 17.2 */
import CardActions from '@mui/material/CardActions' /* 17.2 */
import CardContent from '@mui/material/CardContent' /* 17.2 */
import Button from '@mui/material/Button' /* 17.2 */
import Typography from '@mui/material/Typography' /* 17.2 */
import DeleteIcon from '@mui/icons-material/Delete'; // 17.2
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // 17.2
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; // 17.2
import moment from "moment" // 17.2

import { useState } from 'react' /* 18.1.4 */
import { useDispatch, useSelector } from 'react-redux' /* 18.1.4 */
import { currentIdAction } from '../../../actions/currentIdAction.js' /* 18.1.4 */
import { useEffect } from 'react' /* 18.1.4 */

import { deletePostAction } from '../../../actions/deletePostAction.js' /* 20 */

import { likePostAction } from '../../../actions/likePostAction.js' /* 21 */



function Post({post}) { /* 10.1 */
// console.log(post)
const dispatch = useDispatch()

const handleEdit = () => {
  // console.log(post._id)
  const postId = post._id /* 18.1.4 */
  dispatch(currentIdAction(postId));
  // console.log(id) 
} /* 18.1.4 */

// useSelector(states => console.log(states.currentId)) /* 18.1.4 */

const handleDelete = () => /* 20 */ {
  const postId = post._id /* 20 */
  dispatch(deletePostAction(postId))  /* 20 */
  // console.log(postId)
  // console.log("deleted")
} /* 20 */


const handleLike = () => /* 21 */ {
  const postId = post._id;
  // console.log(post.likeCount);
  // console.log(postId);
  // console.log("liked");
  dispatch(likePostAction(postId));

} /* 21 */




  return (
    <Card sx={classes.card}> {/* 17.2 */}
      <CardMedia
       sx={classes.media}
       image={post.imageFile} 
       title={post.title}/> {/* 17.2 */}
       <Box  sx={classes.overlay}> {/* 17.2 */}
          <Typography variant="h6" >{post.creator}</Typography> {/* 17.2 */}
          <Typography variant="body2" >{moment(post.createdAt).fromNow()}</Typography> {/* 17.2 */}
       </Box>  {/* 17.2 */}

       <Box sx={classes.overlay2}>
          <Button sx={{color: 'white'}} size="small" onClick={handleEdit}>  {/* 17.2 */} {/* 18.1.4 handle edit */}
            <MoreHorizIcon fontSize='default'/>
          </Button>
       </Box>  {/* 17.2 */}

       <Box sx={classes.details}>
          <Typography variant='body2' color="textSecondary">{post.tags.map((tag) => `#${tag } ` )}</Typography>
       </Box>  {/* 17.2 */}
         <Typography sx={classes.title} variant="h5" gutterBottom>{post.title}</Typography>  {/* 17.2 */} {/* edit 18 */}
       <CardContent>  {/* 17.2 */}

         <Typography sx={classes.title} variant="body2" color="textSecondary" component="p" gutterBottom>{post.message}</Typography>  {/* 17.2 */}

       </CardContent>  {/* 17.2 */}

       <CardActions sx={classes.cardActions}>  {/* 17.2 */}
        <Button size="small" onClick={handleLike}> {/* 21 handleLike */}
          <ThumbUpIcon fontSize='small'/>  {/* 17.2 */}
          &nbsp; Like &nbsp;
          {post.likeCount}  {/* 17.2 */}
        </Button>  {/* 17.2 */}
        <Button size="small" onClick={handleDelete}>
          <DeleteIcon fontSize='small'/>  {/* 17.2 */}
          Delete
        </Button> {/* 17.2 */} {/* 20 handleDeleter */}
       </CardActions> {/* 17.2 */}

    </Card> /* 17.2 */ 
  )
}

export default Post /* 10.1 */

// ***** line 30:  always make it a habit to store outside value as a separate variable inside a function..... here it is postId....

// ***** line 91: adding <space> inside jsx won't add space inside the view.... instead add code &nbsp