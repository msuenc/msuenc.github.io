//Afficher et cacher les parties
$('#t1').click(function() {
    $('#presentation').show();
    $('#langues').show();
    $('#informatiques').show();
    $('#btn1').show();

    $('#t1').css('position' , 'unset');
    $('#box1').css('height', 'unset');

    $('#box2').hide();
    $('#box3').hide();
    $('#box4').hide();
    $('.arbre').hide();
    $('.snowflakes').hide();
});

$('#btn1').click(function() {
    $('#presentation').hide();
    $('#langues').hide();
    $('#informatiques').hide();
    $('#btn1').hide();

    $('#box2').show();
    $('#box3').show();
    $('#box4').show();
    $('.arbre').show();
    $('.snowflakes').show();

    $('#t1').css('position' , 'absolute');

    $('#box1').css('height', '50vh');
    $('#box2').css('height', '50vh');
    $('#box3').css('height', '50vh');
    $('#box4').css('height', '50vh');
});



$('#t2').click(function() {
    $('#etudes').show();
    $('#experiences').show();
    $('#btn2').show();

    $('#t2').css('position' , 'unset');
    $('#box2').css('height', 'unset');

    $('#box1').hide();
    $('#box3').hide();
    $('#box4').hide();
    $('.arbre').hide();
    $('.flowers').hide();
});

$('#btn2').click(function() {
    $('#etudes').hide();
    $('#experiences').hide();
    $('#btn2').hide();

    $('#box1').show();
    $('#box3').show();
    $('#box4').show();
    $('.arbre').show();
    $('.flowers').show();

    $('#t2').css('position' , 'absolute');

    $('#box1').css('height', '50vh');
    $('#box2').css('height', '50vh');
    $('#box3').css('height', '50vh');
    $('#box4').css('height', '50vh');
});



$('#t3').click(function() {
    $('#arts').show();
    $('#sports').show();
    $('#btn3').show();

    $('#t3').css('position' , 'unset');
    $('#box3').css('height', 'unset');

    $('#box1').hide();
    $('#box2').hide();
    $('#box4').hide();
    $('.arbre').hide();
    $('.deadleafs').hide();
});

$('#btn3').click(function(){
    $('#arts').hide();
    $('#sports').hide();
    $('#btn3').hide();

    $('#box1').show();
    $('#box2').show();
    $('#box4').show();
    $('.arbre').show();
    $('.deadleafs').show();

    $('#t3').css('position' , 'absolute');

    $('#box1').css('height', '50vh');
    $('#box2').css('height', '50vh');
    $('#box3').css('height', '50vh');
    $('#box4').css('height', '50vh');
});



$('#t4').click(function(){
    $('#contacts').show();
    $('#btn4').show();

    $('#t4').css('position' , 'unset');
    $('#box4').css('height', 'unset');

    $('#box1').hide();
    $('#box2').hide();
    $('#box3').hide();
    $('.arbre').hide();
    $('.leafs').hide();
});

$('#btn4').click(function(){
    $('#contacts').hide();
    $('#btn4').hide();

    $('#box1').show();
    $('#box2').show();
    $('#box3').show();
    $('.arbre').show();
    $('.leafs').show();

    $('#t4').css('position' , 'absolute');

    $('#box1').css('height', '50vh');
    $('#box2').css('height', '50vh');
    $('#box3').css('height', '50vh');
    $('#box4').css('height', '50vh');
});
