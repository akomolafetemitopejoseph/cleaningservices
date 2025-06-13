import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7214103684923!2d3.3258839107102083!3d6.556810322747658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e1000b48683%3A0xfee46de91a2d7f95!2s3%20Ishola%20Imam%20St%2C%20Mafoluku%20Oshodi%2C%20Ikeja%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1749765281285!5m2!1sen!2sng"
        width="600"
        height="450"
        className="w-[100%] h-[500px]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
