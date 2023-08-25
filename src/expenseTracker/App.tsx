import { StatusBar } from 'react-native';
import RootNavigator from './navigation';
import { QueryClient, QueryClientProvider } from "react-query";
import ContextProvider from './ContextProvider';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <RootNavigator />
          <StatusBar />
        </ContextProvider>
      </QueryClientProvider>
    </>
  );
}