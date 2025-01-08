import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket } from "./helper";

// export default function Lottery() {
//     let [numbers, setNumbers] = useState(0);

//     let generateNumber = () => {
//         setNumbers(Math.floor(Math.random() * 1000));
//     };
//     return (
//         <div>
//             {Array.from(String(numbers)).reduce((sum, curr) => sum + parseInt(curr), 0) ==
//             15 ? (
//                 <h1>Lottery 'Congratulations, you won!'</h1>
//             ) : (
//                 <h1>Lottery 'Better Luck Next Time'</h1>
//             )}
//             <p>Ticket Number: {numbers}</p>
//             <button onClick={generateNumber}>Generate Ticket Number</button>
//         </div>
//     );
// }

export default function Lottery({ n, winningSum }) {
    let [tickets, setTickets] = useState([]);

    let buyTicket = () => {
        setTickets([genTicket(n)]);
    };

    let isWinning = () => {
        return (
            tickets.reduce((sum, ticket) => 
                sum + ticket.reduce((ticketSum, num) => ticketSum + parseInt(num), 0)
            , 0) === winningSum
        );
    };

    return (
        <div>
            {tickets.length > 0 && <Ticket ticket={tickets[0]} />}
            <button onClick={buyTicket}>Generate Ticket</button>
            {
                isWinning() ? <h1>Lottery 'Congratulations, you won!'</h1> : <h1>Lottery 'Better Luck Next Time'</h1>
            }
        </div>
    );
};