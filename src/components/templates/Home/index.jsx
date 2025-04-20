import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './style';

export const Home = ({
  totalIncome,
  totalExpense,
  remainingAmount,
  submittedData,
  handleButtonClick,
  isModalOpen,
  handleCloseModal,
  modalType,
  handleEdit,
  handleSubmit,
  handleDelete,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3c3dbf" />
      <Text style={styles.title}>FINANCE TRACKERS {'\n'} APP</Text>
      <View style={styles.separator} />

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>{remainingAmount},</Text>
        <Text style={styles.remainingText}>
          Uang kamu tersisa
          <Text style={styles.percentageText}>
            {totalIncome !== 0
              ? ((remainingAmount / totalIncome) * 100).toFixed(2)
              : 0}
            %
          </Text>
          lagi.
        </Text>
      </View>
    </View>
  );
};
