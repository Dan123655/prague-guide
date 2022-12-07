import { View, Text, TouchableOpacity, Image,ImageProps,ImageSourcePropType  } from 'react-native'
import React from 'react'
import { ItemCardContainerProps } from '../types/typeImport'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ItemCardContainer = ({ imageSrc, title, location, data}: ItemCardContainerProps) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity className='rounded-md border-gray-300 space-y-2 px-2 py-2 mb-4 shadow-md bg-white w-[170px]'
    onPress={()=>navigation.navigate("Place",{param:data})}>
      <Image source={{ uri: imageSrc }}
        
              className='w-full h-36 rounded-md object-cover' />
      {title ? (
        <>

           <Text className='text-[#428288] text-[18px] font-bold'>{title?.length > 17 ? `${title.slice(0, 17)}..` : title}</Text>

         
          <View className='flex-row items-center space-x-1'>
          <FontAwesome name='map-marker' size={20} color='#8597A2'/>
          <Text className='text-[#428288] text-[14px] font-bold'>{location?.length > 19 ? `${location.slice(0, 19)}..` : location}</Text>
          </View>
          </>
      ):<></>}
    </TouchableOpacity>
  )
}

export default ItemCardContainer