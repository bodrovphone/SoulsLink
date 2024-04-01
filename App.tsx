import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';

import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import {Story} from './types';

const App = () => {
  const userStories: Story[] = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jane',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'John',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jessica',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Markus',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivia',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nina',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Alex',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Max',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = React.useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = React.useState<
    Story[]
  >([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const pagination = (data: Story[], currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= data.length) {
      return [];
    }
    return data.slice(startIndex, endIndex);
  };

  React.useEffect(() => {
    setIsLoading(true);
    const initialData = pagination(
      userStories,
      userStoriesCurrentPage,
      userStoriesPageSize,
    );
    setUserStoriesRenderedData(initialData);
    setIsLoading(false);
  }, []);

  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title="Hello World" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumberText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          renderItem={({item}) => {
            return (
              <UserStory
                key={item.id}
                firstName={item.firstName}
                profileImage={item.profileImage}
              />
            );
          }}
          data={userStoriesRenderedData}
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoading) {
              return;
            }
            setIsLoading(true);
            const contentToAppend = pagination(
              userStories,
              userStoriesCurrentPage + 1,
              userStoriesPageSize,
            );
            if (contentToAppend.length === 0) {
              return;
            }
            setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
            setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
            setIsLoading(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
