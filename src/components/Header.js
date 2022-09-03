import React from "react"
import StatusSelect from "./StatusSelect"
import SearchBar from "./SearchBar"
import styled from "styled-components"

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  height: 100px;
  max-height: 100px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 350px));
  align-items: center;
`

const Header = ({ employmentStatus, setEmploymentStatus, name, setName }) => {
  return (
    <HeaderContainer>
      <SearchBar name={name} setName={setName} />
      <StatusSelect
      // employmentStatus={employmentStatus}
      // setEmploymentStatus={setEmploymentStatus}
      />
    </HeaderContainer>
  )
}

export default Header
