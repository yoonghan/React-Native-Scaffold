#Test code running

## Install
Checkout the code
```
cd to the directory
npm install
npm install -g react-native
```

## To run
Start iOS emulator
```
react-native run-ios
```

Start Android emulator
```
react-native run-android
```

## Storybook
Implemented component UI view directly from device, which is based on storybook. To configure it.
1. Change index.js and alter between Storybook or App.
2. Start the emulator with "react-native run-<platform>".
3. Start the storybook with "npm run storybook".
4. Open a browser to *http://localhost:7007*, and the components can be viewed. If there are no menu, check index.js again.

## Testing
Enabled testing for HOC and Redux. **Please note**, that all imports needs to be "import * as React from 'react'", this is a proper library import.
Test are based on both JEST and ENZYME. **Rule of Thumb**, Component testing are not useful, hence it is not created.

## 3rd Party API used.

| Api        | Usage           | Url  | License  |
| ------------- |:-------------:| -----:| -----:|
| Victory      | barcharts | https://formidable.com | MIT |
| Typescript      | typechecking      |   https://www.npmjs.com/package/typescript |   Apache |
| Immutability Helper | array updates      |    https://github.com/kolodny/immutability-helper |    MIT |
| Axios | API request      |    https://github.com/axios/axios |    Free |

| Api        | Usage           | Url  | Usage  |
| ------------- |:-------------:| -----:| -----:|
| CryptoCompare      | Request for CryptoCurrency trend | https://min-api.cryptocompare.com | Free for non-commercial usage only |

## Broken issues, to fix in future.
1. Running on React 54. For some reason ver 55/56 was broken for windows, sticking with version 54 now.
2. Skipped React PropType checking and relying on Typescript. However need to upgrade RN till 57 until typescript can work. :(

## Applied React Patterns into the design
1. *Higher Order Component* - A function within a function class (currying), visible in hoc/ folder where hasNetwork are just pluggable component into index.js.
2. *Composition* - Hitchike using Redux Compose, by applying multiple component.
3. *Redux* - Single storage, codes are in ducks/ component, with index.tsx to declare the reducer path and ducks/ for all actions and functions. Provider is declared in App.tsx.
4. *Redux-Thunk* - To modify but as of now redux thunk is used as there are async component from fetch. Replacable with custom middleware/react-saga/observable.
5. *Folder structure* - A react pattern with folder as the name and index.js/tsx as the linked components. It's also one of organism pattern creation.
6. *Functional Component* - All components created are React.SFC, except for PriceHistoryContainer(reason being it's storing a state for a switch).
7. *Immutability* - Array modification are not reflected due to the same hash codes saved, use immer which the usage can be viewed in BtcCurrentPrice.tsx.
8. *Custom Middleware* - Redux thunk was always an issue raised, hence the usage of redux middleware. Usage can be viewed in SampleFetch.tsx.
