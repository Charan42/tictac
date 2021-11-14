import { useSelector, useDispatch } from 'react-redux'
import { 
    setBoxValue,
    setPlayer
} from './tictacSlice.js'
import { validateTicTacboard } from '../../util/helperFunctions.js'
import { players } from '../../util/constants.js'

const Board = () => {
    const dispatch = useDispatch()
    const boardObj = useSelector((state) => state.tictac.board.obj )
    const boardSize = useSelector((state) => state.tictac.boardSize )
    const player = useSelector((state) => state.tictac.player )
    const arrayOfBoxes = Object.keys(boardObj)
    const { X, O } = players

    const totalWidth = boardSize*32 -2
    let {isWon, winner} = validateTicTacboard(boardObj, boardSize)

    const handleClick = (box) =>{
        const key = box['data-key'].value
        const value = boardObj[`${key}`]
        if(value === X || value === O || isWon ){
            return
        }
        dispatch(setBoxValue({key, player}))
        dispatch(setPlayer(player === X ? O : X))
    }

    return(
        <div className="container" style={{width: `${totalWidth}px`}}>
            <div className="board">
                {arrayOfBoxes.map((box,i) => {
                    return(
                        <div key={i} className="box" data-testid="boxes" data-key={box} onClick={(box) => handleClick(box.target.attributes)}>
                            {boardObj[box]}
                        </div>
                    )
                })}
            </div>
        
            {!isWon && <div>this is {player}'s turn</div>}
            {isWon && <div>Winner is  {winner}</div>}
        </div>
    )
}
export default Board;

