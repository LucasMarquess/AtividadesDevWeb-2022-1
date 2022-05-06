function mudaCorBg(){
    let hour = new Date().getHours();
    
    if (hour >= 6 & hour <= 12) {
        document.bgColor = "white";
        document.fgColor = "black";
    }
    
    else if (hour > 12 & hour <= 18){
        document.bgColor = "yellow";
        document.fgColor = "black";
    }
    
     else if (hour > 18 & hour <= 24){
        document.bgColor = "black";
        document.fgColor = "white";
    }
    else if(hour > 00 & hour < 6){
        document.bgColor = "blue";
        document.fgColor = "white";
    }
}