# Learning TypeScript

> TypeScript lets you write JavaScript the way you really want to. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

JavaScript is a powerful programming language. But as it continues to evolve, outdated code gets messy and difficult to maintain. That's where TypeScript comes in. It builds on your JavaScript foundation so you can develop higher-quality, less error-prone code faster. As a TypeScript developer, you'll be in higher demand and gain a competitive edge in the work world.

## TypeScript with React

```bash
$ npx create-react-app my-app --template typescript
```

## TypeScript with React Native

```bash
$ expo init -t expo-template-blank-typescript
```

## Types

- `number`: Double precision 64-bit floating point values. It can be used to represent both, integers and fractions
- `string`: Represents a sequence of Unicode characters
- `boolean`: Represents logical values, true and false
- `void`: Used on function return types to represent non-returning functions
- `null`: Represents an intentional absence of an object value
- `undefined`: Denotes value given to all uninitialized variables

## Variables

```tsx
var name: string = "mary"; // The variable stores a value of type string
var name: string; // The variable is a string variable. The variable's value is set to undefined by default
var name = "mary"; // The variable's type is inferred from the data type of the value. Here, the variable is of the type string
var name; // The variable's data type is any. Its value is set to undefined by default.
```

```tsx
var name: string = "John";
var score1: number = 50;
var score2: number = 42.5;
var sum = score1 + score2;
console.log("Name" + name);
console.log("First score: " + score1);
console.log("Second score: " + score2);
console.log("Sum of the scores: " + sum);
```

**TypeScript Variable Scope**

- `Global Scope` − Global variables are declared outside the programming constructs. These variables can be accessed from anywhere within your code.

- `Class Scope` − These variables are also called fields. Fields or class variables are declared within the class but outside the methods. These variables can be accessed using the object of the class. Fields can also be static. Static fields can be accessed using the class name.

- `Local Scope` − Local variables, as the name suggests, are declared within the constructs like methods, loops etc. Local variables are accessible only within the construct where they are declared.

```tsx
var global_num = 12; // Global variable

class Numbers {
  num_val = 13; // Class variable
  static sval = 10; // Static field

  storeNum(): void {
    var local_num = 14; // Local variable
  }
}

console.log("Global num: " + global_num);
console.log(Numbers.sval); // Static variable
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
```

```tsx
var global_num = 12; // Global variable

var Numbers = (function () {
  function Numbers() {
    this.num_val = 13; // Class variable
  }
  Numbers.prototype.storeNum = function () {
    var local_num = 14; // Local variable
  };
  Numbers.sval = 10; // Static field
  return Numbers;
})();

console.log("Global num: " + global_num);
console.log(Numbers.sval); // Static variable

var obj = new Numbers();
console.log("Global num: " + obj.num_val);
```

## Operator

**Arithmetic Operators**

- `+ (Addition)`: returns the sum of the operands `a + b is 15`
- `- (Subtraction)`: returns the difference of the values `a - b is 5`
- `* (Multiplication)`: returns the product of the values `a * b is 50`
- `/ (Division)`: performs division operation and returns the quotient `a / b is 2`
- `% (Modulus)`: performs division operation and returns the remainder `a % b is 0`
- `++ (Increment)`: increments the value of the variable by one `a++ is 11`
- `-- (Decrement)`: decrements the value of the variable by one `a-- is 9`

**Relational Operators**

- `>`: Greater than `(A > B) is False`
- `<`: Lesser than `(A < B) is True`
- `>=`: Greater than or equal to `(A >= B) is False`
- `<=`: Lesser than or equal to `(A <= B) is True`
- `==`: Equality `(A == B) is false`
- `!=`: Not equal `(A != B) is True`

**Logical Operators**

- `&& (And)`: The operator returns true only if all the expressions specified return true `(A > 10 && B > 10) is False`
- `|| (OR)`: The operator returns true if at least one of the expressions specified return true `(A > 10 || B >10) is True`
- `! (NOT)`: The operator returns the inverse of the expression's result. For E.g.: !(>5) returns false `!(A >10 ) is True`

**Bitwise Operators**

