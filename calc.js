function append(value) {

  document.querySelector('input[name="display"]').value += value;

}
 function displayClear() {
  
  document.querySelector('input[name="display"]').value =" ";
 
}
 
 function deleteLast(){
  let a=document.querySelector('input[name="display"]').value;
  document.querySelector('input[name="display"]').value=a.slice(0,-1)
 }


 function calculate(){
  let answer=document.querySelector('input[name="display"]').value
  try{
  let newanswer = answer.replace(/x/g, '*').replace(/%/g, '/100');
    if(newanswer.includes("/0")){
      throw new Error("Cannot Divided by zero")
    }
    const result=eval(newanswer);
    document.querySelector('input[name="display"]').value=result.toString()

  }catch(error){
    document.querySelector('input[name="display"]').value="Error"


  }

 }