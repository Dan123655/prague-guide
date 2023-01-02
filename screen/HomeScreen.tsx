import { View, Text,SafeAreaView,Image } from 'react-native'
import React,{useLayoutEffect, } from 'react'
import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { HeroImage } from '../assets';
import { Catedrala} from '../assets';
import { Drawing} from '../assets';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import Discover from './Discover';





const HomeScreen = () => {







    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            
            headerShown:false,
        })
    },[])
    return (
      
        <SafeAreaView className='bg-slate-200 flex-1 relative'>
{/*first section*/} 
          <View className='flex-row px-6 mt-8 items-center space-x-2'>
              {/* <View className='w-16 h-16 bg-black items-center rounded-full justify-center'>
                  <Text className='text-[#00BCC9] text-3xl font-semibold'>
                      Bro
                  </Text>
                </View> */}
                <Text className='text-[#2A2B4B] text-[50px] mt-8 font-semibold'>Prague guide</Text>
            {/* <StatusBar style='dark' hidden={!true} translucent={!true}/> */}
            </View>
{/*second section*/} 
            <View className='px-6 mt-8 space-y-3'>
                <Text className='text-[#3C6072] text-[42px] font-light'>Hotels, food & attractions</Text>
                <Text className='text-[#00BCC9] text-[38px] font-bold'>In your favourite city</Text>

                {/* <Text className='text-[#3C6072] text-base'>
                съешь ещё этих мягких французских булок, да выпей чаю или колы зеро
                </Text> */}
            </View>
            { /*Circle section*/}
            {/* <View className='w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36'></View> */}
            <View className='w-[640px] h-[640px] bg-[#9796957e] rounded-full absolute -bottom-28 -left-36'></View>
            {/* Image Container */}
            <View className='flex-1 relative items-center justify-center mt-10'>
                <Animatable.Image
                    animation='fadeIn'
                    easing='ease-out'
                    source={Drawing}
                    className='w-full h-full object-cover' />
                
               
                <TouchableOpacity className='absolute bottom-14 w-24 h-24 border-l-2             
                border-r-2 border-t-4 border-[#cad4d588] rounded-full items-center justify-center'
                    onPress={() => navigation.navigate("Discover")}
                >
                        <Animatable.View
                            animation="pulse" easing="ease-in-out"
                            iterationCount="infinite"
                            className='w-20 h-20 items-center justify-center rounded-full bg-[#26e3f1]'>
                    <Text className='text-gray-50 text-[36px] font-semibold'>Go</Text>
                        </Animatable.View>
            </TouchableOpacity>
  



            </View>
            <StatusBar style='dark' hidden={false} />
            </SafeAreaView>

    )
  
}

export default HomeScreen