# COMPONENTS

The components directory contains your React reusable components.

Each component should store in separate directory in the shape of:
```
./ComponentName
 ├─index.js // Component export file
 ├─ComponentName.js // Component itself
 ├─ComponentName.test.js // Component tests (if exist)
 ├─InternalComponent.js // Child component
 ├─InternalComponent.test.js // Child component tests (if exist)
 └─style.module.scss // Styles (CSS modules enabled)
```

Export file is designed as following:
```javascript
export {default} from './ComponentName';
```

If you are tired to create this structure manually, you can use [Templateman](https://www.npmjs.com/package/templateman) 
CLI-tool which creates this automatically for you.
