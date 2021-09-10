import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {connectMobX} from '@/mobx';
import style from './style.module.scss';

function ExamplePostsSection({className, store}) {
  // State
  const [searchValue, setSearchValue] = useState('');

  // Handlers
  const handleSearchInputChange = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={cn(style.ExamplePostsSection, className)}>
      <h2>Posts list MobX example</h2>
      <div className={style.searchInputWrapper}>
        <input
          type="search"
          className={style.searchInput}
          placeholder="Search posts"
          value={searchValue}
          onChange={handleSearchInputChange}
        />
      </div>
      <ul>
        {store.postsStore.foundPosts(searchValue).map(post => (
          <li className={style.post} key={post.id}>
            <span>{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ExamplePostsSection.defaultProps = {
  className: '',
};

ExamplePostsSection.propTypes = {
  className: PropTypes.string,
  store: PropTypes.object,
};

export default connectMobX(ExamplePostsSection);
