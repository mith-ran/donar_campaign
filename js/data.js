
 export let campaigns1=JSON.parse(localStorage.getItem('information'));
 if(!campaigns1){
      campaigns1=[];
      console.log("no");
 }
 
 export let can2='';
 export const up=(para)=>{
    console.log(campaigns1)
    //campaigns1=para;
    console.log(para.title)
    campaigns1.push(para);
    localStorage.setItem('information',JSON.stringify(campaigns1));
    return campaigns1;
 }
 export const up1=(inp)=>{
    inp.forEach((element) => {
      let flag=0;
      campaigns1.forEach((loc)=>{
        if(element.title==loc.title){
          flag=1;
          if(element.currentAmount!=loc.currentAmount){
            loc.currentAmount=element.currentAmount;
            localStorage.setItem('information',JSON.stringify(campaigns1));
          }
        }
        else{
          console.log("same");
        }

       })
     if(flag==0){
       campaigns1.push(element);
       localStorage.setItem('information',JSON.stringify(campaigns1));
      
    }})
 }