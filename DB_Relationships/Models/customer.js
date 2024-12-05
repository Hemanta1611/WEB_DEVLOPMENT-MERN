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

const Cusotmer = mongoose.model('Cusotmer', customerShcema);
const Order = mongoose.model('Order', orderSchema);

const addCustomer = async () => {
    let customer1 = new Cusotmer({
        name: "John Doe",
    });
    let order1 = await Order.findOne({item: "Shoes"});
    let order2 = await Order.findOne({item: "Shirt"});

    customer1.orders.push(order1, order2);
        
    // let result = await customer1.save();
    let result = await customer1.find({}).populate("orders");
    console.log(result);
}

addCustomer();

// const addOrders = async () => {
//     let result = await Order.insertMany([
//         {item: "Shoes", price: 100},
//         {item: "Shirt", price: 50},
//         {item: "Pants", price: 80},
//     ])
//     console.log(result);
// }

// addOrders();

