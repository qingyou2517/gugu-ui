# gugu-ui-byx for Vue3

## 运行步骤
1. 运行 yarn
2. 运行 yarn dev
3. 打开 http://127.0.0.1:3000

## 官网打包步骤
1. 运行 rm -rf dist 删去之前的 dist 目录
2. 运行 yarn build
3. 得到的 dist 目录就是官网源代码

## yarn build 之后查看官网
1. 运行 cd dist
2. 运行 http-server -c-1
3. 打开 http://127.0.0.1:8080

## 库文件打包步骤
1. 运行 rollup -c
2. 得到的 dist/lib 目录就是编译后的库文件所在目录

## 库文件发布到 npm
1. 运行 nrm use npm，切换到 npm 源
2. 运行 npm login
3. 运行 npm publish
