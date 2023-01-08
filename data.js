//based on a pen by @robinselmer
var url = "https://minecraftpocket-servers.com/api/?object=servers&element=detail&key=1w8e3LcmaDFnIiSWqpBQFk1oAg3WDcZDzw";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  } 
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
    
});
