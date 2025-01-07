import { useState } from "react"

export default function LudoBoard(){
    // let [blueMove, setBlueMove] = useState(0);
    // let [greenMove, setGreenMove] = useState(0);
    // let [redMove, setRedMove] = useState(0);
    // let [yellowMove, setYellowMove] = useState(0);
    let [moves, setMoves] = useState({blue: 0, green: 0, red: 0, yellow: 0});
    function updateBlue(){
        moves.blue += 1;
        setMoves({...moves});
    }
    function updateGreen(){
        moves.green += 1;
        setMoves({...moves});
    }
    function updateRed(){
        moves.red += 1;
        setMoves({...moves});
    }
    function updateYellow(){
        moves.yellow += 1;
        setMoves({...moves});
    }

    return (
        <div>
            <p>game begins!</p>
            <div className="Board">
                <p>Blue Move = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Green Move = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red Move = {moves.red}</p>
                <button style={{backgroundColor: "red", color: "black"}} onClick={updateRed}>+1</button>
                <p>Yellow Move = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
            </div>
        </div>
    )
};