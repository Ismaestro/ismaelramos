npm run build:prod &&
npm run build:server &&
rm -Rf public &&
mkdir public &&
cd functions/  &&
npm i --registry=https://registry.npmjs.org &&
cd .. &&
cp -a functions/dist/browser/. public/ &&
mv public/index.html public/index2.html &&
firebase deploy
