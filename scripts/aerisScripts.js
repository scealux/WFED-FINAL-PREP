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
                              console.log(ob);
                              $('#js').html('The current weather in '+searchedCity+', '+searchedState+' is ' + ob.weather.toLowerCase() + ' with a temperature of ' + ob.tempF + '°');
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
