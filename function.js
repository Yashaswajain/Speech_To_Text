const speech=window.webkitSpeechRecognition;

var rec=new speech();

var textarea=$("#textarea");
const text=$(".text-display");
const startButton=$("#record");

var displayText="";

rec.continuous=true;

rec.onstart=function(){
alert("voice recording on");    
}
rec.onspeechend=function(){
    alert("voice recording is off");
}
rec.onerror=function(){
    alert("try once more");
}
rec.onresult=function(event){
    var current=event.resultIndex;
    var convert=event.results[current][0].transcript;
    displayText+=convert;
    textarea.val(displayText);
}

startButton.click(function(event){
if(displayText.length){
    displayText+='';
}

rec.start();
})