import { AnimatedIconSwiftUI } from '@/components/animated-icon.swiftui';
import { HintRowSwiftUI } from '@/components/hint-row.swiftui';
import { ThemedTextSwiftUI } from '@/components/themed-text.swiftui';
import { Colors, Spacing } from '@/constants/theme';
import { Column, Host } from '@expo/ui';
import { lineHeight, zIndex } from '@expo/ui/swift-ui/modifiers';
import { StyleSheet } from 'react-native';

export default function IndexWithExpoUI() {
  return (
    <Host style={styles.rootContainer}>
      <Column
        spacing={120}
        alignment="center"
        style={{ paddingTop: Spacing.three }}
      >
        <Column
          spacing={Spacing.one}
          alignment="center"
          style={{ paddingHorizontal: Spacing.four }}
          modifiers={[zIndex(2)]}
        >
          <AnimatedIconSwiftUI />

          <ThemedTextSwiftUI
            type="title"
            modifiers={[lineHeight(52)]}
            textStyle={styles.titleTextStyle}
          >
            Welcome to ExpoUI
          </ThemedTextSwiftUI>
        </Column>

        <Column
          spacing={Spacing.three}
          alignment="center"
          style={styles.actionsBoxContainer}
        >
          <ThemedTextSwiftUI type="code">GET STARTED</ThemedTextSwiftUI>

          <Column style={styles.actionsBox} spacing={Spacing.three}>
            <HintRowSwiftUI
              title="Try editing"
              hint="src/app/index.swiftui.tsx"
            />
            <HintRowSwiftUI title="Dev tools" hint="press cmd+d" />
            <HintRowSwiftUI title="Fresh start" hint="npm run reset-project" />
          </Column>
        </Column>
      </Column>
    </Host>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  titleTextStyle: {
    textAlign: 'center',
  },

  actionsBoxContainer: {
    paddingHorizontal: Spacing.four,
  },
  actionsBox: {
    backgroundColor: '#F0F0F3',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