- `& (Bitwise AND)`: It performs a Boolean AND operation on each bit of its integer arguments. `(A & B) is 2`
- `| (BitWise OR)`: It performs a Boolean OR operation on each bit of its integer arguments. `(A | B) is 3`
- `^ (Bitwise XOR)`: It performs a Boolean exclusive OR operation on each bit of its integer arguments. Exclusive OR means that either operand one is true or operand two is true, but not both. `(A ^ B) is 1`
- `~ (Bitwise Not)`: It is a unary operator and operates by reversing all the bits in the operand. `(~B) is -4`
- `<< (Left Shift)`: It moves all the bits in its first operand to the left by the number of places specified in the second operand. New bits are filled with zeros. Shifting a value left by one position is equivalent to multiplying it by 2, shifting two positions is equivalent to multiplying by 4, and so on. `(A << 1) is 4`
- `>> (Right Shift)`: Binary Right Shift Operator. The left operand's value is moved right by the number of bits specified by the right operand. `(A >> 1) is 1`
- `>>> (Right shift with Zero)`: This operator is just like the >> operator, except that the bits shifted in on the left are always zero. `(A >>> 1) is 1`

**Assignment Operators**

- `= (Simple Assignment)`: Assigns values from the right side operand to the left side operand `C = A + B will assign the value of A + B into C`
- `+= (Add and Assignment)`: It adds the right operand to the left operand and assigns the result to the left operand. `C += A is equivalent to C = C + A`
- `-= (Subtract and Assignment)`: It subtracts the right operand from the left operand and assigns the result to the left operand. `C -= A is equivalent to C = C - A`
- `*= (Multiply and Assignment)`: It multiplies the right operand with the left operand and assigns the result to the left operand. `C *= A is equivalent to C = C * A`
- `/= (Divide and Assignment)`: It divides the left operand with the right operand and assigns the result to the left operand.

**Miscellaneous Operators**

1. The negation operator (-)

```tsx
var x: number = 4;
var y = -x;
console.log("value of x: ", x); // Outputs 4
console.log("value of y: ", y); // Outputs -4
```

2. String Operators: Concatenation operator (+)

```tsx
var msg: string = "hello" + "world";
console.log(msg);
```

3. Conditional Operator (?)

`Test ? expr1 : expr2`

- Test − refers to the conditional expression
- expr1 − value returned if the condition is true
- expr2 − value returned if the condition is false

```tsx
var num: number = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
```

**Type Operators**

1. typeof operator

```tsx
var num = 12;
console.log(typeof num); // Output: number
```

2. instanceof

This operator can be used to test if an object is of a specified type or not. The use of **instanceof** operator is discussed in the chapter **classes**.

## Decision Making

1. `if` statement

An `if` statement consists of a Boolean expression followed by one or more statements.

2. `if...else...` statement

An `if` statement can be followed by an optional `else` statement, which executes when the Boolean expression is false.

3. `else...if` and nested if statements

You can use one `if` or `else if` statement inside another `if` or `else if` statement(s).

4. `switch` statement

A `switch` statement allows a variable to be tested against a list of values.

## Loops

1. Definite Loop

`for` loop: The for loop is an implementation of a definite loop.

2. Indefinite Loop

- `while` loop: The while loop executes the instructions each time the condition specified evaluates to true.
- `do...while`: The `do...while` loop is similar to the while loop except that the `do...while` loop doesn't evaluate the condition for the first time the loop executes.

```tsx
var n: number = 5;
while (n > 5) {
  console.log("Entered while");
}
do {
  console.log("Entered do...while");
} while (n > 5);
```

3. The break Statement

```tsx
var i: number = 1;
while (i <= 10) {
  if (i % 5 == 0) {
    console.log("The first multiple of 5  between 1 and 10 is : " + i);
    break; // Exit the loop if the first multiple is found
  }
  i++;
} // Outputs 5 and exits the loop
```

4. The continue Statement

```tsx
var num: number = 0;
var count: number = 0;

for (num = 0; num <= 20; num++) {
  if (num % 2 == 0) {
    continue;
  }
  count++;
}

console.log("The count of odd values between 0 and 20 is: " + count); // Outputs 10
```

5. The Infinite Loop

```tsx
// for loop
for (;;) {
  console.log("This is an endless loop");
}

// while loop
while (true) {
  console.log("This is an endless loop");
}
```

## Functions

- Functions are the building blocks of readable, maintainable, and reusable code.
- A function is a set of statements to perform a specific task.
- Functions organize the program into logical blocks of code.

1. Defining a Function

A function definition specifies what and how a specific task would be done.

2. Calling a Function

A function must be called so as to execute it.

3. Returning Functions

Functions may also return value along with control, back to the caller.

4. Parameterized Function

Parameters are a mechanism to pass values to functions.

**Optional Parameters**

Optional parameters can be used when arguments need not be compulsorily passed for a function's execution.

```tsx
function disp_details(id: number, name: string, mail_id?: string) {
  console.log("ID:", id);
  console.log("Name", name);

  if (mail_id != undefined) console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
```

