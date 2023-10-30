learn ts by migrating js to ts code

steps 
1. Migrate js to ts
2. leverage ts types in jsdoc blocks
3. write unit test with jest and js

Because we installed typescript in the previous step, we have access to tsc. If we hadn't done that, we would have had to install typescript globally or use npx. I find this yarn trick comes in handy often.

What is TypeScript and why should we use it?
It's a devtool. We don't ship it to production, but it helps us ship less error-prone code. Today we've taken baby steps. We've added TypeScript to our project but we haven't actually used it (beyond running our typecheck script once).

https://www.typescriptcourse.com/tutorials for more practice

## TS for js dev
The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

By understanding how JavaScript works, TypeScript can build a type-system that accepts JavaScript code but has types. This offers a type-system without needing to add extra characters to make types explicit in your code. That’s how TypeScript knows that helloWorld is a string in the above example.



#### defining types
refer basics.ts
