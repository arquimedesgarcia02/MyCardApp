import { SafeAreaView, StatusBar } from "react-native";
import FormComponent from "../components/form/form";

const barColor = "#f1f5f9";

export default function Edit() {

    return (
        <SafeAreaView className="bg-slate-100 flex-1 items-center justify-center">
            <StatusBar barStyle={"dark-content"} backgroundColor={barColor}/>
            
            <FormComponent/>
        </SafeAreaView>
    );
}