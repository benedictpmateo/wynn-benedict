import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^.+\\.(svg)$": "<rootDir>/__mocks__/svg.js",
    "^@/(.*)$": ["<rootDir>/$1"],
  },
};

export default createJestConfig(config);
