import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MenuContainerProps } from '../types/typeImport';
import { FontAwesome5} from '@expo/vector-icons';
  // type TouchableOpacityProps = {

  //   onPress?: () => void;
   
  // }

const MenuContainer = ({ title, imageSrc, setType, type }: MenuContainerProps) => {
  // , { }: TouchableOpacityProps
  const handlePress = () => { setType(title.toLowerCase()); };

  return (
    <TouchableOpacity className='items-center justify-center space-y-1' onPress={handlePress}>
      <View className={`w-20 h-20 rounded-full items-center justify-center ${type === title.toLowerCase() ? 'w-23 h-23' : ""}`}>
        <FontAwesome5 name={imageSrc} size={34} color={'black'} className={`w-full h-full object-contain  ${type === title.toLowerCase() ? 'opacity-100' : 'opacity-80'}`} />
      </View>
      <Text className={`text-xl fixed ${type === title.toLowerCase() ? 'font-bold text-[#00BCC9]' : 'text-[#71acb0]'}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;