**Rest Parameters**

Rest parameters are similar to variable arguments in Java. Rest parameters don't restrict the number of values that you can pass to a function. However, the values passed must all be of the same type. In other words, rest parameters act as placeholders for multiple arguments of the same type.

```tsx
function addNumbers(...nums: number[]) {
  var i;
  var sum: number = 0;

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("sum of the numbers", sum);
}

addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
```

- The function `addNumbers()` declaration, accepts a rest parameter nums. The rest parameter's data type must be set to an array. Moreover, a function can have at the most one rest parameter.
- The function is invoked twice, by passing three and six values, respectively.
- The for loop iterates through the argument list, passed to the function and calculates their sum.

```tsx
function addNumbers() {
  var nums = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    nums[_i - 0] = arguments[_i];
  }
  var i;
  var sum = 0;

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
```

**Default Parameters**

Function parameters can also be assigned values by default.

```tsx
function calculate_discount(price: number, rate: number = 0.5) {
  var discount = price * rate;
  console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.3);
```

The value of the parameter `rate` is set to `0.50` by default

**Anonymous Function**

Functions that are not bound to an identifier (function name) are called as `anonymous functions`.

```tsx
// A Simple Anonymous function
var msg = function () {
  return "hello world";
};
console.log(msg());

// Anonymous function with parameters
var res = function (a: number, b: number) {
  return a * b;
};
console.log(res(12, 2));
```

**Function Expression and Function Declaration**

- Function expression and function declaration are not synonymous. Unlike a function expression, a function declaration is bound by the function name.

- The fundamental difference between the two is that, function declarations are parsed before their execution. On the other hand, function expressions are parsed only when the script engine encounters it during execution.

1. The Function Constructor

```tsx
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
```

2. Recursion and TypeScript Functions

```tsx
function factorial(number) {
  if (number <= 0) {
    // termination case
    return 1;
  } else {
    return number * factorial(number - 1); // function invokes itself
  }
}
console.log(factorial(6)); // outputs 720
```

3. Anonymous Recursive Function

```tsx
(function () {
  var x = "Hello!!";
  console.log(x);
})(); // the function invokes itself using a pair of parentheses ()
```

**Lambda Functions**

- Lambda refers to anonymous functions in programming.
- Lambda functions are a concise mechanism to represent anonymous functions.
- These functions are also called as Arrow functions.

1. Lambda Function - Anatomy

- **Parameters** − A function may optionally have parameters
- **The fat arrow notation/lambda notation (=>)** − It is also called as the goes to operator
- **Statements** − represent the function's instruction set

2. Lambda Expression

```tsx
var foo = (x: number) => 10 + x;
console.log(foo(100)); // Outputs 110
```

3. Lambda Statement

```tsx
var foo = (x: number) => {
  x = 10 + x;
  console.log(x);
};
foo(100);
```

4. Syntactic Variations

```tsx
var func = (x) => {
  if (typeof x == "number") {
    console.log(x + " is numeric");
  } else if (typeof x == "string") {
    console.log(x + " is a string");
  }
};
func(12);
func("Tom");
```

Optional parentheses for a single parameter

```tsx
var display = (x) => {
  console.log("The function got " + x);
};
display(12);
```

Optional braces for a single statement, Empty parentheses for no parameter

```tsx
var disp = () => {
  console.log("Function invoked");
};
disp();
```

**Function Overloads**

Functions have the capability to operate differently on the basis of the input provided to them.

- Step 1: Declare multiple functions with the same name but different function signature. Function signature includes the following.

```tsx
// The data type of the parameter
function disp(string): void;
function disp(number): void;

// The number of parameters
function disp(n1: number): void;
function disp(x: number, y: number): void;

// The sequence of parameters
function disp(n1: number, s1: string): void;
function disp(s: string, n: number): void;
```

- Step 2: The declaration must be followed by the function definition. The parameter types should be set to `any` if the parameter types differ during overload. Additionally, for `case b` explained above, you may consider marking one or more parameters as optional during the function definition.

- Step 3: Finally, you must invoke the function to make it functional.

```tsx
function disp(s1: string): void;
function disp(n1: number, s1: string): void;

function disp(x: any, y?: any): void {
  console.log(x);
  console.log(y);
}
disp("abc");
disp(1, "xyz");
```

## Numbers

