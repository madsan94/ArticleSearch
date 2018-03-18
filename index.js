var items = [];
var database=[];
window.onload=function(){

// Open (or create) the database



//Fetching JSON

var a=$.getJSON( "http://starlord.hackerearth.com/hackernews", function() {

});
a.done(function(data) {
  $.each( data, function( key, val ) {
      var b="'"+val.url+"'";
      database.push(val)
  })
database.splice(0,1);
Display(database,"show")
$(".sort-points").click(function(){
SortBy("Points",database)
})
$(".sort-comments").click(function(){
  SortBy("Comments",database)
  });
$(".sort-date").click(function(){
    SortBy("Date",database)
    });
})


$(".article-box").click(function() {
    alert("Do you want to get in?")
    console.log($(this).find("a").attr("href"));
    window.location = $(this).find("a").attr("href");
    return false;
});

}
function Display(data,type){
//alert(data[1].num_comments);
//$(".article-box").hide();
 //alert(data.length)
 items=[]
  for(var i=0;i<data.length;i++){
    var date=data[i].created_at.split(" ");

    var a="<div class='article-box'><p><a href="+data[i].url+"><h3>"+data[i].title+"</h3></a></p><div class='article-feature'<p>"+data[i].num_points+"<span class='glyphicon glyphicon-star points'></span>&nbsp"+data[i].num_comments+"<span class='glyphicon glyphicon-comment comments'></span></div><div class='article-info'>"+data[i].author+"&nbsp&nbsp"+date[0]+"</p></div></div>";
    items.push(a)
      }
//alert("all fine")
//$("."+type).html("<ul/>"+items.join());

$("#"+type).html("<ul/>"+items.join());
}
function SortBy(sort_criterion,data){
  $("#show").hide();
    if(sort_criterion=="Points"){
      $("#show-points").show();
      $("#show-comments").hide();
      $("#show-date").hide();
    data.sort(function(a,b) { return parseFloat(a.num_points) - parseFloat(b.num_points)}).reverse() ;
    Display(data,"show-points")
  }
  else if(sort_criterion=="Comments"){
    $("#show-comments").show();
    $("#show-points").hide();
    $("#show-date").hide();
    data.sort(function(a,b) { return parseFloat(a.num_comments) - parseFloat(b.num_comments)}).reverse() ;
    Display(data,"show-comments")

  }
    else if(sort_criterion=="Date"){
      $("#show-date").show();
      $("#show-points").hide();
      $("#show-comments").hide();
      data.sort(function(a,b) { return Date(a.created_at) - Date(b.created_at)}).reverse() ;
      Display(data,"show-date")

    }
}
