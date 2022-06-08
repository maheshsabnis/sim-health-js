// file1 is exporting the MyClass
// This will make the MyClass as a 'TypeScript ES6 Module aka ES 6 Module' 
export class MyClass {
    printMessage(str:string) {
        console.log('====================================');
        console.log(`The Message is ${str}`);
        console.log('====================================');
    }
}