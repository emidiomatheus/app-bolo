import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 16
    },
    title: {
      fontWeight: '700'
    },
    shop: {
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    image: { 
      resizeMode: 'contain'
    }
});
  