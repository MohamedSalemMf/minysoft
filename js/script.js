
$(document).ready(function () {//jsده اخر حاجه بعملها بعد م اخلاص ال



	$(window).scroll(function () {
		let wScroll = $(window).scrollTop();	//نزل لحد فين uesrده ال

		if (wScroll > 100) {
			$(".navbar-expand-lg").css("backgroundColor", "rgba(50, 48, 49,.9)");
			// $(".navbar-expand-lg").css("padding", "1rem 70px");
		}
		else {
			$(".navbar-expand-lg").css("backgroundColor", "rgba(50, 48, 49,.4)");

			// $(".navbar-expand-lg").css("padding", "1rem 0px");
		}
	})
})


// window.alert("Hello")    //Test
// Arrow Top Link
$(document).ready(function () {

	let aboutOffsetTop = $(".section2").offset().top;

	$(window).scroll(function () {
		let wScroll = $(window).scrollTop();

		if (wScroll > aboutOffsetTop - 50) {
			$(".Arrow-Top-scroll").fadeIn(200);
		}
		else {
			$(".Arrow-Top-scroll").fadeOut(200);
		}
	})

	$(".Arrow-Top-scroll").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 500);
	})

})


// =====================================================================================================================
// navbar maunn
let maunn = document.querySelector('.maunn');
maunn.addEventListener('click', function () {
	this.classList.toggle('is-active');
})

$(document).ready(function () {
	$('.mun-align').click(function () {
		$('.box-cilsh-nav').toggleClass('active')
	})
})


// ---------------
$(function () {
	let scroll = $(document).scrollTop();
	let navHeight = $('.box-nav-all').outerHeight();

	$(window).scroll(function () {
		var scrolled = $(document).scrollTop();

		if (scrolled > navHeight) {
			$('.box-nav-all').addClass('animate');
			// $(".navbar-expand-lg").css("padding", "1rem 70px");

		} else {
			$('.box-nav-all').removeClass('animate');
			// $(".navbar-expand-lg").css("padding", "1rem 0px");

		}

		if (scrolled > scroll) {
			$('.box-nav-all').removeClass('sticky');

		} else {
			$('.box-nav-all').addClass('sticky');
		}
		scroll = $(document).scrollTop();
	});

});



// =====================================================================================================================
// header


// =====================================================================================================================

//ده علشان بوكس الالوان

//ده علشان بوكس الالوان
let colorBoxWidth = $("#colorBox").outerWidth(); //colorBoxWidth واحطها في colorBoxانا كده بجيب عرض ال innerWidth

$("#sideBar").css({ left: `-${colorBoxWidth}` }); // يبقي جوه اول م افتح الموقع Boxده علشان ال

$("#sideBarToggle").click(function () {


	if ($('#sideBar').css("left") == "0px")//البوكس كده بره
	{
		$("#sideBar").animate({ left: `-${colorBoxWidth}` }, 2000);//left ب السالب ل colorBoxWidthكده لم اضغط علي الاعدادت داخل ال
	}
	else {
		$('#sideBar').animate({ left: `0px` }, 2000);//ده كده يبقي بره	0 = left ب sideBar انا كده بقول لو البوكس
	}

})

//تغير اللون في البوكس 
for (let i = 0; i < $(".color-item").length; i++) {
	let red = Math.round(Math.random() * 255);
	let green = Math.round(Math.random() * 255);
	let blue = Math.round(Math.random() * 255);

	$(".color-item").eq(i).css("backgroundColor", `rgb(${red} ,${green} ,${blue} )`);
}

//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
$(".color-item").click(function () {
	let itemColor = $(this).css("backgroundColor");
	$("*").css("color", itemColor)
})

for (let i = 0; i < $(".background-item").length; i++) {
	let red = Math.round(Math.random() * 255);
	let green = Math.round(Math.random() * 255);
	let blue = Math.round(Math.random() * 255);

	$(".background-item").eq(i).css("backgroundColor", `rgb(${red} ,${green} ,${blue} )`);
}

//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
$(".background-item").click(function () {
	let bgColor = $(this).css("backgroundColor");
	$("body,.navbar").css("backgroundColor", bgColor)
})











// ====================
var imgs = Array.from(document.querySelectorAll(".img-item img"));//8 //يجبلي رقم الصوره indexOf علشان لم اعمل Arrayتحول ل imgsعلشان ال Array.fromال


var lightBoxItem = document.getElementById("lightBoxItem");	// 6

for (var i = 0; i < imgs.length; i++) {

	imgs[i].addEventListener("click", function (eventInfo) {


		var imgSrc = eventInfo.target.getAttribute("src");	//5	// يعني اسم الصوره المسار src ده بيجيب target

		lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";	//7	// بتاع كل صوره src واحط backgroundImage وادخل style ادخل جوه lightBoxItem اجيب 

		// ده علشان سهم يمين و شمال 
		currentIndex = imgs.indexOf(eventInfo.target);//10	// currentIndex انا كده بقول هات رقم الصوره اللي ضغط عليها وحط في 
	})
}

// ================================================================================================
// index- works

$('.sliedr-owl-1').owlCarousel({
	loop: false,
	dots: false,
	margin: 10,
	nav: true,
	center: true,
	autoplay: true,
	autoplayTimeout: 1000,
	responsiveClass: true,

	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 2
		}
	}
})


// index- =========================================================================================================================
$('.slider-2').owlCarousel({
	nav: false,
	dots: false,
	center: true,
	loop: true,
	margin: 50,
	nav: true,


	center: true,

	responsiveClass: true,
	animateOut: 'fadeOut',
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	// rtl: true,
	responsive: {

		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		}
	}
});



// ====================================================================================================
$('.slider-works').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	dots: false,
	center: true,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,

	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1000: {
			items: 3
		}
	}
})



// =================================================================================================================
// // loading

$("#loading").fadeOut(4000 , function(){
	$("body").css("overflow-y" , "auto")
});

// ===================================================================================================================

AOS.init();