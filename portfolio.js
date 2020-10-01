//Afficher et cacher les parties
$('#box1').click(function(){
    $('#presentation').toggle();
    $('#langues').toggle();
    $('#informatiques').toggle();
    $('#btn1').toggle();

    $('#t1').css('position' , 'unset');
    $('#box1').css('height', 'unset');

    $('#box2').toggle();
    $('#box3').toggle();
    $('#box4').toggle();
    $('.arbre').toggle();
    $('.snowflakes').toggle();
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
    $('#box2').css('height', '50vh');
    $('#box3').css('height', '50vh');
    $('#box4').css('height', '50vh');
});



$('#box2').click(function(){
    $('#etudes').toggle();
    $('#experiences').toggle();
    $('#btn2').toggle();

    $('#t2').css('position' , 'unset');
    $('#box2').css('height', 'unset');

    $('#box1').toggle();
    $('#box3').toggle();
    $('#box4').toggle();
    $('.arbre').toggle();
    $('.flowers').toggle();
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
    $('#arts').toggle();
    $('#sports').toggle();
    $('#btn3').toggle();

    $('#t3').css('position' , 'unset');
    $('#box3').css('height', 'unset');

    $('#box1').toggle();
    $('#box2').toggle();
    $('#box4').toggle();
    $('.arbre').toggle();
    $('.deadleafs').toggle();
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
    $('#contacts').toggle();
    $('#btn4').toggle();
    $('.leafs').toggle();

    $('#t4').css('position' , 'unset');
    $('#box4').css('height', 'unset');

    $('#box1').toggle();
    $('#box2').toggle();
    $('#box3').toggle();
    $('.arbre').toggle();
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
