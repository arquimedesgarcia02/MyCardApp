import React, { useState } from "react";

import user from '../data/user.json'

import { Alert, Modal, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import LinkIconButton from "../components/buttons/LinkIconButton";
import { faBan, faCamera, faFloppyDisk, faGlobe, faIdCard, faImage, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import ModalButton from "../components/buttons/ModalButton";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function IconTitle({ title, iconName, iconSize } : { title: string, iconName: IconProp, iconSize: number } ) {
    return (
        <View className="flex flex-row justify-center items-center space-x-1">
            <FontAwesomeIcon icon={iconName} size={iconSize} color="#1e293b"/>
            <Text className="text-base text-slate-800">{title}</Text>
        </View>
    );
}

export default function Edit() {
    const [username, setUsername] = useState(user.username);
    const [job, setJob] = useState(user.job);
    const [mainlink1, setMainLink1] = useState(user.mainlink1);
    const [mainlink2, setMainLink2] = useState(user.mainlink2);

    const cursorColor = "#475569";

    return (
        <SafeAreaView className="bg-slate-200 flex-1 items-center justify-center p-10 space-y-6">
            <View>
                <Text className="text-slate-800 text-center justify-center text-xl">Add here your information</Text>
                <Text className="text-slate-600 text-center justify-center text-sm">The information will be displayed in your card</Text>
            </View>

            <View className="flex flex-col justify-center items-center space-y-4">
                <IconTitle
                    title="Add here your profile picture"
                    iconName={faImage}
                    iconSize={20}
                />

                <View className="bg-slate-300 flex w-16 h-16 rounded-full items-center justify-center">
                    <FontAwesomeIcon
                        icon={faCamera}
                        color="#64748b"
                    />
                </View>
            </View>

            <View className="space-y-4">
                <IconTitle
                    title="Add here your Name and Profession"
                    iconName={faIdCard}
                    iconSize={20}
                />

                <TextInput
                    onChangeText={setUsername}
                    value={username}
                    className="border-2 border-slate-600 text-center w-80 bg-slate-300 py-2 rounded-lg"
                    placeholder="Your Name"
                    cursorColor={cursorColor}
                />

                <TextInput
                    onChangeText={setJob}
                    value={job}
                    className="border-2 border-slate-600 text-center w-80 bg-slate-300 py-2 rounded-lg"
                    placeholder="Your Profession"
                    cursorColor={cursorColor}
                />
            </View>

            {/* Add Main links */}
            <View className="space-y-4">
                <View className="items-start">
                    <IconTitle
                        title="Add here your most important links"
                        iconName={faGlobe}
                        iconSize={16}
                    />

                    <Text className="text-sm text-slate-600">Add short links like: (mywebsite.com, myportfolio.com).</Text>
                </View>

                <ModalButton
                    title="Add Links"
                    onPress={() => alert('Add Links')}
                />
            </View>

            <View className="flex space-y-10">
                <IconTitle
                    title="Add here your social media links"
                    iconName={faUserGroup}
                    iconSize={20}
                />

                <ModalButton
                    title="Add Social Media"
                    onPress={() => alert('Add social media.')}
                />
            </View>
            
            <View className="flex flex-row mt-10">
                <LinkIconButton
                    title="Cancel"
                    linkRef={"/"}
                    iconName={faBan}
                />

                <LinkIconButton
                    title="Save"
                    linkRef={'/'}
                    iconName={faFloppyDisk}
                />
            </View>
        </SafeAreaView>
    );
}