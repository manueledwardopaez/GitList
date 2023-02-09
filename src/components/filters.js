import styled from 'styled-components'
import ModalContent from '../modal'

const FilterStyled = styled.div`
    grid-area: filters;
    background: blue;
`

function Filters() {
    return (
        <FilterStyled>
            <ModalContent/>
            Filter
        </FilterStyled>
    )
}

export default Filters
