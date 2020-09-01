function mediaModal(src){
	let box = $("#modal-media")
	box.css("display", "block")
	if (src !== undefined){
		box.find("img").attr("src", src)
	}
}

function mediaModalClose(){
	$("#modal-media").css("display", "none")
}

$("a.lightbox").click(evt => {
	evt.preventDefault()
	mediaModal($(evt.currentTarget).attr("href"))
})

$(document).keyup(evt => {
	let code = evt.keyCode ? evt.keyCode : evt.which
	if (code === 27){
		mediaModalClose()
	}
})
