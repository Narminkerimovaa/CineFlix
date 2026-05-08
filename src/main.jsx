import { createRoot } from 'react-dom/client'
import AppRoutes from './routes/index.jsx'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
    <AppRoutes/>
)
