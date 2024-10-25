import React, { useEffect, useState } from "react";

import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";
import { faPenToSquare, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import SocialMediaComponent from "../components/social_media";
import MainLinksComponent from "../components/main_links";
import LinkIconButton from "../components/buttons/LinkIconButton";

async function getData(keyName: string) {
    try {
        const value = await AsyncStorage.getItem(keyName);

        if(value === null){
            console.error('Null value.');
            return;
        }
        
        return value;
    } catch (error) {
        console.error('Display data error.');
    }
}

export default function Index() {
    const [name, setName] = useState<string | undefined>('');

    useEffect(() => {
        const fetchData = async () => {
            const storedData = await getData('name');
            setName(storedData);
        };

        fetchData();
    });
    
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-slate-200">
            <StatusBar/>
            <View id="title+photo">
                <View className="pt-10 px-10">
                    <Text className="text-3xl text-left text-slate-600">Hello, I'm 👋</Text>
                    {name ? (
                        <Text>{name}</Text>
                    ) : (
                        <Text>Loading data...</Text>
                    )}
                </View>
                
                <View className="items-center justify-center pb-10">
                    <Image
                        className="h-32 w-32 rounded-full bg-indigo-800"    
                        source={{
                        uri: 'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        }}
                    />

                    <Text className="text-slate-600 text-2xl mt-2">{}</Text>
                    <Text className="text-slate-900 text-lg mt-2">{}</Text>
                </View>
            </View>

            <MainLinksComponent
                title1={''}
                title2={''}
            />

            <SocialMediaComponent/>

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