- `MAX_VALUE`: The largest possible value a number in JavaScript can have 1.7976931348623157E+308.
- `MIN_VALUE`: The smallest possible value a number in JavaScript can have 5E-324.
- `NaN`: Equal to a value that is not a number.
- `NEGATIVE_INFINITY`: A value that is less than MIN_VALUE.
- `POSITIVE_INFINITY`: A value that is greater than MAX_VALUE.
- `prototype`: A static property of the Number object. Use the prototype property to assign new properties and methods to the Number object in the current document.
- `constructor`: Returns the function that created this object's instance. By default, this is the Number object.

```tsx
console.log("TypeScript Number Properties: ");
console.log(
  "Maximum value that a number variable can hold: " + Number.MAX_VALUE
);
console.log(
  "The least value that a number variable can hold: " + Number.MIN_VALUE
);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
```

```tsx
// NaN
var month = 0;
if (month <= 0 || month > 12) {
  month = Number.NaN;
  console.log("Month is " + month);
} else {
  console.log("Value Accepted..");
}
```

```tsx
// prototype
function employee(id: number, name: string) {
  this.id = id;
  this.name = name;
}

var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";

console.log("Employee's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);
```

**Number Methods**

- `toExponential()`: Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation.
- `toFixed()`: Formats a number with a specific number of digits to the right of the decimal.
- `toLocaleString()`: Returns a string value version of the current number in a format that may vary according to a browser's local settings.
- `toPrecision()`: Defines how many total digits (including digits to the left and right of the decimal) to display of a number. A negative precision will throw an error.
- `toString()`: Returns the string representation of the number's value. The function is passed the radix, an integer between 2 and 36 specifying the base to use for representing numeric values.
- `valueOf()`: Returns the number's primitive value.

## Strings

The String object lets you work with a series of characters.

- `Constructor`: Returns a reference to the String function that created the object.
- `Length`: Returns the length of the string.
- `Prototype`: The prototype property allows you to add properties and methods to an object.

**String Methods**

- `charAt()`: Returns the character at the specified index.
- `charCodeAt()`: Returns a number indicating the Unicode value of the character at the given index.
- `concat()`: Combines the text of two strings and returns a new string.
- `indexOf()`: Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
- `lastIndexOf()`: Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
- `localeCompare()`: Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
- `match()`: Used to match a regular expression against a string.
- `replace()`: Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
- `search()`: Executes the search for a match between a regular expression and a specified string.
- `slice()`: Extracts a section of a string and returns a new string.
- `split()`: Splits a String object into an array of strings by separating the string into substrings.
- `substr()`: Returns the characters in a string beginning at the specified location through the specified number of characters.
- `substring()`: Returns the characters in a string between two indexes into the string.
- `toLocaleLowerCase()`: The characters within a string are converted to lower case while respecting the current locale.
- `toLocaleUpperCase()`: The characters within a string are converted to upper case while respecting the current locale.
- `toLowerCase()`: Returns the calling string value converted to lower case.
- `toString()`: Returns a string representing the specified object.
- `toUpperCase()`: Returns the calling string value converted to uppercase.
- `valueOf()`: Returns the primitive value of the specified object.

## Arrays

**Features of an Array**

- An array declaration allocates sequential memory blocks.
- Arrays are static. This means that an array once initialized cannot be resized.
- Each memory block represents an array element.
- Array elements are identified by a unique integer called as the subscript / index of the element.
- Like variables, arrays too, should be declared before they are used. Use the var keyword to declare an array.
- Array initialization refers to populating the array elements.
- Array element values can be updated or modified but cannot be deleted.

**Declaring and Initializing Arrays**

```
var array_name[:datatype];        // declaration
array_name = [val1,val2,valn..]   // initialization
```

Arrays may be declared and initialized in a single statement `var array_name[:data type] = [val1,val2…valn]`

**Accessing Array Elements**

```tsx
// Simple Array
var alphas: string[];
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);

// Single statement declaration and initialization
var nums: number[] = [1, 2, 3, 3];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
```

**Array Object**

```tsx
var arr_names: number[] = new Array(4);

for (var i = 0; i < arr_names.length; i++) {
  arr_names[i] = i * 2;
  console.log(arr_names[i]);
}
```

