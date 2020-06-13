import React from 'react'
import styled from 'styled-components'

const StyledFlexDiv = styled.div(props => ({
    display: "flex",
    flexWrap: props.container ? "nowrap" : "wrap",
    flex: props.size ? props.size : 1,
    justifyContent: props.justify && props.justify,
    alignItems: props.align && props.align,
    flexDirection: props.vert ? "column" : "row"

}));

export default function FlexDiv(props) {
    return (

        <StyledFlexDiv {...props}>

        </StyledFlexDiv>
    )
}
