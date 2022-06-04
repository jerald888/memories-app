import mongoose from "mongoose"; // 8.1

const postSchema = new mongoose.Schema({ /* 8.1 */
    title: String, /* 8.1 */

    message: String, /* 8.1 */ 

    creator: String, /* 8.1 */

    tags: [String], /* 8.1 */

    likeCount: {
        type: Number,
        default: 0
    }, /* 8.1 */

    createdAt: {
        type: Date,
        default: new Date()
    } /* 8.1 */
}) /* 8.1 */


const PostMessage = mongoose.model("PostMessage", postSchema) /* 8.1 */

export default PostMessage; /* 8.1 */