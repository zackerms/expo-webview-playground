import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DialogWebView from '../components/DialogWebView';
import ModalWebView from '../components/ModalWebView';

export default function HomeScreen() {
  const router = useRouter();
  const [url, setUrl] = useState('https://expo.dev');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUrl, setModalUrl] = useState('https://expo.dev');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogUrl, setDialogUrl] = useState('https://expo.dev');

  const handleOpenFullPage = () => {
    router.push({
      pathname: '/webview',
      params: { url },
    });
  };

  const handleOpenModal = () => {
    setModalUrl(url);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenDialog = () => {
    setDialogUrl(url);
    setDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>WebView Demo</Text>
        <Text style={styles.subtitle}>
          Enter a URL and choose how to open it
        </Text>

        <View style={styles.urlContainer}>
          <Text style={styles.label}>URL</Text>
          <TextInput
            style={styles.urlInput}
            value={url}
            onChangeText={setUrl}
            placeholder="https://expo.dev"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="url"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.fullPageButton]}
            onPress={handleOpenFullPage}
          >
            <Ionicons name="expand" size={24} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Open Full-Page WebView</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.modalButton]}
            onPress={handleOpenModal}
          >
            <Ionicons name="square" size={24} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Open Modal WebView</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.dialogButton]}
            onPress={handleOpenDialog}
          >
            <Ionicons name="chatbubble" size={24} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Open Dialog WebView</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ModalWebView
        visible={modalVisible}
        url={modalUrl}
        onClose={handleCloseModal}
      />

      <DialogWebView
        visible={dialogVisible}
        url={dialogUrl}
        onClose={handleCloseDialog}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  urlContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  urlInput: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fullPageButton: {
    backgroundColor: '#007AFF',
  },
  modalButton: {
    backgroundColor: '#34C759',
  },
  dialogButton: {
    backgroundColor: '#FF9500',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
