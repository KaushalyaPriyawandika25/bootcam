document.getElementById("showToastBtn").addEventListener("click", function () {
    // Create a new toast element
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");
  
    var toastBody = document.createElement("div");
    toastBody.className = "toast-body";
    toastBody.textContent = "This is a Bootstrap 5 toast example.";
  
    toast.appendChild(toastBody);
 
    document.body.appendChild(toast);
  
    var bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();
    
  
    setTimeout(function () {
      document.body.removeChild(toast);
    }, 3000);
  });

  //Popover
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  }) ;