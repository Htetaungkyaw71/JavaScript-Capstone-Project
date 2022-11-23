export const counter = (data)=>{
    if(data){
        document.getElementById('commentCounter').innerHTML = data.length;      
    }
    else{
        document.getElementById('commentCounter').innerHTML = 0;     
    }
}

export const cmCount = () =>{
    let index = +document.getElementById('commentCounter').innerHTML; 
    index++;
    document.getElementById('commentCounter').innerHTML = index;
}