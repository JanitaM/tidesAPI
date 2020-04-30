import React from 'react';

function About() {
  return (
    <section style={AboutStyles.container}>
      <h2>About this API</h2>
      <a href="https://tidesandcurrents.noaa.gov/api/">Tides and Currents from NOAA</a>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis. Volutpat ac tincidunt vitae semper quis lectus nulla at. Nisi quis eleifend quam adipiscing. Interdum velit laoreet id donec.</p>
    </section>
  );
}

const AboutStyles = {
  container: {
    margin: "0 auto",
    maxWidth: "70%"
  }
}

export default About;