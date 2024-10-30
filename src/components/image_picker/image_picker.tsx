import React, { useState } from "react";
import { Alert, Text, View, TouchableOpacity, Image } from "react-native";

import Modal from "react-native-modal";

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera, faImage } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import ModalButton from "../buttons/ModalButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TakePicture({ onPress }: { onPress: () => void }) {
    return(
        <TouchableOpacity onPress={onPress} className="bg-slate-300 rounded-full p-8">
            <FontAwesomeIcon icon={faCamera} size={20} color="#334155"/>
        </TouchableOpacity>
    );
}

function PictureModalItem({ title, iconName, onPress }: { title: string, iconName: IconProp, onPress: () => void }) {
    return (
        <TouchableOpacity onPress={onPress} className="mx-4">
            <View className="py-6 bg-slate-300 rounded-xl justify-center items-center">
                <FontAwesomeIcon icon={iconName} size={20} color="#334155"/>
            </View>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

function SelectPictureModal({ closeModal }: { closeModal: () => void }) {
    const [image, setImage] = useState<string | null>(null);
    
    // Save image locally:
    const saveImageLocally = async (uri: string | null) => {
        try {
            if(uri === null){
                console.error('Null value cannot be saved.');
                return;
            }

            const fileName = uri.split('/').pop();
            const localUri = `${FileSystem.documentDirectory}${fileName}`;

            await FileSystem.copyAsync({
                from: uri,
                to: localUri,
            })
            
            await AsyncStorage.setItem('profile_picture', localUri);
            console.log('Image saved.');
        } catch (error) {
            console.error('Save image error');
        }
    }

    // Camera functions:
    const requestCameraPermissions = async () => {
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
        
        if (!cameraPermission.granted) {
            Alert.alert("Permissions required", "Please grant camera permissions.");
            return false;
        }
        
        return true;
    }

    const captureImage = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        
        if (!result.canceled && result.assets) {
            const uri = result.assets[0].uri;
            setImage(uri);
            saveImageLocally(uri);
        }
    };

    async function handleCamera() {
        const permission = await requestCameraPermissions();
        
        if(permission === true){
            console.log('clicked');
            captureImage();
        }
    }

    // Pick image from gallery functions:
    const requestMediaPermissions = async () => {
        const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (!mediaLibraryPermission.granted) {
            Alert.alert("Permissions required", "Please grant media library permissions.");
            return false;
        }
        
        return true;
    };
    
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled && result.assets) {
            const uri = result.assets[0].uri;
            
            setImage(uri);
            saveImageLocally(uri);
        }
    };

    async function handleImagePicker() {
        const permission = await requestMediaPermissions();

        if(permission === true){
            pickImage();
        }
    }

    return(
        <View className="bg-slate-100 py-10 mx-8 rounded-md">
            <View className="flex flex-row justify-center items-center">
                <PictureModalItem iconName={faCamera} title="Take a picture" onPress={handleCamera}/>
                <PictureModalItem iconName={faImage} title="Pick from galery" onPress={handleImagePicker}/>
            </View>

            <View className="justify-center items-center mt-5">
                {image ? (
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                ) : (
                    <Text className="w-52 text-center">Your picture preview will be displayed here.</Text>
                )}
            </View>

            <ModalButton onPress={closeModal} title="Close"/>
        </View>
    );
}

export default function ImagePickerComponent(){
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View className="p-10 justify-center items-center">
            <TakePicture onPress={ () => setModalVisible(!modalVisible) }/>
            
            <Modal isVisible={modalVisible}>
                <SelectPictureModal closeModal={toggleModal}/>
            </Modal>

            <Text className="text-slate-700 mt-1 text-base">Click on the icon above</Text>
        </View>
    );
}