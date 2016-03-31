document.addEventListener("DOMContentLoaded", function() {
    var data = [{
        firstName: "Crystal",
        lastName: "Meng"
    }, {
        firstName: "Helena",
        lastName: "Qin"
    }];


    var myTable = $("#my-table");

    data.forEach(function(p) {
       myTable.append($("<tr></tr>")
            .append($("<td></td>").text(p.firstName))
            .append($("<td></td>").text(p.lastName)))
    });

    function buttonClick() {

        // var row = $("<tr></tr>"),
        // firstName = $("#first-name").val(),
        // lastName = $("#last-name").val();
        // var td1 = $("<td></td>");
        // var td2 = $("<td></td>");
        // td1.text(firstName);
        // row.append(td1);
        // td2.text(lastName);
        // row.append(td2);
        // 
        myTable.append($("<tr>")
            .append($("<td>").text($("#first-name").val()))
            .append($("<td>").text($("#last-name").val())))


        // row.append($("<td>" + $("#first-name").val() + "</td>"));
        // row.append($("<td>" + $("#last-name").val() + "</td>"));
        //$("#my-table").append(row);
    }

    $("button").on("click", buttonClick);

});