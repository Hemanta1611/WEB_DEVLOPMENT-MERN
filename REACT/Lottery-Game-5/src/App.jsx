import './App.css'
import Lottery from './Lottery';
import TicketNum from './TicketNum';
import Ticket from './Ticket';

function App() {
  return (
    <>
      <h1>Lottery Game</h1>
      <hr />
      <Lottery n={3} winningSum={15} />
    </>
  );
};

export default App
