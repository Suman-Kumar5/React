import { useState } from "react";

export default function LudoBoard() {
    // let [blueMoves, setBlueMoves] = useState(0);
    // let [YellowMoves, setYellowMoves] = useState(0);
    // let [greenMoves, setGreenMoves] = useState(0);
    // let [redMoves, setRedMoves] = useState(0);

    // OR
    let [move, setMove] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    // move.blue += 1;
    // console.log(move.blue);
    // setMove({ ...move });
    let updateBlue = () => {
        console.log(`move.blue =${move.blue}`);
        setMove((preMove) => {
            return { ...preMove, blue: preMove.blue + 1 };
        });
    }
    let updateYellow = () => {
        console.log(`move.yellow =${move.yellow}`);
        setMove((preMove) => {
            return { ...preMove, yellow: preMove.yellow + 1 };
        });
    }
    let updateGreen = () => {
        console.log(`move.green =${move.green}`);
        setMove((preMove) => {
            return { ...preMove, green: preMove.green + 1 };
        });
    }
    let updateRed = () => {
        console.log(`move.red =${move.red}`);
        setMove((preMove) => {
            return { ...preMove, red: preMove.red + 1 };
        });
    }
    return (
        <div>
            <p>Game Begins</p>
            {/* <p></p> */}
            <div className="Board">
                <p >Blue moves ={move.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>
                <p>Yellow moves ={move.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>
                <p>Green moves ={move.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
                <p>Red moves ={move.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
            </div>
        </div >
    );
}