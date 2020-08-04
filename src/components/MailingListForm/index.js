import React from 'react';

import classnames from 'classnames';

import './styles.css';

function MailingListForm({block, buttonClass, center, description, size, width}) {
  return (
    <div className={classnames('mailing-list', {'mailing-list--block': block, 'mailing-list--center': center, [`mailing-list--${size}`]: size})}>
      {description !== false && (
        <div className="mailing-list--description">
          The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever.
        </div>
      )}
      <form action="https://dev.us17.list-manage.com/subscribe/post?u=a7b19925733ee6bf88e045485&amp;id=d8c4724e17" method="post" className="mailing-list--form">  
        <button className={classnames('button', `button--${buttonClass || 'primary'}`, `button--${size}`)} type="submit">❤ Subscribe us for Muta updates ❤ </button>
      </form>
    </div>
  );
}

export default MailingListForm;