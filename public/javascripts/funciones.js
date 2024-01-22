

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
      .append($("<div>").addClass("login").html($("<input>").attr({"id":"contra","type":"password","placeholder":"Contraseña","required":"true"})))
      )
      let v = alertify.genericDialog($('#loginForm')[0]).set({'selector':'input[type="text"]',frameless:false,"oncancel":function(){return true}});
    }else{establecerSesion()}
    
});

function onAutenticar(json){
  $.post("/users/autenticar",{usuario:$("#usuario").val(),contra:hex_md5($("#contra").val())})
    .done(json=>{
      if(json.estatus){
          localStorage.setItem("sesion",JSON.stringify(json.datos))
          alertify.notify('Sesion Iniciada', 'success', 5, establecerSesion());          
      }else{
         alertify.notify(json.mensaje,'error',5,location.reload())
      }
    })  
}



async function ss(chunk){
  const ts = new TransformStream()

 return await ts.readable.pipeThrough(new TransformStream({
    transform (chunk, ctrl) {
      if (chunk instanceof Uint8Array) return ctrl.enqueue(chunk)
      const reader = new Response(chunk).body.getReader()
      const pump = _ => reader.read().then(e => e)
      return pump()
    }
  }))
// pump(ctrl.enqueue(e.value))
 
}

function googleBuscar(){ 
  url = "https://www.google.com.mx/s?tbm=map&suggest=p&gs_ri=maps&psi=EgKtZcODG6SyqtsPx4us0AY.1705871186594.1&gl=mx&hl=es-419&authuser=0&q=Las+Adelitas+206+Emiliano+Zapata%2C+Vi&ech=137&pb=!2i36!4m12!1m3!1d4194.235765489086!2d-104.62678152410535!3d24.03596857847666!2m3!1f0!2f0!3f0!3m2!1i1116!2i884!4f13.1!7i20!10b1!12m17!1m1!18b1!2m3!5m1!6e2!20e3!10b1!12b1!13b1!16b1!17m1!3e1!20m4!5e2!6b1!8b1!14b1!19m4!2m3!1i360!2i120!4i8!20m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m42!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e9!2b1!3e2!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!2b1!4b1!9b0!22m3!1sEgKtZcODG6SyqtsPx4us0AY!7e81!17sEgKtZcODG6SyqtsPx4us0AY%3A843!23m3!1e116!4b1!10b1!24m94!1m29!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m18!3b1!4b1!5b1!6b1!9b1!12b1!13b1!14b1!15b1!17b1!20b1!21b1!22b1!25b1!27m1!1b0!28b0!31b0!10m1!8e3!11m1!3e1!14m1!3b1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m2!1b1!3b1!65m5!3m4!1m3!1m2!1i224!2i298!71b1!72m17!1m5!1b1!2b1!3b1!5b1!7b1!4b1!8m8!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_reviews!9b1!89b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!26m4!2m3!1i80!2i92!4i8!34m18!2b1!3b1!4b1!6b1!8m6!1b1!3b1!4b1!5b1!6b1!7b1!9b1!12b1!14b1!20b1!23b1!25b1!26b1!37m1!1e81!47m0!49m7!3b1!6m2!1b1!2b1!7m2!1e3!2b1!61b1!67m2!7b1!10b1!69i677"
  var myHeaders = new Headers();

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "no-cors",
    cache: "default",
  };
  
  var myRequest = new Request(url, myInit);

  fetch(myRequest)
  .then(  response => {return  response})
  .then(async data => console.log( await ss(data)))
  .catch(error => console.log(`Error: ${error}`));
 
}