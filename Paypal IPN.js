<!-- PayPal "Buy Now" Button for AI Doom Challenge -->
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_xclick">
  <input type="hidden" name="business" value="louietabaranza12345@gmail.com"> <!-- Replace with your PayPal email -->
  <input type="hidden" name="item_name" value="AI Doom Challenge Access">
  <input type="hidden" name="amount" value="500"> <!-- Default price, can be adjusted -->
  <input type="hidden" name="currency_code" value="PHP">
  <input type="hidden" name="notify_url" value="https://script.google.com/macros/s/AKfycbxRjQmNXQ4M0ouTQuOSTrcNXwuOWko83VdyekpJa1XlN17oiDlC-TRFmaskbv-ePR9Bww/exec"> <!-- Replace with your Google Apps Script URL -->
  <input type="hidden" name="return" value="https://zyphyrrxai.github.io/AlDoomChallenge/thank-you"> <!-- Replace with your thank-you page -->
  <input type="hidden" name="cancel_return" value="https://zyphyrrxai.github.io/AlDoomChallenge/cancel"> <!-- Replace with your cancel page -->
  <input type="submit" value="Buy Now with PayPal">
</form>
