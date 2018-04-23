# Test Driven Development using Karma and Typescript

The idea here is to set up a TDD environment for typescript.
This environment is created with developing web-components in mind but it can be used for other development as well.

## Technologies Used
- Karma: run tests on browser.
- Typescript: write strongly typed codes.
- Webpack: compile tests written in typescript

### To start TDD with karma and typescript:

Clone repo
```
git clone https://github.com/dakotaJang/tdd-with-karma-typescript
```
Change directory
```
cd tdd-with-karma-typescript
```
Install dependencies
```
npm install
```
Start TDD
```
npm test
```

# Why TDD?
The idea of the TDD is to make the tests/specs first and then you write the code. Many developers often start writing codes without writing tests for couple of reasons. It takes time, it is hard, it is tedious, and often developers just want to write code, not tests. This environment will help developers to do this in a fast and easy way.

Before starting development, the user will have to create a `*.spec.ts` file for the tests. When the user run `npm test`, `./dev` directory will be created where all the typescripts will be compiled. `npm test` runs 3 commands: `tsc`, `webpack` and `karma`.

`tsc` will be watching all of the `*.ts` files to compile any changes.

`webpack` will be watching all of the tests files (`*.spec.ts`) to avoid a problem with importing es6-modules

`karma` will be watching all of the compiled `*.js` files to check all the tests.


From here on we follow this development cycle
1. Write a test
2. Write the code to make the test pass
3. Refactor your code

We will start by writing the test:
```ts
describe("Some Test", (): void => {
  it("should do something", (): void => {
    expect.toBe(something);
  });
});
```
Save the changes. And you will notice a error. Examine the error to see what the problem is, like node is complaining that it cannot find the module or the test is failing.

The next step would be to do a minimal amount of work to make that test pass. This can range from just making a new module/function to making changes to logic of the code. When you see that all of tests pass, you can start to add more tests and write more code.

When you have enough code, may want to consider refactoring the code. This could range from extracting repeated codes and making it as a separate function to make it more reusable for future development or changing function/variable names to make it more sensible. It is a good practice to keep your code clean and readable.

Note that you write the `test` first. Because if you write a test after you write the code, then there is a possible problem of making a test based what the code "would" do instead of what the code "should" do.

# Benefits of TDD
## Know immediately when the code fails
When you are given a new spec you may start making changes to your code that meets the requirement of the new spec. And then few days later your clients are complaining that application is not working properly. Everyone make mistakes like a simple spelling mistake or using a hard-coded value. But with sub-millisecond tests, you will know that your tests are passing or not almost immediately.

## Makes refactoring easier
It is easy write messy code, especially with javascript. To avoid writing messy and hard to read codes, it is a good habit to refactor your codes. But some developers are terrified to make changes to the code because `if it works, you leave it alone`. This is because when you don't have tests, it is hard to know how the code will execute after making changes. If there are tests, then we can know the code is working fine because all the test will be passing after changes have been made.

### Quirks
- If you rename a directory while running `npm test` it appears that there might be some error of a script being packed twice.
  ```
  Error during loading: Uncaught SyntaxError: Identifier '***' has already been declared in ...
  ```
  To fix just exit batch by `ctrl+c` and restart `npm test`

### Notes
- tests done using nvm use 8.9.4
