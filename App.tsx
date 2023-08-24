import { StatusBar } from 'react-native';
import RootNavigator from './src/navigation';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
        <StatusBar />
      </QueryClientProvider>
    </>
  );
}