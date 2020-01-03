//$(document).ready(function(){
//	$("#btn-search").click(function(){
//		$.ajax({url : "http://localhost:8080/employee/search?name="+$("#name").val()+"&email="+$("#email").val()}).then(function(data){
//			console.log("abc")
//		})
//	})
//});

function searchViaAjax() {

			var name = $("#query").val();
			var email = $("query").val();

			$.ajax({
				type : "GET",
				contentType : "application/json",
				url : "employee/search?name="+name+"&email="+email ,
				data : {
					name : name,
					email : email
				},
				dataType : 'json',
				timeout : 100000,
				success : function(data) {
					
				},
				error : function(e) {
					console.log("ERROR: ", e);
				}
			});
		}

//$(document).ready(function () {
//
//    $("#search-form").submit(function (event) {
//        event.preventDefault();
//
//       ajax_submit();
//
//    });
//
//});
//
//function ajax_submit() {
//
//    var search = {}
//    search["name"] = $("#name").val();
//    search["email"] = $("#email").val();
//
//    $("#btn-search").prop("disabled", true);
//
//    $.ajax({
//        type: "GET",
//        contentType: "application/json",
//        url: "/employee/search",
//        data: JSON.stringify(search),
//        dataType: 'json',
//        cache: false,
//        timeout: 600000,
//        success: function (data) {
//
//            var json = "<h4>Ajax Response</h4><pre>"
//                + JSON.stringify(data, null, 4) + "</pre>";
//            $('#feedback').html(json);
//
//            console.log("SUCCESS : ", data);
//            $("#btn-search").prop("disabled", false);
//
//        },
//        error: function (e) {
//
//            var json = "<h4>Ajax Response</h4><pre>"
//                + e.responseText + "</pre>";
//            $('#feedback').html(json);
//
////            console.log("ERROR : ", e);
//            $("#btn-search").prop("disabled", false);
//
//        }
//    });
//
//}