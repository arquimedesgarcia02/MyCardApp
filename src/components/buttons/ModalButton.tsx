import { GestureResponderEvent, Text, TouchableHighlight, TouchableHighlightProps } from "react-native";

type ModalButtonProps = {
    title: string,
    onPress: (event: GestureResponderEvent) => void,  
}

export default function ModalButton({title, onPress}: ModalButtonProps) {
    return (
        <TouchableHighlight onPress={onPress} className="bg-slate-800 p-4 mt-4 rounded-2xl">
            <Text className="text-slate-100 text-center">{title}</Text>
        </TouchableHighlight>
    );
}