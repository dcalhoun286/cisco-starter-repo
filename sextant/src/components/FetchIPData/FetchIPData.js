import React, { useState, useEffect } from 'react';

/** Documentation
 * Fetching Data: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * Using Ipify API: https://www.ipify.org/
 * AJAX and APIs: https://reactjs.org/docs/faq-ajax.html
 */

const FetchIPData = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ipData, setIpData] = useState([]);

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setIpData(result.ip);
          console.log(result);
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
          console.log(err);
        }
      );
  }, []);

  return (
    <React.Fragment>
      {error && <p>An error occurred fetching your IP data.</p>}
      {!isLoaded && <p>Loading IP data...</p>}
      {!error && isLoaded && <p>{ipData}</p>}
    </React.Fragment>
  );
};

export default FetchIPData;
