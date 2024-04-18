import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../components/Title/Title';

import globalStyle from '../../assets/styles/globalStyle';
import {scaleFontSize} from '../../assets/styles/scaling';
import {UserPost} from '../../components/UserPost/UserPost';
import UserStory from '../../components/UserStory/UserStory';
import {userPosts} from '../../data/userPosts';
import {userStories} from '../../data/userStories';
import {Post, Story} from '../../types';
import {pagination} from '../../utils/pagination';
import style from './style';

const Home = () => {
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
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar barStyle="dark-content" />
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title="Link Souls" />
                <TouchableOpacity style={style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    color={'#898DAE'}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumberText}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={style.userStoryContainer}>
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
              <View style={style.userPostContainer}>
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

export default Home;
