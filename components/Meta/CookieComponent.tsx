import CookieConsent from "react-cookie-consent";

function CookieComponent() {
    return (
      <div className="Cookie">
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="myAppCookieConsent"
          containerClasses="cookie-consent-container"
          buttonClasses="cookie-accept-button"
          declineButtonClasses="cookie-decline-button"
          contentClasses="cookie-content"
          expires={150}
        >
          By using our site, you acknowledge that you have read and understand our Cookie Policy.
        </CookieConsent>
        {/* Rest of your application components */}
      </div>
    );
  }
  
  export default CookieComponent;