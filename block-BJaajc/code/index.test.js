const {getFullName,isPalindrome,getCircumference,getArea} = require("./index");

test('Swathi + Rachamalla gives Swathi Rachamalla', () =>{
    expect(getFullName("Swathi","Rachamalla")).toBe("Swathi Rachamalla")
})


test('Swathi + Rachamalla gives Swathi Rachamalla', () =>{
    expect(getFullName("Swathi"," Rachamalla")).not.toBe("Swathi Rachamalla")
})

test('test gives true',() => {
    expect(isPalindrome("test")).toBe(true);
})

test(`  reviver is palindrom`,()=>{
    expect(isPalindrome('reviver')).toBeTruthy();
})
test(`level is palindrom`,()=>{
    expect(isPalindrome('level')).toBeTruthy();
})
test(`radar is palindrom`,()=>{
    expect(isPalindrome('radar')).toBeTruthy();
})

// getCircumfrence testing

test(`circumference is 12.56`,()=>{
    expect(getCircumfrence(2)).toBe("The circumference is 12.56");
})
test(`circumference is 18.84`,()=>{
    expect(getCircumfrence(3)).toBe("The circumference is 18.84");
})
test(`circumference is 25.12`,()=>{
    expect(getCircumfrence(4)).toBe("The circumference is 25.12");
})




// testing getArea 

test(`Area is 12.56`,()=>{
    expect(getArea(2)).toBe("The area is 12.56");
})
test(`Area is 28.26`,()=>{
    expect(getArea(3)).toBe("The area is 28.259999999999998");
})
test(`Area is 50.24`,()=>{
    expect(getArea(4)).toBe("The area is 50.24");
})
