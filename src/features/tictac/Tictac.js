import { useState } from 'react';
import {  useDispatch } from 'react-redux'
import { 
    setBoardSize,
    setPlayer
} from './tictacSlice.js'
import styles from '../tictac/Tictac.module.css';
import Board from './Board.js'
import { players } from '../../util/constants.js'

export const Tictac = () => {
    const { X } = players
    const dispatch = useDispatch();
    const [sizeOfBoard, setSizeOfBoard] = useState(3);

    const setNewBoard = () => {
        dispatch(setBoardSize(sizeOfBoard))
        dispatch(setPlayer(X))
    }
    return (
        <div>
            <Board />
            <input
                className={styles.textbox}
                aria-label="Set board size"
                value={sizeOfBoard}
                onChange={(e) => setSizeOfBoard(e.target.value)}
            />
            <button
                className={styles.button}
                onClick={() => setNewBoard() }>set board size</button>
        </div>
    )
}