<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="script.js"></script>
</head>
<body>
<input type="text" id="salario"></input>
<input type="button" id="calcular" value="calcular"></input>
<p>fecha inicial</p><input type="text" id="f_ini">
<p>fecha final</p><input type="text" id="f_fin">
 <select id="tipo_contrato">
  <option value="termino indefinido">termino indefinido</option>
  <option value="termino fijo">termino fijo</option>
</select> 
<p>fecha terminacion del contrato</p><input type="text" id="f_fin_contrato">
<div>
<table>
	<tr>
	<td><p>horas diurnas</p></td><td><input type="text" id="v_diur"></td>
	</tr>
	<tr>
	<td><p>horas nocturnas</p></td><td><input type="text" id="v_noc"></td>
	</tr>
	<tr>
    <td><p>horas extras diurnas</p></td><td><input type="text" id="v_ediur"></td>
	</tr>
	<tr>
	<td><p>horas extras nocturnas</p></td><td><input type="text" id="v_enoc"></td>
	</tr>
	<tr>
	<td><p>horas dominicales</p></td><td><input type="text" id="v_dom"></td>
	</tr>
	<tr>
	<td><p>horas dominicales nocturnas</p></td><td><input type="text" id="v_domn"></td>
	</tr>
	<tr>
	<td><p>horas extras dominicales diurnas</p></td><td><input type="text" id="v_edom"></td>
	</tr>
	<tr>
	<td><p>horas extras dominicales nocturnas</p></td><td><input type="text" id="v_edomn"></td>
	</tr>
</table>
</div>

<p>valor del dia:</p><p id="mostrar_salario"></p>
<p>valor hora:</p><p id="h"></p>
<p>valor hora nocturna:</p><p id="hn"></p>
<p>valor hora extra diurna:</p><p id="hed"></p>
<p>valor hora extra nocturna:</p><p id="hen"></p>
<p>valor hora dominical:</p><p id="hd"></p>
<p>valor hora dominical nocturna:</p><p id="hdn"></p>
<p>valor hora extra dominical diurna:</p><p id="hedd"></p>
<p>valor hora extra dominical nocturna:</p><p id="hedn"></p>
<p>LIQUIDACION:</p><p id="liquidacion"></p>
<p>PRIMA:</p><p id="prima"></p>
<p>CESANTIAS:</p><p id="cesantias"></p>
<p>INTERESES CESANTIAS:</p><p id="interes_cesantias"></p>
<p>VACACIONES:</p><p id="vacaciones"></p>
</body>
</html>
