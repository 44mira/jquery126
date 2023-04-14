$(document).ready(function() {
  $('#acadmen').selectmenu({
    select : (e , ui) => {
      let redirect = "./redirects/" + ui.item.value + ".html";
      window.location.href = redirect;
    }  
  });
});
  