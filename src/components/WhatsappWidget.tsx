import { FloatingWhatsApp } from '@carlos8a/react-whatsapp-floating-button'

export default function WhatsappWidget() {
  return (
    <FloatingWhatsApp
      phoneNumber="+971526063287" // Required
      accountName="Esha IT Consultancy" // Optional
      avatar="/logo.jpeg" // Optional
      initialMessageByServer="Hi there! How can I assist you?" // Optional
      initialMessageByClient="Hello! I found your contact on your website. I would like to chat with you about..." // Optional
      statusMessage="Available" // Optional
      startChatText="Start chat with us" // Optional
      tooltipText="Need help? Click to chat!" // Optional
      allowEsc={true} // Optional
      // Explore all available props below
      darkMode={true}
    />
  )
}
