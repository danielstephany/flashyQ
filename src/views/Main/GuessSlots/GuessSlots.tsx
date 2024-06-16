import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GuessSlotItem from './GuessSlotItem.tsx'

const GuessSlotsWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 24px;
    margin: 0 auto 32px;
    max-width: 100%;
    @media (max-width: 650px){
        padding: 0 16px;
    }
    @media (max-width: 525px){
        padding: 0 8px;
    }
`

const GuessSlotsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    width: 1200px;
    max-width: 100%;
    margin: 0 -48px;
`

const GuessSlotsSection = styled.div`
    display: inline-flex;
    margin: 24px;
    max-width: 100%;
    @media (max-width: 870px){
        margin: 16px;
    }
    @media (max-width: 525px){
        margin: 12px;
    }
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
    const [stringArray, setStringArray] = useState(parseWordString(wordString))
    const delayStep = 150
    let currentDelay: number = -delayStep;

    useEffect(() => {
        setStringArray(parseWordString(wordString))
    }, [wordString])

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
        <GuessSlotsWrapper>
            <GuessSlotsContainer>
                {buildGuessSlotsSection(stringArray)}
            </GuessSlotsContainer>
        </GuessSlotsWrapper>
    )
}

GuessSlots.propTypes = {
    wordString: PropTypes.string.isRequired,
    selections: PropTypes.object.isRequired
}

export default GuessSlots