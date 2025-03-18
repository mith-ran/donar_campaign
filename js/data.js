
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
      campaigns1.push(element);
    });
    localStorage.setItem('information',JSON.stringify(campaigns1));
 }