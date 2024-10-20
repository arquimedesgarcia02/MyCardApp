import React from "react";

import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";

import user from '../data/user.json'
import SocialMediaComponent from "../components/social_media";
import MainLinksComponent from "../components/main_links";
import LinkIconButton from "../components/buttons/LinkIconButton";
import { faPenToSquare, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-slate-200">
            <StatusBar/>
            <View id="title+photo">
                <View className="pt-10 px-10">
                    <Text className="text-3xl text-center text-slate-600">Hello, I'm 👋</Text>
                    <Text className="text-4xl text-center text-indigo-600">{user.username}</Text>
                </View>
                
                <View className="items-center justify-center pb-10">
                    <Image
                        className="h-32 w-32 rounded-full bg-indigo-800"    
                        source={{
                        uri: user.userImgPath,
                        }}
                    />

                    <Text className="text-slate-600 text-2xl mt-2">{user.job}</Text>
                    <Text className="text-slate-900 text-lg mt-2">{user.status}</Text>
                </View>
            </View>

            <MainLinksComponent
                title1={user.mainlink1}
                title2={user.mainlink2}
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