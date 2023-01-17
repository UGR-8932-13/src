function sendEmail(){
    Email.send({
      SecureToken:"5639323b-f185-4485-8c96-9537f50e2ea3",
  
    To : 'nomadsmith718@gmail.com',
    From : document.getElementByID("email").value,
    Subject : "subject:" +document.getElementByID("subject").value,
    Body : "Email:" +document.getElementByID("message").value,
}).then(
  message => alert("message sent")
);
  }
