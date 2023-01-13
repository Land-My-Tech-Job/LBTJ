the basic (aka primitive) types of values (aka datatype) in JavaScript are: 
    number, (Occasionally, you will come across special values that are of the number type, but do not look like numbers. Two of these are Infinity and NaN - Not a Number)
    string, 
    boolean, 
    undefined.

operators - are things that you can use to compare or modify values 

Arithmetic Operator
    +   addition        
    -   subtraction
    *   multiplication
    /   division
    ()  parenthesis 
    **  exponent
    %   modulo

Strings - used to represent text. To create a string, write any text enclosed by either "double quotes" or 'single quotes'. will not support mixing of quotes
    'Hello there' - ok
    "Hello there" - ok
    "Hello there' - not ok
+ Operator can be used to join two strings together (concatenation)

typeof - operator that returns a string with the type of the value that follows it

Boolean - type that can only have one of two possible values: 
    true 
    false

Comparison Operators - do not modify values, but rather test the relationship between them (Strings can also be compared)
    ===     - left is equal to right
    !==     - left is NOT equal to right
    >       - left greater than right
    >=      - left greater than or equal to right
    <       - left less than to right
    <=      - left less than or equal to right
NOTE
    =       - assigns value on left side to variable on right side
    ==      - compares the left side and right side but does type conversion under the hood to try and make things work
    ===     - triple equals checks for strict equality and is what you should use 99.9% of the time

special keywords - strings that are associated with special meaning (let and const for example as well as true and false) 

Logical Operators
    AND, written as &&
    OR, written as || 
    NOT, written as !

expression - anything that returns a value 
    When evaluating expressions, logical operators come first, followed by the comparison operators, followed by the arithmetic operators.

Type Conversion - occur in expressions that feature different types 
    '2' + 4 returns '24'
    'The number is ' + 42

Truthy and Falsy (you can use operators to evaluate things that don't just value to true and false but also things that just have a truthy or falsy value.)
    Most things have a truthy value 
    falsy values in JS are:
        false
        0 and other forms of numeric zero like -0, 0.0 and 0x0
        "", '' and `` - strings of length 0
        NaN - Not a Number
        null
        undefined
    If the left-hand side is falsy, the right-hand value will be returned (regardless of whether it evaluates as truthy or falsy).
        NaN || "hi" - NaN is falsy 
            "hi"




if you don't assign a value to a variable, it will return undefined.