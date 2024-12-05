const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ]
})

const User = mongoose.model('User', userSchema);

const addUsers = async() => {
    let user1 = new User({
        username: 'John',
        addresses: [
            {
                location: 'New York',
                city: 'NY'
            },
            {
                location: 'San Francisco',
                city: 'CA'
            }
        ]
    })
    user1.addresses.push({
        location: 'Bhaleswar',
        city: 'Nuapada'
    })
    let result = await user1.save();
    console.log(result);
}

addUsers();