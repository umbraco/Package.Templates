# Umbraco Package Templates

This repository contains some templates for starting new Umbraco package projects. 

The templates can be used via the `dotnet new` command. 

## Installation 
You can install all the templates from a NuGet package

```
dotnet new -i [path-to-nuget]
```

## Usage
to see what packages you have installed run: 

```
dotnet new umbraco -l
```

All the umbraco packages are prefixed `umbraco-` 

You can get a list of [all available templates in the docs](./docs)

## Example: To start a new package project

Supply the name of the project on the command line, this will
setup the namespaces and folders within the project. 

```
dotnet new Umbraco.Package -n MySuperNewPackage
```
---
## Developing this Repository

### Working locally 
If you want to develop/extend these templates then you can install them individually, by pointing the install command at a folder.

For example: 
```
dotnet new -i c:\source\packageTemplate\ItemTemplates\UmbracoDashboard
```

to uninstall its `-u` with the same path 
```
dotnet new -u c:\source\packageTemplate\ItemTemplates\UmbracoDashboard
```



