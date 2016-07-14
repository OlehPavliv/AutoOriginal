document.getElementById('Company').onclick = function(){
    document.getElementById('Company_1').style.display='block';
    document.getElementById('News_1').style.display='none';
    document.getElementById('Products_1').style.display ='none';
    event.preventDefault();
    
}
document.getElementById('Products').onclick = function(){
    document.getElementById('Products_1').style.display ='block';
    document.getElementById('Company_1').style.display='none';
    document.getElementById('News_1').style.display='none';
    event.preventDefault();
}
document.getElementById('News').onclick = function(){
    document.getElementById('News_1').style.display='block';
    document.getElementById('Company_1').style.display='none';
    document.getElementById('Products_1').style.display='none';
    event.preventDefault();
}



