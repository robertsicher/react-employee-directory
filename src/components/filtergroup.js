import {ButtonToolbar, ButtonGroup, Button, InputGroup, FormControl} from 'react-bootstrap';

function Filtergroup(props) {
  return (
    <div>
        <form>
            <select defaultValue="Sort" onChange={props.handleSort}>
                <option disabled value="Sort">Sort</option>
                <option value="Youngest">Youngest </option>
                <option value="Oldest">Oldest </option>
            </select>
        </form>
    </div>
  );
}
export default Filtergroup



{/* <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
<ButtonGroup className="mr-2" aria-label="First group">
  <Button className='mx-1' variant="secondary">Sort A-Z</Button>{' '}
  <Button className="mx-1" variant="secondary">Sort by Age</Button>{' '}
</ButtonGroup>
<InputGroup>
  <InputGroup.Prepend>
    <InputGroup.Text id="btnGroupAddon">Search For a Name</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl
    type="text"
    placeholder="Input group example"
    aria-label="Input group example"
    aria-describedby="btnGroupAddon"
  />
</InputGroup>
</ButtonToolbar> */}