```tsx
// Array Constructor accepts comma separated values
var names: string[] = new Array("Mary", "Tom", "Jack", "Jill");

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

**Array Methods**

- `concat()`: Returns a new array comprised of this array joined with other array(s) and/or value(s).
- `every()`: Returns true if every element in this array satisfies the provided testing function.
- `filter()`: Creates a new array with all of the elements of this array for which the provided filtering function returns true.
- `forEach()`: Calls a function for each element in the array.
- `indexOf()`: Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
- `join()`: Joins all elements of an array into a string.
- `lastIndexOf()`: Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
- `map()`: Creates a new array with the results of calling a provided function on every element in this array.
- `pop()`: Removes the last element from an array and returns that element.
- `push()`: Adds one or more elements to the end of an array and returns the new length of the array.
- `reduce()`: Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
- `reduceRight()`: Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
- `reverse()`: Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
- `shift()`: Removes the first element from an array and returns that element.
- `slice()`: Extracts a section of an array and returns a new array.
- `some()`: Returns true if at least one element in this array satisfies the provided testing function.
- `sort()`: Sorts the elements of an array.
- `splice()`: Adds and/or removes elements from an array.
- `toString()`: Returns a string representing the array and its elements.
- `unshift()`: Adds one or more elements to the front of an array and returns the new length of the array.

**Array Destructuring**

Refers to breaking up the structure of an entity.

```tsx
var arr: number[] = [12, 13];
var [x, y] = arr;
console.log(x);
console.log(y);
```

**Array Traversal using for...in loop**

```tsx
var j: any;
var nums: number[] = [1001, 1002, 1003, 1004];

for (j in nums) {
  console.log(nums[j]);
}
```

**Arrays in TypeScript**

- `Multi-dimensional arrays`: TypeScript supports multidimensional arrays. The simplest form of the multidimensional array is the twodimensional array.
- `Passing arrays to functions`: You can pass to the function a pointer to an array by specifying the array's name without an index.
- `Return array from functions`: Allows a function to return an array

**Tuples**

At times, there might be a need to store a collection of values of varied types. Arrays will not serve this purpose. TypeScript gives us a data type called tuple that helps to achieve such a purpose.

It represents a heterogeneous collection of values. In other words, tuples enable storing multiple fields of different types. Tuples can also be passed as parameters to functions.

`var tuple_name = [value1,value2,value3,…value n]`

```tsx
var myTuple = [10, "Hello"];
```

You can also declare an empty tuple in Typescript and choose to initialize it later.

```tsx
var mytuple = [];
mytuple[0] = 120;
mytuple[1] = 234;
```

**Accessing values in Tuples**

Tuple values are individually called items. Tuples are index based.

```tsx
// Simple Tuple
var mytuple = [10, "Hello"]; // Create a  tuple
console.log(mytuple[0]);
console.log(mytuple[1]);
```

```tsx
// Empty Tuple
var tup = [];
tup[0] = 12;
tup[1] = 23;

console.log(tup[0]);
console.log(tup[1]);
```

**Tuple Operations**

Tuples in TypeScript supports various operations like pushing a new item, removing an item from the tuple, etc.

```tsx
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length); // returns the tuple size

mytuple.push(12); // append value to the tuple
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item

console.log("Items after pop " + mytuple.length);
```

- The `push()` appends an item to the tuple
- The `pop()` removes and returns the last value in the tuple

**Updating Tuples**

Tuples are mutable which means you can update or change the values of tuple elements.

```tsx
var mytuple = [10, "Hello", "World", "typeScript"]; // Create a  tuple
console.log("Tuple value at index 0 " + mytuple[0]);

// Update a tuple element
mytuple[0] = 121;
console.log("Tuple value at index 0 changed to   " + mytuple[0]);
```

**Destructuring a Tuple**

Destructuring refers to breaking up the structure of an entity. TypeScript supports destructuring when used in the context of a tuple.

```tsx
var a = [10, "hello"];
var [b, c] = a;
console.log(b);
console.log(c);
```

## Union

- TypeScript 1.4 gives programs the ability to combine one or two types.
- Union types are a powerful way to express a value that can be one of the several types.
- Two or more data types are combined using the pipe symbol (`|`) to denote a Union Type.
- In other words, a union type is written as a sequence of types separated by vertical bars.

**Union Type Variable**

```tsx
var val: string | number;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);
```

**Union Type and function parameter**

```tsx
function disp(name: string | string[]) {
  if (typeof name == "string") {
    console.log(name);
  } else {
    var i;

    for (i = 0; i < name.length; i++) {
      console.log(name[i]);
    }
  }
}
disp("mark");
console.log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);
```

**Union Type and Arrays**

Union types can also be applied to arrays, properties and interfaces.

```tsx
var arr: number[] | string[];
var i: number;
arr = [1, 2, 4];
console.log("**numeric array**");

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## Interfaces

- An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.
- Interfaces define properties, methods, and events, which are the members of the interface.
- Interfaces contain only the declaration of the members.

```tsx
{
   FirstName:string,
   LastName:string,
   sayHi()=>string
}
```

