$(document).ready( function(){
02

03
   $('#show').attr('checked', false);
04

05
   $('#show').click(function(){
06

07
      name = $('#pass').attr('name');
08
      value = $('#pass').attr('value');
09
      if($(this).attr('checked'))
10
      {
11
         html = '<input type="text" name="'+ name + '" value="' + value + '" id="pass"/>';
12
         $('#pass').after(html).remove();
13
      }
14
      else
15
      {
16
         html = '<input type="pass" name="'+ name + '" value="' + value + '" id="pass"/>';
17
         $('#pass').after(html).remove();
18
      }
19
   });
20
});
