import { Text, TouchableHighlight } from "react-native";

type ModalButtonProps = {
    title: string,
    onPress: () => void,  
}

export default function ModalButton({title, onPress}: ModalButtonProps) {
    return (
        <TouchableHighlight onPress={onPress} className="bg-slate-800 mt-4 rounded-2xl mx-10 h-10 items-center justify-center">
            <Text className="text-slate-100 text-center">{title}</Text>
        </TouchableHighlight>
    );
}