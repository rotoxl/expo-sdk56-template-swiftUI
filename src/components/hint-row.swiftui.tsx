import { Row, Spacer } from '@expo/ui';

import { ThemedTextSwiftUI } from '@/components/themed-text.swiftui';
import { Colors, Spacing } from '@/constants/theme';
import { StyleSheet } from 'react-native';

type Props = {
  title: string;
  hint: string;
};

export function HintRowSwiftUI({ title, hint }: Props) {
  return (
    <Row>
      <ThemedTextSwiftUI type="small">{title}</ThemedTextSwiftUI>

      <Spacer flexible />

      <Row style={styles.codeSnippet}>
        <ThemedTextSwiftUI type="code">{hint}</ThemedTextSwiftUI>
      </Row>
    </Row>
  );
}

const styles = StyleSheet.create({
  codeSnippet: {
    borderRadius: Spacing.two,
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.two,
    backgroundColor: Colors.light.backgroundSelected,
  },
});
