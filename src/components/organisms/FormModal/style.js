import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 8,
    width: '80%',
    position: 'relative',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: -12,
    right: -12,
    zIndex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    borderRadius: 10,
    padding: 2,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
