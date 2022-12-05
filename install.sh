#!/bin/bash

npm install
npm install -g @nestjs/cli

date=$(date)
echo "*** npm version: $npmV ***" 
npm --version
echo "*** node version: $nodeV ***" 
node --version
echo  "Installation Nest.js 14 done at $date !" >> install.log

npm run start:debug



