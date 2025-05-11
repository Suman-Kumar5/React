import './App.css';
import LudoBoard from './LudoBoard';
import TodoList from './TodoList';
import Lottery from './Lottery';
import TicketNum from './TicketNum';
import Ticket from './Ticket';

function App() {

  return (
    <>

      {/* <Ticket ticket={[0, 2, 1]} /> */}
      <Lottery n={3} winningSum={15} />
      {/* <TodoList /> */}
      {/* <LudoBoard /> */}
    </>
  );
}

export default App;
