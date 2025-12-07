import { useLocalSearchParams, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import WebViewControls from '../components/WebViewControls';
import WebViewHeader from '../components/WebViewHeader';

export default function WebViewScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ url?: string }>();
  const [url, setUrl] = useState(params.url || 'https://expo.dev');
  const [currentUrl, setCurrentUrl] = useState(url);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [loading, setLoading] = useState(true);
  const webViewRef = useRef<WebView>(null);

  const handleNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);
    setCurrentUrl(navState.url);
    setLoading(navState.loading);
  };

  const handleGoBack = () => {
    webViewRef.current?.goBack();
  };

  const handleGoForward = () => {
    webViewRef.current?.goForward();
  };

  const handleReload = () => {
    webViewRef.current?.reload();
  };

  const handleGoToUrl = () => {
    const urlToLoad = url.startsWith('http') ? url : `https://${url}`;
    setCurrentUrl(urlToLoad);
    setUrl(urlToLoad);
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebViewHeader
        url={url}
        onUrlChange={setUrl}
        onGoToUrl={handleGoToUrl}
        onBack={() => router.back()}
        showBackButton={true}
      />

      <WebViewControls
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        onGoBack={handleGoBack}
        onGoForward={handleGoForward}
        onReload={handleReload}
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}

      <WebView
        ref={webViewRef}
        source={{ uri: currentUrl }}
        style={styles.webview}
        onNavigationStateChange={handleNavigationStateChange}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  webview: {
    flex: 1,
  },
});

