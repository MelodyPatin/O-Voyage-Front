import React from 'react';
import './StepTextarea.scss';
import { Form, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import LabelInput from '../LabelInput/LabelInput';
import SimpleButton from '../SimpleButton/SimpleButton';

// Functional component : popup with input fields and a close button
const StepTextarea = ({
  buttonContent,
  labelContent,
  placeholderContent,
  textareaContent,
  options,
}) => {
  return (
    <div className="StepTextarea">
      <div className="LabelInput">
        <p>{labelContent}</p>
        <Form>
          <TextArea placeholder={textareaContent} />
        </Form>
      </div>
      <SimpleButton textContent={buttonContent} />
    </div>
  );
};

StepTextarea.propTypes = {
  buttonContent: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  placeholderContent: PropTypes.string,
  textareaContent: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StepTextarea;
