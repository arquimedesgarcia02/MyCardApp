import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Text, TextInput, TextInputProps, View } from "react-native";
import { InfoTextInput } from '../app/edit';

export function GithubInput({ value, onChangeText, cursorColor }: TextInputProps){
    return (
        <View className='flex flex-row gap-x-2 mb-4 items-center justify-center'>
            <FontAwesomeIcon icon={faGithub} size={40} color='#1e293b'/>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                cursorColor={cursorColor}
                placeholder="Your username"
                className='bg-slate-300 text-slate-800 w-52 rounded-lg p-2'
            />
        </View>
    );
}

export function LinkedInInput({ value, onChangeText, cursorColor }: TextInputProps){
    return (
        <View className='flex flex-row gap-x-2 mb-4 items-center justify-center'>
            <FontAwesomeIcon icon={faLinkedin} size={40} color='#1e40af'/>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                cursorColor={cursorColor}
                placeholder="Your username"
                className='bg-slate-300 text-slate-800 w-52 rounded-lg p-2'
            />
        </View>
    );
}