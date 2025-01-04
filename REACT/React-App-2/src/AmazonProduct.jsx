import "./App.css";
export default function AmazonProduct({title, description, oldprice, newprice}){
    return(
        <div className="AmazonProduct">
            <h2 className="titleStyle">{title}</h2>
            <p><li>{description}</li></p>
            <div style={{backgroundColor: "yellow"}}>
                <p><b style={{textDecoration: "line-through"}}>{oldprice}</b> <b>{newprice}</b></p>
            </div>
        </div>
    );
};