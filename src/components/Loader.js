import React from 'react';
import { ColorRing} from 'react-loader-spinner'
;

const Loader = () => {
    return (
        <div style={{
            width: "100%",
            height: "1000px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}>
            <ColorRing
  height="380"
  width="380"
  radius="9"
  color="green"
  ariaLabel="loading"
  
/>
        </div>
    );
};

export default Loader;