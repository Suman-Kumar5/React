import { useState } from "react";
import './Lottery.css';
import Ticket from "./Ticket.jsx";
import { getTicket, sum } from './helper.js'

export default function Lottery({ n, winningSum }) {
    let [ticket, setTicket] = useState(getTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(getTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket}>Get New Ticket</button>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    );
}