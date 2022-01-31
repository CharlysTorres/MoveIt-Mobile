import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'column',
    paddingTop: getStatusBarHeight() + 26,
    backgroundColor: '#F2F3F5',
  },
  wrapper: {},
  section: {
    flex: 1,
  },
  content: {
    // flex: 1,
    flexDirection: 'column',
    marginTop: 38,
  },
})