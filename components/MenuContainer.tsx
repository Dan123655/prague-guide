import { View, Text } from 'react-native'
import React from 'react'

type Fuck = {
  children?:undefined| React.ReactNode
  // key:any,
  title:any,
  imageSrc: any,
  type: string,
setType:React.Dispatch<string>
  };
      



const MenuContainer = ({children,title,imageSrc}:Fuck)=> {
  return (
    <View>
      <Text>MenuContainer</Text>
      {children}
    </View>
  )
}

export default MenuContainer