const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerShcema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order',
        }
    ]
});

// pre Middleware
// customerShcema.pre("findOneAndDelete", async function() {
//     console.log("pre middleware");
// });

// post Middleware
customerShcema.post("findOneAndDelete", async function(data, next) {
    // console.log(data);
    if(data.orders.length > 0) {
        let result = await Order.deleteMany({_id: {$in: data.orders}});
        console.log(result);
    }
    // next();
});

const Cusotmer = mongoose.model('Cusotmer', customerShcema);
const Order = mongoose.model('Order', orderSchema);

const addCustomer = async () => {
    let customer1 = new Cusotmer({
        // name: "John Doe",
        name: "Prabhat",
    });
    // let order1 = await Order.findOne({item: "Shoes"});
    // let order2 = await Order.findOne({item: "Shirt"});
    let newOrder1 = new Order({item: "Samosa", price: 10});
    // customer1.orders.push(order1, order2);
    customer1.orders.push(newOrder1);
        
    // let result = await customer1.save();
    // let result = await customer1.find({}).populate("orders");

    await newOrder1.save();
    await customer1.save();
    console.log("added new customer");
    // console.log(result);
}

// addCustomer();

const delCustomer = async () => {
    let data = await Cusotmer.findByIdAndDelete("6759d825504437b1901777b4");
    console.log(data);
}

delCustomer();

// const addOrders = async () => {
//     let result = await Order.insertMany([
//         {item: "Shoes", price: 100},
//         {item: "Shirt", price: 50},
//         {item: "Pants", price: 80},
//     ])
//     console.log(result);
// }

// addOrders();

