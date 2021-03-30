import {  Dropdown , DropdownButton , InputGroup, FormControl } from 'react-bootstrap'

function Searchbar({searchFilter, handleSort}) {
    return(
        <>
        <InputGroup className="mb-3">
            <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Sort"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item onClick={() => {handleSort("name")}}>Name</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" placeholder="Search an Employee"
                onChange={e => searchFilter(e)}/>
  </InputGroup>
        </>
    )
}

export default Searchbar