// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    let keys = Object.keys(obj);
    keys.forEach(function (key){
        console.log(key);
    })
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj);
    console.log("After Object.values():", values);
  
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);
  
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);

    // For Template literals, its not working as expected
    // let newObj1 = Object.assign({}, obj, { key4: "value4" });
    // log(`Obj.assign: ${ newObj1 }`);  
  }
  
  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);
