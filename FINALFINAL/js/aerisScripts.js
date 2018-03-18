//Javascript
var vm = new Vue ({
     el: '#container',
     data: {
          stateText: '',
          cityText: ''
     },
     created: function () {
     },
     updated: function() {
     },
     methods: {
          search_for: function(){
               var searchedCity = this.cityText;
               var searchedState = this.stateText;
               var completeUrl = "http://api.aerisapi.com/observations/" + this.cityText.toLowerCase() + "," + this.stateText.toLowerCase() + "?client_id=5qfzZbBuKQyTaqdVD3go0&client_secret=UyUswmqCYKEuxVGT87JSgoKRXzMa0dIjAJrW7Otw";
               $.ajax({
                    url: [completeUrl],
                    dataType: "jsonp",
                    success: function(json) {
                         if (json.success == true) {
                              var ob = json.response.ob;
															var extension = "";
                              console.log(ob);
															if ((ob.windMPH > 0) && (ob.tempF != ob.feelslikeF)){
																extension = 'A '+ob.windMPH+'MPH wind heading '+ob.windDir+' makes it feel like '+ob.feelslikeF+'°, though.';
															}
                              $('#js').html('The current weather in '+searchedCity+', '+searchedState+' is ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.tempF + '°. '+extension);
                         } else {
                              $('#wrongThing').show();
                         }
                    }
               });
          }
     },
     computed: {
          makeLowerCase(it){
               return it.toLowerCase();
          }
     }
});
