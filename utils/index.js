export function patchFunction(functionToBePatched, functionToBeCalledBeforOriginalFunction, functionToBeCalledAfterOriginalFunction) {
    return function patchedFunction(...args) {
        functionToBeCalledBeforOriginalFunction && functionToBeCalledBeforOriginalFunction(...args);
        const result = functionToBePatched(...args);
        functionToBeCalledAfterOriginalFunction && functionToBeCalledAfterOriginalFunction(result, ...args);
        return result;
    }
}