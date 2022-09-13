import mongoose from "mongoose"
import PostMessage from "../models/postMessage.js" // 9.2

export const getPosts = async /* 9.2 */ (req, res) => {
    try {  /* 9.2 */

        const postMessages = await PostMessage.find()  /* 9.2 **** uppercase P represents database model*/

        res.status(200).json(postMessages)  /* 9.2 **** p lowercase */

    } catch (error) {  /* 9.2 */

        res.status(404).json({error: error.message})
    }


} /* 8.1 */

export const createPosts = async /* 9.3 */ (req, res) => { 
    
    const post = req.body /* 9.3 */
    const newPost = new PostMessage(post) /* 9.3 */
    
    try { /* 9.3 */
        
        await newPost.save() /* 9.3 */ /*
        **** we use await here because the post is sent to remotely located mongodb database
        */

        res.status(201).json(newPost) /* 9.3 */

    } catch (error) { /* 9.3 */
        
        res.status(409).json({error: error.message}) /* 9.3 */

    }
} /* 9.1 */

export const updatePost = async /* 18.2.1 */ (req, res) => { /* 18.2.1  */
    const {id: _id} = req.params // renamed recieved id
    const editPostData = req.body 
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id') // to check if the fetched id is inside the mongoose database of posts

    // if the _id is valid execute the below codes 

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...editPostData, _id}, {new: true}) // to find the post by the id and update it with the data recieved from front end

    // console.log("hihi")

    // {...post, _id} because we need to update the _id property also inside the document

    res.json(updatedPost) // sending the updated post back to front end so it can dispatch it to the store   

} /* 18.2.1 */


export const deletePost = /* 20 */ async (req, res) => { /* 20 */
    const {id:_id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id') // to check if the fetched id is inside the mongoose database of posts

await PostMessage.findByIdAndRemove(_id); // this mongoDb function returns the deleted post 

// console.log("deleted");
res.json({message: "post deleted successfully"});
    
} /* 20 */

export const likePost = /* 21 */async (req, res) => {
    // console.log("hihi")
    const {id: _id} = req.params;
    

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with this id");

    const post = await PostMessage.findById(_id);

    const updatedLikeCount = await PostMessage.findByIdAndUpdate(_id, {likeCount: post.likeCount + 1}, {new: true});

    // console.log(updatedLikeCount)
    // console.log("hoho")

    res.json(updatedLikeCount);


} /* 21 */


// **** any mongodb operation will be preceded by an AWAIT because mongodb is on another remote server 

// *****  always response must be converted to json by chaining .json method