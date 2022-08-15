const operation = document.getElementById('operation')
const firstValue = document.getElementById('firstValue')
const secondValue = document.getElementById('secondValue')
let button = document.getElementById('submit')
const error = document.getElementById('errorField')
const result = document.getElementById('resultDisplay')

function negationOfData(data){
    if(data == 0) return 1
    if(data == 1) return 0

   let binary =""
    while(data !=0){
        if(data%2 == 0){
            binary = "1" + binary
        }else{
            binary = "0" +binary
        }

        data = parseInt(data/2)
    }
    // console.log(binary)
    // convert to negation
    c = 0
    size = binary.length -1
    for(let i =0;i<binary.length;i++){
        if(binary[i] == '1'){
            c = c + Math.pow(2,size)
            console.log(c)
        }
        size = size -1
        console.log(size)
    }
     
    return c

}
function checkValue(a){
    if(a<100000 && a >(-100000)){
        return true
    }

    return false
}

button.addEventListener('click',validation)

function validation(){
   
    if(operation.value == "negation"){
        if(firstValue.value.length != 0 && firstValue){
           
            if(checkValue(parseInt(firstValue.value))){
                result.textContent = "Result :"+ (negationOfData(parseInt(firstValue.value)))
            }else{
                alert("please enter value less than 100000 and greater than -100000")
            }
            
            
        }else{
            alert("please enter first field for negation")
        }    
        
    }else{
    
        if(firstValue.value.length ==0 || secondValue.value.length ==0){
            alert("please enter both the field")
        }else{
                if(checkValue(parseInt(firstValue.value)) && checkValue(parseInt(firstValue.value))){
                    doCalculation()
                }else{
                    alert("please enter value less than 100000 and greater than -100000")
                }
                
                
        }
    }    
}

function doCalculation(){
    console.log()
    let a = parseInt(firstValue.value)
    let b = parseInt(secondValue.value)

    if(operation.value == 'or'){

        result.textContent = "Result :"+ (a|b)

    }else if(operation.value == 'and'){
        
        result.textContent = "Result :"+ (a&b)

    }else if(operation.value == 'xor'){
        
        result.textContent = "Result :"+ (a^b)

    }else if(operation.value == 'nand'){
        
        result.textContent = "Result :"+ negationOfData(a&b)

    }else if(operation.value == 'nor'){
        
        result.textContent = "Result :"+ negationOfData(a|b)

    }else if(operation.value == 'xnor'){
        
        result.textContent = "Result :"+ negationOfData(a^b)

    } 
}