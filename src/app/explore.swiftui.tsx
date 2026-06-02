import { ThemedTextSwiftUI } from '@/components/themed-text.swiftui';
import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';
import { Column, Icon, Row, ScrollView, Spacer } from '@expo/ui';
import { Host, Image, Text } from '@expo/ui/swift-ui';
import {
  aspectRatio,
  font,
  frame,
  resizable,
} from '@expo/ui/swift-ui/modifiers';

import { CollapsibleSwiftUI } from '@/components/ui/collapsible.swiftui';
import { LearnMoreLinkSwiftUI } from '@/components/ui/learn-more-link.swiftui';
import { useTheme } from '@/hooks/use-theme';
import {
  openBrowserAsync,
  WebBrowserPresentationStyle,
} from 'expo-web-browser';
import { Image as RNImage, StyleSheet } from 'react-native';

const monospacedFont = [font({ design: 'monospaced', size: 12 })];
const smallBoldFont = [font({ size: 12, weight: 'bold' })];

const TUTORIAL_IMAGE = RNImage.resolveAssetSource(
  require('@/assets/images/tutorial-web.png'),
).uri;

const REACT_LOGO_IMAGE = RNImage.resolveAssetSource(
  require('@/assets/images/react-logo.png'),
).uri;

export default function ExploreSwiftUI() {
  const theme = useTheme();

  const openLink = (href: string) => async () => {
    await openBrowserAsync(href, {
      presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
    });
  };

  return (
    <Host style={styles.rootContainer}>
      <ScrollView showsIndicators={false}>
        <Column
          alignment="center"
          spacing={Spacing.three}
          style={styles.contentContainer}
          modifiers={[frame({ maxWidth: MaxContentWidth })]}
        >
          <ThemedTextSwiftUI type="subtitle" textStyle={styles.centerText}>
            Explore
          </ThemedTextSwiftUI>

          <ThemedTextSwiftUI
            textStyle={styles.centerText}
            themeColor="textSecondary"
          >
            This starter app includes example{'\n'}code to help you get started.
          </ThemedTextSwiftUI>

          <Row
            style={styles.linkButton}
            alignment="center"
            onPress={openLink('https://docs.expo.dev')}
          >
            <ThemedTextSwiftUI type="link">
              Expo documentation
            </ThemedTextSwiftUI>

            <Spacer size={Spacing.one} />

            <Icon name="arrow.up.right" size={16} color={theme.text} />
          </Row>

          <Column spacing={Spacing.five}>
            <CollapsibleSwiftUI title="File-based routing">
              <ThemedTextSwiftUI type="small">
                This app has two screens:{' '}
                <Text modifiers={monospacedFont}>src/app/index.tsx</Text>
                {' and '}
                <Text modifiers={monospacedFont}>src/app/explore.tsx</Text>
              </ThemedTextSwiftUI>

              <ThemedTextSwiftUI type="small">
                The layout file in{' '}
                <Text modifiers={monospacedFont}>src/app/_layout.tsx</Text> sets
                up the tab navigator.
              </ThemedTextSwiftUI>

              <LearnMoreLinkSwiftUI href="https://docs.expo.dev/router/introduction" />
            </CollapsibleSwiftUI>

            <CollapsibleSwiftUI title="Android, iOS, and web support">
              <ThemedTextSwiftUI type="small">
                For static images, you can use the{' '}
                <Text modifiers={monospacedFont}>@2x</Text>
                {' and '}
                <Text modifiers={monospacedFont}>@3x</Text> suffixes to provide
                files for different screen densities.
              </ThemedTextSwiftUI>

              <Image
                uiImage={TUTORIAL_IMAGE}
                modifiers={[resizable(), aspectRatio({ contentMode: 'fit' })]}
              />
            </CollapsibleSwiftUI>

            <CollapsibleSwiftUI title="Images">
              <ThemedTextSwiftUI type="small">
                You can open this project on Android, iOS, and the web. To open
                the web version, press <Text modifiers={smallBoldFont}>w</Text>{' '}
                in the terminal running this project.
              </ThemedTextSwiftUI>

              <Image
                uiImage={REACT_LOGO_IMAGE}
                modifiers={[
                  resizable(),
                  aspectRatio({ contentMode: 'fit' }),
                  frame({ width: 100, height: 100 }),
                  frame({ maxWidth: Infinity, alignment: 'center' }),
                ]}
              />

              <LearnMoreLinkSwiftUI href="https://reactnative.dev/docs/images" />
            </CollapsibleSwiftUI>

            <CollapsibleSwiftUI title="Light and dark mode components">
              <ThemedTextSwiftUI type="small">
                This template has light and dark mode support. The{' '}
                <Text modifiers={monospacedFont}>useColorScheme()</Text> hook
                lets you inspect what the user&apos;s current color scheme is,
                and so you can adjust UI colors accordingly.
              </ThemedTextSwiftUI>

              <LearnMoreLinkSwiftUI href="https://docs.expo.dev/develop/user-interface/color-themes/" />
            </CollapsibleSwiftUI>

            <CollapsibleSwiftUI title="Animations">
              <ThemedTextSwiftUI type="small">
                This template includes an example of an animated component. The{' '}
                <Text modifiers={monospacedFont}>
                  src/components/ui/collapsible.tsx
                </Text>{' '}
                component uses the powerful{' '}
                <Text modifiers={monospacedFont}>react-native-reanimated</Text>{' '}
                library to animate opening this hint.
              </ThemedTextSwiftUI>
            </CollapsibleSwiftUI>
          </Column>
        </Column>
      </ScrollView>
    </Host>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  contentContainer: {
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
  },
  centerText: {
    textAlign: 'center',
  },
  linkButton: {
    backgroundColor: '#F0F0F3',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    borderRadius: Spacing.five,
  },
});
