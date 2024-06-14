import React from 'react'
import styled from 'styled-components'
import LetterListButton from "./LetterListButton.tsx"

const LetterListComp: React.ElementType = ({ 
    className, 
    handleSelection, 
    selections,
    isGameOver
}) => {
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

     const displayLetters = () => {
         return letters.map((letter, i) => {
          return (
            <LetterListButton 
                key={i}
                onClick={handleSelection(letter)}
                disabled={selections.has(letter) || isGameOver}
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
    margin: 0px auto 36px;
    @media (max-width: 1146px){
        max-width: 954px;
        ${LetterListButton} {
            width: 90px;
        }
    }
    @media (max-width: 1000px){
        max-width: 810px;
        ${LetterListButton} {
            width: 74px;
        }
    }
    @media (max-width: 840px){
        max-width: 666px;
        ${LetterListButton} {
            width: 58px;
        }
    }
` as typeof LetterListComp

export default LetterList