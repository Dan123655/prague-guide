import { View, Text,SafeAreaView,ScrollView,Image,TouchableOpacity } from 'react-native'
import React,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5,Ionicons,FontAwesome } from '@expo/vector-icons';

const Place = ({route}:any) => {
    const navigation = useNavigation();
    const data = route?.params.param;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
      <SafeAreaView className='flex-1 bg-white relative'>
          <ScrollView className='flex-1 px-4 py-6'>
              <View className='relative bg-white shadow-lg'>
                  <Image 
                      source={
                          {uri:  data ? data.photo.images.large.url
                              :
                        'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}} 
                      className='w-full h-72 object-cover rounded-2xl mt-4' />
                  <View className='absolute flex-row inset-x-0 top-5 justify-between mt-4 px-6'>
                      <TouchableOpacity className='w-10 h-10 rounded-md items-center justify-center bg-white'>
                          <FontAwesome5 name='chevron-left' size={ 24} color='black'/>
                          
                      </TouchableOpacity>
                      <TouchableOpacity className='w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]'>
                      <Ionicons name='heart' size={ 28} color='#fff'/>
                          
                      </TouchableOpacity>
                  </View>

                  <View className='absolute flex-row inset-x-0 bottom-5 justify-between mt-4 px-6'>
                      <View className='flex-row space-x-2 items-center'>
                          <Text className='text-[12px] font-bold text-gray-100'>{ data?.price_level}</Text>
                          <Text className='text-[32px] font-bold text-gray-100'>{ data?.price}</Text>
                      </View>
                      <View className='px-2 py1 rounded-md bg-teal-100'>
                      <Text>{ data?.open_now_text}</Text>
                    </View>
                  </View>
              </View>
              <View className='mt-6'>
                  <Text className='text-[#428228] text-[24px] font-bald'>
                      {data?.name }
                  </Text>
                  <View className='flex-row items-center space-x-2 mt-2'>
                      <FontAwesome name='map-marker' size={25} color='#8C9EA6'/>
                      <Text className='text-[#8C9EA6] text-[20px] font-bold'>
                          { data?.location_string}
                      </Text>
                  </View>
              </View>                  
              


          </ScrollView>
    </SafeAreaView>
  )
}

export default Place