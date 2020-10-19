# Project Templates

## Pre-requisite
You must be using Visual Studio 2019 else you are likely to have Roslyn issues.

## 1. Create a new Umbraco Package

A new blank project for building an umbraco package

```
dotnet new umbraco-v8-package -n MySuperAwesomePackage
```

# Item Templates
Item templates let you add files to existing projects

## Add Dashboard Scripts to a current project
Adds the required javascript to a project to have a 
dashboard 

```
dotnet new umbraco-v8-dashboard 
```

## Add github actions to a current repository

Add the build.yml to your current project to build and package your project based on a `release\version` tag.

```
dotnet new umbraco-v8-github-build 
```
