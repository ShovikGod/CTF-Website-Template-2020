function Toasty(){
    var toastHTMLElement=document.getElementById('notification');
    var toastElement=new bootstrap.Toast( toastHTMLElement, {animation:true, delay:4000} );
    toastElement.show();
}