import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#4a4a4a',
    marginTop: 12,
    marginBottom: 8,
  },
  moneyText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  transactionText: {
    fontSize: 16,
    color: '#6b6b6b',
  },
  transactionAmount: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
