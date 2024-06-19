import React, { useState, useRef, useEffect } from 'react'
import MainLayout from '@src/components/layouts/MainLayout.tsx'
import GuessSlots from './GuessSlots/index.tsx'
import LetterList from './LetterList/LetterList.tsx'
import MainHeader from '@src/components/modules/MainHeader.tsx'
import { countries } from '@src/data/countries.ts'
import { movies } from '@src/data/movies.ts'
import { actors } from '@src/data/actors.ts'
import { animals } from '@src/data/animals.ts'
import GameMessages from "./GameMessages/index.tsx"
import CategoriesModal from './CategoriesModal/index.tsx'
import IntroModal from './IntroModal/index.tsx'
import { LETTERS } from './Letters.ts'

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

const categoryOptions: {[key: string]: string[]} = { 
    countries,
    movies,
    actors,
    animals,
}

const Main = () => {
    const [selections, setSelections] = useState<Set<string>>(new Set())
    const [health, setHealth] = useState(6)
    const [answer, setAnswer] = useState(getRandomArrayItem(countries))
    const [catagoryModalopen, setCatagoryModalopen] = useState(false)
    const [introModalOpen, setIntroModalOpen] = useState(true)
    const [isWinner, setIsWinner] = useState(false)
    const [message, setMessage] = useState("Countries")
    const [category, setCategory] = useState("Countries")
    const answerSet = useRef(getAnswerSet(answer))
    const disableSelections = isWinner || health === 0

    const handleOpenCatagoryModal = () => {
        setCatagoryModalopen(true)
    }

    const handleCloseModal = () => {
        setCatagoryModalopen(false)
    }

    const handleCloseIntroModal = () => {
        setIntroModalOpen(false)
    }

    const handleSetCatagory = (category: string) => () => {
        const isRandom = category.toLowerCase() === "random"
        const catagoryName = isRandom ? getRandomArrayItem(Object.keys(categoryOptions)) : category
        const upperCaseName = catagoryName[0].toUpperCase() + catagoryName.substring(1, catagoryName.length)
        const answer = getRandomArrayItem(categoryOptions[catagoryName.toLowerCase()])

        setAnswer(answer)
        answerSet.current = getAnswerSet(answer)
        setCategory(isRandom ? "Random" : upperCaseName)
        setMessage(upperCaseName)
        setCatagoryModalopen(false)
        setSelections(new Set())
        setHealth(6)
        setIsWinner(false)
    }

    const handleReset = () => {
        handleSetCatagory(category)()
    }

    const updateHealth = (value: string) => {
        if (answer.toLowerCase().indexOf(value) < 0 && !selections.has(value)) {
            setHealth(health - 1)
            if (health - 1 === 0) {
                setMessage("Game over")
            }
        }
    }

    const updateSelections = (value: string) => {
        if (!selections.has(value)) {
            const updatedSelections = new Set([value, ...selections])
            setSelections(updatedSelections)

            if (checkForWinner(answerSet.current, updatedSelections)) {
                setIsWinner(true)
                setMessage("Winner!")
            }
        }
    }

    const handleSelection = (value: string) => (e: MouseEvent) => {
        if (disableSelections) return 
        updateHealth(value)
        updateSelections(value)
    }

    const handleKeySelection = (e: KeyboardEvent) => {
        if (disableSelections) return 
        const key = typeof e.key === "string" ? e.key.toLowerCase() : null;

        if (key && LETTERS.indexOf(e.key) >= 0) {
            updateHealth(key)
            updateSelections(key)
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeySelection)
        return () => {
            document.removeEventListener("keydown", handleKeySelection)
        }
    })

    return (
        <MainLayout 
            topContent={
                <MainHeader 
                    currentSlot={health} 
                    handleOpenCatagoryModal={handleOpenCatagoryModal}
                    gameEnded={health === 0 || isWinner}
                    handleReset={handleReset}
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
                    <CategoriesModal 
                        open={catagoryModalopen} 
                        handleClose={handleCloseModal}
                        handleSetCatagory={handleSetCatagory}
                    />
                    <IntroModal 
                        open={introModalOpen} 
                        handleClose={handleCloseIntroModal}
                        handleOpenCatagoryModal={handleOpenCatagoryModal}
                    />
                </>
            }
        >                        
        </MainLayout>
    )
}

export default Main