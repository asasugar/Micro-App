import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SideBar from './components/sidebar';
import Home from './pages/home/home';
const Angular11 = lazy(() => import(/* webpackChunkName: "angular11" */ './pages/angular11/angular11'));
const Nextjs11 = lazy(() => import(/* webpackChunkName: "nextjs11" */ './pages/nextjs11/nextjs11'));
const Nuxtjs2 = lazy(() => import(/* webpackChunkName: "nuxtjs2" */ './pages/nuxtjs2/nuxtjs2'));
const React16 = lazy(() => import(/* webpackChunkName: "react16" */ './pages/react16/react16'));
const React17 = lazy(() => import(/* webpackChunkName: "react17" */ './pages/react17/react17'));
const Vite = lazy(() => import(/* webpackChunkName: "vite" */ './pages/vite/vite'));
const Vue2 = lazy(() => import(/* webpackChunkName: "vue2" */ './pages/vue2/vue2'));
const Vue3 = lazy(() => import(/* webpackChunkName: "vue3" */ './pages/vue3/vue3'));

function App () {
  return (
    // 设置主应用基础路由为main(用于后续部署)，则子应用基础路由(baseroute)为/main/xxx
    <BrowserRouter basename='/main'>
      <SideBar />
      <div id='router-container'>
        <Routes>
          <Route path="/" element={(<Home />)}>
          </Route>
          <Route path="/app-angular11/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <Angular11 />
            </Suspense>
          )}>
          </Route>
          <Route path="/app-nextjs11/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <Nextjs11 />
            </Suspense>
          )}>

          </Route>
          <Route path="/app-nuxtjs2/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <Nuxtjs2 />
            </Suspense>
          )}>

          </Route>
          <Route path="/app-react16/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <React16 />
            </Suspense>
          )}>

          </Route>
          <Route path="/app-react17/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <React17 />
            </Suspense>
          )}>

          </Route>
          <Route path="/app-vite/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <Vite />
            </Suspense>
          )}>

          </Route>
          <Route path="/app-vue2/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <Vue2 />
            </Suspense>
          )}>

          </Route>
          <Route path="/app-vue3/*" element={(
            <Suspense fallback={<div>Loading...</div>}>
              <Vue3 />
            </Suspense>
          )}>

          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
