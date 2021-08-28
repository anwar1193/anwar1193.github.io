// Event pada saat link di klik

$('.scroll-halaman').on('click', function(e){

	// ambil atribut isi href
	var tujuan = $(this).attr('href');

	// tangkap element ybs
	var elemenTujuan = $(tujuan);

	// Scroll Halaman
	$('html').animate({
		scrollTop: elemenTujuan.offset().top-50 //-50 supaya judul kebaca (naik ketas)
	},1000, 'linear'); // 1000 : 1 detik | swing/linear : nama effek
 
	e.preventDefault();

});



// Parallax Effect

//Efek Saat Di Scroll
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//Efek pada Jumbotron/header
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/3 +'%)'
	}); 

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	//Efek pada Portfolio (tambahkan efek muncul dari css)
	if(wScroll > $('.portfolio').offset().top - 200){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
		
	}

});

// Efek Saat Di Load
$(window).on('load',function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});