```tsx
var person = {
  FirstName: "Tom",
  LastName: "Hanks",

  sayHi: () => {
    return "Hi";
  },
};
```

**Declaring Interfaces**

```tsx
// Interface and Objects
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {
    return "Hi there";
  },
};

console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => {
    return "Hello!!!";
  },
};

console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
```

**Union Type and Interface**

```tsx
interface RunOptions {
  program: string;
  commandline: string[] | string | (() => string);
}

// Commandline as string
var options: RunOptions = { program: "test1", commandline: "Hello" };
console.log(options.commandline);

// Commandline as a string array
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);

// Commandline as a function expression
options = {
  program: "test1",
  commandline: () => {
    return "**Hello World**";
  },
};

var fn: any = options.commandline;
console.log(fn());
```

**Interfaces and Arrays**

```tsx
interface namelist {
  [index: number]: string;
}

var list2: namelist = ["John", 1, "Bran"]; // Error. 1 is not type string
interface ages {
  [index: string]: number;
}

var agelist: ages;
agelist["John"] = 15; // Ok
agelist[2] = "nine"; // Error
```

**Interfaces and Inheritance**

```tsx
interface Person {
  age: number;
}

interface Musician extends Person {
  instrument: string;
}

var drummer = <Musician>{};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age: " + drummer.age); // Age: 27
console.log("Instrument: " + drummer.instrument); // Instrument: Drums
```

**Multiple Interface Inheritance**

```tsx
interface IParent1 {
  v1: number;
}

interface IParent2 {
  v2: number;
}

interface Child extends IParent1, IParent2 {}
var Iobj: Child = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
```

## Classes

**Syntax**

```tsx
class class_name {
  // class scope
}
```

- `Fields`: A field is any variable declared in a class. Fields represent data pertaining to objects
- `Constructors`: Responsible for allocating memory for the objects of the class
- `Functions`: Functions represent actions an object can take. They are also at times referred to as methods

**Declaring a class**

```tsx
class Car {
  //field
  engine: string;

  //constructor
  constructor(engine: string) {
    this.engine = engine;
  }

  //function
  disp(): void {
    console.log("Engine is: " + this.engine);
  }
}
```

**Creating Instance objects**

`var object_name = new class_name([arguments]);`

```tsx
// Instantiating a class
var obj = new Car("Engine 1");
```

**Accessing Attributes and Functions**

```
//accessing an attribute
obj.field_name

//accessing a function
obj.function_name()
```

**Putting them together**

```tsx
class Car {
  //field
  engine: string;

  //constructor
  constructor(engine: string) {
    this.engine = engine;
  }

  //function
  disp(): void {
    console.log("Function displays Engine is  :   " + this.engine);
  }
}

//create an object
var obj = new Car("XXSY1");

//access the field
console.log("Reading attribute value Engine as :  " + obj.engine);

//access the function
obj.disp();
```

**Class Inheritance**

- TypeScript supports the concept of Inheritance.
- Inheritance is the ability of a program to create new classes from an existing class.
- The class that is extended to create newer classes is called the parent class/super class. - The newly created classes are called the child/sub classes.
- A class inherits from another class using the `extends` keyword. Child classes inherit all properties and methods except private members and constructors from the parent class.

`class child_class_name extends parent_class_name`

TypeScript doesn't support multiple inheritance

```tsx
// Class Inheritance
class Shape {
  Area: number;

  constructor(a: number) {
    this.Area = a;
  }
}

class Circle extends Shape {
  disp(): void {
    console.log("Area of the circle:  " + this.Area);
  }
}

var obj = new Circle(223);
obj.disp();
```

Inheritance can be classified as:

- `Single`: Every class can at the most extend from one parent class
- `Multiple`: A class can inherit from multiple classes. TypeScript doesn't support multiple inheritance
- `Multi-level`: The following example shows how multi-level inheritance works

```tsx
class Root {
  str: string;
}

class Child extends Root {}
class Leaf extends Child {} // indirectly inherits from Root by virtue of inheritance

var obj = new Leaf();
obj.str = "hello";
console.log(obj.str); // hello
```

**TypeScript ─ Class inheritance and Method Overriding**

Method Overriding is a mechanism by which the child class redefines the superclass's method.

```tsx
class PrinterClass {
  doPrint(): void {
    console.log("doPrint() from Parent called...");
  }
}

class StringPrinter extends PrinterClass {
  doPrint(): void {
    super.doPrint();
    console.log("doPrint() is printing a string...");
  }
}

var obj = new StringPrinter();
obj.doPrint();
```

