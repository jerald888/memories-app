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
        
        await newPost.save() /* 9.3 */

        res.status(201).json(newPost) /* 9.3 */

    } catch (error) { /* 9.3 */
        
        res.status(409).json({error: error.message}) /* 9.3 */

    }
   
} /* 9.1 */