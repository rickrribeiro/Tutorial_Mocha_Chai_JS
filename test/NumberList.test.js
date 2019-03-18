describe ('NumberList', () => {
    let listUnderTest = null

    beforeEach(()=>{
        listUnderTest = new NumberList()

    })
    afterEach(()=>{
        listUnderTest = new NumberList()

    })
    describe('after initialization', ()=>{
        //it.only('should sum to zero', () => { ou describe.only
            it('should sum to zero', () => {
            expect (listUnderTest.sumAll()).to.equal(0)


        });
        it('should produce a product equal to null', () => {
            expect (listUnderTest.multiplyAll()).to.be.null;


        });
    
    });




    describe('adding new numbers', ()=>{
        it('should sum 10 after adding 4 and 6', () => {
            listUnderTest.push(4)
            listUnderTest.push(6)
            expect (listUnderTest.sumAll()).to.equal(10)
        });
        it.skip('should produce a product of 20 after add 10 and 2', () => {
            
            listUnderTest.push(10);
            listUnderTest.push(2);
            
            expect (listUnderTest.multiplyAll()).to.equal(20);


        });
    
    });


    describe('clearing the list', ()=>{
        it('should sum 0 after adding 2 and ten clearing the list', () => {
            listUnderTest.push(2)
            listUnderTest.clear();
            expect (listUnderTest.sumAll()).to.equal(0)
        });
        it('should produce a product of null after adding 10 and then clearing the list', () => {
            
            listUnderTest.push(10)
            listUnderTest.clear()
            expect (listUnderTest.multiplyAll()).to.be.null


        });
    
    });

    

});