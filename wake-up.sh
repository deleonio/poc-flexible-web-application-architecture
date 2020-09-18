mkdir workspace
cd workspace
npm install @leanup/cli@$2 @leanup/cli-$1@$2 --no-save
npx lean create -o -n template
npx $1 create -o -n template
npm update
npx lean lint
npx $1 lint
npx lean format
npx $1 format
npx lean test
npx $1 test
npx lean coverage
npx $1 coverage
npx lean build --gzip
npx $1 build --gzip
cp dist/app.css ../dist/app.css
cp dist/app.js ../dist/$1.js
cp dist/app.js.gz ../dist/$1.js.gz
# npx lean serve -o -m production
# npx $1 serve -o -m production
# npx lean e2e -e chrome
# npx $1 e2e -e chrome
npm outdated || true
npm list --depth=0 || true
cd ..
rm -rf workspace
