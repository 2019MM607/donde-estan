
import { useNavigation } from '@react-navigation/native';
import { ArrowForwardIcon, Box, Center, Heading, Image, Pressable, Text } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import img from '../assets/logo.png';
;


export const TarjetaDesaparecido = (props) => {
    const [press, setpress] = useState(false);
    const navigation = useNavigation()

    const styles = StyleSheet.create({
        root: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.00,

            elevation: 3,
        },
        seeMore: {
            marginRight: 5

        },


    })
    return (
        <Box w='sm'
            h='md'
            mt='5'
            bg='white'
            borderRadius='xl'
            ml='2'
            mr='2'
            style={styles.root}>

            <Center mt='2'>
                <Heading size="sm">Juan Antonio Perez</Heading>
            </Center>

            <Center h='1/2'>

                <Image alt='desaparecido'
                    source={img}
                    width='2/6'
                    resizeMode='contain'
                    borderRadius='full' />
            </Center>

            <Center mx='1'>
                <Text >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </Center>
            <Box justifyContent='center'
                alignItems='flex-end'
                w='full'
                mt='10'>

                <Pressable flexDir='row'
                    p='2'
                    px='4'
                    borderRadius='full'
                    justifyContent='center'
                    alignItems='flex-end'
                    style={styles.seeMore}
                    _pressed={{ bg: 'blueGray.200' }}
                    onPress={() => navigation.navigate("Desaparecido")}
                >

                    <Text color='blueGray.500' bold >Ver mas</Text>
                    <ArrowForwardIcon size="4" color='blueGray.500' />
                </Pressable>
            </Box>
        </Box >
    );

}
