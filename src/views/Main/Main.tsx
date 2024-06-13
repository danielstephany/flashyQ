import React, { useState, useRef } from 'react'
import MainLayout from '@src/components/layouts/MainLayout.tsx'
import GuessSlots from './GuessSlots/index.tsx'
import LetterList from './LetterList/LetterList.tsx'
import MainHeader from '@src/components/modules/MainHeader.tsx'
import { countries } from '@src/data/countries.ts'
import { movies } from '@src/data/movies.ts'
import { animals } from '@src/data/animals.ts'
import { actors } from '@src/data/actors.ts'
import GameMessages from "./GameMessages/index.tsx"
import CategoriesModal from './CategoriesModal/index.tsx'

const getRandomArrayItem = (array: string[]) =>  array[Math.floor(Math.random() * (array.length - 1))]

const checkForWinner = (answerSet: Set<string>, selectionSet: Set<string>) => {    
    for (const letter of answerSet.values()) {
        if (!selectionSet.has(letter)) {
            return false
        }
    }
    return true
}

const getAnswerSet = (str: string) => {
    const res: Set<string> = new Set()

    for(let i = 0; i < str.length; i++){
        if(str[i] !== " ") res.add(str[i].toLowerCase())
    }

    return res
}

const categories = {
    countries,
    movies,
    animals,
    actors,
}

const Main = () => {
    const [selections, setSelections] = useState<Set<string>>(new Set())
    const [health, setHealth] = useState(6)
    const [answer, setAnswer] = useState(getRandomArrayItem(countries))
    const [open, setOpen] = useState(false)
    const [isWinner, setIsWinner] = useState(false)
    const [message, setMessage] = useState("")
    const answerSet = useRef(getAnswerSet(answer))

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
        console.log("test")
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
            topContent={
                <MainHeader 
                    currentSlot={health} 
                    handleOpenModal={handleOpenModal}
                />
            }
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
                    <CategoriesModal open={open} handleClose={handleCloseModal}/>
                </>
            }
        >                        
        </MainLayout>
    )
}

export default Main