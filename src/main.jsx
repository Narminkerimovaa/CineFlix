import { createRoot } from 'react-dom/client'
import AppRoutes from './routes/index.jsx'
import './styles/global.css'
import { GlobalProvider } from './shared/provider/Global/GlobalProvider.jsx'

createRoot(document.getElementById('root')).render(
    <GlobalProvider>
        <AppRoutes/>
    </GlobalProvider>
)
