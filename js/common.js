$( document ).ready(function() {
$(".portfolio_txt").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
});