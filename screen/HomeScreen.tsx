import { View, Text,SafeAreaView,Image } from 'react-native'
import React,{useLayoutEffect, } from 'react'
import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { HeroImage } from '../assets';
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
      
        <SafeAreaView className='bg-yellow-300 flex-1 relative'>
{/*first section*/} 
          <View className='flex-row px-6 mt-8 items-center space-x-2'>
              <View className='w-16 h-16 bg-black items-center rounded-full justify-center'>
                  <Text className='text-[#00BCC9] text-3xl font-semibold'>
                      Go
                  </Text>
                </View>
                <Text className='text-[#2A2B4B] text-3xl font-semibold'>Travel</Text>
            {/* <StatusBar style='dark' hidden={!true} translucent={!true}/> */}
            </View>
{/*second section*/} 
            <View className='px-6 mt-8 space-y-3'>
                <Text className='text-[#3C6072] text-[42px]'>Enjoy the trip with</Text>
                <Text className='text-[#00BCC9] text-[38px] font-bold'>Good Moments</Text>

                <Text className='text-[#3C6072] text-base'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Neque cum molestiae sed cupiditate accusamus ipsum nisi perspiciatis!Hic
                </Text>
            </View>
            { /*Circle section*/}
            <View className='w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36'></View>
            <View className='w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36'></View>
            {/* Image Container */}
            <View className='flex-1 relative items-center justify-center mt-10'>
                <Animatable.Image
                    animation='fadeIn'
                    easing='ease-out'
                    source={HeroImage}
                    className='w-full h-full object-cover' />
                
               
                <TouchableOpacity className='absolute bottom-20 w-24 h-24 border-l-2             
                border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center'
                    onPress={() => navigation.navigate("Discover")}
                >
                        <Animatable.View
                            animation="pulse" easing="ease-in-out"
                            iterationCount="infinite"
                            className='w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]'>
                    <Text className='text-gray-50 text-[36px] font-semibold'>Go</Text>
                        </Animatable.View>
            </TouchableOpacity>
  



            </View>
            <StatusBar style='dark' hidden={false} />
            </SafeAreaView>

    )
  
}

export default HomeScreen