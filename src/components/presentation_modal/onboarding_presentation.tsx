import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingPresentation({ onSkipPress } : { onSkipPress: () => void }) {
    const bgColor = "#f1f5f9";
    
    return(
        <Onboarding
            pages={[
                {
                    backgroundColor: bgColor,
                    image: <Image source={require('../../../assets/a-freelancer-guy2.png')} className="h-64 w-64 rounded-lg"/>,
                    title: 'Welcome to MyCardApp',
                    subtitle: 'Create a card to share your work with people.',
                },
                {
                    backgroundColor: bgColor,
                    image: <Image source={require('../../../assets/business-card.png')} className="h-64 w-64 rounded-lg"/>,
                    title: 'Avoid The Old Paper Cards',
                    subtitle: 'Your professional identity, always accessible.',
                },
                {
                    backgroundColor: bgColor,
                    image: <Image source={require('../../../assets/business-people.png')} className="h-64 w-64 rounded-lg"/>,
                    title: 'Make Your Networking Digital',
                    subtitle: 'Expand your network, expand your opportunities.',
                },
            ]}
            onDone={onSkipPress}
            onSkip={onSkipPress}
            bottomBarColor={bgColor}
        />
    );
}