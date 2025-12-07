import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface WebViewControlsProps {
  canGoBack: boolean;
  canGoForward: boolean;
  onGoBack: () => void;
  onGoForward: () => void;
  onReload: () => void;
}

export default function WebViewControls({
  canGoBack,
  canGoForward,
  onGoBack,
  onGoForward,
  onReload,
}: WebViewControlsProps) {
  return (
    <View style={styles.controls}>
      <TouchableOpacity
        style={[styles.controlButton, !canGoBack && styles.controlButtonDisabled]}
        onPress={onGoBack}
        disabled={!canGoBack}
      >
        <Ionicons
          name="chevron-back"
          size={20}
          color={canGoBack ? '#007AFF' : '#999'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.controlButton, !canGoForward && styles.controlButtonDisabled]}
        onPress={onGoForward}
        disabled={!canGoForward}
      >
        <Ionicons
          name="chevron-forward"
          size={20}
          color={canGoForward ? '#007AFF' : '#999'}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlButton} onPress={onReload}>
        <Ionicons name="reload" size={20} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f9f9f9',
  },
  controlButton: {
    padding: 8,
    marginRight: 12,
  },
  controlButtonDisabled: {
    opacity: 0.5,
  },
});

