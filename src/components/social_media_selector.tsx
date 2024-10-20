import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faInstagramSquare, faReddit } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FlatList, View, Text, TextInput } from "react-native";

const DATA = [
    {
      id: '001',
      title: 'Github',
      iconName: faGithub
    },
    {
        id: '002',
        title: 'Reddit',
        iconName: faReddit
    },
    {
        id: '003',
        title: 'Instagram',
        iconName: faInstagramSquare
    },
];

type ItemProps = {
    title: string,
    iconName: IconProp,
};

const Item = ({ title, iconName }: ItemProps) => (
    
);

export default function SocialMediaSelector() {
    return (
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} iconName={item.iconName} />}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            overScrollMode="never"
            contentContainerStyle={{alignItems: "center"}}
            style={{ maxHeight: 128, marginVertical: 10 }}
        />
    );
}