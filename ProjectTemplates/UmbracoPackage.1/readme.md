# Umbraco Package project template

Welcome....


## Copying output to another project

If you want to copy the output of your package to a test umbraco project then you can make use of the gulp scripts in this project to do that. 

### 1. Install the node_modules required for the gulp scripts 

Gulp is a javascript tool, that requires additional setup to run
you can install all the required code by performing an npm install:

```
> npm install 
```

### 2. Setup the paths.json to point to your umbraco site.

Most of this file should already point to your project,
but you should update the `'site'` entry to point to
your test umbraco project. 

```
{
  "library": "UmbracoPackage.1",
  "pluginFolder": "UmbracoPackage.1",
  "site": "mysandbox.site"
}
```

