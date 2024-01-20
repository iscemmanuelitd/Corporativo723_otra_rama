    let $prin = _div("nuevoCliente")
    let $form1 = $("<form>").attr({"id":"nCli","action":"Javascript:valida()"})
    let $fs1 = $("<fielset>").addClass("_datPerso").html("Datos Personales<br>")
    let $fs2 = $("<fielset>").addClass("direccion").html("Dirección<br>")
    $fs1.append(_inp("text","nombre","enlinea imp w200","Nombre",true)).append(_inp("text","paterno","enlinea imp w200","Apellido Paterno",true))
    .append(_inp("text","materno","enlinea imp w200","Apelllido Materno",true)).append(_inp("date","fecha_nac","blo w100","Fecha de Nacimiento",true))
    .append(_inp("tel","tel","blo w100","999-9999999",true)).append(_inp("text","cveElector","blo w150","Clave de Elector",true)).append(_div("fileuploader","Arrastre  y suelte la imagen de la credencial" ,"enlinea","Cargar Credencial"))
    $fs2.append(_inp("text","calle","enlinea w300","Calle, Avenida, Carretera, etc",true)).append(_inp("number","num_ext","enlinea  w100","Num ext",true))
    .append(_inp("text","num_int","enlinea  w100","Num int",true)).append(_inp("text","cp","enlinea w100","Código Postal",true))
    .append($("<select>").attr({"name":"colonias","id":"col"}).addClass("enlinea w150"))
    $form1.append($fs1).append($fs2).append(_inp("submit",clase="btnGuarda",valor="Enviar"))
    $prin.html($form1)


function _div(id="",tit="",clase="",html=""){
    let $o = $("<div>")
    $o.attr({"id":id,"title":tit}).addClass(clase).html(html)
    return $o
}

function _inp(tipo,id="",clase="",ph="",req=false,valor=""){
    let $i = $("<input>")
    $i.attr({"type":tipo,"id":id,"placeholder":ph,"required":req}).addClass(clase).val(valor)
    return $i
}

/*
            <div id="drop-area">
                <form class="my-form">
                  <p>Arrastrar  y Soltar archivo en esta área</p>
                  <input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)">
                  <label class="button" for="fileElem">Selecciona algun archivo</label>
                </form>
                <div id="gallery"></div>
            </div>
            <progress id="progress-bar" max=100 value=0></progress>
    <div id="fileuploader">Upload</div>

*/

