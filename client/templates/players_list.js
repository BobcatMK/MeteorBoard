Template.playersList.helpers({
    "allPlayers": function() {
        if (playersList.find().fetch() != 0) {
            return(playersList.find().fetch())
        } else {
            return false
        }
    }
});

Template.playersList.events({
    "click .players-added": function() {
        var playerSelId = this._id;
        Session.set("playerSelId",playerSelId);
        //console.log(Session.get("playerSelId"));    
    }
});