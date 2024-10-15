import { Link } from "expo-router";
import { SafeAreaView } from "react-native";

export default function Edit() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Link href={"/"}>Cancel</Link>
        </SafeAreaView>
    );
}