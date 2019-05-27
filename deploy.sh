#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# # if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/antonellam/tadaima-coding-test-vue.git master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://antonellam.github.io/tadaima-coding-test-vue.git master:gh-pages

# git push -f git@github.com:<antonellam>/<tadaima-coding-test-vue>.git master:gh-pages

cd -