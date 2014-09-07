$( document ).ready(function() {

    'use strict';

    var Rest = [['McDonalds', 'Chichester Gate Leisure Park Terminus Rd Chichester, West Sussex PO19 8EL', 'Words on a page' , ['McDonalds.jpg']], ['KFC', 2, 'K'], ['Nandos', 3 , 'N'], ['Franky and bennys', 4 ,'F'], ['The Harvester', 5, 'N']];
    var definedRestaurants = [];
    var ImgLo= 'Images/';

    function Restaurant(Code) {

        this.name = Rest[Code][0];
        this.address = Rest[Code][1];
        this.sum = Rest[Code][2];
        this.Images = Rest[Code][3];
        this.map = Rest[Code][4];

        this.getImg = function (Images) {

            if(!Images){

                return this.Images[0];

            }else{

                return this.Images[Images];

            }
        };

        this.getAddress = function () {
            return this.address;
        };
    }

    var MCD = new Restaurant(0);
    var KFC = new Restaurant(1);
    var NANDOS = new Restaurant(2);
    var FB = new Restaurant(3);
    var HARVESTER = new Restaurant(4);

    function defineRestaurant() {

        definedRestaurants.push(MCD);
        definedRestaurants.push(KFC);
        definedRestaurants.push(NANDOS);
        definedRestaurants.push(FB);
        definedRestaurants.push(HARVESTER);

    }

    defineRestaurant();

    //Testing Debug
    for ( var i = 1; i <= Rest.length; i++ ) {

        var $Rest = Rest[i-1];

        console.log('Restaurants in list #' + i + ' Named:   ' + $Rest[0]);
        console.log('                       Address: ' + $Rest[1]);
        console.log('                       Summury: ' + $Rest[2]);
        console.log('');

        $('.ResWrap:nth-child(' + i +')').data('Res', { Name: $Rest[0]});

        console.log($Rest[0] + ' data has been added succesfully');
        console.log('');

        if (Rest.length === definedRestaurants.length){
            console.log($Rest[0] + ' has been defined as Restaurant');
            console.log('');
        }

        console.log(definedRestaurants[i-1]);

        console.log('');

    }

    $( '.ResContent' ).hide();

    $( '.Selected' ).slideToggle(0);

    $( '.ResWrap' ).click(function() {

        $(this).toggleClass('SelectedBorder');
        $(this).children( '.Selected' ).slideToggle(1000);

        var ContentID = $(this).data( 'Res' ).Name;
        new Content(ContentID);

    });

    function Content(ContentID) {

        console.log(ContentID);

        switch (ContentID) {
        case Rest[0][0]:

            $('#Item-1').text(MCD.name);
            $('#Item-2').text(MCD.address);
            $('#Item-3').text(MCD.sum);
            $('.MainImg').attr('src',ImgLo + MCD.getImg(0));
            $('iframe').attr('src',MCD.map);

            break;

        case 'KFC':

            break;

        case 'NANDOS':

            break;
        }
    }

});
