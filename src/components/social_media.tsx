import { Text, View } from "react-native";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import user from '../data/user.json';
import { ReactNode } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type SocialMediaProps = {
    iconName: IconProp,
    username: string,
    iconColor?: string
}

const activeItems = user.socialmedias.filter(item => item.active);

function SocialMediaItem({iconName, iconColor, username}: SocialMediaProps) {
    return (
        <View className="flex flex-row justify-center items-center">
            <FontAwesomeIcon color={iconColor} size={40} icon={iconName}/>
            <Text className="text-lg">/{username}</Text>
        </View>
        
    );
}

export default function SocialMediaComponent() {
    const renderItem = () => (
        <SocialMediaItem
            iconName={faGithub}
            
        />
      );
    
    
    return (
        <View className="items-center justify-center my-10">
            <Text className="text-slate-800 font-semibold text-lg">My social media links</Text>
            
        </View>
    );
}
