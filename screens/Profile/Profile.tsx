import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Profile = ({navigation}: any) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profielImageContainer}>
          <View style={style.profielImageContent}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={style.profileImage}
            />
          </View>
        </View>
        <Text style={style.profileName}>Alex Bodrov</Text>
        <View style={style.statsContainer}>
          <View>
            <Text style={style.statsAmount}>45</Text>
            <Text style={style.statsType}>Following</Text>
          </View>

          <View style={style.statsBorder} />
          <View>
            <Text style={style.statsAmount}>30</Text>
            <Text style={style.statsType}>Followers</Text>
          </View>
          <View style={style.statsBorder} />
          <View>
            <Text style={style.statsAmount}>100</Text>
            <Text style={style.statsType}>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
