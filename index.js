const operation = document.querySelector('select')
const firstValue = document.getElementById('firstValue')
const secondValue = document.getElementById('secondValue')
let button = document.getElementById('submit')
const error = document.getElementById('errorField')
const result = document.getElementById('resultDisplay')

function DecTOBin(data){

    let binary =""
    while(data !=0){
        if(data%2 == 0){
            binary = "0" + binary
        }else{
            binary = "1" + binary
        }

        data = parseInt(data/2)
    }
    console.log(binary)
    return binary
}

function negationOfData(data){
    if(data == 0) return 1
    if(data == 1) return 0

    let binary = "";
    while(data !=0){
        if(data%2 == 0){
            binary = "1" + binary
        }else{
            binary = "0" + binary
        }

        data = parseInt(data/2)
    }
    
    //console.log(binary)
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


//event listener for operation
operation.addEventListener('change',(event)=>{
    console.log('iubf')
      if(operation.value == "negation" || operation.value == "convertToDec"){
        secondValue.style.visibility = 'hidden'
      }else{
        secondValue.style.visibility = 'visible'
      }
})

button.addEventListener('click',validation)


function validation(){
   
    if(operation.value == "negation" || operation.value == "convertToDec"){
        
        if(firstValue.value.length != 0 && firstValue){
           
            let data = parseInt(firstValue.value)
            if(checkValue(data)){
                doCalculation()
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

    }else if(operation.value == 'negation'){
        result.textContent = "Result :"+ negationOfData(a)

    }else{
        result.textContent = "Result :"+ DecTOBin(a)

    }
}