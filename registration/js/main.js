
/*form action
=================================================*/
      function showAnim(){
        let el = document.getElementById("submit-anim");
        el.style.display = "flex";
      }
      function closeAnim(){
        let el = document.getElementById("submit-anim");
        el.style.display = "none";
      }
      function submit(e){
        e.preventDefault();
        //validate
        let data = new FormData(e.target);
        let req = new XMLHttpRequest();
        
        req.open("POST",e.target.action);
        req.onload = function(e){
          closeAnim();
          if(req.status != 200){
            //handle error
            alert(req.response);
          }
          else {
            //success
            alert("Thank you for registering");
            e.target.reset();
          }
        }
        req.onerror = function(e){
          //Connection error
          closeAnim();
          console.log(e);
        }
        showAnim();
        req.send(data);
        
      }
      document.getElementById("signup-form").addEventListener('submit',submit);
    

     $(document).ready(function() {

      // Initialize the plugin
      $('#JPO').popup();

      // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
      $.fn.popup.defaults.pagecontainer = '#page'
    });