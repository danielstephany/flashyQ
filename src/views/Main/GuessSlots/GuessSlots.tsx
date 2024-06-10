import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GuessSlotItem from './GuessSlotItem.tsx'

const GuessSlotsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 192px;
    max-width: 1200px;
    margin: 0 auto 32px;
`

const GuessSlotsSection = styled.div`
    display: inline-flex;
    margin: 16px;
`

const parseWordString = (str: string) => {
    return str.split(" ").map((item: string) => item.trim()).filter((item: string) => !!item)
}

interface iGuessSlotsProps {
    wordString: string,
    selections: Set<string>,
    isGameOver: boolean
}

const GuessSlots: React.ElementType = ({ wordString, isGameOver, selections }: iGuessSlotsProps) => {
    const stringArray = useRef(parseWordString(wordString))
    const delayStep = 150
    let currentDelay: number = -delayStep;

    const buildGuessSlots = (word: string) => {        
        return (
            Array.from(word).map((letter: string, i: number) => {
                const isActive = letter ? selections.has(letter.toLowerCase()) : false
                currentDelay = (isGameOver && !isActive) ? currentDelay + delayStep : currentDelay
                const delayedDisplay = (isGameOver && !isActive) ? currentDelay : null

                return <GuessSlotItem key={i} delayedDisplay={delayedDisplay} active={isActive} >{letter.toUpperCase()}</GuessSlotItem>
            })
        )
    }

    const buildGuessSlotsSection = (wordArray: string[]) => {
        currentDelay = -delayStep;
        return wordArray.map((word: string, i: number) => {
            
            return (
                <GuessSlotsSection key={i}>                    
                    {buildGuessSlots(word)}
                </GuessSlotsSection>
            )
        })
    }

    return (
        <GuessSlotsContainer>
            {buildGuessSlotsSection(stringArray.current)}
        </GuessSlotsContainer>
    )
}

GuessSlots.propTypes = {
    wordString: PropTypes.string.isRequired,
    selections: PropTypes.object.isRequired
}

export default GuessSlots