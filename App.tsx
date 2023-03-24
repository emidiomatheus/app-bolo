import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './Routes';
import { Provider as PaperProvider } from 'react-native-paper';
import { Header } from './src/components/Header';
import { ShopsProvider } from './src/contexts/ShopsContext';

export default function App() {
  return (
    <PaperProvider>
      <ShopsProvider>
        <NavigationContainer>
          <Header />
          <Routes />      
        </NavigationContainer>
      </ShopsProvider>
    </PaperProvider>
  );
}