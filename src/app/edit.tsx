import React, { useState } from "react";

import user from '../data/user.json';

import { KeyboardAvoidingView, SafeAreaView, StatusBar, Text, TextInput, View } from "react-native";
import Modal from 'react-native-modal';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBan, faCamera, faFloppyDisk, faGlobe, faIdCard, faImage, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import ModalButton from "../components/buttons/ModalButton";
import LinkIconButton from "../components/buttons/LinkIconButton";

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
    const [description, setDescription] = useState(user.description);
    const [mainlink1, setMainLink1] = useState(user.mainlink1);
    const [mainlink2, setMainLink2] = useState(user.mainlink2);
    const [linksModal, setLinksModal] = useState(false);

    const cursorColor = "#475569";

    return (
        <SafeAreaView className="bg-slate-200 flex-1 items-center justify-center p-10 space-y-6">
            <StatusBar/>
            
            <View>
                <Text className="text-slate-800 text-center justify-center text-xl">Add here your information</Text>
                <Text className="text-slate-600 text-center justify-center text-sm">The information will be displayed in your card</Text>
            </View>

            {/* Profile Picture */}
            <View className="flex flex-col justify-center items-center space-y-4">
                <IconTitle
                    title="Add your profile picture"
                    iconName={faImage}
                    iconSize={20}
                />

                <View className="bg-slate-300 border-2 border-slate-600 flex w-20 h-20 rounded-full items-center justify-center">
                    <FontAwesomeIcon
                        icon={faCamera}
                        color="#475569"
                        size={20}
                    />
                </View>
            </View>

            {/* Name and Profession inputs */}
            <View className="space-y-4">
                <Text className="font-semibold text-slate-800 text-lg">Name</Text>

                <TextInput
                    onChangeText={setUsername}
                    value={username}
                    className="text-base text-slate-700 py-2.5 px-2 w-72 bg-slate-300 rounded-lg"
                    placeholder="Add here your name"
                    cursorColor={cursorColor}
                />

                <Text className="font-semibold text-slate-800 text-lg">Profession</Text>

                <TextInput
                    onChangeText={setJob}
                    value={job}
                    className="text-base text-slate-700 py-2.5 px-2 w-72 bg-slate-300 rounded-lg"
                    placeholder="Add here your profession"
                    cursorColor={cursorColor}
                />

                <Text className="font-semibold text-slate-800 text-lg">Short description</Text>

                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={setDescription}
                    value={description}
                    className="text-base text-slate-700 pl-4 w-72 bg-slate-300 rounded-lg"
                    placeholder="Add a description of yourself."
                    cursorColor={cursorColor}
                />
            </View>

            {/* Important Links */}
            <View className="flex items-stretch space-y-4">
                <IconTitle
                    title="Add here your most important links"
                    iconName={faGlobe}
                    iconSize={16}
                />

                <ModalButton
                    title="Add Links"
                    onPress={() => setLinksModal(!linksModal)}
                />
                
                <Modal
                    isVisible={linksModal}
                >
                    <KeyboardAvoidingView className="flex mx-10 mt-20 space-y-4 bg-slate-300 rounded-lg p-10">
                        <Text className="text-center text-slate-600 text-xl">Add 1st Link</Text>
                        <TextInput
                            onChangeText={setMainLink1}
                            value={mainlink1}
                            className="border-2 border-slate-600 text-center w-full bg-slate-300 py-2 rounded-lg"
                            placeholder="Your Profession"
                            cursorColor={cursorColor}
                        />

                        <Text className="text-center text-slate-600 text-xl">Add 2nd Link</Text>
                        <TextInput
                            onChangeText={setMainLink2}
                            value={mainlink2}
                            className="border-2 border-slate-600 text-center w-full bg-slate-300 py-2 rounded-lg"
                            placeholder="Your Profession"
                            cursorColor={cursorColor}
                        />

                        <ModalButton
                            title="Save changes"
                            onPress={() => setLinksModal(!linksModal)}
                        />

                        <ModalButton
                            title="Close"
                            onPress={() => setLinksModal(!linksModal)}
                        />
                    </KeyboardAvoidingView>
                </Modal>
            </View>

            {/* Social media inputs */}
            <View className="flex items-center space-y-4">
                <IconTitle
                    title="Add here your social media usernames"
                    iconName={faUserGroup}
                    iconSize={20}
                />
                
            </View>

            {/* Cancel and Save Buttons */}
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