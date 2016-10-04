String.prototype.repeat = function (n) {
    var str = '';
    for(var i = 0; i < n; i++) { str += this; }
    return str;
};

function main () {
	$("input#sub").on("click", function() {
		var size = $("input#and").val();
	for ( var y = 0; y < size; y++) {
		var input = $("<tr>" + ("<td><div class='shape'></div></td>").repeat(size) + "</tr>");
		input.appendTo("table.container");
	}

	$("div.shape").on("mouseover", function() {
		$(this).css("background", "blue");
	});
	$("div.shape").on("mouseout", function() {
		$(this).css("background", "green");
	});
});
}






$(document).ready(main());