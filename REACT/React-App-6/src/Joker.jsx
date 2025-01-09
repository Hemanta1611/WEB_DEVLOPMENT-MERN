import { useEffect, useState } from "react";

export default function Joker(){
    let [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getJoke = async () => {
        let res = await fetch(URL);
        let jsonRes = await res.json();
        console.log(jsonRes);
        setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline});
    };

    useEffect(() => {
        async function getFirstJoke() {
            let respone = await fetch(URL);
            let jsonRespnse = await respone.json();
            setJoke({setup: jsonRespnse.setup, punchline: jsonRespnse.punchline});
        }
        getFirstJoke();
    }, []);

    
    return (
        <div>
            <h3>Joker</h3>
            <h2>{joke.setup}</h2>
            <h4>{joke.punchline}</h4>
            <button onClick={getJoke}>Get a joke!</button>
        </div>
    );
};