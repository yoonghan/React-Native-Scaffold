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

## Broken issues, not planning for fixes
1. Running on React 54. For some reason ver 55/56 was broken for windows, sticking with version 54 now.
2. Axios timeout is no longer working.
3. Skipped React PropType checking and relying on Typescript. However need to upgrade RN till 57 until typescript can work. :(
4. To remove redux-thunk and create custom middleware or react-saga or react-observables.
