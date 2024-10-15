import React from "react";

import { Image, SafeAreaView, Text, View } from "react-native";

import user from '../data/user.json'
import SocialMediaComponent from "../components/social_media";
import MainLinksComponent from "../components/main_links";
import LinkIconButton from "../components/buttons/LinkIconButton";
import { faPenToSquare, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-slate-100 p-10 justify-center items-center">
            <View className="items-center">
                <Text className="text-4xl text-slate-600">Hello, I'm 👋</Text>
                <Text className="text-5xl text-indigo-600">{user.username}</Text>
            </View>

            <View className="flex flex-col p-10 justify-center items-center">
                <Image
                    className="h-32 w-32 rounded-full bg-indigo-800"    
                    source={{
                    uri: user.userImgPath,
                    }}
                />

                <Text className="text-slate-600 text-2xl">{user.job}</Text>
            </View>

            <MainLinksComponent
                title1={user.mainlink1.title}
                title2={user.mainlink2.title}
                link1={user.mainlink1.link}
                link2={user.mainlink2.link}
            />

            <SocialMediaComponent/>

            <View className="flex flex-row">
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