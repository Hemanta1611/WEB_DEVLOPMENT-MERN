/*
Node.js: It is a JavaScript Runtime Environment
--> It is used for server side programming.
--> It is not a language, not a library , not a framework

In PowerShell-
To Create file:
New-Item -Path . -Name "script.js" -ItemType "File"


NPM (Installing Packages: ): Node Modules
--> node_modules : The node_modules folder contains every installed dependency for your project.

--> package-lock.json : It records the exact version of every installed dependency, including its
    sub-dependencies and their versions.

--> package.json : The package.json file contains descriptive and functional metadata about a project,
    such as a name, version, and dependencies.
    -> ******* majedar *******
    -> 1st thing we must never upload node_module to github
    -> let say by chance we delete node_module directory and we have package.json file,
       then we don't have problem coz we can reinstall node_module by simple command: npm install
       it will automatically re-install node_module with all packages present in package.json
    ->

    to create package.json by our own:
    -> npm init

    to install package globally:
    -> 1st step: npm install -g package_name
    -> 2nd step: npm link package_name

*/

/*
------- require vs import -------
--> We can't selectively load only the pieces we need with require but with import, we can selectively load only
    pieces we need, which can save memory.

    Loading is synchronous for 'require' but can be aysnchronous for 'import'
    
*/