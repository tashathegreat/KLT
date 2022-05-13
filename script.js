$("button").click(function(){
    let timespermonth=$(".input1").val();
    let favmovie=$(".input2").val();
    let year=$(".input3").val();
    console.log(favmovie);
    let years=2030-year;
    let totalmonths=year*12;
    let horror=timespermonth*totalmonths;
    $(".klt").text("In the year 2030 I would have watched "+ horror+ " horror movies");
    
});