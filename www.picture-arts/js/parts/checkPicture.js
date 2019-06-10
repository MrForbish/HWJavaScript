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
        $('.chef').show(1500);
      });
      $('#girl').click(function() {
        $('.girl').show(1500);
      });
      $('#guy').click(function() {
        $('.guy').show(1500);
      });
      $('#grandmother').click(function() {
        $('.grandmother').show(1500);
      });
      $('#granddad').click(function() {
        $('.granddad').show(1500);
      });
      $('#lovers').click(function() {
        $('.lovers').show(1500);
      });

    });
  };  
module.exports = checkPicture;