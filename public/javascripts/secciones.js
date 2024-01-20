function _sec(_i){
    let $divTot = $("<div>").css("display","flex");
    console.log("funcion de mierda "+ _i)
    switch(parseInt(_i)){
        case 0:return "Inicio";
        case 1:  let opc=[{i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                          i2:$("<div>").addClass("title new"),
                          i3:$("<img>").attr({"src":"/images/new4.png"}).addClass("character"),
                          href:"Javascript:ventanaForm('../htmls/nuevoUsuario.html',false,'p90')"
                          },
                          {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                          i2:$("<div>").addClass("title upd"),
                          i3:$("<img>").attr({"src":"/images/new2.png"}).addClass("character"),
                          href:"Javascript:ventanaForm('../htmls/mapGoogle.html?24.035981732217383,-104.62414703755184 ',false,'p70','Ubicar domicilio cliente')"
                          },
                          {i1:$("<div>").addClass("wrapper").html($("<img>").attr({"src":"/images/newuser.jpg"}).addClass("cover-image")),
                          i2:$("<div>").addClass("title selec       "),
                          i3:$("<img>").attr({"src":"/images/new1.png"}).addClass("character"),
                          href:"Javascript:ventanaForm('https://www.google.com/maps/embed/v1/place?q=206+las+adelitas,+Durango,+Mexico&key=AIzaSyDi2xjZpxYm9FK2BqWWxwN1CBEcckvUCho',true,'p90')"  
                        
                        }
                        ];
                for(let i=0;i<opc.length;i++)
                    $divTot.append($("<a>").attr({"href":opc[i].href}).html($("<div>").addClass("card").html(opc[i].i1).append(opc[i].i2).append(opc[i].i3)))
                break;
        default: break;       
    } 
    return $divTot;
}

$(document).ready(function() {
   // document.write("<script src='./javascripts/forms/nuevoCliente.js' ></script>")
});


function ventanaForm(_src,_less,_sz,_tit=""){
   let  $pre = $("<div>").css("width","90%").html($prin)
    alertify.confirm($pre.html(), function(){
            alertify.success('Accepted');
        },function(){
            alertify.error('Declined');
        }).set({labels:{ok:'Accept', cancel: 'Decline'}, padding: true,resizable:true});

        $(".ajs-dialog").css({"max-width":"75%","height":"50%"})

        $("#cp").keyup(e=>{  
            let cp = parseInt($("#cp").val())
            if(cp >= 34000){                    
                $.getJSON(`/coloniasCP?cp=${cp}`, function(data) {
                    $("#col").html("")                        
                    data.forEach(e=>{ $("#col").append($("<option>").val(e).html(e))})                
                })
             }else{
                $("#col").html("")                    
             }     
        })

       console.log( $("#fileuploader").uploadFile({
            url:"/uploadFile",
            fileName:"misFiles"
        }))
/*
    alertify.YoutubeDialog(_src).set({title:_tit,frameless:_less,basic:true,maximizable:false});
    $(".ajs-dialog").removeClass("p45 p70 p90").addClass(`fondoForms ${_sz}`)
    $(".ajs-header").css("opacity","1")*/
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





