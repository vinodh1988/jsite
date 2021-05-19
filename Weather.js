
$(document).ready(
function(){
  
        
  $('#getweather').click(function(){
                 
            let city = $('#city').val();
        
            $.get(
                "http://api.weatherapi.com/v1/current.json?key=b37aa029088845c6b2053041211905&q="+city+"&aqi=no",
                function(data){
                 $("#cityresult").text(data.location.name);
                 $("#countryresult").text(data.location.country);
                 $("#regionresult").text(data.location.region);
                 $("#georesult").text("Latitude "+data.location.lat+" Longititude"+data.location.lon);
                 $("#tempresult").text(data.current.temp_c+ " Centigrade")
                 $("#feelresult").text(data.current.feelslike_c+ " Centigrade");
                 $("#humidity").text(data.current.humidity);
                 
                 
                 

                 
            })          
 
    }
  )
}
)