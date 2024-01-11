# Umbraco Package Templates

This repository contains some templates for starting new Umbraco package projects, and adding things to existing Umbraco projects. 

The templates can be used via the `dotnet new` command. 

## UI Examples

One of the templates being developed adds a 'UI Examples' section to your Umbraco website. UI Examples has also been released as a package on [Our](https://our.umbraco.com/packages/developer-tools/ui-examples/), so you can add this to your site by installing that package from there. The source code for UI Examples is [in the Item Template](./ItemTemplates/UIExamples), and has its own [contribution guidelines](./CONTRIBUTING-UIExamples.md).

## Pre-requisite
You must be using Visual Studio 2019 to work with these templates.


## Installation 
You can install all the templates from a NuGet package:

```
dotnet new -i Umbraco.Tools.Packages.Templates
```

### Updating
To check for any updates you can run the `dotnet new --update-check` command. 

The `dotnet new --update-apply` command will update any of the installed template packages you have installed.

## Usage
All Umbraco package templates are prefixed `umbraco-`. To see what Umbraco related templates you have installed: 

```
dotnet new list umbraco
```

You can get a list of [all available templates in the docs](./docs)

## Example: To start a new package project

Supply the name of the project on the command line, this will
setup the namespaces and folders within the project:

```
dotnet new umbraco-v8-package -n MySuperNewPackage
```
---
## Contributing

Contributions are welcome! Please read our [Contribution Guidelines](./CONTRIBUTING.md) for the steps to add new templates.

## Developing your own templates

If you want to develop/extend these templates for your own use you should install them individually from your source folder. 
For example: 
```
dotnet new -i c:\source\Package.Templates\ItemTemplates\Dashboard
```
