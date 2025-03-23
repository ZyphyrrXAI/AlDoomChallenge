// Google Apps Script to automate PayPal payment verification & file delivery
function doPost(e) {
  var params = JSON.parse(e.postData.contents);
  var paymentStatus = params.payment_status;
  var payerEmail = params.payer_email;
  
  if (paymentStatus === "Completed") {
    var fileUrl = "1FAIpQLSdF_u5QhdAms0dtyhcL8Th5WzHC2YK8ZvqPb66tbVUITPR0Ng"; // Replace with your file ID
    var subject = "Your AI Doom Challenge Access";
    var body = "Thank you for your purchase! Click the link to access: " + fileUrl;
    MailApp.sendEmail(payerEmail, subject, body);
  }
  return ContentService.createTextOutput("Success");
}
