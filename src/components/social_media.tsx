import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGithub, faInstagram, faRedditSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function SocialMediaItem({ icon, iconColor }: { icon: IconProp, iconColor: string }) {
    return (
        <View className="flex flex-row justify-center items-center">
            <FontAwesomeIcon color={iconColor} size={40} icon={icon}/>
            <Text className="text-lg">/reddituser</Text>
        </View>
        
    );
}

export default function SocialMediaComponent() {
    return (
        <View className="items-center justify-center mt-10">
            <Text className="text-slate-800 font-semibold text-lg">My social media links</Text>

            <ScrollView contentContainerStyle={{alignItems: "center"}} className="max-h-20" horizontal showsHorizontalScrollIndicator={false}>
                <SocialMediaItem 
                    icon={faRedditSquare}
                    iconColor="#ea580c"
                />
            </ScrollView>
        </View>
    );
}