/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Map = () => {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Office</h2>
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.312328239617!2d105.73644425474077!3d21.007677752579063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134530a23bae3dd%3A0x97844439c64ad7e8!2sT%C3%B2a%20S1.05!5e0!3m2!1sen!2s!4v1663745810130!5m2!1sen!2s"
          width="600"
          height="250"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default Map;
