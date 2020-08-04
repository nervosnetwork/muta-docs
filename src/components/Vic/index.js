import React from 'react';

import Link from '@docusaurus/Link';

import classnames from 'classnames';

import './styles.css';

function Vic({className, size, style, text}) {
  return <Link to="/vic/" className={classnames('vic', `vic--${size}`, className)}>
    <div className="icon">
      <img src={`/img/muta-logo.svg`} alt="Muli - The Muta Mascot" />
    </div>
    {text && <div className="text">{text}</div>}
  </Link>;
}

export default Vic;