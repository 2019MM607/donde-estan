
import React from 'react';
import { AddIcon, Box, Button, Center, Flex, ScrollView, Text, View } from 'native-base';
import { TarjetaDesaparecido } from '../components/TarjetaDesaparecido';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation()
    return (
        <View w='full' h='full' bg='#0B1F3B'>
            <StatusBar backgroundColor="#0B1F3B" />
            <Box h='1/6'
                justifyContent='flex-start'
                alignItems='flex-start'>

                <Text ml='2' color='gray.400' fontSize='sm' letterSpacing='lg'>Listado de desaparecidos</Text>
            </Box>


            <ScrollView horizontal={true}
                w="full"
                h='full'
                bg='white'
                borderTopLeftRadius='3xl'
                borderTopRightRadius='3xl'
                zIndex='1'
                position='absolute'
                top='70' >



                <Flex justifyContent='center' direction='row' >
                    <TarjetaDesaparecido />
                    <TarjetaDesaparecido />
                    <TarjetaDesaparecido />
                    <TarjetaDesaparecido />
                    <TarjetaDesaparecido />
                    <TarjetaDesaparecido />
                </Flex>


            </ScrollView>

            <Button absolute
                bg='#0B1F3B'
                top='500'
                left='320'
                onPress={() => navigation.navigate('Agregar desaparecido')}
                w='1/6'
                py='5'
                borderRadius='full'
                zIndex='2'>

                <AddIcon color='white' size='sm' />
            </Button>
        </View >
    );
}