**The static Keyword**

The static keyword can be applied to the data members of a class.

```tsx
class StaticMem {
  static num: number;

  static disp(): void {
    console.log("The value of num is" + StaticMem.num);
  }
}

StaticMem.num = 12; // initialize the static variable
StaticMem.disp(); // invoke the static method
```

**The instanceof operator**

The `instanceof` operator returns true if the object belongs to the specified type.

```tsx
class Person {}
var obj = new Person();
var isPerson = obj instanceof Person;
console.log(" obj is an instance of Person " + isPerson); // obj is an instance of Person True
```

**Data Hiding**

- A class can control the visibility of its data members to members of other classes. This capability is termed as Data Hiding or Encapsulation.
- Object Orientation uses the concept of access modifiers or access specifiers to implement the concept of Encapsulation.
- The access specifiers/modifiers define the visibility of a class's data members outside its defining class.

1. `public`: A public data member has universal accessibility. Data members in a class are public by default.
2. `private`: Private data members are accessible only within the class that defines these members. If an external class member tries to access a private member, the compiler throws an error.
3. `protected`: A protected data member is accessible by the members within the same class as that of the former and also by the members of the child classes.

```tsx
class Encapsulate {
  str: string = "hello";
  private str2: string = "world";
}

var obj = new Encapsulate();
console.log(obj.str); // accessible
console.log(obj.str2); // compilation Error as str2 is private
```

**Classes and Interfaces**

```tsx
interface ILoan {
  interest: number;
}

class AgriLoan implements ILoan {
  interest: number;
  rebate: number;

  constructor(interest: number, rebate: number) {
    this.interest = interest;
    this.rebate = rebate;
  }
}

var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate); // Interest is : 10 Rebate is : 1
```

## Objects

- An `object` is an instance which contains set of key value pairs.
- The values can be scalar values or functions or even array of other objects.

```
var object_name = {
   key1: "value1", // scalar value
   key2: "value",
   key3: function() {
      // functions
   },
   key4:[“content1”, “content2”] // collection
};
```

**Object Literal Notation**

```tsx
var person = {
  firstname: "Tom",
  lastname: "Hanks",
};
// access the object values
console.log(person.firstname);
console.log(person.lastname);
```

**TypeScript Type Template**

```tsx
var person = {
  firstname: "Tom",
  lastname: "Hanks",
};
```

In case you want to add some value to an object, JavaScript allows you to make the necessary modification. Suppose we need to add a function to the person object later this is the way you can do this.

```tsx
person.sayHello = function () {
  return "hello";
};
```

```tsx
// Typescript Type template
var person = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHello: function () {}, // Type template
};

person.sayHello = function () {
  console.log("hello " + person.firstName);
};

person.sayHello(); // hello Tom
```

```tsx
// Objects as function parameters
var person = {
  firstname: "Tom",
  lastname: "Hanks",
};

var invokeperson = function (obj: { firstname: string; lastname: string }) {
  console.log("first name: " + obj.firstname);
  console.log("last name: " + obj.lastname);
};

invokeperson(person);
// first name: Tom
// last name: Hanks
```

```tsx
// Anonymous Object
var invokeperson = function (obj: { firstname: string; lastname: string }) {
  console.log("first name: " + obj.firstname);
  console.log("last name: " + obj.lastname);
};

invokeperson({
  firstname: "Sachin",
  lastname: "Tendulkar",
});

// first name: Sachin
// last name: Tendulkar
```

**Duck-typing**

- In duck-typing, two objects are considered to be of the same type if both share the same set of properties.
- Duck-typing verifies the presence of certain properties in the objects, rather than their actual type, to check their suitability.

```tsx
interface IPoint {
  x: number;
  y: number;
}

function addPoints(p1: IPoint, p2: IPoint): IPoint {
  var x = p1.x + p2.x;
  var y = p1.y + p2.y;
  return { x: x, y: y };
}

// Valid
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });

// Error
var newPoint2 = addPoints({ x: 1 }, { x: 4, y: 3 });
```

## Namespaces

A namespace is a way to logically group related code.

**Defining a Namespace**

```
namespace SomeNameSpaceName {
   export interface ISomeInterfaceName { ... }
   export class SomeClassName { ... }
}
```

The classes or interfaces which should be accessed outside the namespace should be marked with keyword `export`.

To access the class or interface in another namespace, the syntax will be:

`SomeNameSpaceName.SomeClassName;`

