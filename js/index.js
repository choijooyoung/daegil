{
const 입력후보들 = {"교화":["학교꽃","교화"],"교목":["교목", "학교나무"],"교가":["교가", "학교노래"],"교표":["교표","학교로고"],"학사일정":["학사일정","학교일정"]};
const 대답후보들 = {"교화":["교화는 장미입니다.<img src='https://images.unsplash.com/photo-1519058497187-7167f17c6daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80'></img>","교화는 장미에요.<img src='https://images.unsplash.com/photo-1519058497187-7167f17c6daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80'</img>"],"교가":["<audio src='https://choijooyoung.github.io/daegil/d.mp3' controls></audio>"],"교목":["교목은 은행나무입니다.<img src='https://st3.depositphotos.com/1325352/16017/v/1600/depositphotos_160171040-stock-illustration-ginkgo-autumn-leaves-fall-icon.jpg'></img>","교목은 은행나무에요.<img src='https://st3.depositphotos.com/1325352/16017/v/1600/depositphotos_160171040-stock-illustration-ginkgo-autumn-leaves-fall-icon.jpg'></img>"],"뭔말":["무슨 말인지 모르겠어요","무슨 말이죠?","뭐라고요?","다시 말해 주세요."],"교표":["<img src='https://i.imgur.com/if968Z7.png?1'></img>"],"학사일정":["입니다","이에요"]};

const 대화창 = document.querySelector("#대화창");
const 입력칸 = document.querySelector("#입력칸");
let br = document.createElement("br");
let 음성인식식 = window.SpeechRecognition || window.webkitSpeechRecognition; let 음성인식 = new 음성인식식();
음성인식.lang="ko-KR";
  
function 난수생성(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}  

function 대답해석(입력값){
	for(var i in Object.values(입력후보들)){
	for(var j in Object.values(입력후보들)[i]){
		if(입력값.indexOf(Object.values(입력후보들)[i][j])!=-1){return Object.keys(입력후보들)[i];}
    }
	}
	return "뭔말";
} 
 

function 말하기(말할말){
  var utterance = new SpeechSynthesisUtterance(말할말);
  utterance.lang="ko-KR";
  window.speechSynthesis.speak(utterance);
}
  
function 말추가(){
  let 말 = document.createElement("li");
  let 대답 = 대답해석(입력칸.value);
  let 입력값 = 입력칸.value;
  말.innerHTML=입력값;
  말.setAttribute("class","나");
  대화창.appendChild(말);
  대화창.appendChild(br);
  말 = document.createElement("li");
  let 대답할것 = 대답후보들[대답][난수생성(0,대답후보들[대답].length-1)];
  let 말할것;
  if(대답할것=="학사일정"){
	  var mon=입력값.split("/")[0];
	  var day=입력값.split("/")[1][0];
	  
	  if(mon<9)
		mon+=12
	  말할것="{mon}월 {day}일";
  }
  else 말할것 = 대답할것.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
  말.innerHTML = 대답할것;
  말.setAttribute("class","컴");
  대화창.appendChild(말);
  대화창.appendChild(br);
  입력칸.value="";
  
  말하기(말할것);
}

음성인식.onresult = function(event) {

  // event is a SpeechRecognitionEvent object.
  // It holds all the lines we have captured so far. 
  // We only need the current one.
  var 인덱스 = event.resultIndex;

  // Get a transcript of what was said.
  var 결과 = event.results[인덱스][0].transcript;
  입력칸.value=결과;

}

 function 시작(){
   음성인식.start();
 }
  
 function 엔터() {
        if (window.event.keyCode == 13) {
 
             말추가();
             
        }
  }
}
