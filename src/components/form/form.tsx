import React, { useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCancel, faGlobe, faIdCard, faUser } from "@fortawesome/free-solid-svg-icons";

import { View, Text, TextInput, TextInputProps, KeyboardAvoidingView, ScrollView } from "react-native";
import { router } from "expo-router";

import SaveButton from "../buttons/SaveButton";
import LinkIconButton from "../buttons/LinkIconButton";
import ImagePickerComponent from "../image_picker/image_picker";

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
async function storeFormData(
    nameValue: string,
    professionValue: string,
    statusValue: string, 
    locationValue: string,
    descriptionValue: string,
    link1Value: string,
    link2Value: string,
    emailValue: string 
){
    const name: [string, string] = ["name", nameValue];
    const profession: [string, string] = ["profession", professionValue];
    const status: [string, string] = ["status", statusValue];
    const location: [string, string] = ["location", locationValue];
    const description: [string, string] = ["description", descriptionValue];
    const link1: [string, string] = ["link1", link1Value];
    const link2: [string, string] = ["link2", link2Value];
    const email: [string, string] = ["email", emailValue];
    
    try {
        await AsyncStorage.multiSet([name, profession, status, location, description, link1, link2, email]);
    } catch (error) {
        console.log('Saving data error: ', error);
    }
}
    
function Inputs() {
    const [form, setForm] = useState({
        name: '',
        profession: '',
        status: '',
        location: '',
        description: '',
        link1: '',
        link2: '',
        email: ''
    });
    
    async function HandleSaveForm(name: string, profession: string, status: string, location: string, description: string, link1: string, link2: string, email: string){
        try {
            await storeFormData(name, profession, status, location, description, link1, link2, email);
            router.navigate("/");
        } catch (error) {
            console.error('Saving data error.');
        }
    }
        
    return (
        <KeyboardAvoidingView className="mt-12 mb-4 space-y-4">
            <View className="flex items-center justify-center mb-5">
                <Text className="text-slate-800 text-xl">Tell Us About Yourself</Text>
                <Text className="text-slate-600 text-base text-center leading-5 w-72">Fill out the form below to create a standout profile that highlights your skills and experience.</Text>
            </View>

            <View>
                <IconTitle iconName={faUser} iconSize={20} title="Take your profile picture"/>
                <ImagePickerComponent/>
            </View>

            {/* Lot of repetition here, should change that */}
            <View>
                <IconTitle iconName={faIdCard} iconSize={20} title="Your Profile Details"/>
                
                <InfoTitle title="Name"/>
                <InfoTextInput
                    placeholder="What's your name?"
                    cursorColor={cursorColor}
                    value={form.name}
                    onChangeText={formName => {
                        setForm({
                            ...form,
                            name: formName.valueOf()
                        });
                    }}
                />

                <InfoTitle title="Profession"/>
                <InfoTextInput
                    placeholder="What's your job?"
                    cursorColor={cursorColor}
                    value={form.profession}
                    maxLength={40}
                    onChangeText={formProfession => {
                        setForm({
                            ...form,
                            profession: formProfession.valueOf()
                        });
                    }}
                />

                <InfoTitle title="Status"/>
                <InfoTextInput
                    placeholder="Are you working? looking for a job?"
                    cursorColor={cursorColor}
                    value={form.status}
                    maxLength={40}
                    onChangeText={formStatus => {
                        setForm({
                            ...form,
                            status: formStatus.valueOf()
                        });
                    }}
                />

                <InfoTitle title="Location"/>
                <InfoTextInput
                    placeholder="Where do you live?"
                    cursorColor={cursorColor}
                    value={form.location}
                    maxLength={40}
                    onChangeText={formLocation => {
                        setForm({
                            ...form,
                            location: formLocation.valueOf()
                        });
                    }}
                />

                <InfoTitle title="Description"/>
                <InfoTextInput
                    multiline
                    editable
                    numberOfLines={4}
                    maxLength={120}
                    placeholder="Write a short description about yourself, what you do, what you like, your skills, etc."
                    value={form.description}
                    onChangeText={formDescription => {
                        setForm({
                            ...form,
                            description: formDescription
                        })
                    }}
                />
            </View>

            <View>
                <IconTitle iconName={faGlobe} iconSize={20} title="Your Links and Email"/>
                
                <InfoTitle title="Link 1"/>
                <InfoTextInput
                    placeholder="Ex: mywebsite.com"
                    cursorColor={cursorColor}
                    value={form.link1}
                    maxLength={40}
                    onChangeText={formLink1 => {
                        setForm({
                            ...form,
                            link1: formLink1.valueOf()
                        });
                    }}
                />
                
                <InfoTitle title="Link 2"/>
                <InfoTextInput
                    placeholder="Ex: myportfolio.com"
                    cursorColor={cursorColor}
                    value={form.link2}
                    maxLength={40}
                    onChangeText={formLink2 => {
                        setForm({
                            ...form,
                            link2: formLink2.valueOf()
                        });
                    }}
                />

                {/* Should have any kind of validation here: */}
                <InfoTitle title="Email"/>
                <InfoTextInput
                    placeholder="Ex: youremail@email.com"
                    cursorColor={cursorColor}
                    value={form.email}
                    maxLength={255}
                    onChangeText={formEmail => {
                        setForm({
                            ...form,
                            email: formEmail.valueOf()
                        });
                    }}
                />
            </View>

            <View className="flex flex-row justify-between items-center mt-4">
                <LinkIconButton title="Cancel" iconName={faCancel} linkRef={'/'}/>
                
                {/* Need to add a error handling in save button, to avoid null values */}
                <SaveButton onPress={() => HandleSaveForm(form.name, form.profession, form.status, form.location, form.description, form.link1, form.link2, form.email)}/>
            </View>
        </KeyboardAvoidingView>
    );
}

export default function FormComponent(){
    return (
        <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
            <Inputs/>
        </ScrollView>
    );
}