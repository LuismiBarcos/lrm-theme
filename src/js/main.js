$(document).ready(function() {
	$('#searchCollapse').on('shown.bs.collapse', function () {
		$('#navbarCollapse').collapse('hide');
		$(".search-toggle .form-control").focus();
	});

	$('#navbarCollapse').on('shown.bs.collapse', function () {
		$('#searchCollapse').collapse('hide');
	});

	$('#searchCollapse').on('show.bs.collapse', function () {
		$('.navbar-lrm .nav-item.active').addClass('out');
	});

	$('#searchCollapse').on('hide.bs.collapse', function () {
		$('.navbar-lrm .nav-item.active').removeClass('out');
	});

	$('.lfr-nav-child-toggle').click(function(event) {
		if (parseInt($(window).width()) < 768) {
			event.preventDefault();
			$(this).parents('li').toggleClass('open');
		}
	});
	bb.generate({
		data: {
		  columns: [
		  ["data1", 30, 200, 100, 400, 150, 250],
		  ["data2", 130, 100, 140, 200, 150, 50]
		  ],
		  type: "bar"
		},
		bar: {
		  width: {
			ratio: 0.5
		  }
		},
		grid: {
			y: {
			  show: true
			}
		},
		bindto: "#bar-chart"
	  });
});