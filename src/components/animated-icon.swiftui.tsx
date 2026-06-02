import { Image, RoundedRectangle, ZStack } from '@expo/ui/swift-ui';
import {
  Animation,
  animation,
  foregroundStyle,
  frame,
  onAppear,
  opacity,
  resizable,
  scaleEffect,
  shadow,
  zIndex,
} from '@expo/ui/swift-ui/modifiers';
import { useState } from 'react';
import { Image as RNImage } from 'react-native';

const BLUE_BOX_WITH_SHADOW_SIZE = 150;

const BLUE_BOX_CORNER_RADIUS = 40;
const BLUE_BOX_SIZE = 128;

const LOGO_SIZE = 77;
const LOGO = RNImage.resolveAssetSource(
  require('@/assets/images/expo-logo.png'),
).uri;

const SPLASH_DURATION = 0.6;

export function AnimatedIconSwiftUI() {
  const [splashAnimationValue, setSplashAnimationValue] = useState(false);

  return (
    <ZStack
      modifiers={[
        zIndex(1),
        frame({
          width: BLUE_BOX_WITH_SHADOW_SIZE,
          height: BLUE_BOX_WITH_SHADOW_SIZE,
        }),
      ]}
    >
      <RoundedRectangle
        cornerRadius={BLUE_BOX_CORNER_RADIUS}
        modifiers={[
          frame({ width: BLUE_BOX_SIZE, height: BLUE_BOX_SIZE }),
          foregroundStyle({
            type: 'linearGradient',
            colors: ['#3C9FFE', '#0274DF'],
            startPoint: { x: 0.5, y: 0 },
            endPoint: { x: 0.5, y: 1 },
          }),
          scaleEffect(splashAnimationValue ? 1 : 10),
          animation(
            Animation.spring({
              duration: SPLASH_DURATION,
              dampingFraction: 1,
            }),
            splashAnimationValue,
          ),
          onAppear(() => {
            setSplashAnimationValue(true);
          }),
          shadow({ radius: 5, color: '#208AEF', x: 3, y: -3 }),
        ]}
      />

      <Image
        uiImage={LOGO}
        modifiers={[
          frame({ width: LOGO_SIZE, height: LOGO_SIZE }),
          resizable(),
          opacity(splashAnimationValue ? 1 : 0),
          animation(
            Animation.easeOut({ duration: SPLASH_DURATION }),
            splashAnimationValue,
          ),
        ]}
      />
    </ZStack>
  );
}
