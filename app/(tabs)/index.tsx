import {
  Image,
  ImageBackground,
  Pressable,
  Button as RNButton,
  View,
} from 'react-native';

import { Container } from '~/components/Container';
import StatsCard from '~/components/Home/statscard';
import { useAppSelector } from '../../src/store/hook/hook';
import AppText from '~/components/universal/AppText';
import { Flame, Icon, UserCircle2, UserRound } from 'lucide-react-native';
import { RootState } from '~/src/store';
import PagerView from 'react-native-pager-view';
import { router } from 'expo-router';
import AppButton from '~/components/universal/AppButton';
export default function Home() {

  const coins = useAppSelector((state: RootState) => state.currency.coins);
  const gems = useAppSelector((state: RootState) => state.currency.gems);
  const strike = useAppSelector((state: RootState) => state.player.currentStreak);

  const banners = [
    {
      text: "Welcome back, Jinwoo!",
      subtext: "Ready to hunt some monsters?",
      image: require("../../assets/avatars/sungJinwoo.png"),
    },
    {
      text: "Daily Quests Await!",
      subtext: "Don’t miss your rewards.",
      image: require("../../assets/avatars/choiJongin.png"),
    },
  ];
  return (
    <>
      <Container>
        <View className='flex-1  items-center'>
          <View className="flex-row items-center  w-full justify-between px-4 pt-6 pb-3 rounded-t-2xl ">
            {/* Left Icon */}
            <Pressable className='flex-row items-center text-xl justify-center gap-x-1'>
              <Flame size={24} color="yellow" fill={"yellow"} />
              <AppText variant='bold' className='text-yellow-400'>{strike}</AppText>
              {/* <Text>🪙 Coins: {coins}</Text>
              <Text>💎 Gems: {gems}</Text> */}
            </Pressable>

            <AppText variant='bold' className="text-2xl  text-white">Jinwoo</AppText>
            <Pressable onPress={() => router.push('/AvatarSlection')}>
              {/* <UserCircle2 size={32} color="white" /> */}
              <ImageBackground imageStyle={{ borderRadius: 100, overflow: 'hidden' }} style={{ overflow: "hidden" }} className='rounded-full  ' source={require('../../assets/dgbg.jpg')} resizeMode="cover" >
                <Image source={require("../../assets/avatars/avtar2.png")} className="w-12 h-12 rounded-2xl" resizeMode="contain" />
              </ImageBackground>
            </Pressable>
          </View>
          <PagerView
            style={{  height: 160, width: '100%' }}
            initialPage={0}
            onPageSelected={(e) => console.log('Selected page:', e.nativeEvent.position)}
            
          >
            {banners.map((banner, index) => (
              <View key={index} className='w-full px-4 h-40 rounded-2xl'>
                <ImageBackground
                  source={require('../../assets/dgbg.jpg')}
                  className='w-full h-full rounded-2xl'
                  imageStyle={{ borderRadius: 20, overflow: 'hidden', opacity: 0.6 }}
                  style={{ overflow: 'hidden' }}
                  resizeMode="cover"
                >
                  <View className='flex-1 justify-end px-4 py-2'>
                    <AppText variant='bold' className='text-white text-2xl'>{banner.text}</AppText>
                    <AppText variant='semibold' className='text-white text-sm'>{banner.subtext}</AppText>
                  </View>
                  <View className='absolute -bottom-12 -right-14 overflow-hidden'>
                    <Image source={banner.image} className="w-64 h-64 rounded-2xl" resizeMode="contain" />
                  </View>
                </ImageBackground>
              </View>
            ))}

          </PagerView>
          <StatsCard />
          <AppButton onPress={() => router.push('/(pages)/Shop')} className='w-11/12 mt-4' title='Shop' />
      
        </View>
      </Container>
    </>
  );
}

