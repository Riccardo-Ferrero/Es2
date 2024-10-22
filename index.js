let btnFile = document.getElementById("btnFile");
window.onload = ()=>{
    let inputFile = document.querySelector("input[type=file]");
    let btnFile = document.getElementById("btnFile");
    btnFile.addEventListener("click",()=>{
        inputFile.click();
    })

    inputFile.addEventListener("change", (evento)=>{
        console.log(evento);
        console.log(evento.target.files);
        let file = evento.target.files[0];
        let reader = new FileReader();
        reader.onload = fileLetto;
        reader.readAsText(file);
        
    })
    
}

function fileLetto(file){
    console.log(JSON.parse(file.target.result));
    let arrayString = file.target.result;
    let array = JSON.parse(file.target.result);
    console.log(array[0]);
    console.log(arrayString[0]);
}