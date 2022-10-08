rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:qilling/gugu-ui-website-1.git &&
git push -f -u origin master &&
cd -
echo https://qingyou2517.github.io/gugu-ui-website-1/#/