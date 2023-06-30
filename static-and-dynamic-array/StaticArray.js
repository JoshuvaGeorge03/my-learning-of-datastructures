const defaultCapacity = 1;

export class StaticArray {
    constructor(capacity = defaultCapacity) {
        this.capacity = capacity;
        this.tuple = Array(this.capacity).fill(null);
    }

    throwOutOfBoundsError() {
        throw `index is bigger than array size, provide proper index`;
    }

    throwIndexNegativeError() {
        throw `index is negative, provide proper index`;
    }

    getItem(index) {
        
        if(index < 0) return this.throwIndexNegativeError();

        if(index >= this.tuple.length) {
            return this.throwOutOfBoundsError();
        }
        return this.tuple[index];
    }

    setItem(index, value) {
        if(index < 0) return this.throwIndexNegativeError();

        if(index >= this.tuple.length) {
            return this.throwOutOfBoundsError();
        }
        return this.tuple[index] = value;
    }

    getValues() {
        return this.tuple.map(v => v);
    }

    getSize() {
        return this.tuple.map(v => v).length;
    }

    isEmpty() {
        return this.getSize() === 0;
    }
}