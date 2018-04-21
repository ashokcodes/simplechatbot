
  $(document).ready(function(){
    const user ='user';
    const bot = 'bot';
    var i = 0;
    var num = 0;
    responses = [
            {
                msg: "Hi! How are You?!",
                type: 0
            },
            {
                msg: "What would you like to drink?",
                type: 0
            },
            {
                msg: "Here you go",
                type: 1,
                options: ["Orange Juice","Pineapple Juice","Apple Juice"]
            }

        ]
    $('#simple-chat-val').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
         {
           let msg = $(this).val();
           if(msg != '') sendMessage(msg);
         }
       });   

       function scrollUP(){
            $('.simple-content').animate({scrollTop: 500},'slow');
       }

       function sendMessage(msg){
           let node = '<div class="myMessage p-1"><div class="wrapper card p-3">'+msg+'</div></div>';
           $('.simple-content').append(node);
           $('#simple-chat-val').val('');
           setTimeout(getMessage,500);
           scrollUP();
       }

       function getMessage(){
           let response = responses[i];i++;
           let msg = response.msg;
           if(response.type == 0){
                setId = 'simple-id-msg'+num;num++;
                let node = '<div id="'+setId+'" class="urMessage p-1"><div class="ml-auto text-white wrapper bg-primary card p-3">'+msg+'</div></div>';
                $('.simple-content').append(node);
                $('.simple-content').find('#'+setId).scrollTop();
           } 
           else{
                setId = 'simple-id-msg'+num;num++;
                let len = response.options.length;
                let node = '<div id="'+setId+'" class="urMessage p-1"><div class="ml-auto text-white wrapper bg-primary card p-3">'+msg+'</div>';
                node+= '<div class="msg-options">';
                for(ind=0;ind<len;ind++) node+='<div class="msg-option card">'+response.options[ind]+'</div>';

                node+= '</div></div>';
                $('.simple-content').append(node); 
 
           }
           scrollUP();
        }

    });