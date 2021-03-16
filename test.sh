# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd ./dist 

echo 700b.cn >./CNAME
cd -