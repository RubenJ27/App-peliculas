require('dotenv').config({
  path: '.env',
});
jest.mock('./src/helpers/getEnvironments', () => ({
  getEnvironments: () => ({ ...process.env }),
}));
