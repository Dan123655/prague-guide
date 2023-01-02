import { View, Text, SafeAreaView,Image,TouchableOpacity,ActivityIndicator} from 'react-native'
import React, { useLayoutEffect, useState,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { mykey } from '../key'; 
import { ScrollView } from 'react-native';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import getPlacesData from '../fetch/index'






const Discover = () => {
    const [type, setType] = React.useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [mainData, setMainData] = useState<any>()
    const navigation = useNavigation();
    const [bl_lat, setBl_lat] = useState<any>(null)
    const [bl_lng, setBl_lng] = useState<any>(null)
    const [tr_lat, setTr_lat] = useState<any>(null)
    const [tr_lng, setTr_lng] = useState<any>(null)
    
    useEffect(() => {
        setIsLoading(true);
        getPlacesData(bl_lat,tr_lat,bl_lng,tr_lng,type).then(data => {
            setMainData(data);

       
            setInterval(() => {
                setIsLoading(false);
            }, 2700);
        });
     }, [bl_lat,tr_lat,bl_lng,tr_lng,type])
     useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])


    return (
      <SafeAreaView className="flex-1 bg-slate-100 relative">
        <View className="flex-row items-center justify-between px-8 pt-8">
          <View>
            <Text className="text-[40px] text-[#0B646B] font-bold">
              Find
            </Text>
            <Text className="text-[#527273] text-[36px] mb-4">
              new places
            </Text>
          </View>
          {/* <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
            <Image
              source={Avatar}
              className="w-full h-full rounded-md object-cover"
            ></Image>
          </View> */}
        </View>
        <StatusBar style="dark" hidden={false} />
        <View className="flex-row items-center justify-center shadow-lg bg-white mx-4 my-2 rounded-xl py-1 px-4">
          <GooglePlacesAutocomplete
            enablePoweredByContainer={false}
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            placeholder="Search"
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
                console.log(details?.geometry?.viewport);
                setBl_lat(details?.geometry?.viewport?.southwest?.lat)
                setBl_lng(details?.geometry?.viewport?.southwest?.lng)
                setTr_lat(details?.geometry?.viewport?.northeast?.lat)
                setTr_lng(details?.geometry?.viewport?.northeast?.lng)
            }}
            query={{
              key: mykey.key,
              language: "en",
              components: "country:cz",
            }}
          />
        </View>
            {isLoading ?
                <View className='flex-1 items-center justify-center'>
                <ActivityIndicator size='large' color='#2C7379'/>
                </View>
                :
                <ScrollView>
                <View className="flex-row items-center justify-between px-8 mt-4">
                    <MenuContainer
                        
                        key={'hotels'}
                            title='Hotels'
                        imageSrc={'hotel'}
                            type={type}
                            setType={setType}

                    />
                    <MenuContainer
                        
                        key={'attractions'}
                            title='Attractions'
                        imageSrc={'monument'}
                            type={type}
                            setType={setType}

                    />
                    <MenuContainer
                        
                        key={'restaurants'}
                            title='Restaurants'
                        imageSrc={'coffee'}
                            type={type}
                            setType={setType}

                    />
                </View>
                <View>
                    <View className='flex-row items-center justify-between px-8 mt-8'>
                        <Text className='text-[#2C7379] text-[28px] font-bold'>Places near you</Text>
                        <TouchableOpacity className='flex-row items-center justify-center space-x-2'>
                            <Text className='text-[#A0C4C7] text-[20px] font-bold'>View liked</Text>
                            <FontAwesome name='long-arrow-right' size={24} color='#A0C4C7'/>
                        </TouchableOpacity>
                    </View>
                    <View className='px-0 mt-8 flex-row items-center justify-evenly flex-wrap'>

                            {mainData?.length > 0 ? <>
                  {mainData?.map((data: any, i: number) => {
                    if(data?.photo?.images?.medium?.url){
                    return ( <ItemCardContainer
                                        key={i}
                                        imageSrc={data.photo.images.medium.url}
                                        // imageSrc={data?.photo?.images?.medium?.url ? data.photo.images.medium.url :
                                        // 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'}
                                        title={data?.name}
                                        location={data?.location_string}
                                        data={data} />)
                                      
                    } 
                  })}
                            </> :
                                <>
                                        <View className='w-full h-[600px] items-center space-y-8 justify-center'>
                                        <Image source={NotFound} className='w-32 h-32 object-cover' />
                                        <Text className='text-2xl text-[#328288] font-semibold'>
                                            Oops.. check your internet connection
                                        </Text>
                                        </View>
                                    </> 
                            }
                        </View>
                </View>
        </ScrollView>}
      </SafeAreaView>
    );
}

export default Discover