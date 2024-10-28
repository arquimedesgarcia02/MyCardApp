import { SafeAreaView, StatusBar } from "react-native";
import FormComponent from "../components/form/form";

const barColor = "#e2e8f0";

export default function Edit() {

    return (
        <SafeAreaView className="bg-slate-200 flex-1 items-center justify-center">
            <StatusBar barStyle={"dark-content"} backgroundColor={barColor}/>
            
            <FormComponent/>
        </SafeAreaView>
    );
}