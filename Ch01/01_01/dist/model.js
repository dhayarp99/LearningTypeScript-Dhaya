var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425; //"any" is used to opt out of the type safety feature provided by the TypeScript. So as as to use the dynamic typing feature offered by the JS. 
// let originalCost: numString = 425;
originalCost = "123"; //as we used "any" type for the variable "originalCost", we can now reassign the same variable to another data type. 
var InventoryTypeValue;
(function (InventoryTypeValue) {
    InventoryTypeValue["Associate"] = "Associate";
    InventoryTypeValue["BTP_Consultant"] = "BTP Consultant";
})(InventoryTypeValue || (InventoryTypeValue = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
    // item.trackingNumber = "123"
    // the above line will throw error as the "trackingNumber" is set as readonly in the interface.
}
function updateInventoryItem(trackingNumber, item) {
    //here partial is used to select just the element that we want in the whole object
}
function clone(source, options) {
    var serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
var inventoryItem = getInventoryItem(trackingNumber);
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
});
var cloned = clone(inventoryItem, { deep: true });
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    return KeyValuePair;
}());
var keyValue = { Key: "something", Value: 1234 };
var keyValue2 = { Key: 1234, Value: true };
