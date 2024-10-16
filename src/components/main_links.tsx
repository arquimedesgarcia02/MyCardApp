import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Text, View } from "react-native";
import { Link } from "expo-router";

function MainLinkItem({ title } : { title:string }) {
    return (
        <View className="flex flex-row flex-wrap justify-center space-x-1 space-y-2 items-center">
            <FontAwesomeIcon color="#0369a1" icon={faGlobe} size={20}/>
            <Text className="text-base underline text-sky-700">{title}</Text>
        </View>
    );
}

export default function MainLinksComponent({ title1, title2 } : { title1: string, title2: string }) {
    return (
        <View className="flex flex-col items-center justify-center">
            <Text className="text-lg text-slate-800 font-semibold text-center justify-center">My links</Text>
            
            <View className="flex flex-col justify-start items-start">
                <MainLinkItem
                    title={title1}
                />

                <MainLinkItem
                    title={title2}
                />
            </View>
        </View>
    );
}