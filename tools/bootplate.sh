#!/bin/bash

# the folder this script is in (*/bootplate/tools)
TOOLS=$(cd `dirname $0` && pwd)

# enyo location
BOOTPLATE_TOOLS="$TOOLS/../lib/enyo-webos/tools/bootplate-tools.js"

# check for node, but quietly
if command -v node >/dev/null 2>&1; then
	# use node to invoke deploy with imported parameters
	node "$BOOTPLATE_TOOLS" $@
else
	echo "No node found in path"
	exit 1
fi