# Contributing Guidelines

If you have an idea for a new template or feature, please [raise an issue](./issues) so we can discuss it with you first.

## Working locally 
To develop these templates you should install them individually, by pointing the install command at a folder. For example: 
```
dotnet new -i c:\source\Package.Templates\ProjectTemplates\UmbracoPackage.1
```

Locally installed templates must be uninstalled using `-u` with the same path:
```
dotnet new -u c:\source\Package.Templates\ProjectTemplates\UmbracoPackage.1
```

To see the uninstall command for all dotnet templates on your computer:
```
dotnet new -u
```

## Add a feature to the New Package Template

To use the template, the user will use a command such as
```
dotnet new umbraco-v8-package -n MySuperNewPackage
```
There are various switches that can be added to the command to add features to the package, such as `-d` for a dashboard. 

Before you start you should have the feature working and tested on an Umbraco site outside of this project. Then you know what source files are needed.

### Add source files

The source files need to be added inside the package source folder, `ProjectTemplates\UmbracoPackage.1\src\UmbracoPackage.1`. 
Please use folder locations and file names that are consistent with the existing content.

When the template is used, the following content transforms will occur automatically:

| Placeholder  | Will Be Replaced With |
| ------------ | --------------------- |
| `UmbracoPackage.1`  | the name that was specified when using the `dotnet new` command |
| `UmbracoPackage._1` | the name as a valid namespace |
| `umbracopackage._1` | the name as a valid namespace (lower case) |
| `UmbracoPackage__1` | the name as a valid class name |
| `umbracopackage__1` | the name as a valid class name (lower case) |

Edit your source files so that the correct placeholders are used instead of the namespaces and classes you used. 
Look at the existing content to understand how this should be done.

Read about [template names and transforms](https://github.com/dotnet/templating/wiki/Naming-and-default-value-forms).

### Add a switch to template options

The switches for the template are configured in `ProjectTemplates\UmbracoPackage.1\.template.config\template.json`.

Update the file two places:

- `sources` > `modifiers`: add a new section for the feature: you are specifying what to exclude if the option is *not* requested
- `symbols`: add a section to define the switch name and parameters for the feature

### Test it works

If you have already installed the `umbraco-v8-package` via nuget you will need to uninstall it:

```
dotnet new -u umbraco-v8-package
```

Then install from your source folder, for example:

```
dotnet new -i c:\source\Package.Templates\ProjectTemplates\Umbraco.Package.1
```

You can now test that the feature you added works as expected. Replace `-?` with the first letter of the symbol you added in `.templates.config`:

``` 
dotnet new umbraco-v8-package -n MyTestPackage -?
```

## Add the feature as a new Item Template

The features in the package template should also be available as Item Templates. Item Templates are used to add features into an existing project.

### Add new item template folder

Add a new folder with the name of the feature in `Package.Templates\ItemTemplates\`. 
You need to copy in the source files that you added to the Project Template; there is a gulp task that will do this for you. 
Open a command prompt in the root of the Package.Templates repository:
```
npm install
npm install gulp -g
gulp
```

You should see the copy directives for the feature in output of the gulp command, and your source files should now be in the folder you just added. If you change the source files in the project template re-run the gulp task to keep the item template in sync.

### Add item template configuration

Copy the `.templates.config\` folder from an existing item template into your new folder and update `.template.config` as follows:

```
    "identity": "Umbraco.Templates.Items.{FeatureName}",
    "groupIdentity": "Umbraco.Templates.Items.{FeatureName}",

    "name": "Umbraco {Feature Name}",
    "shortName": "umbraco-v8-{featurename}",
    "description": "Files to add a {feature name} to an Umbraco v8 project"
```

### Test it works

Install the item template from your source folder, for example:

```
dotnet new -i c:\source\Package.Templates\ItemTemplates\{FeatureName}
```

You can now test that your item template works as expected. Open a command prompt in the root of an existing project and run:

``` 
dotnet new umbraco-v8-{featurename} -n MyNewFeature
```

## Update documentation

The documentation for the templates are in this repository in the [docs](./docs) folder. Add the details of the new feature to the package template and item templates list.
