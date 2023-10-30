// to create an obejct, describe it explicitly using interface

interface User {
    name : string,
    id : number
}
// use : to say that obj is as per this interface

const user : User = {
    name : "Hayes",
    id : 0,
}
 class UserAccount {
    name : string;
    id : number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
 }
 const user2: User = new UserAccount("Murphy", 1);

 // complex types with composition : union and generics
//  union -> tyoe can be one of many types

type LockStates  = "locked" | "unlcoked";
type   WindowState = "open" | "closed "|"minimized";

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
function getLength(obj:string| string[]){
    if(typeof obj=="string"){
        return[obj];
    }
    return obj.length;
}

// generics => provide variables to types ex to array
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name : string}>;

interface Backpack <Type>{
    add : (obj: Type) => void;
    get: () => Type;
}

// duck typing = structural typing => compare by shape,  if same shape treat as same type even tghough never declared as tha  type
