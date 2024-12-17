import React from 'react';

const GoogleMapComponent = () => {
  return (
    <div className="w-full">
      {/* Google Maps Iframe with rounded corners */}
      <iframe
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=galle+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        className="rounded-[15px] overflow-hidden"
      >
        <a href="https://www.gps.ie/">gps systems</a>
      </iframe>
    </div>
  );
};

export default GoogleMapComponent;
