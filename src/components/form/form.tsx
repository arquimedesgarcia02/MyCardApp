import React, { useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

import { View, Text, TextInput, TextInputProps, KeyboardAvoidingView } from "react-native";
import { router } from "expo-router";

import SaveButton from "../buttons/SaveButton";

function IconTitle({ title, iconName, iconSize } : { title: string, iconName: IconProp, iconSize: number } ) {
    return (
        <View className="flex flex-row justify-center items-center space-x-1 mb-2">
            <FontAwesomeIcon icon={iconName} size={iconSize} color="#1e293b"/>
            <Text className="text-lg text-slate-800">{title}</Text>
        </View>
    );
}

function InfoTitle({ title }: { title: string }) {
    return <Text className="font-semibold text-slate-800 text-lg">{title}</Text>
}

function InfoTextInput({ onChangeText, value, placeholder, cursorColor, multiline, numberOfLines, maxLength }: TextInputProps ) {
    return (
        <TextInput
        onChangeText={onChangeText}
        value={value}
        className="text-base text-slate-800 px-4 py-2.5 my-2 w-72 bg-slate-300 rounded-md"
        placeholder={placeholder}
        cursorColor={cursorColor}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        />
    );
}

const cursorColor = "#475569";

// Async Storage:
async function storeData(value: string){
    try {
        if (value !== null) {
            await AsyncStorage.setItem('name', value);
            
            console.log('Data saved.');
            return;
        }

        console.error('Error: null value.');
    } catch (error) {
        console.log('Saving data error: ', error);
    }
}
    
    function MainInfoInputs() {
        const [form, setForm] = useState({
            name: '',
            profession: '',
            location: ''
        });
        
        async function HandleSaveForm(username: string){
            try {
                console.log(username);
                
                await storeData(username);
                router.navigate("/");
            } catch (error) {
                console.error('Saving data error.');
            }
        }
        
        return (
            <KeyboardAvoidingView className="mt-10">
            <IconTitle iconName={faIdCard} iconSize={20} title="Add your info here"/>
            
            <InfoTitle title="Name"/>

            <InfoTextInput
                placeholder="Add your name here."
                cursorColor={cursorColor}
                value={form.name}
                onChangeText={formName => {
                    setForm({
                      ...form,
                      name: formName.valueOf()
                    });
                }}
            />

            <Text>{form.name}</Text>

            <SaveButton onPress={async () => await HandleSaveForm(form.name)}/>
        </KeyboardAvoidingView>
    );
}

export default function FormComponent(){
    return (
        <View>
            <View>
                <Text className="text-slate-800 text-center justify-center text-xl">Add here your information</Text>
                <Text className="text-slate-600 text-center justify-center text-sm">The information will be displayed in your card</Text>
            </View>
            
            <MainInfoInputs/>
        </View>
    );
}