import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/Auth/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <BrowserRouter>
            <AuthProvider>
                <App></App>

            </AuthProvider>
        </BrowserRouter>
    </>
)