import {types} from 'mobx-state-tree';

import ExampleCommentsStore from '@/mobx/stores/ExampleCommentsStore';
import ExamplePostsStore from '@/mobx/stores/ExamplePostsStore';

// Define a store just like a model
export const model = types.model({
  commentsStore: ExampleCommentsStore.model,
  postsStore: ExamplePostsStore.model,
});

// Define an initial states of all stores
export const initialState = {
  commentsStore: ExampleCommentsStore.initialState,
  postsStore: ExamplePostsStore.initialState,
};
