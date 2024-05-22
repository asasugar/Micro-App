import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar';
import Home from './pages/home/home';
const Vue2 = lazy(() => import(/* webpackChunkName: "vue2" */ './pages/vue2/vue2'));
const Vite = lazy(() => import(/* webpackChunkName: "vite" */ './pages/vite/vite'));


function App () {
  return (
    // 设置主应用基础路由为main(用于后续部署)，则子应用基础路由(baseroute)为/main/xxx
    <BrowserRouter basename='/main'>
      <SideBar />
      <div id='router-container'>
        <Routes>
          <Route path="/" element={(
            <Home />
          )} />
          <Route path="/app-vue2/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <Vue2 />
            </Suspense>
          )} />
          <Route path="/app-vite/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <Vite />
            </Suspense>
          )} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
