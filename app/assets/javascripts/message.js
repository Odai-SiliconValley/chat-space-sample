$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,  
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    $(function(){ 
      function buildHTML(message){
       if ( message.image ) {
         var html =
          `<div class="chat-main__messages-list">
             <div class="chat-main__messages-list__message">
               <div class="chat-main__messages-list__message__upper-info">
                 <div class="upper-message__talker">
                   ${message.user_name}
                 </div>
                 <div class="upper-message__date">
                   ${message.created_at}
                 </div>
               </div>
             </div>
             <div class="chat-main__messages-list__message__text">
               <p class="chat-main__messages-list__message__text__content">
                 ${message.content}
               </p>
             </div>
             <img src=${message.image} >
           </div>`
         return html;
       } else {
         var html =
          `<div class="chat-main__messages-list">
            <div class="chat-main__messages-list__message">
              <div class="chat-main__messages-list__message__upper-info">
                <div class="upper-message__talker">
                  ${message.user_name}
                </div>
                <div class="upper-message__date">
                  ${message.created_at}
                </div>
              </div>
            </div>
          <div class="chat-main__messages-list__message__text">
            <p class="chat-main__messages-list__message__text__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
         return html;
       };
     }
   $('#new_message').on('submit', function(e){
     e.preventDefault();
     var formData = new FormData(this);
     var url = $(this).attr('action')
     $.ajax({
       url: url,
       type: "POST",
       data: formData,
       dataType: 'json',
       processData: false,
       contentType: false
     })
      .done(function(data){
        var html = buildHTML(data);
        $('.chat-main__messages-list').append(html);
        $('form')[0].reset();
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
        $('.submit-btn').prop('disabled', false);
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
    });
    })
    })
  });
});