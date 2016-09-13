$(document).ready(function() {
 animpswt();
$("body").css("overflow", "hidden");
});
var kekanan=0;
var timeleft=9000;
var start=0;
var end=0;
var sampaiduluan=0;
function animpswt(){
	$("#pesawat").animate({ left: '120%' }, 70000);
	setTimeout(function(){ $("#pesawat").css('left','-20%'); animpswt(); }, 1000);
}

$( "#kanan" ).hover(function() {
 var kurang = $("#gd1").css("left");
 var nilai = 5850+Number(kurang.substring(0, kurang.length - 2));

console.log(timeleft);
 start = new Date().getTime();
 var x = "-=" + nilai + "px";
  $( "#gd1" ).animate({ left: x }, timeleft,"linear", function() {timeleft=0; sampaiduluan=2;  }); 
  $( "#gd2" ).animate({ left: x }, timeleft,"linear" );
  $( "#gd3" ).animate({ left: x }, timeleft,"linear" );
  $( "#gd4" ).animate({ left: x }, timeleft,"linear" );
  $( "#gd5" ).animate({ left: x }, timeleft,"linear" );
  $( "#gd6" ).animate({ left: x }, timeleft,"linear" );
  $( "#gd7" ).animate({ left: x }, timeleft,"linear" );
  $( "#gd8" ).animate({ left: x }, timeleft,"linear" );
  $( "#gd9" ).animate({ left: x }, timeleft,"linear" );
  $( "#gd10" ).animate({ left: x }, timeleft,"linear" );
  $( "#gd11" ).animate({ left: x }, timeleft ,"linear");
  $( "#jalan" ).animate({ left: x }, timeleft ,"linear");
}, function() {
  end=new Date().getTime();
  if(sampaiduluan == 2) { sampaiduluan = 0; } else {timeleft=timeleft-end+start;}
  if(timeleft > 9000) { timeleft=9000; }
  if(timeleft < 0) { timeleft=0; }
  $( "#gd1" ).stop();
  $( "#gd2" ).stop();
  $( "#gd3" ).stop();
  $( "#gd4" ).stop();
  $( "#gd5" ).stop();
  $( "#gd6" ).stop();
  $( "#gd7" ).stop();
  $( "#gd8" ).stop();
  $( "#gd9" ).stop();
  $( "#gd10" ).stop();
  $( "#gd11" ).stop();
  $( "#jalan" ).stop();}
);

$( "#kiri" ).hover(function() {
 var kurang = $("#gd1").css("left");
 var nilai = 100-Number(kurang.substring(0, kurang.length - 2));

 start = new Date().getTime();
 var x = "+=" + nilai + "px";
 kekanan = 9000-timeleft;
console.log(timeleft);
  $( "#gd1" ).animate({ left: x }, kekanan,"linear",  function() { timeleft=9000; sampaiduluan=1; }  );
  $( "#gd2" ).animate({ left: x }, kekanan,"linear" );
  $( "#gd3" ).animate({ left: x }, kekanan,"linear" );
  $( "#gd4" ).animate({ left: x }, kekanan,"linear" );
  $( "#gd5" ).animate({ left: x }, kekanan,"linear" );
  $( "#gd6" ).animate({ left: x }, kekanan,"linear" );
  $( "#gd7" ).animate({ left: x }, kekanan,"linear" );
  $( "#gd8" ).animate({ left: x }, kekanan,"linear" );
  $( "#gd9" ).animate({ left: x }, kekanan,"linear" );
  $( "#gd10" ).animate({ left: x }, kekanan,"linear" );
  $( "#gd11" ).animate({ left: x }, kekanan ,"linear");
  $( "#jalan" ).animate({ left: x }, kekanan ,"linear");
}, function() {
  end=new Date().getTime();
  if(sampaiduluan == 1){sampaiduluan = 0; } else {timeleft=9000-kekanan+end-start;}
  if(timeleft > 9000) { timeleft=9000; }
  if(timeleft < 0) { timeleft=0; }
  $( "#gd1" ).stop();
  $( "#gd2" ).stop();
  $( "#gd3" ).stop();
  $( "#gd4" ).stop();
  $( "#gd5" ).stop();
  $( "#gd6" ).stop();
  $( "#gd7" ).stop();
  $( "#gd8" ).stop();
  $( "#gd9" ).stop();
  $( "#gd10" ).stop();
  $( "#gd11" ).stop();
  $( "#jalan" ).stop();}
);