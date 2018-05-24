# 🚀  ui-boilerplate
A `react` boilerplate for generating new projects.


This `react` boilerplate uses:

- [yarn](https://yarnpkg.com/en/docs/getting-started) - node package manager
- [sass](https://sass-lang.com/) - CSS extension language
- [eslint](https://eslint.org/) - linter
- [react](https://reactjs.org/) - library for building interfaces
- [jest](https://facebook.github.io/jest/) - testing library
- [storybook ui](https://storybook.js.org/) - UI development with the following addons;
  - [actions](https://github.com/storybooks/storybook/tree/master/addons/actions)
  - [knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)
  - [a11y](https://github.com/storybooks/storybook/tree/master/addons/a11y)
  - [links](https://github.com/storybooks/storybook/tree/master/addons/links)
- [scaffold-generator](https://github.com/kaelzhang/node-scaffold-generator) - new repo generator
- [webpack](https://github.com/webpack/webpack) - asset bundler
- [flow](https://github.com/facebook/flow) - static typing


## scaffolding
This package can be used as the base for a new `react` project.

```
$ cd <react-ui-boilerplate>
$ yarn install

## configure...
$ vi scaffold/config.js

## generate new repo...
$ babel-node scaffold
```

## create as git repo
With the new project in place, intialise the project as a git repo:

```
$ cd <my-new-repo>
```

Follow the github instruction on [adding an existing project to github](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).

## storybook
Once the new repo is created, you can run `storybook` ui development environment as follows:

```
$ cd <my-new-repo>
$ yarn install

## run storybook...
$ yarn run storybook
```
Go to the url in your browser as indicated on the command line.
