import {ButtonToolbar} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';


function Filtergroup() {
  return (
    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
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
    </ButtonToolbar>
  );
}
export default Filtergroup




