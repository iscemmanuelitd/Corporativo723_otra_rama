function _sec(_i){
    let $divTot = $("<div>").css("display","flex");
    console.log("funcion de mierda "+ _i)
    switch(parseInt(_i)){
        case 0:return "Inicio";
        case 1:  let opc=[{i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                          i2:$("<div>").addClass("title new"),
                          i3:$("<img>").attr({"src":"/images/new4.png"}).addClass("character"),
                          $_dat:[$nuevoCli,"<h2>Nuevo Cliente</h2>","65%","60%"]
                          },
                          {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                          i2:$("<div>").addClass("title upd"),
                          i3:$("<img>").attr({"src":"/images/new2.png"}).addClass("character"),
                          $_dat:[$mapa,"<h2>Ubicar domicilio</h2>","50%","50%"]
                          },
                          {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                          i2:$("<div>").addClass("title selec       "),
                          i3:$("<img>").attr({"src":"/images/new1.png"}).addClass("character"),
                          $_dat:["Proximamente"]
                        
                        }
                        ];
                for(let i=0;i<opc.length;i++)
                    $divTot.append($("<a>").html($("<div>").addClass("card").html(opc[i].i1).append(opc[i].i2).append(opc[i].i3)).click(function(){ventanaForm(opc[i].$_dat)}))
                break;
        default: break;       
    } 
    return $divTot;
}

$(document).ready(function() {
   // document.write("<script src='./javascripts/forms/nuevoCliente.js' ></script>")
});


 function ventanaForm(_dat){
    let  $pre = $("<div>").html(_dat[0])
    alertify.dialogGuardar($pre.html()).set({title:_dat[1]})

    $("body").append($("<script>").attr("src","https://maps.googleapis.com/maps/api/js?key=AIzaSyDi2xjZpxYm9FK2BqWWxwN1CBEcckvUCho&libraries=places&callback=initMap&v=weekly"))
    
   // window.initMap
    //initMap({lat:22.025,lng:-102.365});


    //$(".ajs-dialog").css({"max-width":_dat[2],"height":_dat[3]})





        $("#cp").keyup(e=>{  
            let cp = parseInt($("#cp").val())
            if(cp >= 34000)  $.getJSON(`/coloniasCP?cp=${cp}`, function(data) {$("#col").html("");data.forEach(e=>{ $("#col").append($("<option>").val(e).html(e))})});
            else $("#col").html("")                     
        })

        $("#fileuploader").uploadFile({url:"/uploadFile",fileName:"misFiles"})

}




$(function () {
    $('.ah-tab-wrapper').horizontalmenu({
        itemClick : function(item) {
            secc = item[0].childNodes[0].data
            _idx = $(item).index() 
            $('.ah-tab-content-wrapper .ah-tab-content').removeAttr('data-ah-tab-active');
            $('.ah-tab-content-wrapper .ah-tab-content:eq(' + _idx + ')').attr('data-ah-tab-active', 'true')
            .html(_sec(_idx))
            return false; //if this finction return true then will be executed http request
        }
    });
});





