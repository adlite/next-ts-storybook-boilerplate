import {types} from 'mobx-state-tree';

// Models
const Post = types.model({
  id: types.number,
  userId: types.number,
  title: types.string,
  body: types.string,
});

// Main store
const ExamplePostsStore = types
  .model({
    posts: types.array(Post),
    isLoading: types.boolean,
    isLoaded: types.boolean,
    error: types.string,
  })
  .views(self => ({
    foundPosts(searchText) {
      return self.posts.filter(({title}) => title.toLowerCase().includes(searchText.trim().toLowerCase()));
    },
  }))
  .actions(self => ({
    startLoading() {
      self.isLoading = true;
    },
    saveDataFromServer(posts) {
      self.posts = posts;
      self.isLoading = false;
      self.isLoaded = true;
    },
    async fetchData() {
      self.startLoading();
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      self.saveDataFromServer(posts);
    },
    async fetchDataIfNeeded() {
      if (!self.isLoaded) {
        await self.fetchData();
      }
    },
  }));

// Instance initial state
const initialState = {
  posts: [],
  isLoading: false,
  isLoaded: false,
  error: '',
};

export default {
  model: ExamplePostsStore,
  initialState: initialState,
};
