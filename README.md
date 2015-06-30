## About

bootplate-moonstone is a template for a minimal Enyo and Moonstone web application.
You would normally use this to setup your local environment then go and modify the
files to build your own application.  By itself, it does almost nothing.

## Downloading and Using

To download a version of bootplate-moonstone with all of the submodules populated
for quick use, visit http://enyojs.com/get-enyo/.  The download link in GitHub will
give you just the bootplate repo without any of the supporting libraries.

As an alternative, you can use a Git client to clone this repo and then initialize
submodules. This is good if you want to work with the latest version of the code from
GitHub that we may not have packaged into an official release. 

Initializing the submodules can be done by using the following command from the application's home directory:

egen init --save

You can then run 'epack' to build the application, and 'eserve' to run it on a server.

