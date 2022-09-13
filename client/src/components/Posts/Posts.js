import React from 'react' /* 10.1 */
import Post from './Post/Post.js' //10.1

import { useSelector } from 'react-redux' // 12.6

import CircularProgress from '@mui/material/CircularProgress'; // 17.1

import Grid from '@mui/material/Grid'; // 17.1

import { classes, theme } from './postsStyles.js'; // 17.1

import { useEffect } from "react"; // 12.5
import { useDispatch } from "react-redux"; // 12.5
import { getPostsAction } from "../../actions/postsAction"; // 12.5




function Posts() { /* 10.1 */

const posts = useSelector(state => state.posts) /* 12.6 */


 
// console.log(posts)  /* 12.6 */

// useSelector(state=> console.log(state))

  return ( 

    !posts.length ? <CircularProgress/> : (
      <Grid  sx={classes.mainContainer} container alignItems={"stretch"} spacing={3} > {/* 17.1 */}

        {posts.map((post) => (
          <Grid 
           key={post._id}
           item 
           xs={12}
           sm={6}>
            <Post post ={post}/>
          </Grid> 
        ))} {/* 17.1 */}

      </Grid> /* 17.1 */
    )
  )
}

export default Posts /* 10.1 */