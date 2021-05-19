if ($('.dropdown-qa').length) {
    console.log("tes")
    $(".card-toggle").click(function () {
        var $not = $(this).closest('.card');
        $(".card").not($not).removeClass("select");
        $(this).closest( ".card" ).toggleClass("select");
    });
}