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
import {UserPost} from './components/UserPost/UserPost';
import UserStory from './components/UserStory/UserStory';
import {userPosts} from './data/userPosts';
import {userStories} from './data/userStories';
import {Post, Story} from './types';

const App = () => {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = React.useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = React.useState<
    Story[]
  >([]);
  const [isLoadingStories, setIsLoadingStories] = React.useState(false);

  const userPostsPageSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = React.useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = React.useState<
    Post[]
  >([]);
  const [isLoadingPosts, setIsLoadingPosts] = React.useState(false);

  const pagination = (data: Story[], currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= data.length) {
      return [];
    }
    return data.slice(startIndex, endIndex);
  };

  React.useEffect(() => {
    setIsLoadingStories(true);
    const initialData = pagination(
      userStories,
      userStoriesCurrentPage,
      userStoriesPageSize,
    );
    setUserStoriesRenderedData(initialData);
    setIsLoadingStories(false);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title="Hello World" />
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={20}
                    color={'#898DAE'}
                  />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumberText}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  //   ListHeaderComponent={}
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
                    if (isLoadingStories) {
                      return;
                    }
                    setIsLoadingStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length === 0) {
                      return;
                    }
                    setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                    setUserStoriesRenderedData(prev => [
                      ...prev,
                      ...contentToAppend,
                    ]);
                    setIsLoadingStories(false);
                  }}
                />
              </View>
            </>
          }
          data={userPosts}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={globalStyle.userPostContainer}>
                <UserPost
                  key={item.id}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  comments={item.comments}
                  likes={item.likes}
                  bookmarks={item.bookmarks}
                  image={item.image}
                  profileImage={item.profileImage}
                  location={item.location}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
