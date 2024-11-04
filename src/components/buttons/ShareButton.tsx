import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Text, TouchableOpacity} from "react-native";

export default function ShareButton({ onPress }: { onPress: () => void }) {
    return(
        <TouchableOpacity className="mx-4 flex flex-row items-center justify-center rounded-lg p-4 space-x-2 bg-indigo-600" onPress={onPress}>
            <Text className="text-slate-200">Share</Text>
            <FontAwesomeIcon icon={faShareFromSquare} color="#e2e8f0"/>
        </TouchableOpacity>
    );
}