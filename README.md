# Astra AI Offline Survival Assistant

This is a React Native project that serves as an offline survival assistant using Astra AI capabilities.

## Project Structure

```
Astra-AI/
├── .github/
│   └── workflows/
│       └── ci.yml
├── android/
├── ios/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   └── CommonButton.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── SurvivalTipsScreen.js
│   │   └── SettingsScreen.js
│   ├── services/
│   │   └── apiService.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── colors.js
├── .babelrc
├── .eslintignore
├── .eslintrc.js
├── app.json
├── package.json
├── README.md
└── metro.config.js
```  

## Configuration Files

### .babelrc

```json
{
  "presets": ["module:metro-react-native-babel-preset"]
}
```

### .eslintrc.js

```javascript
module.exports = {
  root: true,
  extends: ['@react-native-community'],
  rules: {
    'react-native/no-inline-styles': 'off',
  },
};
```

### app.json

```json
{
  "name": "AstraAI",
  "displayName": "Astra AI"
}
```

### README.md

This file contains information about the project, how to set it up, and how to contribute to it.