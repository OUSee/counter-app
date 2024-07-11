class Constructor {
    field: number = 123;
    private privateField: number = 124;

    constructor(arg: number) {
        this.field = arg;
    }
    public publicMethod(): number {
        return this.field;
    }

    protected protectedMethod() {
        return this.field + 10;
    }

    private privateMethod() {
        return this.field + 30;
    }
}

const instance = new Constructor(123);
instance.