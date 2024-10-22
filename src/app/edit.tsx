import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import FormComponent from "../components/form/form";

export default function Edit() {
    const barColor = "#e2e8f0";

    return (
        <SafeAreaView className="bg-slate-200 flex-1 items-center justify-center">
            <StatusBar barStyle={"dark-content"} backgroundColor={barColor}/>
            
            <ScrollView className="space-y-8 mt-4 p-10" overScrollMode="never" showsVerticalScrollIndicator={false}>
                <FormComponent/>
            </ScrollView>
        </SafeAreaView>
    );
}