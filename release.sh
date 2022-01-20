#!/bin/bash

git diff --cached --exit-code
if [[ $? -ne 0 ]] ;
 then echo "unclean repository - abort" && exit 1; 
fi;

git branch | grep -q "* main"
if [[ $? -ne 0 ]] ;
 then echo "not on main branch - abort" && exit 1; 
fi;

if [[ $1 != patch && $1 != minor && $1 != major ]] ;
then  echo "valid release type not provided" && exit 1;
fi;

npm run build;
npm run docs;
git add -A;
git commit -m "pre-release build";
npm version $1;