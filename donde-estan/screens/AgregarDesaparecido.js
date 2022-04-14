
import { useNavigation } from '@react-navigation/native';
import { Formik, useFormik } from 'formik';
import { Button, FormControl, Input, ScrollView, Stack, TextArea, View, VStack } from 'native-base';
import React from 'react';


export default function AgregarDesaparecido() {

    const navigation = useNavigation()
    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            residencia: '',
            fechaDesaparicion: '',
            descripcion: '',
            edad: '',
            sexo: '',
            estatura: '',
            contextura: ''

        },
    })

    const handlePress = () => {
        console.log(formik.values)
        navigation.navigate('Desaparecidos')
    }
    return (
        <View>
            <ScrollView mx='5' my='10'>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline' >Nombre</FormControl.Label>
                        <Input type='text'
                            placeholder='Nombre'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('nombre', text)}
                            value={formik.values.nombre}
                            name='nombre'
                            id='nombre'
                            onBlur={formik.handleBlur}
                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Apellido</FormControl.Label>
                        <Input type='text'
                            placeholder='Apellido'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('apellido', text)}
                            value={formik.values.apellido}
                            name='apellido'
                            id='apellido'
                            onBlur={formik.handleBlur}
                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Residencia</FormControl.Label>
                        <Input type='text'
                            placeholder='Residencia'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('residencia', text)}
                            value={formik.values.residencia}
                            name='residencia'
                            id='residencia'
                            onBlur={formik.handleBlur}
                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Fecha de Desaparición</FormControl.Label>
                        <Input type='text'
                            placeholder='Fecha de Desaparición'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('fechaDesaparicion', text)}
                            value={formik.values.fechaDesaparicion}
                            name='fechaDesaparicion'
                            id='fechaDesaparicion'
                            onBlur={formik.handleBlur}
                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='extrabold' >Descripción</FormControl.Label>
                        <TextArea type='text'
                            placeholder='Descripción'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('descripcion', text)}
                            value={formik.values.descripcion}
                            name='descripcion'
                            id='descripcion'
                            onBlur={formik.handleBlur}
                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Edad</FormControl.Label>
                        <Input type='text'
                            placeholder='Edad'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('edad', text)}
                            value={formik.values.edad}
                            name='edad'
                            id='edad'
                            onBlur={formik.handleBlur}
                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Sexo</FormControl.Label>
                        <Input type='text'
                            placeholder='Sexo'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('sexo', text)}
                            value={formik.values.sexo}
                            name='sexo'
                            id='sexo'
                            onBlur={formik.handleBlur}
                        />
                    </Stack>
                </FormControl>

                <FormControl>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Estatura</FormControl.Label>
                        <Input type='text'
                            placeholder='Estatura'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('estatura', text)}
                            value={formik.values.estatura}
                            name='estatura'
                            id='estatura'
                            onBlur={formik.handleBlur}
                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Stack>
                        <FormControl.Label color='#0B1F3B' fontWeight='hairline'>Contextura</FormControl.Label>
                        <Input type='text'
                            placeholder='Contextura'
                            borderRadius='md'
                            _focus={{ borderColor: '#0B1F3B' }}
                            onChangeText={text => formik.setFieldValue('contextura', text)}
                            value={formik.values.contextura}
                            name='contextura'
                            id='contextura'
                            onBlur={formik.handleBlur}
                        />
                    </Stack>
                </FormControl>

                <FormControl my='4'>
                    <Button bg='#0B1F3B' type='submit' onPress={handlePress} >Enviar</Button>
                </FormControl>


            </ScrollView>
        </View>
    );
}
