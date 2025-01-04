// function Product(props) {
//     return(
//         <div className="Product">
//             <h2>{props.title}</h2>
//             <p>{props.price}</p>
//         </div>
//     );
// };

import "./App.css";

function Product({title, price}){
    let styles = {
        color: "red",
        backgroundColor: price > 15000 ? "lightyellow" : ""
    };
    return (
        <div className="Product" style={styles}>
            <h2>{title}</h2>
            <p>Price: {price}</p>
            {price > 15000 ? <p>Discount of 5%</p> : null}
        </div>
    );
};

export default Product;