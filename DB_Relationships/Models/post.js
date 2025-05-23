const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

const addPost = async () => {
    // let user1 = new User({
    //     username: 'John',
    //     email: 'john@example.com'
    // })
    let user = await User.findOne({username: "John"});
    let post2 = new Post({
        content: "Hello World",
        likes: 21,
    });

    post2.user = user;
    // await user1.save();
    await post2.save();

};

addPost();