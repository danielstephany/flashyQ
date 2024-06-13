import { createSlice } from '@reduxjs/toolkit'
// const [selections, setSelections] = useState<Set<string>>(new Set())
// const [health, setHealth] = useState(6)
// const [answer, setAnswer] = useState(getRandomArrayItem(countries))
// const [open, setOpen] = useState(false)
// const [isWinner, setIsWinner] = useState(false)
// const [message, setMessage] = useState("")
// const answerSet = useRef(getAnswerSet(answer))
interface iGameState {
    selections: Set<string>,
    health: number,
    answer: string,
    isWinner: boolean,
    answerSet: Set<string>
}

const initialState: iGameState = {
    selections: new Set(),
    health: 6,
    answer: "",
    isWinner: false,
    answerSet: new Set()
}

export const gameSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            state.answer = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setAnswer } = gameSlice.actions

export default gameSlice.reducer