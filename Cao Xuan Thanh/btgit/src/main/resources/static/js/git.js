$(document).ready(function(){
	$("#btn-search").click(function(){
		$.ajax({url : "http://localhost:8080/employee/search?name="+$("#name").val()+"&email="+$("#email").val()}).then(function(data){
			console.log("abc")
		})
	})
})