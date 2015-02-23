Template.controlPanel.events({
    "submit #add_player": function(e) {
        e.preventDefault();
        var playerNameVar = e.target.playerName.value;
        var playerHeightVar = e.target.playerHeight.value;
        var playerIncomeVar = e.target.playerIncome.value;

        playersList.insert({
            name: playerNameVar,
            height: playerHeightVar,
            income: playerIncomeVar,
            createdBy: Meteor.userId
        });
    }
});

Template.controlPanel.helpers({
    "countPlayers": function() {    
        Session.set("countPlayers",playersList.find().count());
        var count = Session.get("countPlayers");
        return count
    },
    "isSelected": function() {
        console.log("test");
    }
})

// Meteor.startup(function () {
//     // code to run on server at startup
//     Session.set("countPlayers",playersList.find().count());
// });