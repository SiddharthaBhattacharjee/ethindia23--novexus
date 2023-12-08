import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense, lazy } from 'react';
import Preloader from './components/shared/preloader';

const JustForDevHome = lazy(() => import('./pages/just-for-dev'));
const AuthPage = lazy(() => import('./pages/auth'));
const AppHome = lazy(() => import('./pages/home'));
const QRScannerPage = lazy(() => import('./pages/qr-scanner'));
const SendTokensPage = lazy(() => import('./pages/send-tokens'));
const ApproveTxnPage = lazy(() => import('./pages/approve-txn'));
const TxnStatusPage = lazy(() => import('./pages/txn-status'));
const MyAccountPage = lazy(() => import('./pages/my-account'));

function App() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<JustForDevHome />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<AppHome />} />
          <Route path="/mobi-scanner" element={<QRScannerPage />} />
          <Route path="/send/:tab?" element={<SendTokensPage />} />
          <Route path="/send/approve-txn" element={<ApproveTxnPage />} />
          <Route path="/send/resp" element={<TxnStatusPage />} />
          <Route path="/myaccount" element={<MyAccountPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
