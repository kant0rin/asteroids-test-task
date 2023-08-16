import React from 'react';
import {Circles} from "react-loader-spinner";

const Loading = () => {
  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%' }}>
      Загрузка данных...
    </div>
  );
};

export default Loading;
