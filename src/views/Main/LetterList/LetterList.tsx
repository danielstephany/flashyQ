import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import LetterListButton from "./LetterListButton.tsx"

const LetterListComp: React.ElementType = ({className, setSelections, selections}) => {
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    const handleSelection = (value: string) => (e: MouseEvent) => {
        if(!selections.has(value)){
            setSelections(new Set([value, ...selections]))
        }
    }

     const displayLetters = () => {
         return letters.map(letter => {
          return (
            <LetterListButton 
                onClick={handleSelection(letter)}
                disabled={selections.has(letter)}
            >{letter.toUpperCase()}</LetterListButton>
            )
        })
     }

    return (
        <div className={className} >{displayLetters()}</div>
    )
}

const LetterList = styled(LetterListComp)`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    max-width: 1098px;
    margin: 36px auto;
` as typeof LetterListComp

export default LetterList