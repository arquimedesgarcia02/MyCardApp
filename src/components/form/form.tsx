import React from "react";

import { MMKV } from 'react-native-mmkv';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

import { View, Text, TextInput, TextInputProps, KeyboardAvoidingView } from "react-native";

const cursorColor = "#475569";

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

function MainInfoInputs() {
    return (
        <KeyboardAvoidingView className="mt-10">
            <IconTitle iconName={faIdCard} iconSize={20} title="Add your info here"/>
            
            <InfoTitle title="Name"/>

            <InfoTextInput
                placeholder="Add your name here."
                cursorColor={cursorColor}
            />
        </KeyboardAvoidingView>
    );
}

const storage = new MMKV()

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