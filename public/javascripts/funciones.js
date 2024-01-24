

sesion = localStorage.getItem("sesion")
establecerSesion = function(){var _s = JSON.parse(localStorage.getItem("sesion")); sesion=JSON.stringify(_s);  $(".lbl_usu").html(_s.nombre+" "+_s.paterno+" "+_s.materno)}
let $inicio = $("<div>").addClass("x")
let opc = [{texto:"Inicio",icono:"home"},{texto:"Clientes",icono:"clientes"},{texto:"Prestamos",icono:"prestamos"},{texto:"Informes",icono:"info"},{texto:"Acerca de",icono:"acerca"}]
estilo={"position":"fixed","left":"1px","top":"0","padding":"0px 1px","z-index":"0","opacity":"0.2"}
$( document ).ready(function() {
    
    let $items = $("<div>").addClass("ah-tab-wrapper") 
    let $lista = $("<div>").addClass("ah-tab")
    let $contenido = $("<div>").addClass("ah-tab-content-wrapper")
    opc.forEach(o=>{$lista.append($("<a>").addClass("ah-tab-item").html(o.texto).append($("<img>").css(estilo).attr("src",`/images/white-24dp/2x/${o.icono}.png`)));
                    $contenido.append($("<div>").addClass("ah-tab-content").html($("<h2>").html(o.texto)));
                  })
    $($lista[0].childNodes[0]).attr('data-ah-tab-active', 'true')
    $($contenido[0].childNodes[0]).attr('data-ah-tab-active', 'true')
    $items.html($lista)
    $(".content").html($items).append($("<div>").addClass("lbl_usu").html("usuario").click(()=>{ alertify.notify(sesion,'custom',10) })).append($contenido)
                
    if(sesion==null){
      $("#loginForm").html($("<fieldset>")
        .html($("<div>").addClass("login").html($("<input>").attr({"id":"usuario","type":"text","placeholder":"Usuario","required":"true"})))
      .append($("<div>").addClass("login").html($("<input>").attr({"id":"contra","type":"password","placeholder":"Contraseña","required":"true"}))))
      
      let v = alertify.genericDialog($('#loginForm')[0]).set({'selector':'input[type="text"]',frameless:false,"oncancel":function(){return true}});
      v.set("resizable",true).resizeTo("50%",240)
      $(".ajs-dialog").addClass("fondoForms p35")
    }else{establecerSesion()}
    
});

function onAutenticar(json){
  $("#modal").removeClass("ocultar")
  $.post("/users/autenticar",{usuario:$("#usuario").val(),contra:hex_md5($("#contra").val())})
    .done(json=>{
      if(json.estatus){
          localStorage.setItem("sesion",JSON.stringify(json.datos))          
          alertify.notify('Sesion Iniciada', 'success', 5, establecerSesion());          
      }else{
         alertify.notify(json.mensaje,'error',5,location.reload())
      }
      $("#modal").addClass("ocultar")
    })  
}
