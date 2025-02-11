const config = {
  transform: {
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        babel: true,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true, // Habilita la recolección de cobertura
  coverageDirectory: 'coverage', // Directorio donde se guardará el informe de cobertura
  coverageReporters: ['json', 'lcov', 'text', 'clover'], // Tipos de informes de cobertura a generar
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
module.exports = config;
