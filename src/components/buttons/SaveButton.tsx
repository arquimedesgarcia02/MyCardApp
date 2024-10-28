import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export default function SaveButton({ onPress }: TouchableOpacityProps ) {
    return (
        <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-center rounded-lg p-4 space-x-2 bg-indigo-800 mx-4">
            <Text className="text-slate-100 text-center">Save</Text>
            <FontAwesomeIcon icon={faFloppyDisk} color="#f1f5f9"/>
        </TouchableOpacity>
    );
}