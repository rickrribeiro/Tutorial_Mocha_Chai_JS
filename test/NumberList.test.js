

describe ('OlaMundo', () => {
    let listUnderTest = null

    beforeEach(()=>{
        listUnderTest = new NumberList(getUsers())
       // getUsers();
        // botar jsonserver quando for pra teste
        
    })
    afterEach(()=>{
        listUnderTest = new NumberList(getUsers())

    })
    describe('after initialization', () => {
        //it.only('should sum to zero', () => { ou describe.only
        
            it('should sum to zero', () => {
                listUnderTest.clear()
                expect (listUnderTest.sumAll()).to.equal(0)


        });
        it('should produce a product equal to null', () => {
            listUnderTest.clear()
            expect (listUnderTest.multiplyAll()).to.be.null;
        });
        
    });



    describe('adding new numbers', ()=>{
        it('should produce a product of 4', () => {
            
            ///listUnderTest.push(10);
            //listUnderTest.push(2);
            
            expect (listUnderTest.multiplyAll()).to.equal(4);


        });
    
        it('should sum 10 after adding 4 and 6', () => {
            expect (listUnderTest.sumAll()).to.equal(7)
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