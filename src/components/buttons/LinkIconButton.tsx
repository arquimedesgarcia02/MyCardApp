import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Href, Link } from "expo-router";
import { Text, View } from "react-native";

export default function LinkIconButton({ title, linkRef, iconName }: { title: string, linkRef: Href, iconName: IconProp }) {
    return (
        <Link className="mx-4" href={linkRef}>
            <View className="flex flex-row items-center justify-center border-2 p-4 border-slate-800 rounded-lg text-slate-800 space-x-2">
                <Text>{title}</Text>
                <FontAwesomeIcon color="#1e293b" icon={iconName}/>
            </View>
        </Link>
    );
}