
$(document).ready(()=>{

    $('input[name="radioGender"]').checkboxradio();

    $("#datepick").datepicker({
        changeYear : true
    });

    let provinceList = 
        ["Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay", "Bukidnon", "Camiguin", "Lanao del Norte", "Misamis Occidental", "Misamis Oriental", "Davao del Norte", "Davao del Sur", "Davao Oriental", "Davao de Oro", "Davao Occidental", "Cotabato", "South Cotabato", "Sultan Kudarat", "Sarangani", "Basilan (except Isabela City)", "Lanao del Sur", "Maguindanao", "Sulu", "Tawi-Tawi", "Agusan del Norte", "Agusan del Sur", "Surigao del Norte", "Surigao del Sur", "Dinagat Islands"];
    $("#provinces").autocomplete({
        source : provinceList
    });

    $("#yearlvl").spinner({
        max: 5,
        min: 1
    });

    $("#submit").click(()=>{
        const FNAME = $("#fname").val();        
        const LNAME = $("#lname").val();
        const MNAME = $("#mname").val();
        const GENDER = $('input[name="radioGender"]:checked').val();
        const DOB = $('#datepick').val();
        const PROVINCE = $("#provinces").val();
        const YEARLVL = $("#yearlvl").val();

        alert(`First Name : ${FNAME}\nMiddle Name : ${MNAME}\nLast Name : ${LNAME}\nGender : ${GENDER}\nDate of Birth : ${DOB}\nProvince : ${PROVINCE}\nYear Level : ${YEARLVL}`);

    });

});