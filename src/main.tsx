import { StyledEngineProvider } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PruebasActivity from './PruebasActivity'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StyledEngineProvider injectFirst>
			<PruebasActivity />
		</StyledEngineProvider>
	</StrictMode>
)
