rm -rf dist
rollup --config rollup.config.js
SRC="$(dirname "$(node -p 'require.resolve("mobx/package.json")')")";
rsync -r --include="*.d.ts" --exclude="*.*" $SRC/lib/ dist/
