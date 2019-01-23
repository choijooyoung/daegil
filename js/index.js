{

let 학사일정=["토요휴업일","","","토요휴업일","겨울방학 신정","","","대길어울마당","","","겨울방학","토요휴업일","","개천절","토요휴업일","","겨울방학",""
,"","","","","겨울방학","설날","임원수련교육/3/4/5/6","","","","겨울방학 토요휴업일","설날","","토요휴업일","","","겨울방학","설날","","",""
,"","겨울방학","","토요휴업일","단기방학","","토요휴업일","겨울방학","학교대청소의날","","한글날","","","겨울방학","토요휴업일","","우리글바로쓰기대회/1/2","토요휴업일","","겨울방학","","","계절스포츠/5/6","","","겨울방학","","","계절스포츠/5/6 진로현장체험학습/1","","","겨울방학 토요휴업일","","","토요휴업일","","","겨울방학","","개교기념일","","","","겨울방학","","토요휴업일","","대입수학능력시험일","토요휴업일",
"겨울방학","졸업식/6 종업식/1/2/3/4/5","","","","","겨울방학","토요휴업일 학년말방학","","진로현장체험학습/2","토요휴업일","","겨울방학","학년말방학","","","","","겨울방학","학년말방학","","","","","겨울방학 토요휴업일","학년말방학","진로현장체험학습/3","토요휴업일","학교대청소의날/4/5/6","","겨울방학","학년말방학","","","","","겨울방학","학년말방학","토요휴업일","","","토요휴업일","겨울방학","학년말방학","","","","","겨울방학","토요휴업일 학년말방학","추석","수련활동/5/6","토요휴업일","","겨울방학","학년말방학","추석","수련활동/5/6","","성탄절","겨울방학","학년말방학","대체휴일","수련활동/5/6","","학교대청소의날","겨울방학 토요휴업일","학년말방학","","토요휴업일","","","겨울방학","학년말방학","진로현장체험학습/4","","","겨울방학식","겨울방학","학년말방학","토요휴업일","","","겨울방학 토요휴업일","겨울방학","","","","","겨울방학","겨울개학식","","","","","겨울방학","",""];

let 급식=["[중식]*조랭이떡국(주식)1.5.6.16.*우리밀찐빵6.*파인애플(껍질속심제거)*배추김치9.*우유2.*깐쇼새우(칵테일새우)1.2.5.6.9.12.13.",
,
,
,
,
,
"[중식]*배(8등분)*우유2.*차수수현미밥*북어감자국1.5.6.9.*돼지갈비김치찜5.6.9.10.*떡잡채5.6.8.13.16.*총각김치9.13.",
"[중식]*모듬깨밥1.5.6.9.13.16.*수제케이준샐러드1.2.5.6.12.13.15.*한라봉*깍두기9.13.*우유2.*콩나물얼갈이된장국5.6.9.",
,
,
"[중식]*발아현미밥마파두부**5.6.10.13.*봄동된장무침5.6.*김구이*총각김치9.13.*우유2.*쌀국수5.6.13.16.",
"[중식]*율무밥*감자탕5.6.9.10.참나물무침***코다리살찹쌀양념구이5.6.13.*섞박지9.*우유2.*껍질째먹는사과",
"[중식]*단호박카레라이스2.6.10.*메이플피칸파이1.2.5.6.13.14.*오렌지*배추김치9.*우유2.",
"[중식]*달래양념간장5.6.*논우렁된장국5.6.*닭다리허브구이5.6.13.15.*딸기*배추김치9.*우유2.*곤드레밥5.6.",
,
,
,
,
,
,
,
,,,
,
,
,
,
];
	
	
	
	
	
	
	
	
const 입력후보들 = {"교화":["학교꽃","교화"],"교목":["교목", "학교나무"],"교가":["교가", "학교노래"],"교표":["교표","학교로고"],"학사일정":["학사일정","학교일정"],"급식":["급식","학교밥"]};
const 대답후보들 = {"교화":["교화는 장미입니다.<img src='https://images.unsplash.com/photo-1519058497187-7167f17c6daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80'></img>","교화는 장미에요.<img src='https://images.unsplash.com/photo-1519058497187-7167f17c6daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80'</img>"],"교가":["<audio src='https://choijooyoung.github.io/daegil/d.mp3' controls></audio>"],"교목":["교목은 은행나무입니다.<img src='https://st3.depositphotos.com/1325352/16017/v/1600/depositphotos_160171040-stock-illustration-ginkgo-autumn-leaves-fall-icon.jpg'></img>","교목은 은행나무에요.<img src='https://st3.depositphotos.com/1325352/16017/v/1600/depositphotos_160171040-stock-illustration-ginkgo-autumn-leaves-fall-icon.jpg'></img>"],"뭔말":["무슨 말인지 모르겠어요","무슨 말이죠?","뭐라고요?","다시 말해 주세요."],"교표":["<img src='https://i.imgur.com/if968Z7.png?1'></img>"],"학사일정":["입니다","이에요"],"급식":["입니다","이에요"]};

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
  var 대답 = 대답해석(입력칸.value);
  let 입력값 = 입력칸.value;
  말.innerHTML=입력값;
  말.setAttribute("class","나");
  대화창.appendChild(말);
  대화창.appendChild(br);
  말 = document.createElement("li");
  var 대답할것 = 대답후보들[대답][난수생성(0,대답후보들[대답].length-1)];
  let 말할것;
  if(대답=="학사일정"){
	  var mon=parseInt(입력값.split("/")[0]);
	  var day=parseInt(입력값.split("/")[1].split(" ")[0]);
	  대답할것=mon+"월 "+day+"일 ";
	  if(mon<9)
		mon+=12
	  console.log(학사일정);
	  대답할것+="학사일정은 </br>"+학사일정[(day-1)*6+mon%9];
	  console.log(대답할것);
	  말할것=대답할것;
  }
  
  if(대답=="급식"){
	var mon=입력값.split("/")[0];
	var day=입력값.split("/")[1].split(" ")[0];
 	if(Number.isNaN(parseInt(mon))){
		for(var i in 급식){
			if(급식[i].indexOf(mon)!=-1){
				대답할것=parseInt(i)+1;
			}
		}
	}
	else{
		대답할것=급식[parseInt(day)];
	}
	  말할것=대답할것;
	console.log(급식[parseInt(day)]);
  }
	
  else {말할것 = 대답할것.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");}
  말.innerHTML = 대답할것;
  말.setAttribute("class","컴");
  대화창.appendChild(말);
  대화창.appendChild(br);
  말 = document.createElement("li");
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
