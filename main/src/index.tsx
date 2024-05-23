import microApp from '@micro-zoe/micro-app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './router';

microApp.start({
  'router-mode': 'pure',
  plugins: {
    modules: {
      'appname-vite': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, all => {
                return all.replace('/child/vite/', 'http://localhost:4007/child/vite/')
              })
            }
            return code
          }
        }
      ],
      // 解决create-react-app中sockjs-node报错的问题
      'appname-react': [{
        loader(code) {
          if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
            code = code.replace('window.location.port', '4004')
          }
          return code
        }
      }],
    }
  }
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
