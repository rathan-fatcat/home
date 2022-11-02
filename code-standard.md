# Frontend - Code Standards

### Formats

- Dates : DD/MM/YYYY - 04/10/2022 (For date must use moment)

- Time: HH:MM:SS - 23:13:32

- Currency : Two decimal Point (Dot/Point not comma) - R 1 000 000.00

- Phone Number: +## (###) ### ### - +91 (999) 999 9999

## General

- Code should be well documented
  The code should be properly commented for understanding easily. Comments regarding the statements increase the understandability of the code.

- No unused variables.


- Require or import statements at the beginning of each file, before and outside of any functions.

- There should types for every variable created.

  ```
  // bad
  let foo = 0;
  foo = "String" //will throw only on complie time

  // good
  let foo: number = 0;
  foo = "String" //will throw in editor
  ```

- Use array spreads ... to copy arrays.

  ```
  // bad
  const len = items.length;
  const itemsCopy = [];
  let i;

  for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
  }

  // good
  const itemsCopy = [...items];
  ```

- Do not include JavaScript filename extensions eslint: import/extensions

  ```
  // bad
  import foo from './foo.js';

  // good
  import foo from './foo';
  ```

- Use the === operator
  Prefer the strict equality operator === over the weaker abstract equality operator ==. == will compare two variables after converting them to a common type. There is no type conversion in ===, and both variables must be of the same type to be equal.

  ```
  4 == "4" // will return true // ✗ avoid

  4 === "4" // will return false // ✓ ok

  ```

- Use Async Await, avoid callbacks

  ```
  const someVariable = await someFunction1(2,3);

  async someFunction2(var1, var2){return (var1+var2);}

  ```

- Try to keep methods functions short, split into seperate methods.

- No console.logs on environments > UAT

- Guard rails

    ```
    if(!product) return new BadRequest('No product found')
    if(!product) return new InternalServerError('No product found')
    try {

    } catch(e) {

    }

    ```

- Prefixing your comments with FIXME or TODO helps other developers quickly understand if you’re pointing out a problem that needs to be revisited, or if you’re suggesting a solution to the problem that needs to be implemented.

  ```
    class Calculator extends Abacus {
      constructor() {
      super();
          // TODO: total should be configurable by an options param
          // FIXME: shouldn’t use a global here
          this.total = 0;
      }
    }

  ```


## Style Guide

- Start a Codeblock’s Curly Braces on the Same Line
  ```
  Code Example
  // Do
  function someFunction() {
  // code block
  }

  // Avoid
  function someFunction()
  {
  // code block
  }
  ```
- Commas must be placed at the end of the current line.

  ```
    const obj = {
      foo: 'foo'
      ,bar: 'bar'   // ✗ avoid
    }

    const obj = {
      foo: 'foo',
      bar: 'bar',   // ✓ ok
    }
  ```

- Trailing commas need to be at the end of a object/array

  ```
  //bad
  const testVariable = {
    testValue: 1,
    testLabel: 'Label' // <- no comma before the closing brace // ✗ avoid
  };

  //good
  const testVariable = {
    testValue: 1,
    testLabel: 'Label', // <- comma before the closing brace // ✓ ok
  };
  ```

- For if condition must use ternary operator

    ```
    // bad
    if(condition){
           //Yor code goes here.
    }  // <- no ternary operator used in condition // ✗ avoid


    //good
    (a>b)? console.log("a is bigger"):console.log("b is bigger")
           //Yor code goes here.
      // <- no ternary operator used in condition // ✓ ok


    //syntax
    condition ? exprIfTrue : exprIfFalse

    ```


- Dot should be on the same line as property.

  ```
  const product = await productDetails. // ✗ avoid
      createProduct('createProduct'). // ✗ avoid


  const product = await productDetails // ✓ ok
      .createProduct('createProduct') // ✓ ok

  ```



### Naming conventions

- Use descriptive names, but try to keep them short.
- Prefer const over let. no var

  - lowerCamelCase when naming variables
    ```
    let someVariableExample = 'value';
    function doSomething() {}
    ```
  - UpperCamelCase (capital first letter as well) when naming classes & functional component.
    ```
    class SomeClassExample {}
    ```

  - Enviroment Varibles, to be all catipal with underscores seperating words
    ```
    stage=dev // ✗ avoid
    nodeEnv=dev // ✗ avoid

    STAGE=dev // ✓ ok
    NODE_ENV=dev // ✓ ok
    ```

## Recommend VS Code Plugins

https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
