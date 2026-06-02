import { Platform } from 'react-native';

import { Fonts, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { TextProps } from '@expo/ui';
import { Text } from '@expo/ui/swift-ui';
import { font, foregroundStyle, lineHeight } from '@expo/ui/swift-ui/modifiers';

export type ThemedTextProps = {
  type?:
    | 'default'
    | 'title'
    | 'small'
    | 'smallBold'
    | 'subtitle'
    | 'link'
    | 'linkPrimary'
    | 'code';
  themeColor?: ThemeColor;
  children?: React.ReactNode;
} & Pick<TextProps, 'textStyle' | 'modifiers'>;

export function ThemedTextSwiftUI({
  type = 'default',
  themeColor,
  children,
  modifiers,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  const lineHeightValue = (styles[type] ?? styles.default).lineHeight ?? 24;
  const color =
    type === 'linkPrimary' ? '#3c87f7' : theme[themeColor ?? 'text'];

  return (
    <Text
      modifiers={[
        foregroundStyle({ type: 'color', color }),
        font(styles[type] ?? styles.default),
        lineHeight(lineHeightValue),
        ...(modifiers ?? []),
      ]}
      {...rest}
    >
      {children as string}
    </Text>
  );
}

const styles = {
  small: {
    size: 14,
    lineHeight: 20,
    weight: 'regular' as const,
  },
  smallBold: {
    size: 14,
    lineHeight: 20,
    weight: 'bold' as const,
  },
  default: {
    size: 16,
    weight: 'semibold' as const,
    lineHeight: 20,
  },
  title: {
    size: 40,
    weight: 'bold' as const,
    lineHeight: 52,
  },
  subtitle: {
    size: 32,
    lineHeight: 44,
    weight: 'bold' as const,
  },
  link: {
    lineHeight: 20,
    size: 14,
  },
  linkPrimary: {
    lineHeight: 30,
    size: 14,
    color: '#3c87f7',
  },
  code: {
    family: Fonts.mono,
    weight: Platform.select({ android: 'black' as const }) ?? ('bold' as const),
    size: 12,
    lineHeight: 16,
  },
};
