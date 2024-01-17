function _sec(_i){
    let $divTot = $("<div>").css("display","flex");
    console.log("funcion de mierda "+ _i)
    switch(parseInt(_i)){
        case 0:return "Inicio";
        case 1:  let opc=[{i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                          i2:$("<div>").addClass("title new"),
                          i3:$("<img>").attr({"src":"/images/new4.png"}).addClass("character"),
                          href:"Javascript:ventanaForm('nuevoUsuario.html',false,'p70')"
                          },
                          {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                          i2:$("<div>").addClass("title upd"),
                          i3:$("<img>").attr({"src":"/images/new2.png"}).addClass("character"),
                          href:"Javascript:ventanaForm('mapGoogle.html',false,'p70')"
                          },
                          {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                          i2:$("<div>").addClass("title selec       "),
                          i3:$("<img>").attr({"src":"/images/new1.png"}).addClass("character")
                          }
                        ];
                for(let i=0;i<opc.length;i++)
                    $divTot.append($("<a>").attr({"href":opc[i].href}).html($("<div>").addClass("card").html(opc[i].i1).append(opc[i].i2).append(opc[i].i3)))
                break;
        default: break;       
    } 
    console.log($divTot);
    return $divTot;
}

function ventanaForm(_src,_less,_sz){
    alertify.YoutubeDialog(_src).set({frameless:_less,basic:true,maximizable:false});
    $(".ajs-dialog").addClass(`fondoForms ${_sz}`)
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





