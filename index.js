function getbmivalue(){

var weight=document.getElementById('Weight').value;
var height=document.getElementById('Height').value;

height = height*12;
height=height*0.025;

var ans=weight/(height*height);

ans=Math.round(ans);

document.getElementById('answer').value=ans;



}


function getZodian()
{

	function zodiac_sign(day,month) 
{ 
    var astro_sign=""; 
      
    // checks month and date within the  
    // valid range of a specified zodiac 
    if (month == "december"){ 
          
        if (day < 22) 
        astro_sign = "Sagittarius"; 
        else
        astro_sign ="capricorn"; 
    } 
          
    else if (month == "january"){ 
        if (day < 20) 
        astro_sign = "Capricorn"; 
        else
        astro_sign = "aquarius"; 
    } 
          
    else if (month == "february"){ 
        if (day < 19) 
        astro_sign = "Aquarius"; 
        else
        astro_sign = "pisces"; 
    } 
          
    else if(month == "march"){ 
        if (day < 21)  
        astro_sign = "Pisces"; 
        else
        astro_sign = "aries"; 
    } 
    else if (month == "april"){ 
        if (day < 20) 
        astro_sign = "Aries"; 
        else
        astro_sign = "taurus"; 
    } 
          
    else if (month == "may"){ 
        if (day < 21) 
        astro_sign = "Taurus"; 
        else
        astro_sign = "gemini"; 
    } 
          
    else if( month == "june"){ 
        if (day < 21) 
        astro_sign = "Gemini"; 
        else
        astro_sign = "cancer"; 
    } 
          
    else if (month == "july"){ 
        if (day < 23) 
        astro_sign = "Cancer"; 
        else
        astro_sign = "leo"; 
    } 
          
    else if( month == "august"){ 
        if (day < 23)  
        astro_sign = "Leo"; 
        else
        astro_sign = "virgo"; 
    } 
          
    else if (month == "september"){ 
        if (day < 23) 
        astro_sign = "Virgo"; 
        else
        astro_sign = "libra"; 
    } 
          
    else if (month == "october"){ 
        if (day < 23) 
        astro_sign = "Libra"; 
        else
        astro_sign = "scorpio"; 
    } 
          
    else if (month == "november"){ 
        if (day < 22) 
        astro_sign = "scorpio"; 
        else
        astro_sign = "sagittarius"; 
    } 
          
    return astro_sign;
}

	var birthday=document.getElementById('birthday').value;
	
	var month=birthday.substring(5, 7);
	var date=birthday.substring(8, 10);

	if(month==01)
	{
		month="january";
	}
	else if(month==02)
	{
		month="february";
	}
	else if(month==03)
	{
		month="march";
	}
	else if (month==04)
	{
		month="april";
	}
	else if(month==05)
	{
		month="may";
	}
	else if(month==06)
	{
		month="june";
	}
	else if(month==07)
	{
		month="july";
	}
	else if(month==08){
		month="august";
	}
	else if(month==09)
	{
		month="september"
	}
	else if(month==10)
	{
		month="october"
	}
	else if(month==11)
	{
		month="november"
	}
	else{
		month="december"
	}


	var ans=zodiac_sign(date,month);
	document.getElementById('answer-zodiac').value=ans;




}
var img=[];

img[0]=document.getElementById('image-1');
img[1]=document.getElementById('image-2');
img[2]=document.getElementById('image-3');
img[3]=document.getElementById('image-4');
img[4]=document.getElementById('image-5');
img[5]=document.getElementById('image-6');
img[6]=document.getElementById('image-7');
img[7]=document.getElementById('image-8');
img[8]=document.getElementById('image-9');


var link =[];
link[0]=img[0].src;
link[1]=img[1].src;
link[2]=img[2].src;
link[3]=img[3].src;
link[4]=img[4].src;
link[5]=img[5].src;
link[6]=img[6].src;
link[7]=img[7].src;
link[8]=img[8].src;


var img1=[];
img1[0]=document.getElementById('p-image-1');
img1[1]=document.getElementById('p-image-2');
img1[2]=document.getElementById('p-image-3');
img1[3]=document.getElementById('p-image-4');
img1[4]=document.getElementById('p-image-5');
img1[5]=document.getElementById('p-image-6');
img1[6]=document.getElementById('p-image-7');
img1[7]=document.getElementById('p-image-8');
img1[8]=document.getElementById('p-image-9');
img1[9]=document.getElementById('p-image-10');
img1[10]=document.getElementById('p-image-11');
img1[11]=document.getElementById('p-image-12');


var link1=[];
link1[0]=img1[0].src;
link1[1]=img1[1].src;
link1[2]=img1[2].src;
link1[3]=img1[3].src;
link1[4]=img1[4].src;
link1[5]=img1[5].src;
link1[6]=img1[6].src;
link1[7]=img1[7].src;
link1[8]=img1[8].src;
link1[9]=img1[9].src;
link1[10]=img1[10].src;
link1[11]=img1[11].src;



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}







function makerandon(){

	shuffle(link);

	for(let i=0;i<9;i++)
		{
			img[i].src=link[i];
		}
	
}


function makerandon2(){
	shuffle(link1);

	for(let i=0;i<12;i++)
	{
		img1[i].src=link1[i];
	}
}














































