import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInstagram, faRedditSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function SocialMediaItem({ icon, iconColor }: { icon: IconProp, iconColor: string }) {
    return (
        <TouchableHighlight className="mx-4" onPress={() => alert('Whats to go to Reddit?')} underlayColor={'#fff'}>
            <FontAwesomeIcon color={iconColor} size={40} icon={icon}/>
        </TouchableHighlight>
    );
}

export default function SocialMediaComponent() {
    return (
        <View className="items-center justify-center mt-10">
            <Text className="text-slate-800 text-lg">My social media links</Text>

            <ScrollView contentContainerStyle={{alignItems: "center"}} className="max-h-20" horizontal showsHorizontalScrollIndicator={false}>
                <SocialMediaItem 
                    icon={faRedditSquare}
                    iconColor="#ea580c"
                />

                <SocialMediaItem 
                    icon={faTwitter}
                    iconColor="#0284c7"
                />

                <SocialMediaItem
                    icon={faInstagram}
                    iconColor="#db2777"
                />
            </ScrollView>
        </View>

    );
}