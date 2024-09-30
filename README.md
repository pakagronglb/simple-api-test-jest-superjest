# Simplest way to test RESTful API with **Jest & Supertest**

To test an API with Jest, you'll need to follow these steps (once you've created your project directory):

## 1. Initiate ```npm```
```bash
npm init -y
```

## 2. Setup Your Project For Jest
Ensure you have the necessary dependencies installed, including ```jest```, ```ts-jest```, and ```supertest``` (for testing HTTP requests). Run the following:
```bash
npm install --save-dev jest ts-jest supertest @types/jest
```

## 3. Install ```jest.config.js``` file with ```yarn```
```bash
yarn ts-jest config:init
```

## 4. Set Up ```jest.config.js```
Ensure your jest.config.js file is set up correctly for TypeScript:
```bash
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

## 5. Set Up Your Project Structure and Project Directory Files
Here's what the folder tree structure should look like:
```lua
my-app/
├── src/
│   ├── app.ts
├── tests/
│   ├── app.test.ts
├── jest.config.js
├── package.json
```


## 6. Write Your API Endpoint in Express (Optional)
Inside of your ```src/app.ts``` file, you can test the endpoint using Express by doing this.
```bash
// src/app.ts
const express = require('express');

const app = express();
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = app; // Ensure you're using `module.exports`

```

## 7. Set Up Jest to Test Your API
Next, you can write tests for your APU using Jest and ```supertest```
```ts
// tests/app.test.ts
const request = require('supertest');
const appServer = require('../src/app'); 

describe('GET /api/hello', () => {
  it('should return a message', async () => {
    const res = await request(appServer).get('/api/hello'); // Use `appServer` here
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello, world!');
  });
});
```

## 8. Run the Tests
In your terminal, run the tests with:
```bash
npx jest
```

## 9. Expected Output
The tests should pass if your API is working as expected:
```vbnet
 PASS  tests/app.test.ts
  GET /api/hello
    ✓ should return a message (xx ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.234 s
```

Here's the preview
![Screenshot 2024-09-30 085242](https://github.com/user-attachments/assets/0d4dc430-adec-4486-ac40-ba93feef12a1)
