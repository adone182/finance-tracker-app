import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button} from '../components/atoms/Button';

export const HomeScreen = () => {
  const allButtons = useSelector(state => state.buttons.buttons);
  const allIcons = useSelector(state => state.icons.icons);

  const allowed = ['pemasukan'];

  const getIconById = id => allIcons.find(icon => icon.id === id);

  const filteredButtons = allButtons
    .filter(btn => allowed.includes(btn.id))
    .map(btn => {
      const icon = getIconById(btn.iconId);
      return {
        ...btn,
        onPress: () => console.log(`Klik tombol ${btn.title}`),
        icon,
      };
    });

  return (
    <View>
      {filteredButtons.map(btn => (
        <Button
          key={btn.id}
          title={btn.title}
          onPress={btn.onPress}
          bgColor={btn.bgColor}
          icon={btn.icon}
        />
      ))}
    </View>
  );
};
