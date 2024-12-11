import React from "react";
import { FaCookieBite } from "react-icons/fa";

const CookieBanner = () => {
  return (
    <div style={styles.banner}>
      <FaCookieBite size={24} style={styles.icon} />
      <p style={styles.text}>
        We use cookies to improve your experience. By using our site, you agree to our cookie policy.
      </p>
    </div>
  );
};

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  },
  icon: {
    marginRight: "10px",
  },
  text: {
    fontSize: "14px",
    margin: 0,
  },
};

export default CookieBanner;
