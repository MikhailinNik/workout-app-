import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createRoot } from 'react-dom/client';

import AuthProvider from './components/providers/AuthProvider';

import './assets/styles/index.scss';
import Router from './routes/Router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
});

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
);
