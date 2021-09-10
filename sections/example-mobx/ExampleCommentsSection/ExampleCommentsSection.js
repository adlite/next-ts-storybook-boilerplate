import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {connectMobX} from '@/mobx';
import style from './style.module.scss';

function ExampleCommentsSection({className, store}) {
  // Store
  const {commentsStore} = store;

  // State
  const [commentValue, setCommentValue] = useState('');

  // Handlers
  const handleCommentInputChange = event => {
    setCommentValue(event.target.value);
  };

  const handleAddComment = event => {
    event.preventDefault();
    commentsStore.addComment(commentValue);
    setCommentValue('');
  };

  return (
    <div className={cn(style.ExampleCommentsSection, className)}>
      <h2>Comments list MobX example</h2>
      <form onSubmit={handleAddComment} className={style.addCommentBox}>
        <input
          type="text"
          className={style.addCommentInput}
          placeholder="Comment text"
          value={commentValue}
          onChange={handleCommentInputChange}
        />
        <button className={style.addCommentButton} onClick={handleAddComment}>
          Add comment
        </button>
      </form>
      <ul>
        {commentsStore.comments.map(comment => (
          <li className={style.comment} key={comment.id}>
            <p className={style.commentBody}>{comment.body}</p>
            <button onClick={comment.delete}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ExampleCommentsSection.defaultProps = {
  className: '',
};

ExampleCommentsSection.propTypes = {
  className: PropTypes.string,
  store: PropTypes.object,
};

export default connectMobX(ExampleCommentsSection);
