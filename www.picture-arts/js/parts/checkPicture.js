function checkPicture() {

    $(function() {
      $('.portfolio-menu li').click(function() {
        let get_id = this.id;
        let get_current = $('.portfolio-block .' + get_id);
    
        $('.post').not(get_current).hide(500);
        get_current.show("slow");
      });

      $('#showall').click(function() {
        $('.post').show(500);
      });  
      
      $('#chef').click(function() {
        $('.chef').show(1000);
      });
      $('#girl').click(function() {
        $('.girl').show(1000);
      });
      $('#guy').click(function() {
        $('.guy').show(1000);
      });
      $('#grandmother').click(function() {
        $('.grandmother').show(1000);
      });
      $('#granddad').click(function() {
        $('.granddad').show(1000);
      });
      $('#lovers').click(function() {
        $('.lovers').show(1000);
      });

    });
  };  
module.exports = checkPicture;