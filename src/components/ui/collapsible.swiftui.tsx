import { ThemedText } from '@/components/themed-text';
import { Colors, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { Column, Icon, Row } from '@expo/ui';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

type Props = {
  title: string;
  children: React.ReactNode;
};
export const CollapsibleSwiftUI = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggleOpen = () => {
    setIsOpen((open) => !isOpen);
  };

  return (
    <Column spacing={Spacing.one}>
      <Row onPress={toggleOpen} spacing={Spacing.two} alignment="center">
        <Icon
          name={isOpen ? 'chevron.up' : 'chevron.down'}
          size={16}
          color={theme.text}
          style={styles.icon}
        />
        <ThemedText type="small">{title}</ThemedText>
      </Row>

      {isOpen && (
        <Column style={styles.contentBox}>
          <Column style={styles.content} spacing={Spacing.two}>
            {children}
          </Column>
        </Column>
      )}
    </Column>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: Colors.light.backgroundElement,
    padding: Spacing.two,
    width: 24,
    height: 24,
    borderRadius: 100,
  },

  contentBox: {
    paddingTop: Spacing.two,
    paddingLeft: Spacing.five,
  },
  content: {
    borderRadius: Spacing.three,
    padding: Spacing.three,
    backgroundColor: Colors.light.backgroundElement,
  },
});
