// pure js query if needed
// This determines keywords
myarray =[]
for (var i=0; i <= $(".site-keyword").length-1; i++) {
    
  myarray = $($(".site-keyword")[i]).text() + ", " + myarray;
  
//   $(".allkeywords").attr("content", (array));
  
}
$(".allkeywords").attr("content", myarray);
// end of seo keywords
// ============================================================




// for page description
array =[]
for (var i=0; i <= $(".site-description").length-1; i++) {
    
  array = $($(".site-description")[i]).text() + " " + array;
  
//   $(".allkeywords").attr("content", (array));
  
}
$(".fulldescription").attr("content", array);


// for (var i=0; i <= $(".site-description").length-1; i++) {
    
//   array = $($(".site-description")[i]).text() 
//   $(".fulldescription").attr("content", array);
//   $(".fulldescription").append(array);
  
// }
// end of page description
// =============================================================




// site page title
$(".pagetitle").html($('#pagetitle').text())  
// end of site page title
// =============================================================




// site og:page title
$(".og-pagetitle").attr("content",  $('#pagetitle').text())
// end of site og:page title
// =============================================================




// site og:page title

array =[]
for (var i=0; i <= $(".site-description").length-1; i++) {
    
  array = $($(".site-description")[i]).text() + " " + array;
  
//   $(".allkeywords").attr("content", (array));
  
}
$(".og-description").attr("content", array);
// $(".og-description").attr("content",  $('.site-description').text())
// end of site og:page title
// =============================================================



// $(".seo-section").html("")
