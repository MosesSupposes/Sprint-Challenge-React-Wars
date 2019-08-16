import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: rgba(255,255,255, 0.4);
    padding: 1rem;
    font-family: "Comic Sans MS";
    display: inline-block;
    width: 40%;
    border: 2px solid black;
`

const Header = styled.h2`
    font-weight: bold;
`

const Details = styled.ul`
    list-style-type: none
` 

export default function CharacterCard(props) {
   
    
    return (
        <Wrapper>
            <Header>{props.name}</Header>
            <Details>
                <li>{`Gender: ${props.gender}`}</li>
                <li>{`Height: ${props.height}`}</li>
                <li>{`Mass: ${props.mass}`}</li>
                <li>{`Hair color: ${props.hairColor}`}</li>
                <li>{`Eye color: ${props.eyeColor}`}</li>
                <li>{`Birth year: ${props.birthYear}`}</li>
            </Details>
        </Wrapper>
        
        // <Card
        //     header={props.name}
        //     meta={props.height + "\""}
        //     description={description}
        // />
    )
}