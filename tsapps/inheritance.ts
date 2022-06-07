class ClsBase {
    constructor(private msg: string, public info: string, protected val:string) {
        console.log('Base class Constructor');
    }

    showInfo(): void {
        console.log(`Base Class, Private message = ${this.msg}, Public Info = ${this.info} \n
          Proteted val = ${this.val}`);  
    }

    changeCase(c: string): string {
        
        if (c === "u" || c === 'U') return `${this.msg} ${this.info}`.toUpperCase();
        if (c === "l" || c === 'L') return `${this.msg} ${this.info}`.toLowerCase();
        return `${this.msg} ${this.info}`
    }
    protected protectedMethod(): void {
        console.log('I am Proteted');
    }
}
// extends: This will provide an access of the publie members of the base class to DErive class 
class ClsDerive extends ClsBase {
    
    display(): void {
        console.log(`The Derive Class , and public value from Base = ${this.info} \n
            and protected value from Base is = ${this.val}`);  
    }
}

 
