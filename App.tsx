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
import {pagination} from './utils/pagination';

const App = () => {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = React.useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = React.useState<
    Story[]
  >([]);
  const [isLoadingStories, setIsLoadingStories] = React.useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = React.useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = React.useState<
    Post[]
  >([]);
  const [isLoadingPosts, setIsLoadingPosts] = React.useState(false);

  React.useEffect(() => {
    setIsLoadingStories(true);
    const initialData = pagination(
      userStories,
      userStoriesCurrentPage,
      userStoriesPageSize,
    );
    setUserStoriesRenderedData(initialData);
    setIsLoadingStories(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setIsLoadingPosts(true);
    const initialData = pagination(
      userPosts,
      userPostsCurrentPage,
      userPostsPageSize,
    );
    setUserPostsRenderedData(initialData);
    setIsLoadingPosts(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          data={userPostsRenderedData}
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
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingPosts) {
              return;
            }
            setIsLoadingPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length === 0) {
              return;
            }
            setUserPostsCurrentPage(userPostsCurrentPage + 1);
            setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            setIsLoadingPosts(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
