cloudant = require('cloudant')(cloudantService.credentials.url);
db = cloudant.use('items');

//Initiate the database.
initDB = function() {
    cloudant.db.create('items', function(err, body){
        if(!err){
            populateDB();
            console.log('Successfully created database and populated!');
        }
        else{
            console.log("Database already exists.");
        }
    });
}

//populate the db with these items.
populateDB = function() {

    var products = [
    {
        name: 'T-Rex',
        color: 'gray',
        quantity: 1,
        description: 'A monstrous T-Rex that may or may not listen to your commands.',
        usaDollarPrice: 3000.00,
        imgsrc:'https://dl.dropboxusercontent.com/s/ttzhdan0rc90c3b/trex.jpg',
        isNew: true
    },
    {
        name: 'Metal Beer Sign',
        color: 'black',
        quantity: 53,
        description: 'Be the person with the coolest bar with this new metal plated beer sign! Beer is not included.',
        usaDollarPrice: 29.99,
        imgsrc:'https://dl.dropboxusercontent.com/s/8esglm8ocf87civ/beerSign.jpg',
        isNew: false
    },
    {
        name: 'Bar Stool',
        color: 'black',
        quantity: 7,
        description: 'A swiveling bar stool perfect for any raised table or counter. This bar stool also has a level for height adjustment.',
        usaDollarPrice: 199.99,
        imgsrc:'https://dl.dropboxusercontent.com/s/7i3j1vmaxoh1ili/barStool.jpg',
        isNew: false
    },  
    {
        name: 'Bluetooth Speaker',
        color: 'brown',
        quantity: 155,
        description: 'Listen to your tunes anywhere with this portable and super loud bluetooth speaker!',
        usaDollarPrice: 49.99,
        imgsrc:'https://dl.dropboxusercontent.com/s/lx487x8kc6kl88d/bluetoothspeaker.jpg',
        isNew: false
    },
    {
        name: 'Baby Cactus Plant',
        color: 'green',
        quantity: 97,
        description: 'Adopt a small cactus plant. They make great conversation starters when you have company over. Do not touch!',
        usaDollarPrice: 14.99,
        imgsrc:'https://dl.dropboxusercontent.com/s/wqwgw48be49g6bb/cactus.jpg',
        isNew: true
    },
    {
        name: 'Football',
        color: 'brown',
        quantity: 64,
        description: 'Throw this football around the yard.',
        usaDollarPrice: 49.99,
        imgsrc:'https://dl.dropboxusercontent.com/s/nmq741933tp2mcw/football.jpg',
        isNew: false
    },
    {
        name: 'Golf Ball',
        color: 'white',
        quantity: 24,
        description: 'Hit the furthest drives with this new and improved golf ball. Built for distance and accuracy.',
        usaDollarPrice: 24.99,
        imgsrc:'https://dl.dropboxusercontent.com/s/m261pusn6rlcfcn/golfball.jpg',
        isNew: false
    },
    {
        name: 'Chicago, IL',
        color: 'multi color',
        quantity: 1,
        description: 'The entire city of Chicago is up for grabs.',
        usaDollarPrice: 6500000000.00,
        imgsrc:'https://dl.dropboxusercontent.com/s/y4he3pdvww18j8d/chicago.jpg',
        isNew: true
    },
    {
        name: 'Hot Air Balloon',
        color: 'multi color',
        quantity: 3,
        description: 'If you bought Chicago, you might as well buy a hot air balloon to travel your newly acquired city.',
        usaDollarPrice: 10000000.00,
        imgsrc:'https://dl.dropboxusercontent.com/s/1w9ua4xh2zyvviq/hotairballoon.jpg',
        isNew: true
    },
    {
        name: 'Microwave',
        color: 'black',
        quantity: 71,
        description: 'Heat up your food in style with this slick looking microwave.',
        usaDollarPrice: 69.99,
        imgsrc:'https://dl.dropboxusercontent.com/s/ch9lkfm39t3h260/microwave.jpg',
        isNew: false
    }
    ];

    for(p in products){
        db.insert(products[p], function(err, body, header){
            if(err){
                console.log('error in populating the DB items: ' + err );
            }
        });
    }   
}