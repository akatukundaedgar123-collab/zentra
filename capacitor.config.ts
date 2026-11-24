import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.zentra.marketplace',
  appName: 'ZENTRA',
  webDir: 'dist',
  server: { androidScheme: 'https', cleartext: false },
  android: { allowMixedContent: false, backgroundColor: '#087A50' }
}
export default config
