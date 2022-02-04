const {getFullName,isPalindrome,getCircumference,getArea} = require("./index");

test('Swathi and Rachamalla gives Swathi Rachamalla', () =>{
    expect(getFullName("Swathi","Rachamalla")).toBe("Swathi Rachamalla")
})


test('Swathi and Rachamalla gives Swathi Rachamalla', () =>{
    expect(getFullName("Swathi"," Rachamalla")).not.toBe("Swathi Rachamalla")
})
test("Circumference with radius 5 is 31",()=>{
    expect(getCircumference(5)).toBe('The circumference is 31')
})
test("Circumference with radius 5 is 31",()=>{
    expect(getCircumference(5.0)).not.toBe('The circumference is 31.0')
})

test("Area with radius 5 is 78",()=>{
    expect(getArea(5)).toBe('The area is 78')
})
test("Area with radius 5 is 78",()=>{
    expect(getArea(5.0)).not.toBe('The area is 78.0')
})