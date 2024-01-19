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
                onAutenticar()
            else
               location.reload()
        },
        settings:{
            selector:undefined
        }
    };
  });


  

  alertify.YoutubeDialog || alertify.dialog('YoutubeDialog',function(){
    var iframe;
    return {
        // dialog constructor function, this will be called when the user calls alertify.YoutubeDialog(videoId)
        main:function(srcForm){
            //set the videoId setting and return current instance for chaining.
            return this.set({ 
                'srcForm': srcForm,
                
            });
        },
        // we only want to override two options (padding and overflow).
        setup:function(){
            return {
                options:{
                    //disable both padding and overflow control.
                    padding : !1,
                    overflow: !1
                }
            };
        },
        // This will be called once the DOM is ready and will never be invoked again.
        // Here we create the iframe to embed the video.
        build:function(){           
            // create the iframe element
            iframe = document.createElement('iframe');
            iframe.frameBorder = "no";
            iframe.width = "100%";
            iframe.height = "100%";
            // add it to the dialog
            this.elements.content.appendChild(iframe);

            //give the dialog initial height (half the screen height).
            this.elements.body.style.minHeight = screen.height * .5 + 'px';
        },
        // dialog custom settings
        settings:{
            srcForm:undefined
          
        },
        // listen and respond to changes in dialog settings.
        settingUpdated:function(key, oldValue, newValue){
            switch(key){
               case 'srcForm':
                    iframe.src =  newValue;
                    break;
            }
        },
        // listen to internal dialog events.
        hooks:{
            // triggered when the dialog is closed, this is seperate from user defined onclose
            onclose: function(){
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
            },
            // triggered when a dialog option gets update.
            // warning! this will not be triggered for settings updates.
            onupdate: function(option,oldValue, newValue){
                switch(option){
                    case 'resizable':
                        if(newValue){
                            this.elements.content.removeAttribute('style');
                            iframe && iframe.removeAttribute('style');
                        }else{
                            this.elements.content.style.minHeight = 'inherit';
                            iframe && (iframe.style.minHeight = 'inherit');
                        }
                    break;    
                }    
            }
        }
    };
});
//show the dialog
