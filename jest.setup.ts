import "@testing-library/jest-dom";

global.structuredClone = (v) => (v ? JSON.parse(JSON.stringify(v)) : {});
