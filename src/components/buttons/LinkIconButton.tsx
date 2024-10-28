import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Href, Link } from "expo-router";
import { Text, View } from "react-native";

export default function LinkIconButton({ title, linkRef, iconName }: { title: string, linkRef: Href, iconName: IconProp }) {
    return (
        <Link className="mx-4" href={linkRef}>
            <View className="flex flex-row items-center justify-center rounded-lg p-4 space-x-2 bg-slate-800">
                <Text className="text-slate-200">{title}</Text>
                <FontAwesomeIcon color="#e2e8f0" icon={iconName}/>
            </View>
        </Link>
    );
}