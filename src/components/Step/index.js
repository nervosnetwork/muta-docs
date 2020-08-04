import React, {useState} from 'react';

import classnames from 'classnames';
import queryString from 'query-string';

import './styles.css';

function Step({children, headingDepth}) {
  let location = typeof(window) !== 'undefined' ? window.location : null;

  return (
    <div className={`step step--h${headingDepth}`}>
      {children}
    </div>

  );
}

export default Step;
