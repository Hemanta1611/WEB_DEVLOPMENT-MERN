import Product from "./Product";
import "./App.css";
import MsgBox from "./MsgBox";
import AllAmazonProduct from "./AllAmazonProducts";

function App() {
    return (
        <>
            <MsgBox userName="Hemanta" textColor={"red"}/>
            <Product title="Product 1" price={10000} />
            <Product title="Product 2" price={20000} />
            <Product title="Product 3" price={30000} />
            <AllAmazonProduct />
        </>
    );
};

export default App;