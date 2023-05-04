const module1 = require('./modulo1');

//test funcionando 

// describe('basic feature', ()=>{
//     it('should return the right value', ()=>{
//         expect(module1.func1(10)).toBe(11);
//     });
// })

//teste não funcionando

describe('basic feature', ()=>{
    it('should return the right value', ()=>{
        expect(module1.func1(10)).toBe(11);
    });

    it('func2', () => {
        const cb =jest.fn()
        cb.mockReturnValue(1)
        expect(module1.func2(10, cb)).toBe(11)
        expect(cb.mock.calls[0][0]).toBe(10)
        console.log(cb.mock.calls)
   
    });
});