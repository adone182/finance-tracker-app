import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3c3dbf',
    textAlign: 'center',
    paddingVertical: 18,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  balanceContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  balanceText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3c3dbf',
  },
  remainingText: {
    fontSize: 16,
    color: '#666',
  },
  percentageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3c3dbf',
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
    marginVertical: 18,
  },
  transactionContainer: {
    marginVertical: 20,
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3c3dbf',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
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
    // marginBottom: 20,
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
  noTransactionText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#e11d48',
    paddingVertical: 30,
    fontStyle: 'italic',
  },
});
