import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body>No ice cream will actually be delivered.</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <div className='mx-2'>
      I agree to
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions </span>
      </OverlayTrigger>
    </div>
  );

  return (
    <Form
      className='d-flex justify-content-center flex-column mx-auto'
      style={{ width: 'max-content' }}>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          className='d-flex'
          type='checkbox'
          checked={tcChecked}
          onChange={(e) => {
            setTcChecked(e.target.checked);
          }}
          label={checkboxLabel}></Form.Check>
      </Form.Group>
      <Button
        className='d-flex'
        variant='primary'
        type='submit'
        disabled={!tcChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
