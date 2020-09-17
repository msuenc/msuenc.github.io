//Afficher et cacher les parties
$('#t1').click(function(){
    $('#presentation').toggle();
    $('#langues').toggle();
    $('#informatiques').toggle();

    $('#box1').css('height', 'unset');

    $('#box2').toggle();
    $('#box3').toggle();
    $('#box4').toggle();
    $('.arbre').toggle();
});

$('#t2').click(function(){
    $('#etudes').toggle();
    $('#experiences').toggle();

    $('#box2').css('height', 'unset');

    $('#box1').toggle();
    $('#box3').toggle();
    $('#box4').toggle();
    $('.arbre').toggle();
});

$('#t3').click(function(){
    $('#arts').toggle();
    $('#sports').toggle();

    $('#box3').css('height', 'unset');

    $('#box1').toggle();
    $('#box2').toggle();
    $('#box4').toggle();
    $('.arbre').toggle();
});

$('#t4').click(function(){
    $('#contacts').toggle();

    $('#box4').css('height', 'unset');

    $('#box1').toggle();
    $('#box2').toggle();
    $('#box3').toggle();
    $('.arbre').toggle();
});

