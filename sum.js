function add(x,y){
  if(((typeof x)==='number')&&((typeof y)==='number')){
    return Number(x)+Number(y); 
  }else{
    return NaN;
  }
  
}
module.exports=add;
