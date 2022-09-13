import "./App.css";

import Container from "@mui/material/Container"; // 10.2
import AppBar from "@mui/material/AppBar"; // 10.2
import Typography from "@mui/material/Typography"; // 10.2
import { Grow } from "@mui/material"; // 10.2
import { Grid } from "@mui/material"; // 10.2
import memories from "./images/memories.png"; // 10.2
import Posts from "./components/Posts/Posts"; // 10.2
import Form from "./components/Form/Form"; // 10.2

import { appBarStyle, headingStyle, imageStyle } from "./AppStyles"; // 10.3

import { useEffect } from "react"; // 12.5
import { useDispatch } from "react-redux"; // 12.5
import { getPostsAction } from "./actions/postsAction"; // 12.5

import { useSelector } from "react-redux"; /* 999 */




function App() {
  const dispatch = useDispatch() /* 12.5 */

  // const currentId = useSelector(states => states.currentId)
  

  // console.log(useSelector(states => console.log(states.posts)))
  
  useEffect(() => { /* 12.5 */
  dispatch(getPostsAction()) /* 12.5 */
  console.log("app use effect")
  }, []) /* 12.5 */
  


  return (
    <Container>
      {" "}
      {/* 10.2 */}
      <AppBar sx={appBarStyle} position="static" color="inherit">
        {" "}
        {/* 10.2 */}
        <Typography sx={headingStyle} vairent="h2" align="right">
          {" "}
          {/* 10.2 */}
          MOOD BOARD
        </Typography>{" "}
        {/* 10.2 */}
        <img sx={imageStyle} src={memories} alt="memories" height="70" />
      </AppBar>
      <Grow in>
        <Container>
          {" "}
          {/* 10.2 */}
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            {" "}
            {/* 10.2 */}
            <Grid item xs={12} sm={7}>
              {" "}
              {/* 10.2 */}
              <Posts />
            </Grid>{" "}
            {/* 10.2 */}
            <Grid item xs={12} sm={4}>
              {" "}
              {/* 10.2 */}
              <Form /> {/* 10.2 */}
            </Grid>{" "}
            {/* 10.2 */}
          </Grid>{" "}
          {/* 10.2 */}
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
