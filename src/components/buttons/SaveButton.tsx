import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export default function SaveButton({ onPress }: TouchableOpacityProps ) {
    return (
        <TouchableOpacity onPress={onPress} className="bg-indigo-600 py-2 rounded-md mt-4 hover:bg-indigo-400">
            <Text className="text-slate-200 text-lg text-center">Save</Text>
        </TouchableOpacity>
    );
}