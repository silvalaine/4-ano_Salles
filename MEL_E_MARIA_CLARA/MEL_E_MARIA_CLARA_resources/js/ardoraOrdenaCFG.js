var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=5;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Iniciar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="PARABÉNS!"; messageTime="O TEMPO ACABOU!"; messageError="TENTE NOVAMENTE!"; messageErrorG="TENTE NOVAMENTE!"; messageAttempts="FIM DO JOGO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TUVMX0VfTUFSSUFfQ0xBUkE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TyBTb2wgbmFzY2Ugc2VtcHJlIG5vIGxlc3RlLg==","TyBTb2wgc2UgcMO1ZSBubyBvZXN0ZS4=","TyBwb250byBjYXJkZWFsIG9wb3N0byBkbyBub3J0ZSDDqSBvIHN1bC4=","UGFyYSBzZSBvcmllbnRhciBkdXJhbnRlIG8gZGlhIHBvZGVtb3Mgb2JzZXJ2YXIgYSBwb3Npw6fDo28gZG8gU29sIG5vIGPDqXUu","QSBsdWEgbsOjbyB0ZW0gbHV6IHByw7NwcmlhLg=="];imaW=["","","","",""];queW=["","","","",""];altW=["","","","",""];c=[28,22,40,72,26];
var infoW=["","","","",""];
var auW=["","","","",""];
var actMaxWidth="800"; actMaxHeight="300";indexG=0;profG=0;dirMedia="MEL_E_MARIA_CLARA_resources/media/"; textBNext="Próximno";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];informaW=[];
