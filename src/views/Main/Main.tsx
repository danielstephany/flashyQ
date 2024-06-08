import React, { useState } from 'react'
import MainLayout from '@src/components/layouts/MainLayout.tsx'
import Modal from '@src/components/modules/Modal/index.tsx'
import styled from 'styled-components'
import GuessSlots from './GuessSlots/index.tsx'
import LetterList from './LetterList/LetterList.tsx'
import MainHeader from '@src/components/modules/MainHeader.tsx'

const Box = styled.div`
    height: 500px;
    width: 300px;
    background: #fff;
`

const Main = () => {
    const [selections, setSelections] = useState<Set<string>>(new Set())
    const [health, setHealth] = useState(5)
    const [answer, setAnswer] = useState("Big  Bear  Wiggles")
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const handleSelection = (value: string) => (e: MouseEvent) => {
        if (answer.indexOf(value) < 0){
            setHealth(health - 1)
        }
        if (!selections.has(value)) {
            setSelections(new Set([value, ...selections]))
        }
    }

    return (
        <MainLayout>
            <MainHeader currentSlot={health}/>
            <Modal open={open}>
                <Box>
                    <button onClick={handleClick}>Close</button>
                    <button>test</button>
                    <input />
                    <textarea></textarea>
                </Box>
            </Modal>
            <GuessSlots wordString={answer} selections={selections}/>
            <LetterList selections={selections} handleSelection={handleSelection} />
        </MainLayout>
    )
}

export default Main