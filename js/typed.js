new Typed("#typed", {
	stringsElement: "#typed-strings",
	smartBackspace: true,
	typeSpeed: 50,
	backSpeed: 20,
	backDelay: 1500,
	showCursor: false,
	onComplete: (self) => {
		let sub = $("#typed")
		let hdr = sub.parent().children().first()

		sub.animate({
			"font-size": "54px",
			"margin-top": "-84px"
		}, 2000)
		hdr.fadeOut(2000, () => {
			sub.css("margin-top", 0)
		})
	}
})