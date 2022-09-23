# preact-reproduce

for github issue: https://github.com/preactjs/preact/issues/3745

## Steps

1. run `yarn install`
2. run `yarn run serve` and open the app, everything works perfectly
3. run `yarn add react@npm:@preact/compat react-dom@npm:@preact/compat` to alias preact according to the docs
4. run `yarn run serve` again but this time error thrown
