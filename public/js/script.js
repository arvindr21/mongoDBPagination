// init bootpag
$('#pager').bootpag({
    total: Math.ceil($("#totalRecords").val()/$("#size").val()),
    page : 1,
    maxVisible : 10,
    href: "#page-{{number}}",
}).on("page", function(event, /* page number here */ num) {
    populateTable(num);

});

var template = "<tr><td>_id</td><td>name</td><td>age</td><td>random</td>";

var populateTable = function (page) {
	var html = '';
	$.getJSON('/api/testdata?page='+page+'&size='+ $("#size").val(), function(data){
		data = data.data;
		for (var i = 0; i < data.length; i++) {
			var d = data[i];
			html += template.replace('_id', d._id)
							.replace('name', d.name)
							.replace('age', d.age)
							.replace('random', d.random); 
		};
		$('table tbody').html(html);
	});
};

// load first page data
populateTable(1);
