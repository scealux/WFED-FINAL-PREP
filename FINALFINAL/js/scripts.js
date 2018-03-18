//My Scripts
$("#enter").click(function (event){
  event.preventDefault();
  recordObs();
});
var database = firebase.database();
var storageRef = database.ref();

var i = 0;
var numberOfMessages = 0;

var nameInput = $("#name");
var emailInput = $("#email");
var phoneInput = $("#phone");
var avalancheYesInput = $("#avalanche_yes");
var triggerYesInput = $("#trigger_yes");
var caughtYesInput = $("#caught_yes");
var locationInput = $("#location");
var descriptionInput = $("#description");

$( document ).ready(function() {
    console.log( "ready!" );
    storageRef.once("value")
        .then(function(snapshot) {
            numberOfMessages = snapshot.numChildren();

            console.log("There are " + numberOfMessages + " messages in Firebase...");
        });
    //LOOP THROUGH DATA AND WRITE OUT EACH EXISTING "TEXT"

});

storageRef.on("child_added", function(snapshot){
    console.log(snapshot.val());
    var lilRef = snapshot.val();
    printMessage(lilRef.name, lilRef.loc, lilRef.sAva, lilRef.tAva, lilRef.cAva, lilRef.des);
});
function printMessage(name,loc,sAva,tAva,cAva,des){
    console.log("Adding entry from "+name+" to the records...");
    $("#resultsTable").append(
      "<tr> <td>"+name+"</td> <td>"+loc+"</td> <td>"+sAva+"</td> <td>"+tAva+"</td> <td>"+cAva+"</td> <td>"+des+"</td> </tr>"
    );
}
function recordObs() {
  //TODO
  var oName, oEmail, oPhone, oSAva, oTAva, oCAva, oLoc, oDes;
  oName = nameInput.val();
  oEmail = emailInput.val();
  oPhone = phoneInput.val();

  oLoc = locationInput.val();
  oDes = descriptionInput.val();

  if (avalancheYesInput.is(":checked")){
    oSAva = "Yes";
  }else {
    oSAva = "No";
  };
  if (triggerYesInput.is(":checked")){
    oTAva = "Yes";
  }else {
    oTAva = "No";
  };
  if (caughtYesInput.is(":checked")){
    oCAva = "Yes";
  }else {
    oCAva = "No";
  };
  //console.log(oName+" "+oEmail+" "+oPhone+" "+oSAva+" "+oTAva+" "+oCAva+" "+oLoc+" "+oDes);
  //printMessage(oName, oLoc, oSAva, oTAva, oCAva, oDes);
  storageRef.push({name: oName, email: oEmail, phone: oPhone, sAva: oSAva, tAva: oTAva, cAva: oCAva, loc: oLoc, des: oDes});
  nameInput.val(null);
  emailInput.val(null);
  phoneInput.val(null);
  locationInput.val(null);
  descriptionInput.val(null);

  avalancheYesInput.prop('checked', false);
  triggerYesInput.prop('checked', false);
  caughtYesInput.prop('checked', false);
  $("#avalanche_no").prop('checked', false);
  $("#trigger_no").prop('checked', false);
  $("#caught_no").prop('checked', false);
}
