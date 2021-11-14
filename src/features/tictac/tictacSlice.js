import { createSlice } from "@reduxjs/toolkit"
import { getTicTacObject } from '../../util/helperFunctions'
import { players } from '../../util/constants'

const { X } = players

const initialState = {
    board : {
        obj : getTicTacObject(3),
    },
    gameStatus : 'running',
    boardSize: 3,
    winner: '-',
    player: X
}

export const tictacSlice = createSlice({
    name: 'tictac',
    initialState,
    reducers: {
        setBoardSize: (state, action) => {
            state.board.obj = getTicTacObject(action.payload)
            state.boardSize = action.payload
        },
        setBoxValue: (state, action) => {
            state.board.obj[`${action.payload.key}`] = action.payload.player
            // state.board.obj = action.payload
        },
        setWinner: (state, action) => {
            state.board.winner = action.payload
        },
        setPlayer: (state, action) => {
            state.player = action.payload
        }
    }
})

export const { setBoardSize, setBoxValue, setWinner, setPlayer } = tictacSlice.actions

export default tictacSlice.reducer