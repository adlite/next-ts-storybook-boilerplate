import {types, destroy, getParent} from 'mobx-state-tree';

// Define a couple models
const Comment = types
  .model({
    id: types.number,
    postId: types.number,
    name: types.string,
    email: types.string,
    body: types.string,
  })
  .actions(self => ({
    delete() {
      getParent(self, 2).delete(self);
    },
  }));

const ExampleCommentsStore = types
  .model({
    comments: types.array(Comment),
    isLoading: types.boolean,
    isLoaded: types.boolean,
    error: types.string,
  })
  .actions(self => ({
    startLoading() {
      self.isLoading = true;
    },
    saveDataFromServer(comments) {
      self.comments = comments;
      self.isLoading = false;
      self.isLoaded = true;
    },
    async fetchData() {
      self.startLoading();
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const comments = await response.json();
      self.saveDataFromServer(comments);
    },
    async fetchDataIfNeeded() {
      if (!self.isLoaded) {
        await self.fetchData();
      }
    },
    addComment(text) {
      self.comments.unshift({
        id: Date.now(),
        postId: 1,
        name: 'Example username',
        email: 'Example email',
        body: text,
      });
    },
    delete(comment) {
      destroy(comment);
    },
  }));

const initialState = {
  comments: [],
  isLoading: false,
  isLoaded: false,
  error: '',
};

export default {
  model: ExampleCommentsStore,
  initialState: initialState,
};
