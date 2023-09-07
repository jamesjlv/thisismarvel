module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./jestSetup.js",
    "jest-styled-components",
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest", // 👈 note this transform key
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)(\\?inline)?$":
      "jest-transform-stub",
    "^.+\\.[t|j]sx?$": "babel-jest",
    "\\.svg": "./__mocks__/svgMock.js",
  },
};
