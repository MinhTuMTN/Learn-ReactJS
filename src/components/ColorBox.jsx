import React from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string
};

// define default props
ColorBox.defaultProps = {
    text: 'Di Di'
}

function ColorBox(props) {
    return (
        <div style={{backgroundColor: props.color}} className='box'>
            {props.text}
        </div>
    );
    }

export default ColorBox;