import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

createRoot(document.getElementById('root')).render(
  <PayPalScriptProvider options={{ clientId: "AbYVi6ar31JsIRfNbYihiXuPWS_kYvu7B6N3kVFhWLeE_JcVp8dIfePzkcuMsUg14Ph6hNYU5p4FqfJ-" }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PayPalScriptProvider>
);
