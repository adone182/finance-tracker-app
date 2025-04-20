import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '../../atoms/Icon';
import {FormatCurrencyId} from '../../../utils/helpers/CurrencyIdFormat';
import {FormatDate} from '../../../utils/helpers/DateFormat';
import {Button} from '../../atoms/Button';
import {styles} from './style';

export const TransactionList = ({
  transaction,
  filteredButtons,
  handleEdit,
  handleDelete,
}) => {
  const isIncome = transaction.typeTrancation === 'pemasukan';
  const iconColor = isIncome ? '#3c3dbf' : '#ff3666';

  return (
    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <Icon
          type="FontAwesome5"
          name={isIncome ? 'wallet' : 'shopping-bag'}
          size={22}
          color={iconColor}
        />

        <View>
          <Text style={[styles.descriptionText, {color: iconColor}]}>
            {transaction.description}
          </Text>
          <Text style={styles.dateText}>{FormatDate(transaction.date)}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 10,
        }}>
        <Text style={[styles.amountText, {color: iconColor}]}>
          {FormatCurrencyId(transaction.nominal)},-
        </Text>
        <View style={styles.actionButtons}>
          {filteredButtons
            .filter(btn => ['edit', 'hapus'].includes(btn.id))
            .map(btn => (
              <Button
                key={btn.id}
                title={btn.title}
                onPress={() =>
                  btn.id === 'edit'
                    ? handleEdit(transaction)
                    : handleDelete(transaction.id)
                }
                icon={btn.icon}
                style={btn.style}
              />
            ))}
        </View>
      </View>
    </View>
  );
};
