
if(!window.NumberList){

    window.NumberList = function(numbersParams){
        
      //  const numbers = [];
        const numbers = numbersParams;
        this.sumAll = function(){
            
            let sum =0;
            for (var i =0 ; i< numbers.length; i++){
                sum+=numbers[i]
            }
            return sum;
        }

        this.multiplyAll = function(){
            if(numbers.length === 0) return null;
            let product =1;
            for (var i =0 ; i< numbers.length; i++){
                product*=numbers[i]
            }
            return product;
        }

        this.clear = function(){
            numbers.splice(0,numbers.length)
        }

        this.push = function(number){
            numbers.push(number)
        }





    }

}