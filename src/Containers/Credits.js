import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from '@/Theme';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';
import Markdown from '@/Components/Markdown';
import MenuButton from '@/Components/MenuButton';

const Stack = createStackNavigator();

const CreditsContainer = ({navigation}) => {
  const {Fonts, Gutters} = useTheme();
  const {t} = useTranslation();

  const body = useSelector(state => state.walks.credits);

  return (
    <ScrollView style={[Gutters.smallPadding]}>
      <View style={{height: 50}} />
      <Text style={[Gutters.smallBMargin, Fonts.titleLarge, Fonts.textCenter]}>
        {t('credits')}
      </Text>
      <Markdown markdown={body} />
      <View style={{height: 50}} />
    </ScrollView>
  );
};

const CreditsStack = ({navigation}) => {
  const headerRight = MenuButton({navigation});
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Credits"
        component={CreditsContainer}
        options={{
          title: null,
          headerRight,
          headerTransparent: true,
          headerMode: 'float',
        }}
      />
    </Stack.Navigator>
  );
};

export default CreditsStack;
