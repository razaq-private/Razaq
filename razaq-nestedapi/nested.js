$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
      //console.log(data);
      var firstName = data.results[0].name.first;
      var lastName = data.results[0].name.last;
      $("body").append("<h2>"+firstName+"</h2>")
      $("body").append("<h2>"+lastName+"</h2>")
  }
})