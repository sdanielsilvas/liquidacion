$(document).ready(function(){
  $("#calcular").click(function(){
  	var s = $('#salario').val();
  	var sal = (parseInt(s, 10))/30;
  	var hora=sal/8;
  	var hora_nocturna=hora*1.35;
  	var hora_extra_diurna=hora*1.25;
  	var hora_extra_nocturna=hora*1.75;
  	var hora_dominical=hora*1.75;
  	var hora_nocturna_dominical=hora*2.1;
  	var hora_extra_dominical_d=hora*2;
  	var hora_extra_dominical_n=hora*2.5;

  	var tipo_contrato=$('#tipo_contrato').val();

  	var total_hd=(parseInt(($('#v_diur').val()),10))*hora;
  	var total_hnoc=(parseInt(($('#v_noc').val()),10))*hora_nocturna;
  	var total_hediur=(parseInt(($('#v_ediur').val()),10))*hora_extra_diurna;
  	var total_henoc=(parseInt(($('#v_enoc').val()),10))*hora_extra_nocturna;
  	var total_hdom=(parseInt(($('#v_dom').val()),10))*hora_dominical;
  	var total_hdomn=(parseInt(($('#v_domn').val()),10))*hora_nocturna_dominical;
  	var total_hedom=(parseInt(($('#v_edom').val()),10))*hora_extra_dominical_d;
  	var total_hedomn=(parseInt(($('#v_edomn').val()),10))*hora_extra_dominical_n;

  	var total=total_hd+total_hnoc+total_hediur+total_henoc+total_hdom+total_hdomn+total_hedom+total_hedomn
  	
  	if(sal<1288600){
  		total=total+75000;
  	}

  	var ONE_DAY = 1000 * 60 * 60 * 24
  	//mes dia año
  	var date1_ms = $('#f_fin').val();
  	var date2_ms = $('#f_ini').val();
  	var datetf = $('#f_fin_contrato').val();
  	//calcular dias trabajados
    
    var liquidacion;
    var sieteAux="12/27/1992";
    var noventaAux="01/01/1981"
    var siete=Date.parse(sieteAux);
    var noventa=Date.parse(noventaAux);
    var fi=Date.parse(date2_ms);
    //dependiendo de la fecha del contrato
    if(tipo_contrato=="termino fijo"){
    	var diastf=(Date.parse(datetf) - Date.parse(date1_ms))/(1000*60*60*24)
    	
    	liquidacion=diastf*sal;
    	
    }
    else{
    	var diff = (Date.parse(date1_ms) - Date.parse(date2_ms))/(1000*60*60*24); 
   	    var dif_anos=Math.round((parseInt(diff, 10))/365);
        var dias_trabajados=diff-(dif_anos*5);
	    var dias_liquidacion=dias_trabajados-360;
	    
    	//ley 789
    	if(fi>siete){

	    	var dias_a_liquidar=((dias_liquidacion*20)/360)+30;
	    	liquidacion=dias_a_liquidar*sal;
	    	
	    
	    }
	    //ley 90
	    else{
	    	var dias_a_liquidar=((dias_liquidacion*40)/360)+45;
	    	liquidacion=dias_a_liquidar*sal;
	    
	    }
    }

    //Calcular prima
    var prima;
    //01/01/año_actual
    var y = new Date(date1_ms);
    var year=y.getFullYear();
    var ene="01/01/";
    var eneroAux = ene.concat(year);

    //01/07/año actual
    var y2 = new Date(date2_ms);
    var year2=y2.getFullYear();
    var month=y2.getMonth()+1;
    console.log(month);
    var day=y2.getDay();
    console.log(day);
    var jul="07/01/";
    var julioAux = jul.concat(year);
    var difPrima;
    //diferencua enero
    if(date1_ms<julioAux){
    	difPrima= (Date.parse(date1_ms) - Date.parse(eneroAux))/(1000*60*60*24);
    	
    }
    //diferencia julio
    else{
    	difPrima= (Date.parse(date1_ms) - Date.parse(julioAux))/(1000*60*60*24); 
    	
    }
    
    var dia_prima=total/30;
    var primaAux=((difPrima*15)/180);
    var primaFinal=primaAux*dia_prima;
    

    difCesantias= (Date.parse(date1_ms) - Date.parse(eneroAux))/(1000*60*60*24);
    var cesantias=((difCesantias*30)/360)*dia_prima;
    
    //intereses a las cesantias
    var por_interes_cesantias=(((difCesantias*12)/360)/100);
    var interes_cesantias=cesantias*por_interes_cesantias;
    

    //vacaciones
    var ano_nuevo=year-1;
    var dif_year = String(month).concat("/",String(day),"/",String(ano_nuevo));
    var dy = new Date(dif_year);
    console.log(dif_year);
    difVacaciones= (Date.parse(date1_ms) - Date.parse(dy))/(1000*60*60*24);
    console.log(difVacaciones);
    var vacaciones=((difVacaciones*15)/360)*dia_prima;
    console.log(String(vacaciones));
    $("#mostrar_salario").text(sal);
    $("#h").text(hora);
    $("#hn").text(hora_nocturna);
    $("#hed").text(hora_extra_diurna);
    $("#hen").text(hora_extra_nocturna);
    $("#hd").text(hora_dominical);
    $("#hdn").text(hora_nocturna_dominical);
    $("#hedd").text(hora_extra_dominical_d);
    $("#hedn").text(hora_extra_dominical_n);
    $("#liquidacion").text(liquidacion);
    $("#prima").text(primaFinal);
    $("#cesantias").text(cesantias);
    $("#interes_cesantias").text(interes_cesantias);
    $("#vacaciones").text(vacaciones);
    //$("#dias_trabajados").text(diff);
  });
});