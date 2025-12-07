import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface WebViewHeaderProps {
  url: string;
  onUrlChange: (url: string) => void;
  onGoToUrl: () => void;
  onBack?: () => void;
  showBackButton?: boolean;
}

export default function WebViewHeader({
  url,
  onUrlChange,
  onGoToUrl,
  onBack,
  showBackButton = false,
}: WebViewHeaderProps) {
  return (
    <View style={styles.header}>
      {showBackButton && onBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
      )}
      <TextInput
        style={styles.urlInput}
        value={url}
        onChangeText={onUrlChange}
        placeholder="Enter URL"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="url"
        onSubmitEditing={onGoToUrl}
        returnKeyType="go"
      />
      <TouchableOpacity style={styles.goButton} onPress={onGoToUrl}>
        <Text style={styles.goButtonText}>Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  urlInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  goButton: {
    marginLeft: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  goButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

