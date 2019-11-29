# React component starter kit

`React` component "library" using [`rollup`](https://github.com/rollup/rollup) that is published to `npm`. 

A starting point to create a react component and publish it to `npm`

Things included in this project

1. Use `babel`
2. Use `jest` and `enzyme` for testing
3. Can use `sass` like syntax, uses postcss with autoprefixer
4. Use `classnames`
5. Use `eslint`
6. Precommit hooks using `husky`
7. Generate styleguide using `react-styleguidist`
8. Support `umd` and `es` modules

## Structure
* Each component is a folder in `src` directory
* Each component folder will have a `index.js` file which will export the component file
* Each component directory will have a __Readme.md__ file which contains documentation for the component, this is the file which will be picked up by `react-styleguidist` to generate the styleguide. 
* `__test__` folder will contain the test files and snapshots.



