import React, { useEffect, useState } from "react";

import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import LinkIconButton from "../components/buttons/LinkIconButton";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare, faBriefcase, faEnvelope, faLocationDot, faPenToSquare, faShareFromSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

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
            <Text className="text-lg text-left text-slate-600">Hi, I'm 👋</Text>
            { name ? (
                <Text className="text-indigo-600 text-xl text-left">{name}</Text>
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
                    <Text className="text-lg text-slate-700 font-semibold">{ title }</Text>
                    <Text className="text-base text-slate-700">{ text }</Text>
                </View>
            ) : (
                <Text className="text-base text-slate-700">Loading...</Text>
            )}
        </View>
    );
}

function LinkLabel({ text }: { text: string | undefined } ) {
    return (
        <View className="flex flex-row items-center justify-center space-x-4 my-2">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={20}/>
            
            { text ? (
                <View>
                    <Text className="text-base text-slate-700">{ text }</Text>
                </View>
            ) : (
                <Text className="text-base text-slate-700">Loading...</Text>
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
    const [link1, setLink1] = useState<string | undefined>();
    const [link2, setLink2] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            // what a lot of repetition, need to fix this, maybe change to get all the items in one function
            const nameData = await getData('name');
            const professionData = await getData('profession');
            const statusData = await getData('status');
            const locationData = await getData('location');
            const descriptionData = await getData('description');
            const link1Data = await getData('link1');
            const link2Data = await getData('link2');
            const emailData = await getData('email');

            setName(nameData);
            setProfession(professionData);
            setStatus(statusData);
            setLocation(locationData);
            setDescription(descriptionData);
            setLink1(link1Data);
            setLink2(link2Data);
            setEmail(emailData);
        };

        fetchData();
    });
    
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-slate-100 px-10 space-y-4">
            <StatusBar/>

            <View className="flex flex-row items-center justify-start px-4">
                <Image    
                    source={{
                        uri: 'https://media.licdn.com/dms/image/v2/D5603AQHN6y-riF3tZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728260894591?e=1735776000&v=beta&t=B1zATCM4p2KgwcU_oxKvWWMx_YDWIbCjFiwwwdsrGgs',
                    }}
                    height={90}
                    width={90}
                    borderRadius={90}
                />
                <TextName name={name}/>
            </View>
            
            <View className="mt-4 border-b border-b-slate-600 pb-4">
                <Text className="text-center text-base text-slate-700">"{description}"</Text>
            </View>

            <View className="flex flex-row justify-center items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} size={20} color="#334155"/>
                <Text className="text-slate-700 text-base underline">{email}</Text>
            </View>
            
            <View className="items-start justify-start w-full">
                {/* This can be displayed in a Flatlist? */}
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

            <View className="items-start justify-start w-full px-2">
                <Text className="font-semibold text-slate-800 text-xl mb-2">Links</Text>
                
                <LinkLabel
                    text={link1}
                />

                <LinkLabel
                    text={link2}
                />
            </View>

            <View className="flex flex-row w-full items-center justify-around">
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