import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 20,
  },
  transactionLeft: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 10,
  },
  transactionRight: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 50,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 4,
    marginTop: 12,
  },
  nominalText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
