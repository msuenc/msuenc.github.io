//Afficher et cacher les parties
$('#t1').click(function(){
    $('#presentation').toggle();
    $('#langues').toggle();
    $('#informatiques').toggle();

    $('#box2').toggle();
    $('#box3').toggle();
    $('#box4').toggle();
});

$('#t2').click(function(){
    $('#etudes').toggle();
    $('#experiences').toggle();

    $('#box1').toggle();
    $('#box3').toggle();
    $('#box4').toggle();
});

$('#t3').click(function(){
    $('#arts').toggle();
    $('#sports').toggle();

    $('#box1').toggle();
    $('#box2').toggle();
    $('#box4').toggle();
});

$('#t4').click(function(){
    $('#contacts').toggle();

    $('#box1').toggle();
    $('#box2').toggle();
    $('#box3').toggle();
});

