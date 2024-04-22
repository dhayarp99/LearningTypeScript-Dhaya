let displayName:string = "Jess's standing desk";
let inventoryType = "furniture" as string;
let trackingNumber:string = "FD123455";
let createDate:Date = new Date();
let originalCost = 425 as any; //"any" is used to opt out of the type safety feature provided by the TypeScript. So as as to use the dynamic typing feature offered by the JS. 
//other way of doing the same:
// let originalCost: any = 425;

// To tell TS that a variable can accept more than 1 type but not all types. We can achieve this using a method called "Union Types":
// let originalCost: number | string = 425;
// originalCost = "hi";

// To reuse the type combination:
type numString = number | string //we can create our own type. 
// let originalCost: numString = 425;


originalCost = "123" //as we used "any" type for the variable "originalCost", we can now reassign the same variable to another data type. 

enum InventoryTypeValue {
    Associate = "Associate",
    BTP_Consultant = "BTP Consultant"
}

interface InventoryItem { //An interface in TypeScript defines a contract specifying the structure of an object, including its properties and methods, without providing any implementation.
    displayName:string;
    inventoryType:InventoryTypeValue; //this is enum way
    //or you can use directly like this if the options are less (literal type way):
    // inventoryType: "Associate" | "BTP Consultant"

    readonly trackingNumber:string;
    createDate:Date;
    originalCost?:number; //Question mark symbol is used to say this parameter is optional. 

    addNote?: (note: string) => string; //one way to add functions(methods)

    addNote1? (note:string) : string; //another way to add a function (equivalent to the previous one)
}

function getInventoryItem(trackingNumber: string) : InventoryItem {
    return null
}

function saveInventoryItem(item : InventoryItem){
    // item.trackingNumber = "123"
    // the above line will throw error as the "trackingNumber" is set as readonly in the interface.
}

function updateInventoryItem(trackingNumber: string, item: Omit<Partial<InventoryItem>, "trackingNumber" | "createDate">){
//here partial is used to select just the element that we want in the whole object
}

function clone<T, U>(source: T, options: U): T {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem); //I can either write like this
//or:
saveInventoryItem({
    displayName: "Dhayanithi",
    inventoryType: InventoryTypeValue.Associate,
    //or like below when using literal types:
    // inventoryType: "BTP Consultant",
    
    trackingNumber: "183",
    createDate: new Date(),
});

updateInventoryItem("abc123", {
    displayName: "Updated Name"
})

const cloned = clone(inventoryItem, {deep: true});

class KeyValuePair<TKey, TValue> {
    Key: TKey;
    Value: TValue;
}

let keyValue: KeyValuePair<string, number> = {Key: "something", Value: 1234};
let keyValue2: KeyValuePair<number, boolean> = {Key: 1234, Value: true};

declare let Vue: any;
