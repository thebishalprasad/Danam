export const emailTemplate = ({
  name,
  email,
  countryCode,
  phone,
  itemName,
  quantity,
  pickupAddress,
}) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #004F2A; padding: 20px; background-color: #F9F9F9; border: 1px solid #E0E0E0; border-radius: 8px;">
      <h2 style="color: #004F2A; text-align: center; margin-bottom: 20px;">New Donation Request</h2>
      
      <p style="margin: 8px 0;"><strong>Donor's Name:</strong> ${name || "N/A"}</p>
      <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email || "N/A"}" style="color: #004F2A; text-decoration: underline;">${email}</a></p>
      <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phone || "N/A"}" style="color: #004F2A; text-decoration: underline;">${phone}</a></p>

      <div style="margin-top: 20px; border-top: 2px solid #004F2A; padding-top: 20px;">
        <h3 style="color: #004F2A; margin-bottom: 10px;">Donation Details:</h3>
        <p style="margin: 8px 0;"><strong>Item Name:</strong> ${itemName || "N/A"}</p>
        <p style="margin: 8px 0;"><strong>Quantity:</strong> ${quantity || "N/A"}</p>
        <p style="margin: 8px 0;"><strong>Pickup Address:</strong></p>
        <p style="background-color: #004F2A; padding: 15px; border-radius: 5px; color: #ffffff; font-size: 14px;">${pickupAddress || "N/A"}</p>
      </div>
      
      <footer style="margin-top: 30px; text-align: center; color: #777; font-size: 12px;">
        <p style="margin: 5px 0;">— <strong>Danam Sukh</strong> | Donation Request Notification</p>
        <p style="margin: 5px 0;">Powered by <a href="https://bishalprasad.netlify.app/" style="color: #004F2A; text-decoration: none; font-weight: bold;">Bishal Prasad</a></p>
      </footer>
    </div>
  `;
};
