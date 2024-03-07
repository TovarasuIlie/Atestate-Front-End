$(document).ready(function() {
	$('img').click(function() {
		$("#zoomImageModal img").attr('src', $(this).attr('src'));
		$('#zoomImageModal').modal('show');
	})
})