var myURL = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1";
var myKey = 37b53f927b524381b18e5dcaa632ea5f

$.ajax({
    url: myURL,
    success: function(data){
        console.log(data);
    }
})