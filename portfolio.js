//Afficher et cacher les parties
$('#box1').click(function() {
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

$('#btn1').click(function(){
    $('#presentation').toggle();
    $('#langues').toggle();
    $('#informatiques').toggle();
    $('#btn1').toggle();

    $('#box2').toggle();
    $('#box3').toggle();
    $('#box4').toggle();
    $('.arbre').toggle();
    $('.snowflakes').toggle();

    $('#t1').css('position' , 'absolute');

    $('#box1').css('height', '50vh');
});



$('#box2').click(function(){
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

$('#btn2').click(function(){
    $('#etudes').toggle();
    $('#experiences').toggle();
    $('#btn2').toggle();

    $('#box1').toggle();
    $('#box3').toggle();
    $('#box4').toggle();
    $('.arbre').toggle();
    $('.flowers').toggle();

    $('#t2').css('position' , 'absolute');

    $('#box1').css('height', '50vh');
    $('#box2').css('height', '50vh');
    $('#box3').css('height', '50vh');
    $('#box4').css('height', '50vh');
});



$('#box3').click(function(){
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
    $('#arts').toggle();
    $('#sports').toggle();
    $('#btn3').toggle();

    $('#box1').toggle();
    $('#box2').toggle();
    $('#box4').toggle();
    $('.arbre').toggle();
    $('.deadleafs').toggle();

    $('#t3').css('position' , 'absolute');

    $('#box1').css('height', '50vh');
    $('#box2').css('height', '50vh');
    $('#box3').css('height', '50vh');
    $('#box4').css('height', '50vh');
});



$('#box4').click(function(){
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
    $('#contacts').toggle();
    $('#btn4').toggle();

    $('#box1').toggle();
    $('#box2').toggle();
    $('#box3').toggle();
    $('.arbre').toggle();
    $('.leafs').toggle();

    $('#t4').css('position' , 'absolute');

    $('#box1').css('height', '50vh');
    $('#box2').css('height', '50vh');
    $('#box3').css('height', '50vh');
    $('#box4').css('height', '50vh');
});
