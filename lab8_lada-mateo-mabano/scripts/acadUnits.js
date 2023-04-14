$(document).ready(function() {
    $('#acadmen').selectmenu({
      change: function(event, ui) {
        var college = ui.item.value;
        if (college == '') {
          $('#unit-info').html('');
        } else {
          $.ajax({
            url: 'colleges/' + college + '.html',
            success: function(data) {
              $('#unit-info').html(data);
            }
          });
        }
      }
    });
  });
  