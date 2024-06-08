import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GuessSlotItem from './GuessSlotItem.tsx'

const GuessSlotsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
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
    selections: Set<string>
}

const GuessSlots: React.ElementType = ({ wordString, selections }: iGuessSlotsProps) => {
    const stringArray = useRef(parseWordString(wordString))

    const buildGuessSlots = (word: string) => (
        Array.from(word).map((letter: string) => {
            const isActive = letter ? selections.has(letter.toLowerCase()) : false
            return <GuessSlotItem active={isActive} >{letter.toUpperCase()}</GuessSlotItem>
        })
    )

    const buildGuessSlotsSection = (wordArray: string[]) => {
        return wordArray.map((word: string) => {
            return (
                <GuessSlotsSection>                    
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
    wordString: PropTypes.arrayOf(PropTypes.string).isRequired,
    guessSet: PropTypes.object.isRequired
}

export default GuessSlots