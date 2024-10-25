import React, { useEffect, useState } from "react";

import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import SocialMediaComponent from "../components/social_media";
import MainLinksComponent from "../components/main_links";
import LinkIconButton from "../components/buttons/LinkIconButton";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase, faLocationDot, faPenToSquare, faShareFromSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

async function getData(keyName: string) {
    try {
        const value = await AsyncStorage.getItem(keyName);

        if(value === null){
            console.error('One or more values are null.');
            return;
        }
        
        return value;
    } catch (error) {
        console.error('Display data error.');
    }
}

function TextName({ name }: { name: string | undefined }) {
    return (
        <View className="ml-2">
            <Text className="text-2xl text-center text-slate-600">Hi, I'm 👋</Text>
            { name ? (
                <Text className="text-indigo-600 text-3xl text-center">{name}</Text>
            ) : (
                <Text>Loading data...</Text>
            )}
        </View>
    );
}

function Label({ title, text, iconName }: { title: string, text: string | undefined, iconName: IconProp }) {
    return(
        <View className="flex flex-row space-x-4 my-2">
            <View className="bg-slate-300 p-4 rounded-md">
                <FontAwesomeIcon icon={iconName} size={20} color="#334155"/>
            </View>

            {(title && text) ? (
                <View>
                    <Text className="text-xl text-slate-700 font-semibold">{ title }</Text>
                    <Text className="text-lg text-slate-700">{ text }</Text>
                </View>
            ) : (
                <Text className="text-lg text-slate-700">Loading...</Text>
            )}
        </View>
    );
}

export default function Index() {
    const [name, setName] = useState<string | undefined>();
    const [profession, setProfession] = useState<string | undefined>();
    const [status, setStatus] = useState<string | undefined>();
    const [location, setLocation] = useState<string | undefined>();
    const [description, setDescription] = useState<string | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            // what a lot of repetition, need to fix this
            const nameData = await getData('name');
            const professionData = await getData('profession');
            const statusData = await getData('status');
            const locationData = await getData('location');
            const descriptionData = await getData('description');

            setName(nameData);
            setProfession(professionData);
            setStatus(statusData);
            setLocation(locationData);
            setDescription(descriptionData);
        };

        fetchData();
    });
    
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-slate-200 px-10">
            <StatusBar/>

            <View className="flex flex-col items-center justify-center px-4">
                <TextName name={name}/>

                <Image
                    className="h-32 w-32 rounded-full"    
                    source={{
                        uri: 'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    }}
                />
            </View>

            <View className="mt-4 border-b border-b-slate-600 pb-4">
                <Text className="text-center text-base text-slate-700">"{description}"</Text>
            </View>
            
            <View className="items-start justify-start w-full my-10">
                <Label
                    title="Profession"
                    text={profession}
                    iconName={faBriefcase}
                />
                
                <Label
                    title="Status"
                    text={status}
                    iconName={faSquareCheck}
                />

                <Label
                    title="Location"
                    text={location}
                    iconName={faLocationDot}
                />
            </View>

            <View className="flex flex-row items-center justify-around bg-slate-200">
                <LinkIconButton
                    title="Edit"
                    linkRef={'/edit'}
                    iconName={faPenToSquare}
                />

                <LinkIconButton
                    title="Share"
                    linkRef={'/edit'}
                    iconName={faShareFromSquare}
                />
            </View>            
        </SafeAreaView>
    );
}