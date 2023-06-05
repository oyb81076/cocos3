SRC="$(dirname "$(node -p 'require.resolve("mobx/package.json")')")";

rm -rf build
rollup --config rollup.config.js
sed -i '' 's/mobx/.\/mobx/g' build/index.d.ts

cp $SRC/lib/*.d.ts build/;
cp -r $SRC/lib/types build/;
cp -r $SRC/lib/api build/;
cp -r $SRC/lib/core build/;
cp -r $SRC/lib/utils build/;
cat > build/package.json <<!EOF
{
  "name": "@cocos3/mobx4",
  "version": "$(node -p 'require("./package.json").version')",
  "license": "MIT",
  "repository": { "type": "git", "url": "https://github.com/oyb81076/mobx-cocos.git" },
  "type": "module",
  "keywords": ["cocos creator 3", "mobx"],
  "exports": "./index.js",
  "main": "./index.js",
  "typings": "./index.d.ts"
}
!EOF
