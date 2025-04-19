import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button} from '../components/atoms/Button';

export const HomeScreen = () => {
  const allButtons = useSelector(state => state.buttons.buttons);
  const allowed = ['pemasukan', 'pengeluaran'];

  const handleButtonClick = title => {
    console.log(`Klik tombol ${title}`);
  };

  const filteredButtons = allButtons
    .filter(btn => allowed.includes(btn.id))
    .map(btn => ({
      ...btn,
      onPress: () => handleButtonClick(btn.title),
    }));

  return (
    <View>
      {filteredButtons.map(btn => (
        <Button
          key={btn.id}
          title={btn.title}
          onPress={btn.onPress}
          bgColor={btn.bgColor}
          iconName={btn.iconName}
          typeIcon={btn.typeIcon}
        />
      ))}
    </View>
  );
};
