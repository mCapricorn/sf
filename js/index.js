var urls = "";
$(function(){
	urls = '{"index1":"http://www.mp4ba.com/search.php?keyword=冰与火之歌","index2":16}';  
    //testJson=eval(testJson);//错误的转换方式   
    urls = eval("(" + urls + ")"); 
	
	$("img").click(function(){
		giveUrl(this);
	});
});

function giveUrl(ele){
	alert(urls[ele.id]);
}