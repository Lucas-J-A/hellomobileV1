import { useEffect } from 'react';

const ReclameAqui = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js';
    script.async = true;
    script.id = 'ra-embed-verified-seal';
    script.setAttribute('data-id', 'MTQzMDQ0MjpoZWxsby1tb2JpbGUtbHRkYQ==');
    script.setAttribute('data-target', 'ra-verified-seal');
    script.setAttribute('data-model', '2');
    
    const container = document.getElementById('ra-verified-seal');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return <div id="ra-verified-seal"></div>;
};

export default ReclameAqui;