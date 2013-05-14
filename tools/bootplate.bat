@REM don't watch the sausage being made
@ECHO OFF

REM the folder this script is in (*/bootplate/tools)
SET TOOLS=%~DP0

REM enyo location
SET BOOTPLATE_TOOLS=%TOOLS%\..\lib\enyo-webos\tools\bootplate-tools.js

REM node location
SET NODE=node.exe

REM use node to invoke deploy.js with imported parameters
%NODE% "%BOOTPLATE_TOOLS%" %*
