# MobX and MobX State Tree

## Models
MobX State Tree Stores should be placed in separate files in `mobx/stores` directory and should be named in PascalCase with `Store` in the end of the name.

Each store file should export object with `model` and `initialState` fields.

For example: 
```javascript
import {types} from 'mobx-state-tree';

const ExampleStore = types.model({
  count: types.number,
});

const initialState = {
  count: 0,
};

export default {
  model: ExampleStore,
  initialState: initialState,
};
```

Then all stores are concatenated in `RootStore` which also exports `model` and `initialState`.

RootStore.js:
```javascript
import {types} from 'mobx-state-tree';

import FirstStore from '@/mobx/stores/FirstStore';
import SecondStore from '@/mobx/stores/SecondStore';

// Define a store just like a model
export const model = types.model({
  firstStore: FirstStore.model,
  secondStore: SecondStore.model,
});

// Define an initial states of all stores
export const initialState = {
  firstStore: FirstStore.initialState,
  secondStore: SecondStore.initialState,
};
```

## Connect to React

To connect store to React components simply wrap your component in `connectMobX` HOC.

For example:
```javascript
import PropTypes from 'prop-types';

import {connectMobX} from '@/mobx';

function ExampleCommentsSection({store}) {
  // Render data from observable store
  const {commentsStore} = store;

  return (
    <ul>
      {commentsStore.comments.map(comment => (
        <li key={comment.id}>
          <p>{comment.body}</p>
          <button onClick={comment.delete}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ExampleCommentsSection.propTypes = {
  store: PropTypes.object,
};

export default connectMobX(ExampleCommentsSection);
```
