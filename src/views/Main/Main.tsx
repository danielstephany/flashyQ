import React, { useState, useRef } from 'react'
import MainLayout from '@src/components/layouts/MainLayout.tsx'
import Modal from '@src/components/modules/Modal/index.tsx'
import styled from 'styled-components'
import GuessSlots from './GuessSlots/index.tsx'
import LetterList from './LetterList/LetterList.tsx'
import MainHeader from '@src/components/modules/MainHeader.tsx'
import { countries } from '@src/data/countries.ts'
import GameMessages from "./GameMessages/index.tsx"
import { array } from 'prop-types'

const Box = styled.div`
    height: 500px;
    width: 300px;
    background: #fff;
`

const getRandomArrayItem = (array: string[]) =>  array[Math.floor(Math.random() * (array.length - 1))]

const checkForWinner = (answerSet: Set<string>, selectionSet: Set<string>) => {    
    debugger
    for (const letter of answerSet.values()) {
        if (!selectionSet.has(letter)) {
            return false
        }
    }
    return true
}

const removeSpaces = (str: string) => Array.from(str.split(" ").map(word => word.trim()).join())

const getAnswerSet = (str: string) => {
    const res = new Set()

    for(let i = 0; i < str.length; i++){
        if(str[i] !== " ") res.add(str[i].toLowerCase())
    }

    return res
}

const Main = () => {
    const [selections, setSelections] = useState<Set<string>>(new Set())
    const [health, setHealth] = useState(6)
    const [answer, setAnswer] = useState(getRandomArrayItem(countries))
    const [open, setOpen] = useState(false)
    const [isWinner, setIsWinner] = useState(false)
    const [message, setMessage] = useState("")
    const answerSet = useRef(getAnswerSet(answer))

    const handleClick = () => {
        setOpen(!open)
    }

    const handleSelection = (value: string) => (e: MouseEvent) => {
        if (answer.toLowerCase().indexOf(value) < 0){
            setHealth(health - 1)
            if(health - 1 === 0){
                setMessage("Game over")
            }
        }
        if (!selections.has(value)) {
            const updatedSelections = new Set([value, ...selections])
            setSelections(updatedSelections)
            console.log(updatedSelections, answerSet.current)
            if (checkForWinner(answerSet.current, updatedSelections)){
                setIsWinner(true)
                setMessage("Winner!")
            }
        }
    }

    return (
        <MainLayout 
            topContent={<MainHeader currentSlot={health} />}
            middleContent={
                <>
                    <GameMessages message={message}/>
                    <GuessSlots
                        wordString={answer}
                        selections={selections}
                        isGameOver={health === 0}
                    />
                </>
            }
            bottomContent={
                <>
                    <LetterList 
                        selections={selections}  
                        handleSelection={handleSelection} 
                        isGameOver={health === 0}
                    />
                    <Modal open={open}>
                        <Box>
                            <button onClick={handleClick}>Close</button>
                            <button>test</button>
                            <input />
                            <textarea></textarea>
                        </Box>
                    </Modal>
                </>
            }
        >                        
        </MainLayout>
    )
}

export default Main