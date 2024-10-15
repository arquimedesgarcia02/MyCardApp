import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Text, View } from "react-native";
import { Link } from "expo-router";

function MainLinkItem({ title, linkRef } : { title:string, linkRef:string }) {
    return (
        <Link href={linkRef} className="mx-4">
            <View className="flex flex-row justify-center space-x-[4px] items-center">
                <FontAwesomeIcon color="#0369a1" icon={faGlobe} size={20}/>
                <Text className="text-lg underline text-sky-700">{title}</Text>
            </View>
        </Link>
    );
}

export default function MainLinksComponent({ title1, link1, title2, link2, } : { title1: string, link1: string, title2: string, link2: string, }) {
    return (
        <View className="flex flex-row items-center">
            <MainLinkItem
                title={title1}
                linkRef={link1}
            />

            <MainLinkItem
                title={title2}
                linkRef={link2}
            />
        </View>
    );
}