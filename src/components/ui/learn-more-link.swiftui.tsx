import { ThemedTextSwiftUI } from '@/components/themed-text.swiftui';
import { Row } from '@expo/ui';
import {
  openBrowserAsync,
  WebBrowserPresentationStyle,
} from 'expo-web-browser';

type Props = {
  href: string;
  text?: string;
};
export const LearnMoreLinkSwiftUI = ({ href, text = 'Learn more' }: Props) => {
  const openLink = async () => {
    await openBrowserAsync(href, {
      presentationStyle: WebBrowserPresentationStyle.AUTOMATIC,
    });
  };

  return (
    <Row onPress={openLink}>
      <ThemedTextSwiftUI type="linkPrimary">{text}</ThemedTextSwiftUI>
    </Row>
  );
};
