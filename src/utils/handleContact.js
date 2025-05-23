// To redirect on local email system
export const handleEmail = () => {
  const email = "ishansiddiqui011@gmail.com"; // The recipient's email address
  const subject = "Hire me"; // Email subject
  const body = "Give me a chance to show my expertise"; // Email body

  // Construct the mailto URL
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the email client
  window.location.href = mailtoUrl;
};

// To redirect on local call system
export const handleCall = () => {
  const phoneNumber = "7254030390"; // The phone number to call

  // Construct the tel URL
  const telUrl = `tel:${phoneNumber}`;

  // Open the phone dialer  
  window.location.href = telUrl;
};
