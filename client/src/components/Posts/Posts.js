import React from 'react' /* 10.1 */
import Post from './Post/Post.js' //10.1

import { useSelector } from 'react-redux' // 12.6


function Posts() { /* 10.1 */

const posts = useSelector(state => state.posts) /* 12.6 */

console.log(posts)  /* 12.6 */

  return (
    <div>Posts
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts /* 10.1 */