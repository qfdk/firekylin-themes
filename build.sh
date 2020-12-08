#!/bin/sh
# 删除临时文件 本地记得注释掉
rm -rf output;
rm -rf firekylin;
# 复制新主题
cp -r ../www/theme/firekylin .;
# 产生新主题
node stc.config.js;

sed -i 's/firekylin/firekylin.build/' output/firekylin/package.json;
rm -rf mkdir ../www/theme/firekylin.build;
mkdir ../www/theme/firekylin.build;
cp -r output/firekylin/* ../www/theme/firekylin.build;
