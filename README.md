# jQuery
<<<<<<< HEAD
=======
Dot_on
<html>
<head>
	<title>Jquery functions</title>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
	<script type="text/javascript">
  $(document).ready(function(){
   $('button').click(function(){
    $('div').append('<h3>I am a new content</h3>');
   });
   $('div.a').on('mouseover', 'h3', function(){
    $(this).css('color', 'pink');
   });
  });
</script>
</head>
<body>
  <button>Click me</button>
  <div class="a">
   <h3>I am old content</h3>
  </div>
  <div class="b">
   <h3>I am old content</h3>
  </div>
</body>
</script>
</html>
>>>>>>> f179c85f4722a8dbbf7e4e37c1fb691a27282bd2
