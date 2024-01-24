valida = alertify.dialog('genericDialog',function(){
    return {
        main:function(content){
            this.setContent(content);
        },
        setup:function(){
            return {
                buttons:[{text: 'Entrar',key: 13, invokeOnClose: false, className: alertify.defaults.theme.ok, scope:'primary'},
                         {text: 'Cancelar',key: 27, invokeOnClose: true, className: alertify.defaults.theme.cancel, scope:'secondary'}],
                focus:{element:function(){
                        return this.elements.body.querySelector(this.get('selector'));
                    },
                    select:false
                },
                options:{
                    basic:false,
                    maximizable:false,
                    resizable:false,
                    padding:false,
                    title:"Iniciar Sesión",
                    modal: true,
                    frameless:false,
                    pinned: true,
                    movable: false,
                    moveBounded:false,
                    autoReset: false,
                    closable: false,
                    closableByDimmer: false,
                    maximizable: false
                }
            };
        },
        callback:function(closeEvent){
            if(closeEvent.index==0)
                {$("#modal").addClass("ocultar"); onAutenticar();}
            else
               location.reload()
        },
        settings:{
            selector:undefined
        }
    };
  });



guardar = alertify.dialog("dialogGuardar",function factory(){
    return {
        main:function(conte){
            this.contenido = conte;
        },
        setup:function(){
            return {
                buttons:[{text:"Guardar", key:10,invokeOnClose: false},{text:"Cancelar",key:27,invokeOnClose: true}],
                options:{title:"Nuevo Cliente",basic:false,closable:true,closableByDimmer:true,resizable:true,frameless:false},
                
            }
        },
        prepare: function(){
            this.setContent(this.contenido)
        },
        callback:function(closeEvent){ console.log(closeEvent)}        
    }
})