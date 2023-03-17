import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './Routes';
import { Provider as PaperProvider } from 'react-native-paper';
import { Header } from './src/components/Header';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Header />
        <Routes />      
      </NavigationContainer>
    </PaperProvider>
  );
}