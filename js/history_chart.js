google.charts.load("current", {
	"packages":
		["gantt"]
	}
)

google.charts.setOnLoadCallback(() => {
	let data = new google.visualization.DataTable()
	data.addColumn('string', 'Task ID')
	data.addColumn('string', 'Task Name')
	data.addColumn('date', 'Start Date')
	data.addColumn('date', 'End Date')
	data.addColumn('number', 'Duration')
	data.addColumn('number', 'Percent Complete')
	data.addColumn('string', 'Dependencies')

	function addRow(id, name, start, end, dur, perc=0, deps=null){
		data.addRow([id, name, start, end, dur, perc, deps])
	}

	addRow("test", "testing", new Date(), null, 100000, 0)

	let options = {
		height: 275
	}
	let chart = new google.visualization.Gantt(document.getElementById('history_chart'))

	chart.draw(data, options)
})
