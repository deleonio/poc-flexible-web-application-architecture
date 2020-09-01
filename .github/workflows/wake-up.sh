rm -rf $1 || true
mkdir $1
cd $1
npm install @leanup/cli@latest @leanup/cli-$1@latest --no-save
npx lean create -o -n template
# npx $1 create -o -n template
# npm install
# npm update
npx lean lint -f
npx lean lint || true
# npx $1 lint -f
npx lean format -f
npx lean format || true
# npx $1 format -f
npx lean test
# npx $1 test
npx lean coverage
# npx $1 coverage
npx lean build --gzip
# npx $1 build --gzip
cp dist/app.js ../../../dist/$1.js
cp dist/app.js.gz ../../../dist/$1.js.gz
# npx lean serve -o -m production
# npx $1 serve -o -m production
# npx lean e2e -e chrome
# npx $1 e2e -e chrome
npm outdated || true
npm list --depth=0 || true

