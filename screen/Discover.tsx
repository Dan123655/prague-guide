import { View, Text, SafeAreaView,Image} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Hotels } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { mykey } from '../key'; 
import { ScrollView } from 'react-native';
import MenuContainer from '../components/MenuContainer';




const Discover = () => {
    const [type, setType] = React.useState('restaurants')
console.log(mykey.key)
const city:string='Prague, '
      const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    },[])
    return (
      <SafeAreaView className="flex-1 bg-yellow-300 relative">
        <View className="flex-row items-center justify-between px-8 pt-8">
          <View>
            <Text className="text-[40px] text-[#0B646B] font-bold">
              Discover
            </Text>
            <Text className="text-[#527273] text-[36px]">
              the beauty today{" "}
            </Text>
          </View>
          <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
            <Image
              source={Avatar}
              className="w-full h-full rounded-md object-cover"
            ></Image>
          </View>
        </View>
        <StatusBar style="dark" hidden={false} />
        <View className="flex-row items-center justify-center bg-white mx-4 my-2 rounded-xl py-1 px-4">
          <GooglePlacesAutocomplete
            enablePoweredByContainer={false}
            GooglePlacesDetailsQuery={{ fields: "geometry" }}
            placeholder="Search"
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(details?.geometry?.viewport);
            }}
            query={{
              key: mykey.key,
              language: "en",
              components: "country:cz",
            }}
          />
        </View>
        <ScrollView>
                <View className="flex-row items-center justify-center px-8 mt-8">
                    <MenuContainer
                        
                        key={'hotel'}
                            title='Hotels'
                        imageSrc={Hotels}
                            type={type}
                            setType={setType}

                    />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default Discover