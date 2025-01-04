import AmazonProduct from "./AmazonProduct";
import "./App.css";

export default function AllAmazonProducts(){
    return (
        <div className="AllAmazonProducts">
            <AmazonProduct title="Product 1" description="Description 1" oldprice="10,000" newprice="9,000"/>
            <AmazonProduct title="Product 2" description="Description 2" oldprice="20,000" newprice="19,000"/>
            <AmazonProduct title="Product 3" description="Description 3" oldprice="30,000" newprice="29,000"/>
            <AmazonProduct title="Product 4" description="Description 4" oldprice="40,000" newprice="39,000"/>
        </div>
    );
};
