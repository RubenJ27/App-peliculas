require('dotenv').config({
  path: '.env',
});
jest.mock('./src/core/helpers/getEnvironments.ts', () => ({
  getEnvironments: () => ({ ...process.env }),
}));
