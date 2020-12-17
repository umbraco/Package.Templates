# Contributing Guidelines

The UI examples package is both an item template within this repo and an Umbraco package. This document outlines some guidelines for contributing to the item template which can be built into an Umbraco package by a Github Action.

If you have an idea for a new section, please [raise an issue](./issues) so we can discuss it with you first.

## Project overview

For general knowledge on working with item and project templates see the [Contributing document](CONTRIBUTING.md).

The item template and source files for the package can be found as an [item template within this repo](https://github.com/umbraco/Package.Templates/tree/master/ItemTemplates/UIExamples/App_Plugins/uiexamples).

It contains a package manifest that registers a new section with a dashboard within that section, and folders for each content app tab in the dashboard.

### Adding a new content app tab

To add a new content app tab you need to first add a new folder in the [root folder](https://github.com/umbraco/Package.Templates/tree/master/ItemTemplates/UIExamples/App_Plugins/uiexamples) named after your section, then add a view that you can reference in the [uiexamples.section.controller.js file](https://github.com/umbraco/Package.Templates/blob/master/ItemTemplates/UIExamples/App_Plugins/uiexamples/uiexamples.section.controller.js)

If you need to write some text you should add a `lang` folder with a language file, you can see the other folder for examples. It contains key value pairs that can be referenced in the html.

All the current folders follow a similar structure, so if in doubt have a look in them.