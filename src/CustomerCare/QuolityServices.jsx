import React from "react";

const QuolityServices = ({ img, paragraph3 }) => {
  return (
    <div>
      <div>
        <h1>Get high quality cleaning services at affordable prices</h1>
        <p>
          Pellentesque lobortis tempus tincidunt. Nullam finibus sem eu pulvinar
          ultri cies. Donec in velit et diam aliquet mollis. Nulla facilisi.
          Fusce viverra, velit at cursus maximus, eros magna pellentesque nisl,
          quis accumsan ligula felis vel velit. Praesent eleifend nunc eu nisl
          maximus interdum eget vel tortor. Nunc in odio pharetra urna pulvinar
          varius id nec massa. Vivamus nec justo sed nisl maximus efficitur.
          Nullam iaculis, metus eleifend malesuada bibendum, eros sapien pelle
        </p>
        <div>
          <img src={img} alt="" />
          <p>{paragraph3}</p>
        </div>
      </div>
    </div>
  );
};

export default QuolityServices;
