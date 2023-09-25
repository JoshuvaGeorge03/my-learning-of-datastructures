import patternMatch from "../patternMathc";

test('whether pattern matches correctly', () => {
    console.log('D:/home/user/jos/node_modules/@zohodesk/components/index.js'.replaceAll('/', '\\'));
    function replace(st ) {
        console.log('st', st);
        const res = st.replaceAll('/', '\\');
        console.log('res', res);
        return res;
    }
    // expect(patternMatch(replace('D:/home/user/jos/node_modules/@zohodesk/components/index.js'))).toBe(false);
    // expect(patternMatch(replace('/home/user/jos/node_modules/@zohodesk/dot/d.css'))).toBe(false);
    // expect(patternMatch(replace('/home/user/jos/node_modules/@zohodesk/dot/'))).toBe(false);
    // expect(patternMatch(replace('/home/user/jos/node_modules/@zohodesk/dot/index.js'))).toBe(false);
    // expect(patternMatch(replace('/home/user/jos/node_modules/moment/'))).toBe(false);
    expect(patternMatch(replace('D:/home/user/jos/node_modules/a/bc/index.js'))).toBe(true);
});