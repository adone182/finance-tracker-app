import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {Icon} from '../../atoms/Icon';
import {FormatCurrencyId} from '../../../utils/helpers/CurrencyIdFormat';

export const TransactionCard = ({
  type,
  name,
  iconColor,
  size,
  bgColor,
  color,
  title,
  money = 0,
  amountOfTransaction = 0,
}) => {
  const formattedMoney = FormatCurrencyId(money);
  return (
    <View style={[styles.cardContainer, {backgroundColor: bgColor}]}>
      <Icon color={iconColor} type={type} size={size} name={name} />
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.moneyText, {color}]}>{formattedMoney},-</Text>
      <Text style={styles.transactionText}>
        <Text style={[styles.transactionAmount, {color}]}>
          {amountOfTransaction}
        </Text>{' '}
        Transaksi
      </Text>
    </View>
  );
};