```tsx
// Drawing.ts
namespace Drawing {
  export interface IShape {
    draw();
  }
}

// Circle.ts
namespace Drawing {
   export class Circle implements IShape {
      public draw() {
         console.log("Circle is drawn");
      }

      // Triangle.ts
      namespace Drawing {
         export class Triangle implements IShape {
            public draw() {
               console.log("Triangle is drawn");
            }
         }

         // TestShape.ts
         function drawAllShapes(shape:Drawing.IShape) {
            shape.draw();
         }
         drawAllShapes(new Drawing.Circle());
         drawAllShapes(new Drawing.Triangle());
      }
   }
}
```

**Nested Namespaces**

```
namespace namespace_name1 {
   export namespace namespace_name2 {
      export class class_name { ... }
   }
}
```

```tsx
// Invoice.ts
namespace tutorialPoint {
  export namespace invoiceApp {
    export class Invoice {
      public calculateDiscount(price: number) {
        return price * 0.4;
      }
    }
  }
}

// InvoiceTest.ts
var invoice = new tutorialPoint.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500)); // 200
```

## Modules

A module is designed with the idea to organize code written in TypeScript. Modules are broadly divided into:

1. Internal Modules
2. External Modules

**Internal Modules**

Internal modules came in earlier version of Typescript. This was used to logically group classes, interfaces, functions into one unit and can be exported in another module. This logical grouping is named namespace in latest version of TypeScript. So internal modules are obsolete instead we can use namespace. Internal modules are still supported, but its recommended to use namespace over internal modules.

```
namespace TutorialPoint {
   export function add(x, y) {
       console.log(x + y);
    }
}
```

**External Modules**

- External modules in TypeScript exists to specify and load dependencies between multiple external js files.
- If there is only one js file used, then external modules are not relevant.

```
// SomeInterface.ts
export interface SomeInterface {
   // code declarations
}
```

```
import someInterfaceRef = require(“./SomeInterface”);
```

```tsx
// IShape.ts
export interface IShape {
  draw();
}

// Circle.ts
import shape = require("./IShape");
export class Circle implements shape.IShape {
  public draw() {
    console.log("Cirlce is drawn (external module)");
  }
}

// Triangle.ts
import shape = require("./IShape");
export class Triangle implements shape.IShape {
  public draw() {
    console.log("Triangle is drawn (external module)");
  }
}

// TestShape.ts
import shape = require("./IShape");
import circle = require("./Circle");
import triangle = require("./Triangle");

function drawAllShapes(shapeToDraw: shape.IShape) {
  shapeToDraw.draw();
}

drawAllShapes(new circle.Circle()); // Cirlce is drawn (external module)
drawAllShapes(new triangle.Triangle()); // Triangle is drawn (external module)
```

## Ambients

- Ambient declarations are a way of telling the TypeScript compiler that the actual source code exists elsewhere. When you are consuming a bunch of third party js libraries like jquery/angularjs/nodejs you can't rewrite it in TypeScript. Ensuring typesafety and intellisense while using these libraries will be challenging for a TypeScript programmer. Ambient declarations help to seamlessly integrate other js libraries into TypeScript.

**Defining Ambients**

Ambient declarations are by convention kept in a type declaration file with following extension `(d.ts)`

`Sample.d.ts`

**Syntax**

`declare module Module_Name { }`

**Example**

```tsx
// CalcThirdPartyJsLib.js
var TutorialPoint;
(function (TutorialPoint) {
   var Calc = (function () {
      function Calc() { }

      Calc.prototype.doSum = function (limit) {
         var sum = 0;

         for (var i = 0; i <= limit; i++) {
            Calc.prototype.doSum = function (limit) {
               var sum = 0;

               for (var i = 0; i <= limit; i++) {
                  sum = sum + i;
                  return sum;
                  return Calc;
                  TutorialPoint.Calc = Calc;
               })(TutorialPoint || (TutorialPoint = {}));
               var test = new TutorialPoint.Calc();
            }
         }
      }
   }
}
```

As a typescript programmer you will not have time to rewrite this library to typescript. But still you need to use the `doSum()` method with type safety. What you could do is ambient declaration file. Let us create an ambient declaration file `Calc.d.ts`

```tsx
// Calc.d.ts
declare module TutorialPoint {
  export class Calc {
    doSum(limit: number): number;
  }
}
```

Ambient files will not contain the implementations, it is just type declarations. Declarations now need to be included in the typescript file as follows.

```tsx
// CalcTest.ts
var obj = new TutorialPoint.Calc();
obj.doSum("Hello"); // Compiler error
console.log(obj.doSum(10));
```
