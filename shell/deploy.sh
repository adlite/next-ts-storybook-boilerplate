#!/bin/sh

# Update project on server
git pull &&
npm ci &&
rm -rf .next &&
npm run build &&
npm run start
