import { useEffect, useState } from "react";
export default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incrementx = () => {
        setCountx(countx + 1);
    };
    let incrementy = () => {
        setCounty(county + 1);
    };

    useEffect(() => {
        console.log("something printed for all, as no dependecies here!");
    });
    useEffect(() => {
        console.log("something printed for all for once, as empty dependecies here!, not printed again for re-render");
    }, []);

    useEffect(() => {
        console.log("something printed for x only");
    }, [countx]);
    useEffect(() => {
        console.log("something printed for y only");
    }, [county]);

    return (
        <div>
            <h3>CountX = {countx}</h3>
            <button onClick={incrementx}>+1</button>
            <h3>CountY = {county}</h3>
            <button onClick={incrementy}>+1</button>
        </div>
    );
};